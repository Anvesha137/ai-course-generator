'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useClerk } from '@clerk/nextjs';

export default function LogoutPage() {
    const router = useRouter();
    const { signOut } = useClerk();

    useEffect(() => {
        async function handleLogout() {
            await signOut(); 
            router.replace('/dashboard?message=Please sign up again'); 
        }

        handleLogout();
    }, [router, signOut]);

    return null; 
}
