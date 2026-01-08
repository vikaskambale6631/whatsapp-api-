"use client"

import { Suspense, useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import DashboardLayout from "@/components/layout/DashboardLayout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2, CreditCard, ArrowRight, ArrowLeft, Loader2, Wallet, Building2 } from "lucide-react"
import { useOrder } from "@/context/OrderContext"
import { resellerPlans, userPlans } from "@/data/plansData"

function CheckoutContent() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const { addOrder } = useOrder()

    const planName = searchParams.get('planName')
    const [step, setStep] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        company: ""
    })

    // Find the plan details
    const allPlans = [...resellerPlans, ...userPlans]
    const selectedPlan = allPlans.find(p => p.name === planName)

    if (!selectedPlan && planName) {
        return (
            <DashboardLayout>
                <div className="p-8 text-center">
                    <h2 className="text-xl font-bold text-red-600">Plan not found</h2>
                    <Button onClick={() => router.push('/plans')} className="mt-4">
                        Back to Plans
                    </Button>
                </div>
            </DashboardLayout>
        )
    }

    if (!planName) {
        return (
            <DashboardLayout>
                <div className="p-8 text-center">
                    <h2 className="text-xl font-bold text-gray-900">No plan selected</h2>
                    <Button onClick={() => router.push('/plans')} className="mt-4">
                        View Plans
                    </Button>
                </div>
            </DashboardLayout>
        )
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault()
        setStep(2)
    }

    const handlePayment = async () => {
        setIsLoading(true)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))

        addOrder({
            planName: selectedPlan!.name,
            price: selectedPlan!.price,
            credits: selectedPlan!.credits,
            validity: selectedPlan!.validity
        })

        router.push('/orders')
    }

    return (
        <DashboardLayout>
            <div className="max-w-4xl mx-auto py-8 px-4">
                {/* Stepper */}
                <div className="flex items-center justify-center mb-12">
                    <div className={`flex items-center gap-2 ${step >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 font-bold ${step >= 1 ? 'border-blue-600 bg-blue-50' : 'border-gray-300'}`}>
                            1
                        </div>
                        <span className="font-medium">Details</span>
                    </div>
                    <div className={`w-24 h-0.5 mx-4 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`} />
                    <div className={`flex items-center gap-2 ${step >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 font-bold ${step >= 2 ? 'border-blue-600 bg-blue-50' : 'border-gray-300'}`}>
                            2
                        </div>
                        <span className="font-medium">Payment</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="md:col-span-2">
                        {step === 1 ? (
                            <div className="bg-white rounded-xl shadow-sm border p-6">
                                <h2 className="text-xl font-bold text-gray-900 mb-6">Billing Details</h2>
                                <form onSubmit={handleNext} className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Full Name</label>
                                            <Input
                                                id="name"
                                                name="name"
                                                placeholder="John Doe"
                                                required
                                                value={formData.name}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="mobile" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Mobile Number</label>
                                            <Input
                                                id="mobile"
                                                name="mobile"
                                                placeholder="+91 98765 43210"
                                                required
                                                value={formData.mobile}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email Address</label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            required
                                            value={formData.email}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="company" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Company Name</label>
                                        <Input
                                            id="company"
                                            name="company"
                                            placeholder="Acme Inc."
                                            value={formData.company}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="pt-4 flex justify-end">
                                        <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                                            Continue to Payment
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        ) : (
                            <div className="bg-white rounded-xl shadow-sm border p-6">
                                <button
                                    onClick={() => setStep(1)}
                                    className="flex items-center text-sm text-gray-500 hover:text-gray-900 mb-6 transition-colors"
                                >
                                    <ArrowLeft className="h-4 w-4 mr-1" />
                                    Back to Details
                                </button>

                                <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Method</h2>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center justify-between p-4 border-2 border-blue-500 bg-blue-50 rounded-xl cursor-pointer">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600">
                                                <Wallet className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900">UPI / QR Code</p>
                                                <p className="text-sm text-gray-600">GPay, PhonePe, Paytm</p>
                                            </div>
                                        </div>
                                        <div className="h-5 w-5 rounded-full border-2 border-blue-500 flex items-center justify-center">
                                            <div className="h-2.5 w-2.5 bg-blue-500 rounded-full" />
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl opacity-60 cursor-not-allowed">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                                                <CreditCard className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900">Credit / Debit Card</p>
                                                <p className="text-sm text-gray-500">Currently Unavailable</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl opacity-60 cursor-not-allowed">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                                                <Building2 className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900">Net Banking</p>
                                                <p className="text-sm text-gray-500">Currently Unavailable</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Button
                                    onClick={handlePayment}
                                    disabled={isLoading}
                                    className="w-full bg-green-600 hover:bg-green-700 py-6 text-lg font-semibold"
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                            Processing Payment...
                                        </>
                                    ) : (
                                        `Pay ${selectedPlan?.price}`
                                    )}
                                </Button>
                                <p className="text-center text-xs text-gray-500 mt-4">
                                    By clicking Pay, you agree to our Terms of Service.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Order Summary Sidebar */}
                    <div>
                        <div className="bg-gray-50 rounded-xl p-6 sticky top-6">
                            <h3 className="font-semibold text-gray-900 mb-4">Order Summary</h3>

                            <div className="flex items-center justify-between mb-4 pb-4 border-b">
                                <div>
                                    <p className="font-bold text-gray-900">{selectedPlan?.name}</p>
                                    <p className="text-sm text-gray-500">{selectedPlan?.validity} Validity</p>
                                </div>
                                <p className="font-bold text-gray-900">{selectedPlan?.price}</p>
                            </div>

                            <div className="space-y-2 mb-6 text-sm text-gray-600">
                                <div className="flex justify-between">
                                    <span>Plan Credits</span>
                                    <span>{selectedPlan?.credits}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Rate per message</span>
                                    <span>{selectedPlan?.rate}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span>{selectedPlan?.price}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Tax (18% GST)</span>
                                    <span>Included</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                                <span className="font-bold text-lg text-gray-900">Total</span>
                                <span className="font-bold text-lg text-blue-600">{selectedPlan?.price}</span>
                            </div>

                            <div className="mt-6 flex items-start gap-2 text-xs text-gray-500 bg-blue-50 p-3 rounded-lg">
                                <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                                <p>Secure 256-bit SSL encrypted payment. Your information is safe with us.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default function CheckoutPage() {
    return (
        <Suspense fallback={
            <DashboardLayout>
                <div className="flex items-center justify-center min-h-screen">
                    <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
                </div>
            </DashboardLayout>
        }>
            <CheckoutContent />
        </Suspense>
    )
}
