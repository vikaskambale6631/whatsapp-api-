import DashboardLayout from "@/components/layout/DashboardLayout"
import { StatsCards } from "@/components/dashboard/StatsCards"
import { UsageChart } from "@/components/dashboard/UsageChart"
import { PlanDetails, AccountInfo } from "@/components/dashboard/Details"
import { TopUsers } from "@/components/dashboard/TopUsers"
import { TrafficSource } from "@/components/dashboard/TrafficSource"
import { TopCustomers } from "@/components/dashboard/TopCustomers"
import { RecentTransactions } from "@/components/dashboard/RecentTransactions"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, rahul waghole!</h1>
        <p className="text-gray-500 mt-1">Here's what's happening with your account today.</p>
      </div>

      <div className="space-y-6">
        <StatsCards />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content Section - spans 3 columns */}
          <div className="lg:col-span-3 space-y-6">
            <UsageChart />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <TopUsers />
              </div>
              <div className="lg:col-span-2">
                <RecentTransactions />
              </div>
            </div>
          </div>

          {/* Right Sidebar Section - spans 1 column */}
          <div className="lg:col-span-1 space-y-6">
            <PlanDetails />
            <AccountInfo />
            <TrafficSource />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
