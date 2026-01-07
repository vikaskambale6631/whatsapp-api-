"use client"

import { useState } from "react"
import { Sidebar } from "@/components/layout/Sidebar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

    const toggleSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed)
    }

    return (
        <div className="min-h-screen bg-gray-50 flex">
            <Sidebar collapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />

            <main
                className={`flex-1 p-8 transition-all duration-300 ease-in-out ${isSidebarCollapsed ? "ml-16" : "ml-64"
                    }`}
            >
                {children}
            </main>
        </div>
    )
}
