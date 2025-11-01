// app/api/admin/stats/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Get today's date for new user calculation
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Fetch all stats in parallel for better performance
    const [
      totalUsers,
      activeUsers,
      blockedUsers,
      proUsers,
      newUsersToday,
      proUserPayments
    ] = await Promise.all([
      // Total users
      prisma.user.count(),

      // Active users (not blocked and isActive = true)
      prisma.user.count({
        where: {
          isActive: true,
          isBlocked: false
        }
      }),

      // Blocked users
      prisma.user.count({
        where: {
          isBlocked: true
        }
      }),

      // Pro users
      prisma.proUser.count(),

      // New users today
      prisma.user.count({
        where: {
          createdAt: {
            gte: today
          }
        }
      }),

      // Get pro users with payment info for revenue calculation
      prisma.proUser.findMany({
        select: {
          paymentType: true
        }
      })
    ]);

    // Calculate revenue based on payment types
    // This is a simplified calculation - adjust based on your actual payment structure
    const totalRevenue = proUserPayments.reduce((total, proUser) => {
      // Example pricing: monthly = $10, yearly = $100, one-time = $50
      switch (proUser.paymentType) {
        case 'monthly':
          return total + 10;
        case 'yearly':
          return total + 100;
        case 'one_time':
          return total + 50;
        default:
          return total + 10; // Default monthly price
      }
    }, 0);

    return NextResponse.json({
      totalUsers,
      activeUsers,
      blockedUsers,
      proUsers,
      newUsersToday,
      totalRevenue
    });

  } catch (error) {
    console.error('Error fetching admin stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch statistics' },
      { status: 500 }
    );
  }
}