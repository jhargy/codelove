const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting seed...')

  // Check if admin already exists
  const existingAdmin = await prisma.user.findUnique({
    where: { email: 'admin@mdcatpro.com' }
  })

  if (existingAdmin) {
    console.log('✅ Admin user already exists')
    return
  }

  // Hash password
  const hashedPassword = await bcrypt.hash('admin123', 12)

  // Create admin user
  const adminUser = await prisma.user.create({
    data: {
      name: 'System Administrator',
      email: 'admin@mdcatpro.com',
      mobileNumber: '+923001234567',
      pinCode: '1234',
      password: hashedPassword,
      role: 'admin',
      isActive: true,
      isPro: true,
      secretCode: 'ADMIN2024',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  })

  console.log('✅ Admin user created successfully!')
  console.log('=== ADMIN CREDENTIALS ===')
  console.log('📧 Email: admin@mdcatpro.com')
  console.log('🔑 Password: admin123')
  console.log('🎯 Role: admin')
  console.log('⚠️  Please change the password after first login!')
  console.log('=========================')
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })