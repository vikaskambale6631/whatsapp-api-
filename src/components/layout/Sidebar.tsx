"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutGrid, User, Code, Puzzle, ShoppingCart, CreditCard, Users, History, LogOut, ChevronLeft, ChevronRight, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const sidebarItems = [
    { icon: LayoutGrid, label: "Dashboard", href: "/" },
    { icon: Code, label: "API", href: "/api" },
    { icon: Puzzle, label: "Plugin", href: "/plugin" },
    { icon: ShoppingCart, label: "My Orders", href: "/orders" },
    { icon: CreditCard, label: "Plans", href: "/plans" },
    { icon: Users, label: "Users", href: "/users" },
    { icon: History, label: "Activity History", href: "/history" },
]

interface SidebarProps {
    collapsed: boolean
    toggleSidebar: () => void
}

export function Sidebar({ collapsed, toggleSidebar }: SidebarProps) {
    const pathname = usePathname()

    return (
        <div
            className={cn(
                "h-screen bg-white border-r flex flex-col fixed left-0 top-0 transition-all duration-300 ease-in-out z-20",
                collapsed ? "w-16" : "w-64"
            )}
        >
            <div className="p-4 border-b flex items-center justify-between h-[65px]">
                {!collapsed && (
                    <div className="flex items-center gap-2">
                        {/* Logo from user URL */}
                        <img
                            src="/logo.png"
                            alt="Logo"
                            className="h-8 w-auto"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none'; // Fallback if image fails
                            }}
                        />
                        <h1 className="font-bold text-xl tracking-tight truncate">Message API</h1>
                    </div>
                )}
                {collapsed && (
                    <div className="w-full flex justify-center">
                        <img
                            src="/logo.png"
                            alt="Logo"
                            className="h-8 w-auto"
                        />
                    </div>
                )}

                {/* Close/Toggle Button */}
                {!collapsed && (
                    <button onClick={toggleSidebar} className="p-1 hover:bg-gray-100 rounded-full text-gray-500">
                        <X className="h-5 w-5" />
                    </button>
                )}
            </div>

            {/* Collapse/Expand Toggle for collapsed state (optional, usually users click a menu button elsewhere, but here maybe at bottom or top) 
           For this specific request "add close button for collabs", using the X inside makes sense. 
           To open it back up, we might need a trigger. A small button on the side or the collapsed header itself? 
           Let's add a small chevron when collapsed at the bottom or top.
       */}
            {collapsed && (
                <button
                    onClick={toggleSidebar}
                    className="absolute -right-3 top-20 bg-white border shadow-sm rounded-full p-1 text-gray-500 hover:text-gray-900"
                >
                    <ChevronRight className="h-3 w-3" />
                </button>
            )}


            <nav className="flex-1 p-2 space-y-1 overflow-y-auto">
                {sidebarItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                                isActive
                                    ? "bg-primary/5 text-primary"
                                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
                                collapsed && "justify-center px-2"
                            )}
                            title={collapsed ? item.label : undefined}
                        >
                            <item.icon className={cn("h-5 w-5 shrink-0", isActive ? "text-primary" : "text-gray-500")} />
                            {!collapsed && <span>{item.label}</span>}
                        </Link>
                    )
                })}
            </nav>

            <div className="p-4 border-t space-y-4">
                {!collapsed ? (
                    <>
                        <Link href="/profile" className="flex items-center gap-3 px-2 hover:bg-gray-50 rounded-md p-1 transition-colors cursor-pointer">
                            <Avatar className="h-9 w-9 bg-gray-200">
                                <AvatarFallback>User</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 overflow-hidden">
                                <p className="text-sm font-medium truncate text-gray-900">User</p>
                                <p className="text-xs text-gray-500 truncate">ID: d1e0c262c9...</p>
                            </div>
                        </Link>
                        <button className="flex items-center gap-2 text-red-500 text-sm font-medium px-2 hover:bg-red-50 w-full p-2 rounded-md transition-colors">
                            <LogOut className="h-4 w-4" />
                            Sign Out
                        </button>
                    </>
                ) : (
                    <div className="flex flex-col items-center gap-4">
                        <Link href="/profile">
                            <Avatar className="h-8 w-8 bg-gray-200 cursor-pointer hover:opacity-80">
                                <AvatarFallback>U</AvatarFallback>
                            </Avatar>
                        </Link>
                        <button className="text-red-500 hover:bg-red-50 p-2 rounded-md">
                            <LogOut className="h-4 w-4" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}
