// app/api/comments/route.ts - UPDATED
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'You must be logged in to comment' },
        { status: 401 }
      );
    }

    const { content, topicSlug } = await request.json();

    // Validate required fields
    if (!content || !topicSlug) {
      return NextResponse.json(
        { error: 'Content and topic slug are required' },
        { status: 400 }
      );
    }

    // Get the current user
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Create comment - use the exact field names from your schema
    const comment = await prisma.comment.create({
      data: {
        content: content,
        topicSlug: topicSlug, // This should work now after prisma generate
        userId: user.id,
        userName: user.name || 'Anonymous',
        userEmail: user.email,
        isActive: true,
      },
    });

    // Fetch the created comment with user relation
    const commentWithUser = await prisma.comment.findUnique({
      where: { id: comment.id },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
            isPro: true,
          },
        },
      },
    });

    return NextResponse.json({ 
      success: true, 
      comment: commentWithUser,
      message: 'Comment added successfully' 
    });

  } catch (error) {
    console.error('Comment creation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const topicSlug = searchParams.get('topicSlug');

    let whereClause: any = { isActive: true };
    
    if (topicSlug) {
      whereClause.topicSlug = topicSlug;
    }

    const comments = await prisma.comment.findMany({
      where: whereClause,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
            isPro: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 50,
    });

    return NextResponse.json({ 
      success: true, 
      comments 
    });

  } catch (error) {
    console.error('Comments fetch error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}