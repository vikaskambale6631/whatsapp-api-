"use client"

import DashboardLayout from "@/components/layout/DashboardLayout"
import { PlansHeader, PlansOverview, PricingCard } from "@/components/plans/PlansComponents"
import { Crown } from "lucide-react"

export default function ResellerPlansPage() {
    return (
        <DashboardLayout>
            <div className="max-w-7xl mx-auto">
                <PlansHeader />

                <div className="mb-6">
                    <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2 mb-4">
                        <svg className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                        Plans Overview
                    </h2>
                    <PlansOverview />
                </div>

                <div className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                            <Crown className="h-5 w-5 text-purple-600" />
                            Reseller Plans
                        </h2>
                        <div className="flex bg-gray-100 rounded-lg p-1 text-sm">
                            <button className="px-3 py-1 bg-white shadow rounded-md font-medium text-gray-900">Card View</button>
                            <button className="px-3 py-1 text-gray-500 hover:text-gray-900">Table View</button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <PricingCard
                            name="MAP 8D"
                            price="₹50,000"
                            credits="500,000"
                            rate="0.1 paise"
                            validity="360 days"
                            colorTheme="purple"
                        />
                        <PricingCard
                            name="MAP 8A"
                            price="₹13,500"
                            credits="100,000"
                            rate="0.135 paise"
                            validity="360 days"
                            isPopular={true}
                            colorTheme="blue"
                        />
                        <PricingCard
                            name="MAP 8C"
                            price="₹33,000"
                            credits="300,000"
                            rate="0.11 paise"
                            validity="360 days"
                            colorTheme="purple"
                        />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}
