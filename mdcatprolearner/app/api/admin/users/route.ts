import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const role = searchParams.get('role');
    const proStatus = searchParams.get('proStatus');
    const search = searchParams.get('search');

    // Build where clause
    const where: any = {};

    if (status === 'active') {
      where.isActive = true;
      where.isBlocked = false;
    } else if (status === 'blocked') {
      where.isBlocked = true;
    } else if (status === 'inactive') {
      where.isActive = false;
    }

    if (role && role !== 'all') {
      where.role = role;
    }

    if (proStatus === 'pro') {
      where.isPro = true;
    } else if (proStatus === 'free') {
      where.isPro = false;
    }

    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
        { mobileNumber: { contains: search } },
        { pinCode: { contains: search } },
      ];
    }

    const users = await prisma.user.findMany({
      where,
      include: {
        proUser: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json({ users });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}