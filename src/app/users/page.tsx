"use client"

import Link from "next/link"
import DashboardLayout from "@/components/layout/DashboardLayout"
import { Users, Wifi, WifiOff, Clock, Search, Eye, Edit2, Trash2, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter,
    SheetClose
} from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"

// Initial Mock Data
const initialUsers = [
    {
        id: 1,
        name: "Akshay Patil",
        email: "rsl.jayashree1803@gmail.com",
        joined: "05-01-2026",
        company: "SPMO",
        gstin: "No GSTIN",
        mobile: "8999796824",
        pincode: "No pincode",
        plan: "DEMO",
        credits: { remaining: 21, total: 30 },
        status: "Active"
    },
    {
        id: 2,
        name: "Akshay Patil",
        email: "rsl.jayashree1803@gmail.com",
        joined: "05-01-2026",
        company: "SPMO",
        gstin: "No GSTIN",
        mobile: "9284829121",
        pincode: "No pincode",
        plan: "DEMO",
        credits: { remaining: 30, total: 30 },
        status: "Inactive"
    },
    {
        id: 3,
        name: "Akshay",
        email: "akshaypatil951997@gmail.com",
        joined: "30-12-2025",
        company: "N/A",
        gstin: "No GSTIN",
        mobile: "9284820259",
        pincode: "No pincode",
        plan: "DEMO",
        credits: { remaining: 29, total: 30 },
        status: "Active"
    },
    {
        id: 4,
        name: "Bhagyashri P",
        email: "rsl.bhagyashrip@gmail.com",
        joined: "09-10-2025",
        company: "Sindhumatri",
        gstin: "No GSTIN",
        mobile: "9284822114",
        pincode: "No pincode",
        plan: "DEMO",
        credits: { remaining: 30, total: 30 },
        status: "Active"
    },
    {
        id: 5,
        name: "Akshay Patil",
        email: "rsl.bhagayshrip@gmail.com",
        joined: "09-10-2025",
        company: "Sindhumatri",
        gstin: "No GSTIN",
        mobile: "9604253122",
        pincode: "411033",
        plan: "DEMO",
        credits: { remaining: 30, total: 30 },
        status: "Inactive"
    },
    {
        id: 6,
        name: "Akshay",
        email: "asp799159@gmail.com",
        joined: "08-10-2025",
        company: "Akshay Enterprises",
        gstin: "No GSTIN",
        mobile: "9404185751",
        pincode: "411033",
        plan: "DEMO",
        credits: { remaining: 30, total: 30 },
        status: "Active"
    }
]

function AnalyticsCard({ title, value, icon: Icon, colorClass, iconColorClass }: any) {
    return (
        <div className={`${colorClass} rounded-xl p-6 text-white relative overflow-hidden`}>
            <div className="relative z-10">
                <p className="text-sm font-medium opacity-90 uppercase tracking-wide mb-2">{title}</p>
                <h3 className="text-3xl font-bold">{value}</h3>
            </div>
            <div className={`absolute right-4 bottom-4 p-3 rounded-full ${iconColorClass} bg-opacity-20`}>
                <Icon className="h-6 w-6 text-white" />
            </div>
        </div>
    )
}

