'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['500', '600'] });

const ADMIN_EMAIL = "admin@elyon.com";
const ADMIN_PASS = "admin123";

interface LoginFormProps {
  onSuccess: () => void;
}

export default function LoginForm({ onSuccess }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === ADMIN_EMAIL && password === ADMIN_PASS) {
      setError("");
      onSuccess();
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <form
      className="w-full flex flex-col gap-4 mt-4"
      onSubmit={handleLogin}
    >
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className={`border border-[#E5E5E5] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#CFA83C] ${dmSans.className}`}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className={`border border-[#E5E5E5] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#CFA83C] ${dmSans.className}`}
        required
      />
      {error && <div className="text-[#C83737] text-xs text-center">{error}</div>}
      <Button className="w-full cursor-pointer max-w-[403px] mx-auto bg-[#B33A3A] text-white py-4 rounded-xl hover:bg-[#B33A3A]/90 transition-colors font-semibold">
        Login
      </Button>
    </form>
  );
}