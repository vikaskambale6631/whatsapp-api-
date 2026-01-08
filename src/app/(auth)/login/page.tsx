"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Lock, Mail, Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        if (formData.email.includes("admin")) {
            router.push("/dashboard/admin")
        } else {
            router.push("/dashboard/user")
        }
    }

    return (
        <div className="w-full max-w-[440px]">
            <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-600/20">
                    <Lock className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">Welcome Back</h1>
                <p className="text-gray-500">
                    Don't have an account?{" "}
                    <Link href="/register" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                        Sign up
                    </Link>
                </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100 animate-in fade-in slide-in-from-right-8 duration-700">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-3.5 top-3.5 h-5 w-5 text-gray-400" />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all font-medium"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3.5 top-3.5 h-5 w-5 text-gray-400" />
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                className="w-full pl-11 pr-11 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all font-medium"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3.5 top-3.5 text-gray-400 hover:text-gray-600 focus:outline-none transition-colors"
                            >
                                {showPassword ? (
                                    <EyeOff className="h-5 w-5" />
                                ) : (
                                    <Eye className="h-5 w-5" />
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600/20" />
                            <span className="text-sm font-medium text-gray-600">Remember me</span>
                        </label>
                        <Link href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                            Forgot password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-600/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]"
                        disabled={isLoading}
                    >
                        {isLoading ? "Signing in..." : "Sign In"}
                    </button>
                </form>
                <div className="mt-8 bg-gray-50 p-4 rounded-xl border border-gray-100 text-sm text-gray-600">
                    <p className="font-bold mb-2 text-gray-900">Demo Credentials:</p>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="font-semibold text-xs uppercase tracking-wider text-gray-500 mb-1">User Dashboard</p>
                            <p className="font-mono bg-white px-2 py-1 rounded border border-gray-200">user@example.com</p>
                        </div>
                        <div>
                            <p className="font-semibold text-xs uppercase tracking-wider text-gray-500 mb-1">Admin Dashboard</p>
                            <p className="font-mono bg-white px-2 py-1 rounded border border-gray-200">admin@example.com</p>
                        </div>
                    </div>
                    <p className="mt-3 text-xs text-gray-400">Password: Any password</p>
                </div>
            </div>
        </div>
    )
}
