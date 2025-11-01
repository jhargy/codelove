// components/AdminStats.tsx
'use client';

import { useState, useEffect } from 'react';

interface StatsData {
  totalUsers: number;
  activeUsers: number;
  blockedUsers: number;
  proUsers: number;
  newUsersToday: number;
  totalRevenue: number;
}

const AdminStats = () => {
  const [stats, setStats] = useState<StatsData>({
    totalUsers: 0,
    activeUsers: 0,
    blockedUsers: 0,
    proUsers: 0,
    newUsersToday: 0,
    totalRevenue: 0
  });
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<string>('');
  const [mounted, setMounted] = useState(false);

  // Set mounted state to true after component mounts (client-side only)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Fetch real-time stats
  const fetchStats = async () => {
    try {
      const response = await fetch('/api/admin/stats');
      if (response.ok) {
        const data = await response.json();
        setStats(data);
        setLastUpdated(new Date().toLocaleTimeString());
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch - only on client side
  useEffect(() => {
    if (mounted) {
      fetchStats();
    }
  }, [mounted]);

  // Set up real-time updates (every 30 seconds)
  useEffect(() => {
    if (mounted) {
      const interval = setInterval(fetchStats, 30000);
      return () => clearInterval(interval);
    }
  }, [mounted]);

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  // Format number with commas
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  // Show loading skeleton until component is mounted and data is loaded
  if (!mounted || loading) {
    return (
      <div className="space-y-4 sm:space-y-6">
        {/* Last Updated Skeleton */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <div className="h-7 bg-gray-200 rounded w-48 animate-pulse"></div>
          <div className="h-5 bg-gray-200 rounded w-32 animate-pulse"></div>
        </div>

        {/* Stats Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="animate-pulse">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-3"></div>
                    <div className="h-8 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                  </div>
                  <div className="w-12 h-12 bg-gray-200 rounded-full ml-3"></div>
                </div>
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Skeleton */}
        <div className="bg-gray-200 rounded-lg p-6 animate-pulse">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="text-center">
                <div className="h-7 bg-gray-300 rounded w-16 mx-auto mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-20 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Button Skeleton */}
        <div className="flex justify-center">
          <div className="h-12 bg-gray-200 rounded-lg w-40 animate-pulse"></div>
        </div>
      </div>
    );
  }

  const statCards = [
    {
      title: 'Total Users',
      value: formatNumber(stats.totalUsers),
      icon: '👥',
      color: 'bg-blue-500',
      description: 'All registered users'
    },
    {
      title: 'Active Users',
      value: formatNumber(stats.activeUsers),
      icon: '✅',
      color: 'bg-green-500',
      description: 'Currently active accounts'
    },
    {
      title: 'Blocked Users',
      value: formatNumber(stats.blockedUsers),
      icon: '🚫',
      color: 'bg-red-500',
      description: 'Suspended accounts'
    },
    {
      title: 'Pro Users',
      value: formatNumber(stats.proUsers),
      icon: '⭐',
      color: 'bg-purple-500',
      description: 'Premium subscribers'
    },
    {
      title: 'New Today',
      value: formatNumber(stats.newUsersToday),
      icon: '🆕',
      color: 'bg-orange-500',
      description: 'Registrations today'
    },
    {
      title: 'Total Revenue',
      value: formatCurrency(stats.totalRevenue),
      icon: '💰',
      color: 'bg-emerald-500',
      description: 'From pro subscriptions'
    }
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Last Updated */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">Dashboard Overview</h2>
        <div className="text-xs sm:text-sm text-gray-500">
          {lastUpdated ? `Last updated: ${lastUpdated}` : 'Loading...'}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {statCards.map((stat) => (
          <div
            key={stat.title}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-600 mb-1">
                  {stat.title}
                </p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900">
                  {stat.value}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  {stat.description}
                </p>
              </div>
              <div className={`${stat.color} w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 ml-3`}>
                <span className="text-white text-sm sm:text-base">{stat.icon}</span>
              </div>
            </div>
            
            {/* Progress bar for user engagement metrics */}
            {stat.title !== 'Total Revenue' && stats.totalUsers > 0 && (
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                    style={{
                      width: `${(Number(stat.value.replace(/,/g, '')) / stats.totalUsers) * 100}%`
                    }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Quick Stats Summary */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-4 sm:p-6 text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center">
          <div>
            <div className="text-lg sm:text-2xl font-bold">
              {stats.totalUsers > 0 ? ((stats.activeUsers / stats.totalUsers) * 100).toFixed(1) : '0'}%
            </div>
            <div className="text-xs sm:text-sm opacity-90">Active Rate</div>
          </div>
          <div>
            <div className="text-lg sm:text-2xl font-bold">
              {stats.totalUsers > 0 ? ((stats.proUsers / stats.totalUsers) * 100).toFixed(1) : '0'}%
            </div>
            <div className="text-xs sm:text-sm opacity-90">Conversion Rate</div>
          </div>
          <div>
            <div className="text-lg sm:text-2xl font-bold">
              {stats.totalUsers > 0 ? formatCurrency(stats.totalRevenue / stats.totalUsers) : '$0'}
            </div>
            <div className="text-xs sm:text-sm opacity-90">Avg. Revenue Per User</div>
          </div>
          <div>
            <div className="text-lg sm:text-2xl font-bold">
              {stats.proUsers > 0 ? formatCurrency(stats.totalRevenue / stats.proUsers) : '$0'}
            </div>
            <div className="text-xs sm:text-sm opacity-90">Avg. Pro User Value</div>
          </div>
        </div>
      </div>

      {/* Refresh Button */}
      <div className="flex justify-center">
        <button
          onClick={fetchStats}
          disabled={loading}
          className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center space-x-2 text-sm sm:text-base"
        >
          <span>🔄</span>
          <span>{loading ? 'Refreshing...' : 'Refresh Data'}</span>
        </button>
      </div>
    </div>
  );
};

export default AdminStats;