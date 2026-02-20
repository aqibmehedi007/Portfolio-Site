import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    console.log('Seeding Admin User...');

    const email = 'admin@admin.com';
    const password = 'password123';

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Upsert admin to ensure it's there
    const admin = await prisma.adminUser.upsert({
        where: { email },
        update: {
            password: hashedPassword,
        },
        create: {
            email,
            password: hashedPassword,
            role: 'ADMIN',
        },
    });

    console.log(`Admin user created: ${admin.email}`);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
