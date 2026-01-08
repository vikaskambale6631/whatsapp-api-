"use client"

import DashboardLayout from "@/components/layout/DashboardLayout"
import { useOrder } from "@/context/OrderContext"
import { ShoppingCart } from "lucide-react"

export default function OrdersPage() {
    const { orders } = useOrder()

    return (
        <DashboardLayout>
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                        <ShoppingCart className="h-6 w-6" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Order History</h1>
                        <p className="text-gray-500">Track and manage all your orders</p>
                    </div>
                </div>

                {orders.length === 0 ? (
                    <div className="bg-white rounded-xl shadow-sm border p-12 text-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <ShoppingCart className="h-8 w-8 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">No Orders Found</h3>
                        <p className="text-gray-500">You haven't placed any orders yet. Start by exploring our plans and make your first purchase.</p>
                    </div>
                ) : (
                    <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-gray-50 border-b">
                                    <tr>
                                        <th className="px-6 py-4 font-semibold text-gray-900">Order ID</th>
                                        <th className="px-6 py-4 font-semibold text-gray-900">Plan Name</th>
                                        <th className="px-6 py-4 font-semibold text-gray-900">Price</th>
                                        <th className="px-6 py-4 font-semibold text-gray-900">Credits</th>
                                        <th className="px-6 py-4 font-semibold text-gray-900">Validity</th>
                                        <th className="px-6 py-4 font-semibold text-gray-900">Date</th>
                                        <th className="px-6 py-4 font-semibold text-gray-900">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    {orders.map((order) => (
                                        <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 font-medium text-gray-900">#{order.id}</td>
                                            <td className="px-6 py-4">
                                                <span className="font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-md">
                                                    {order.planName}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 font-medium">{order.price}</td>
                                            <td className="px-6 py-4 text-gray-500">{order.credits}</td>
                                            <td className="px-6 py-4 text-gray-500">{order.validity}</td>
                                            <td className="px-6 py-4 text-gray-500">{order.date}</td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${order.status === 'Paid' ? 'bg-green-100 text-green-800' :
                                                        order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                                            'bg-red-100 text-red-800'
                                                    }`}>
                                                    {order.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </DashboardLayout>
    )
}
