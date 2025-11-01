// components/UserManagement.tsx
'use client';

import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  mobileNumber: string;
  pinCode: string;
  role: string;
  isActive: boolean;
  isBlocked: boolean;
  isPro: boolean;
  secretCode: string;
  createdAt: string;
  updatedAt: string;
  proUser?: {
    id: number;
    paymentType: string | null;
    paidAt: string;
  } | null;
}

interface UserFilters {
  status: 'all' | 'active' | 'blocked' | 'inactive';
  role: 'all' | 'user' | 'admin';
  proStatus: 'all' | 'pro' | 'free';
  search: string;
}

const UserManagement = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const [filters, setFilters] = useState<UserFilters>({
    status: 'all',
    role: 'all',
    proStatus: 'all',
    search: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);
  const [actionLoading, setActionLoading] = useState<number | null>(null);
  const [bulkAction, setBulkAction] = useState<string>('');
  const [showSecretCodes, setShowSecretCodes] = useState<number[]>([]);

  // Fetch users
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const queryParams = new URLSearchParams();
      if (filters.status !== 'all') queryParams.append('status', filters.status);
      if (filters.role !== 'all') queryParams.append('role', filters.role);
      if (filters.proStatus !== 'all') queryParams.append('proStatus', filters.proStatus);
      if (filters.search) queryParams.append('search', filters.search);

      const response = await fetch(`/api/admin/users?${queryParams}`);
      
      // Check if response is OK
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Fetched users:', data); // Debug log
      
      // Make sure we're setting the users array correctly
      if (data && Array.isArray(data.users)) {
        setUsers(data.users);
      } else {
        console.error('Unexpected response format:', data);
        setUsers([]);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [filters]);

  // Handle user actions
  const handleUserAction = async (userId: number, action: string, value?: any) => {
    setActionLoading(userId);
    try {
      const response = await fetch(`/api/admin/users/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action, value }),
      });

      if (response.ok) {
        await fetchUsers(); // Refresh the list
      } else {
        const errorData = await response.json();
        alert(`Failed to perform action: ${errorData.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error performing action:', error);
      alert('Error performing action');
    } finally {
      setActionLoading(null);
    }
  };

  // Handle bulk actions
  const handleBulkAction = async () => {
    if (!bulkAction || selectedUsers.length === 0) return;

    try {
      const response = await fetch('/api/admin/users/bulk', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: bulkAction,
          userIds: selectedUsers,
        }),
      });

      if (response.ok) {
        await fetchUsers();
        setSelectedUsers([]);
        setBulkAction('');
        alert('Bulk action completed successfully');
      } else {
        const errorData = await response.json();
        alert(`Failed to perform bulk action: ${errorData.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error performing bulk action:', error);
      alert('Error performing bulk action');
    }
  };

  // Toggle secret code visibility
  const toggleSecretCode = (userId: number) => {
    setShowSecretCodes(prev =>
      prev.includes(userId)
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  // Select/deselect all users on current page
  const toggleSelectAll = () => {
    if (selectedUsers.length === currentUsers.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(currentUsers.map(user => user.id));
    }
  };

  // Toggle single user selection
  const toggleUserSelection = (userId: number) => {
    setSelectedUsers(prev =>
      prev.includes(userId)
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  // Filter users based on current filters
  const filteredUsers = users.filter(user => {
    if (filters.status === 'active' && (!user.isActive || user.isBlocked)) return false;
    if (filters.status === 'blocked' && !user.isBlocked) return false;
    if (filters.status === 'inactive' && user.isActive) return false;
    if (filters.role !== 'all' && user.role !== filters.role) return false;
    if (filters.proStatus === 'pro' && !user.isPro) return false;
    if (filters.proStatus === 'free' && user.isPro) return false;
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      return (
        user.name.toLowerCase().includes(searchLower) ||
        user.email.toLowerCase().includes(searchLower) ||
        user.mobileNumber.includes(filters.search) ||
        user.pinCode.includes(filters.search)
      );
    }
    return true;
  });

  // Pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters, users]);

  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-20 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">User Management</h1>
        <div className="text-sm text-gray-500">
          Total Users: {filteredUsers.length}
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow border">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Search */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Search
            </label>
            <input
              type="text"
              placeholder="Search users..."
              value={filters.search}
              onChange={(e) => setFilters({ ...filters, search: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Status Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              value={filters.status}
              onChange={(e) => setFilters({ ...filters, status: e.target.value as any })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="blocked">Blocked</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          {/* Role Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Role
            </label>
            <select
              value={filters.role}
              onChange={(e) => setFilters({ ...filters, role: e.target.value as any })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Roles</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Pro Status Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pro Status
            </label>
            <select
              value={filters.proStatus}
              onChange={(e) => setFilters({ ...filters, proStatus: e.target.value as any })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Users</option>
              <option value="pro">Pro Users</option>
              <option value="free">Free Users</option>
            </select>
          </div>

          {/* Reset Filters */}
          <div className="flex items-end">
            <button
              onClick={() => setFilters({
                status: 'all',
                role: 'all',
                proStatus: 'all',
                search: ''
              })}
              className="w-full px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedUsers.length > 0 && (
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-yellow-800">
              {selectedUsers.length} user(s) selected
            </span>
            <select
              value={bulkAction}
              onChange={(e) => setBulkAction(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Choose action...</option>
              <option value="activate">Activate</option>
              <option value="deactivate">Deactivate</option>
              <option value="block">Block</option>
              <option value="unblock">Unblock</option>
              <option value="makePro">Make Pro</option>
              <option value="removePro">Remove Pro</option>
              <option value="delete">Delete</option>
            </select>
            <button
              onClick={handleBulkAction}
              disabled={!bulkAction}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Apply
            </button>
            <button
              onClick={() => setSelectedUsers([])}
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
            >
              Clear
            </button>
          </div>
        </div>
      )}

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input
                    type="checkbox"
                    checked={selectedUsers.length === currentUsers.length && currentUsers.length > 0}
                    onChange={toggleSelectAll}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Pro Info
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Security
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  {/* Checkbox */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(user.id)}
                      onChange={() => toggleUserSelection(user.id)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </td>

                  {/* User Info */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">
                          {user.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {user.name}
                          {user.role === 'admin' && (
                            <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                              Admin
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-gray-500">
                          Joined: {new Date(user.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Contact Info */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.email}</div>
                    <div className="text-sm text-gray-500">{user.mobileNumber}</div>
                    <div className="text-xs text-gray-400">PIN: {user.pinCode}</div>
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="space-y-1">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          user.isActive
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {user.isActive ? 'Active' : 'Inactive'}
                      </span>
                      {user.isBlocked && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          Blocked
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Pro Info */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.isPro ? (
                      <div className="space-y-1">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          Pro User
                        </span>
                        {user.proUser && (
                          <div className="text-xs text-gray-500">
                            Paid: {new Date(user.proUser.paidAt).toLocaleDateString()}
                            {user.proUser.paymentType && (
                              <div>Type: {user.proUser.paymentType}</div>
                            )}
                          </div>
                        )}
                      </div>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        Free
                      </span>
                    )}
                  </td>

                  {/* Security */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm">
                      <button
                        onClick={() => toggleSecretCode(user.id)}
                        className="text-blue-600 hover:text-blue-900 text-xs"
                      >
                        {showSecretCodes.includes(user.id) ? 'Hide' : 'Show'} Secret Code
                      </button>
                      {showSecretCodes.includes(user.id) && (
                        <div className="text-xs font-mono bg-gray-100 p-1 rounded mt-1">
                          {user.secretCode || 'No code set'}
                        </div>
                      )}
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    {/* Activate/Deactivate */}
                    {user.isActive ? (
                      <button
                        onClick={() => handleUserAction(user.id, 'deactivate')}
                        disabled={actionLoading === user.id}
                        className="text-orange-600 hover:text-orange-900 disabled:opacity-50"
                      >
                        {actionLoading === user.id ? '...' : 'Deactivate'}
                      </button>
                    ) : (
                      <button
                        onClick={() => handleUserAction(user.id, 'activate')}
                        disabled={actionLoading === user.id}
                        className="text-green-600 hover:text-green-900 disabled:opacity-50"
                      >
                        {actionLoading === user.id ? '...' : 'Activate'}
                      </button>
                    )}

                    {/* Block/Unblock */}
                    {user.isBlocked ? (
                      <button
                        onClick={() => handleUserAction(user.id, 'unblock')}
                        disabled={actionLoading === user.id}
                        className="text-blue-600 hover:text-blue-900 disabled:opacity-50"
                      >
                        {actionLoading === user.id ? '...' : 'Unblock'}
                      </button>
                    ) : (
                      <button
                        onClick={() => handleUserAction(user.id, 'block')}
                        disabled={actionLoading === user.id}
                        className="text-red-600 hover:text-red-900 disabled:opacity-50"
                      >
                        {actionLoading === user.id ? '...' : 'Block'}
                      </button>
                    )}

                    {/* Pro Status */}
                    {user.isPro ? (
                      <button
                        onClick={() => handleUserAction(user.id, 'removePro')}
                        disabled={actionLoading === user.id}
                        className="text-purple-600 hover:text-purple-900 disabled:opacity-50"
                      >
                        {actionLoading === user.id ? '...' : 'Remove Pro'}
                      </button>
                    ) : (
                      <button
                        onClick={() => handleUserAction(user.id, 'makePro')}
                        disabled={actionLoading === user.id}
                        className="text-purple-600 hover:text-purple-900 disabled:opacity-50"
                      >
                        {actionLoading === user.id ? '...' : 'Make Pro'}
                      </button>
                    )}

                    {/* Delete */}
                    <button
                      onClick={() => {
                        if (confirm('Are you sure you want to delete this user?')) {
                          handleUserAction(user.id, 'delete');
                        }
                      }}
                      disabled={actionLoading === user.id}
                      className="text-red-600 hover:text-red-900 disabled:opacity-50"
                    >
                      {actionLoading === user.id ? '...' : 'Delete'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {currentUsers.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">👥</div>
            <p className="text-gray-500 text-lg">No users found</p>
            <p className="text-gray-400 text-sm mt-2">
              Try adjusting your filters or search terms
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="bg-white px-6 py-3 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-700">
                Showing {indexOfFirstUser + 1} to {Math.min(indexOfLastUser, filteredUsers.length)} of{' '}
                {filteredUsers.length} results
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                <span className="px-3 py-1 text-sm text-gray-700">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserManagement;