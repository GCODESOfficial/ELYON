import LoginForm from "@/components/admin/login-form"
import Link from "next/link"

export default function CpanelPage() {
  return (
    <>
      <LoginForm />
      <div className="text-center mt-4">
        <Link href="/cpanel/register" className="text-[#CFA83C] underline">Register new admin</Link>
      </div>
    </>
  )
}
