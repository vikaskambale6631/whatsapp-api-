"use client";

import {
    Filter,
    Download,
    Plus,
    Search,
    ChevronLeft,
    ChevronRight,
    MoreHorizontal
} from "lucide-react";

export default function TemplatesPage() {
    // Sample Data for Templates
    const templates = [
        { id: "TMP_001", name: "Welcome Message", category: "Onboarding", language: "English", status: "Approved", lastUpdated: "05-01-2026" },
        { id: "TMP_002", name: "Payment Reminder", category: "Billing", language: "English", status: "Approved", lastUpdated: "04-01-2026" },
        { id: "TMP_003", name: "OTP Verification", category: "Authentication", language: "English", status: "Approved", lastUpdated: "03-01-2026" },
        { id: "TMP_004", name: "Holiday Sale", category: "Marketing", language: "Hindi", status: "Pending", lastUpdated: "05-01-2026" },
        { id: "TMP_005", name: "Order Confirmation", category: "Transactional", language: "English", status: "Approved", lastUpdated: "02-01-2026" },
    ];

    return (
        <div className="p-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Templates</h1>
                    <p className="text-gray-500 text-sm mt-1">Manage your message templates</p>
                </div>
                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm">
                    <Plus className="w-4 h-4" />
                    <span>Create Template</span>
                </button>
            </div>

            {/* Table Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Toolbar */}
                <div className="flex flex-col sm:flex-row items-center justify-between p-4 border-b border-gray-100 gap-4">
                    {/* Search */}
                    <div className="relative w-full sm:w-72">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search templates..."
                            className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                        />
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <button className="flex items-center gap-1.5 px-3 py-1.5 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-200">
                            <Filter className="w-4 h-4" />
                            <span>Filter</span>
                        </button>
                        <button className="flex items-center gap-1.5 px-3 py-1.5 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-200">
                            <Download className="w-4 h-4" />
                            <span>Export</span>
                        </button>
                    </div>
                </div>

                {/* Table Header */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gradient-to-r from-gray-50 to-gray-50/50 text-gray-600 text-xs font-semibold tracking-wider uppercase border-b border-gray-100">
                            <tr>
                                <th className="p-4 w-10">
                                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer" />
                                </th>
                                <th className="p-4 font-semibold min-w-[150px]">Template Name</th>
                                <th className="p-4 font-semibold min-w-[150px]">Category</th>
                                <th className="p-4 font-semibold min-w-[100px]">Language</th>
                                <th className="p-4 font-semibold min-w-[100px]">Status</th>
                                <th className="p-4 font-semibold min-w-[120px]">Last Updated</th>
                                <th className="p-4 font-semibold w-16 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-gray-600 divide-y divide-gray-50">
                            {templates.map((template, index) => (
                                <tr key={index} className="hover:bg-blue-50/30 transition-colors duration-150 group">
                                    <td className="p-4">
                                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer" />
                                    </td>
                                    <td className="p-4 font-medium text-gray-900 border-l border-transparent group-hover:border-blue-100 transition-colors">
                                        {template.name}
                                        <div className="text-xs text-gray-400 font-normal mt-0.5">{template.id}</div>
                                    </td>
                                    <td className="p-4">{template.category}</td>
                                    <td className="p-4">
                                        <span className="inline-flex items-center px-2 py-1 rounded-md bg-gray-100 text-xs font-medium text-gray-600">
                                            {template.language}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${template.status === 'Approved'
                                            ? 'bg-emerald-50 text-emerald-700 border-emerald-100'
                                            : 'bg-amber-50 text-amber-700 border-amber-100'
                                            }`}>
                                            <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${template.status === 'Approved' ? 'bg-emerald-500' : 'bg-amber-500'
                                                }`}></span>
                                            {template.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-gray-500 text-xs">{template.lastUpdated}</td>
                                    <td className="p-4 text-center">
                                        <button className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600 transition-colors">
                                            <MoreHorizontal className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100 bg-gray-50/30">
                    <div className="text-xs text-gray-500">
                        Showing <span className="font-medium text-gray-900">1</span> to <span className="font-medium text-gray-900">5</span> of <span className="font-medium text-gray-900">5</span> results
                    </div>
                    <div className="flex items-center gap-2">
                        <button disabled className="p-1.5 rounded-lg border border-gray-200 text-gray-400 cursor-not-allowed bg-white">
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button disabled className="p-1.5 rounded-lg border border-gray-200 text-gray-400 cursor-not-allowed bg-white">
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
