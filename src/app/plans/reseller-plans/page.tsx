"use client"

import DashboardLayout from "@/components/layout/DashboardLayout"
import { PlansHeader, PlansOverview, PlanSection, Plan } from "@/components/plans/PlansComponents"
import { Crown } from "lucide-react"

import { resellerPlans } from "@/data/plansData"

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

                <PlanSection
                    title="Reseller Plans"
                    icon={<Crown className="h-5 w-5 text-purple-600" />}
                    plans={resellerPlans}
                />
            </div>
        </DashboardLayout>
    )
}
