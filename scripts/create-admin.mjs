import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function createAdmin() {
    const email = 'admin@aqibmehedi.com';
    const password = 'AqibArchitect2026!'; // You can change this

    console.log(`Creating admin user: ${email}`);

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user = await prisma.adminUser.upsert({
            where: { email },
            update: { password: hashedPassword },
            create: {
                email,
                password: hashedPassword,
                role: 'ADMIN'
            }
        });
        console.log('✅ Admin user created/updated successfully!');
        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);
    } catch (error) {
        console.error('❌ Failed to create admin:', error);
    } finally {
        await prisma.$disconnect();
    }
}

createAdmin();
