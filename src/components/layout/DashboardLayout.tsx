"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { Sidebar } from "@/components/layout/Sidebar"
import { UserSidebar } from "@/components/layout/UserSidebar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

    // Determine which sidebar to show based on URL
    const isUserDashboard = pathname.startsWith("/dashboard/user")

    const toggleSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed)
    }

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {isUserDashboard ? (
                <UserSidebar collapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
            ) : (
                <Sidebar collapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
            )}

            <main
                className={`flex-1 p-8 transition-all duration-300 ease-in-out ${isSidebarCollapsed
                    ? (isUserDashboard ? "ml-20" : "ml-16")
                    : "ml-64"
                    }`}
            >
                {children}
            </main>
        </div>
    )
}
