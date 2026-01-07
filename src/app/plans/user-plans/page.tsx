"use client"

import DashboardLayout from "@/components/layout/DashboardLayout"
import { PlansHeader, PlansOverview, PricingCard } from "@/components/plans/PlansComponents"
import { User } from "lucide-react"

export default function UserPlansPage() {
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

                <div className="mb-8">
                    <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2 mb-6">
                        <User className="h-5 w-5 text-green-600" />
                        User Plans
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <PricingCard
                            name="DEMO"
                            price="₹0"
                            credits="30"
                            rate="0 paise"
                            validity="3 days"
                            colorTheme="green"
                        />
                        <PricingCard
                            name="MAP 9A"
                            price="₹500"
                            credits="1,000"
                            rate="0.5 paise"
                            validity="30 days"
                            colorTheme="green"
                        />
                        <PricingCard
                            name="MAP 9B"
                            price="₹2,000"
                            credits="5,000"
                            rate="0.4 paise"
                            validity="180 days"
                            colorTheme="green"
                        />
                        <PricingCard
                            name="MAP 9D"
                            price="₹6,000"
                            credits="25,000"
                            rate="0.24 paise"
                            validity="365 days"
                            colorTheme="green"
                        />
                        <PricingCard
                            name="MAP 9C"
                            price="₹3,000"
                            credits="10,000"
                            rate="0.3 paise"
                            validity="365 days"
                            colorTheme="green"
                        />
                        <PricingCard
                            name="MAP 9E"
                            price="₹11,000"
                            credits="50,000"
                            rate="0.22 paise"
                            validity="365 days"
                            colorTheme="green"
                        />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}