export default function UsersPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [users, setUsers] = useState(initialUsers)
    const [isSheetOpen, setIsSheetOpen] = useState(false)
    const [editingUserId, setEditingUserId] = useState<number | null>(null)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        company: ""
    })

    const filteredUsers = users.filter(user => {
        const query = searchQuery.toLowerCase()
        return (
            user.name.toLowerCase().includes(query) ||
            user.email.toLowerCase().includes(query) ||
            user.company.toLowerCase().includes(query) ||
            user.mobile.includes(query)
        )
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const openAddUser = () => {
        setEditingUserId(null)
        setFormData({ name: "", email: "", mobile: "", company: "" })
        setIsSheetOpen(true)
    }

    const openEditUser = (user: typeof users[0]) => {
        setEditingUserId(user.id)
        setFormData({
            name: user.name,
            email: user.email,
            mobile: user.mobile,
            company: user.company
        })
        setIsSheetOpen(true)
    }

    const handleDeleteUser = (id: number) => {
        if (confirm("Are you sure you want to delete this user?")) {
            setUsers(prev => prev.filter(user => user.id !== id))
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (editingUserId) {
            // Edit Mode
            setUsers(prev => prev.map(user =>
                user.id === editingUserId
                    ? { ...user, ...formData }
                    : user
            ))
        } else {
            // Add Mode
            const userToAdd = {
                id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
                name: formData.name,
                email: formData.email,
                joined: new Date().toLocaleDateString('en-GB').replace(/\//g, '-'),
                company: formData.company,
                gstin: "No GSTIN",
                mobile: formData.mobile,
                pincode: "No pincode",
                plan: "DEMO",
                credits: { remaining: 30, total: 30 },
                status: "Active"
            }
            setUsers([userToAdd, ...users])
        }

        setIsSheetOpen(false)
        setFormData({ name: "", email: "", mobile: "", company: "" })
        setEditingUserId(null)
    }

    return (
        <DashboardLayout>
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <Users className="h-6 w-6 text-blue-600" />
                            User Management
                        </h1>
                        <p className="text-gray-500 mt-1">Manage and monitor all your users</p>
                    </div>

                    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                        <SheetTrigger asChild>
                            <Button
                                onClick={openAddUser}
                                className="bg-blue-600 hover:bg-blue-700"
                            >
                                <Plus className="w-4 h-4 mr-2" />
                                Add New User
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="sm:max-w-md">
                            <SheetHeader>
                                <SheetTitle>{editingUserId ? "Edit User" : "Add New User"}</SheetTitle>
                                <SheetDescription>
                                    {editingUserId ? "Update user details below." : "Add a new user to your organization."}
                                </SheetDescription>
                            </SheetHeader>
                            <form onSubmit={handleSubmit} className="space-y-6 py-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Full Name</label>
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
                                    <label htmlFor="email" className="text-sm font-medium">Email Address</label>
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
                                    <label htmlFor="mobile" className="text-sm font-medium">Mobile Number</label>
                                    <Input
                                        id="mobile"
                                        name="mobile"
                                        placeholder="+91 98765 43210"
                                        required
                                        value={formData.mobile}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="company" className="text-sm font-medium">Company Name</label>
                                    <Input
                                        id="company"
                                        name="company"
                                        placeholder="Acme Inc."
                                        required
                                        value={formData.company}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <SheetFooter>
                                    <SheetClose asChild>
                                        <Button variant="outline" type="button">Cancel</Button>
                                    </SheetClose>
                                    <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                                        {editingUserId ? "Save Changes" : "Add User"}
                                    </Button>
                                </SheetFooter>
                            </form>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Analytics */}
                <div>
                    <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2 mb-4">
                        <svg className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                        User Analytics
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <AnalyticsCard
                            title="TOTAL USERS"
                            value={users.length}
                            icon={Users}
                            colorClass="bg-blue-500"
                            iconColorClass="bg-blue-600"
                        />
                        <AnalyticsCard
                            title="CONNECTED"
                            value={users.filter(u => u.status === 'Active').length}
                            icon={Wifi}
                            colorClass="bg-green-500"
                            iconColorClass="bg-green-600"
                        />
                        <AnalyticsCard
                            title="DISCONNECTED"
                            value={users.filter(u => u.status === 'Inactive').length}
                            icon={WifiOff}
                            colorClass="bg-red-500"
                            iconColorClass="bg-red-600"
                        />
                        <AnalyticsCard
                            title="PLAN EXPIRED"
                            value="10"
                            icon={Clock}
                            colorClass="bg-orange-500"
                            iconColorClass="bg-orange-600"
                        />
                    </div>
                </div>

                {/* Search & Table */}
                <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                    <div className="p-4 border-b">
                        <div className="relative max-w-md">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search users by name, email, mobile, or company..."
                                className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-gray-50 border-b">
                                <tr>
                                    <th className="px-6 py-4 font-semibold text-gray-500 uppercase tracking-wider text-xs">USER</th>
                                    <th className="px-6 py-4 font-semibold text-gray-500 uppercase tracking-wider text-xs">COMPANY</th>
                                    <th className="px-6 py-4 font-semibold text-gray-500 uppercase tracking-wider text-xs">CONTACT</th>
                                    <th className="px-6 py-4 font-semibold text-gray-500 uppercase tracking-wider text-xs">PLAN</th>
                                    <th className="px-6 py-4 font-semibold text-gray-500 uppercase tracking-wider text-xs">CREDITS</th>
                                    <th className="px-6 py-4 font-semibold text-gray-500 uppercase tracking-wider text-xs">STATUS</th>
                                    <th className="px-6 py-4 font-semibold text-gray-500 uppercase tracking-wider text-xs text-right">ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {filteredUsers.length > 0 ? (
                                    filteredUsers.map((user) => (
                                        <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="font-medium text-gray-900">{user.name}</div>
                                                <div className="text-gray-500 text-xs">{user.email}</div>
                                                <div className="text-gray-400 text-xs mt-0.5">Joined: {user.joined}</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="font-medium text-gray-900">{user.company}</div>
                                                <div className="text-gray-500 text-xs">{user.gstin}</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="font-medium text-gray-900">{user.mobile}</div>
                                                <div className="text-gray-500 text-xs">{user.pincode}</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                                                    <svg className="mr-1.5 h-3 w-3 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                                    </svg>
                                                    {user.plan}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-gray-900">
                                                <div className="font-bold">{user.credits.remaining} / {user.credits.total}</div>
                                                <div className="text-xs text-gray-500">Remaining / Total</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${user.status === 'Active'
                                                    ? 'bg-green-100 text-green-800'
                                                    : 'bg-red-100 text-red-800'
                                                    }`}>
                                                    <span className={`h-1.5 w-1.5 rounded-full mr-1.5 ${user.status === 'Active' ? 'bg-green-600' : 'bg-red-600'
                                                        }`}></span>
                                                    {user.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    <Link href={`/users/${user.id}`}>
                                                        <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                                                            <Eye className="h-4 w-4" />
                                                        </button>
                                                    </Link>
                                                    <button
                                                        onClick={() => openEditUser(user)}
                                                        className="p-1 text-green-600 hover:bg-green-50 rounded"
                                                    >
                                                        <Edit2 className="h-4 w-4" />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeleteUser(user.id)}
                                                        className="p-1 text-red-600 hover:bg-red-50 rounded"
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                                            No users found matching "{searchQuery}"
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}
