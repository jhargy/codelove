// components/RecentUsers.tsx
'use client';

interface RecentUser {
  id: number;
  name: string;
  email: string;
  isBlocked: boolean;
  isPro: boolean;
  createdAt: Date;
}

interface RecentUsersProps {
  recentUsers: RecentUser[];
}

const RecentUsers = ({ recentUsers }: RecentUsersProps) => {
  return (
    <div className="bg-white rounded-lg shadow border p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Users</h3>
      <div className="space-y-3">
        {recentUsers.map((user) => (
          <div key={user.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-semibold">
                  {user.name.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <p className="font-medium text-gray-900">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              {user.isPro && (
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                  Pro
                </span>
              )}
              {user.isBlocked && (
                <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                  Blocked
                </span>
              )}
            </div>
          </div>
        ))}
        {recentUsers.length === 0 && (
          <p className="text-gray-500 text-center py-4">No recent users</p>
        )}
      </div>
    </div>
  );
};

export default RecentUsers;