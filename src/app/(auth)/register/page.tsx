"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { UserPlus, User, Mail, Phone, Lock, Building2, FileText, CreditCard, MapPin, Hash, Eye, EyeOff } from "lucide-react"

export default function RegisterPage() {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        await new Promise((resolve) => setTimeout(resolve, 1000))
        router.push("/login")
    }

    return (
        <div className="w-full max-w-[800px] my-8">
            <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-600/20">
                    <UserPlus className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Create Account</h1>
                <p className="text-gray-500">
                    Already have an account?{" "}
                    <Link href="/login" className="text-blue-600 font-medium hover:text-blue-700">
                        Sign in
                    </Link>
                </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <form onSubmit={handleSubmit} className="space-y-8">

                    {/* Personal Information */}
                    <div className="space-y-4">
                        <h3 className="flex items-center gap-2 font-semibold text-gray-900 text-lg border-b pb-3">
                            <User className="w-5 h-5 text-blue-600" />
                            Personal Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Full Name</label>
                                <div className="relative">
                                    <User className="absolute left-3.5 top-3.5 h-5 w-5 text-gray-400" />
                                    <input type="text" placeholder="Enter your full name" className="input-field" required />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-3.5 top-3.5 h-5 w-5 text-gray-400" />
                                    <input type="email" placeholder="Enter your email" className="input-field" required />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Mobile Number</label>
                                <div className="relative">
                                    <Phone className="absolute left-3.5 top-3.5 h-5 w-5 text-gray-400" />
                                    <input type="tel" placeholder="Enter your mobile number" className="input-field" required />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Security */}
                    <div className="space-y-4">
                        <h3 className="flex items-center gap-2 font-semibold text-gray-900 text-lg border-b pb-3">
                            <Lock className="w-5 h-5 text-blue-600" />
                            Security
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-3.5 top-3.5 h-5 w-5 text-gray-400" />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Create a password"
                                        className="input-field pr-11"
                                        required
                                    />
                                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3.5 top-3.5 text-gray-400 hover:text-gray-600">
                                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                    </button>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Confirm Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-3.5 top-3.5 h-5 w-5 text-gray-400" />
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        placeholder="Confirm your password"
                                        className="input-field pr-11"
                                        required
                                    />
                                    <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3.5 top-3.5 text-gray-400 hover:text-gray-600">
                                        {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Business Information */}
                    <div className="space-y-4">
                        <h3 className="flex items-center gap-2 font-semibold text-gray-900 text-lg border-b pb-3">
                            <Building2 className="w-5 h-5 text-blue-600" />
                            Business Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Business Name</label>
                                <div className="relative">
                                    <Building2 className="absolute left-3.5 top-3.5 h-5 w-5 text-gray-400" />
                                    <input type="text" placeholder="Enter business name" className="input-field" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Business Product/Service</label>
                                <div className="relative">
                                    <FileText className="absolute left-3.5 top-3.5 h-5 w-5 text-gray-400" />
                                    <input type="text" placeholder="Describe your business" className="input-field" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">ERP System</label>
                                <select className="input-field appearance-none bg-white">
                                    <option>Please select</option>
                                    <option>SAP</option>
                                    <option>Oracle</option>
                                    <option>Microsoft Dynamics</option>
                                    <option>Tally</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Bank Name</label>
                                <div className="relative">
                                    <CreditCard className="absolute left-3.5 top-3.5 h-5 w-5 text-gray-400" />
                                    <input type="text" placeholder="Enter bank name" className="input-field" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Location Information */}
                    <div className="space-y-4">
                        <h3 className="flex items-center gap-2 font-semibold text-gray-900 text-lg border-b pb-3">
                            <MapPin className="w-5 h-5 text-blue-600" />
                            Location Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Country</label>
                                <input type="text" placeholder="Country" className="input-field px-4" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Pin Code</label>
                                <input type="text" placeholder="Pin Code" className="input-field px-4" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">GSTIN</label>
                                <div className="relative">
                                    <Hash className="absolute left-3.5 top-3.5 h-5 w-5 text-gray-400" />
                                    <input type="text" placeholder="GSTIN" className="input-field" />
                                </div>
                            </div>
                        </div>
                    </div>


                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-blue-600/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-8"
                        disabled={isLoading}
                    >
                        {isLoading ? "Creating Account..." : "Create Account"}
                    </button>
                </form>
            </div>

            <style jsx global>{`
        .input-field {
          width: 100%;
          padding-left: 2.75rem; /* 11 * 0.25rem = 2.75rem */
          padding-right: 1rem;
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
          background-color: rgb(249 250 251);
          border-width: 1px;
          border-color: rgb(229 231 235);
          border-radius: 0.75rem;
          color: rgb(17 24 39);
          font-weight: 500;
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 150ms;
        }
        .input-field::placeholder {
           color: rgb(156 163 175);
        }
        .input-field:focus {
          outline: 2px solid transparent;
          outline-offset: 2px;
          --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
          --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
          box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
          --tw-ring-opacity: 0.2;
          --tw-ring-color: rgb(37 99 235 / var(--tw-ring-opacity));
          border-color: rgb(37 99 235);
        }
      `}</style>
        </div>
    )
}
