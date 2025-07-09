"use client"

import { useRouter } from "next/navigation";
import LoginForm from '@/components/LoginForm';
import Image from "next/image";
import { Merriweather } from 'next/font/google';

const merriweather = Merriweather({ subsets: ['latin'], weight: ['700'] });

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#F5F5F5] px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md flex flex-col items-center">
        <Image src="/images/logo.svg" alt="Logo" width={80} height={80} className="mb-6" />
        <h2 className={`${merriweather.className} text-2xl font-bold text-[#1A1A1A] mb-2`}>Admin Login</h2>
        <LoginForm onSuccess={() => router.push('/admin')} />
      </div>
    </div>
  );
}
