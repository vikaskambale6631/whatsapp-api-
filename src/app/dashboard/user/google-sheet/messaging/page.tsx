"use client";

import {
    Filter,
    Download,
    Plus,
    Search,
    ChevronLeft,
    ChevronRight,
    MoreHorizontal,
    FileSpreadsheet,
    Calendar,
    ExternalLink
} from "lucide-react";

export default function GoogleSheetMessagingPage() {
    // Sample Data for Google Sheets
    const sheets = [
        { id: "GS_001", name: "Daily Leads Tracker", spreadsheetId: "1BxiMvs0XRA5nFMdKvBdBZjgmUWqnyq...", connectedDate: "05-01-2026", status: "Active", rows: 1250 },
        { id: "GS_002", name: "Customer Feedback", spreadsheetId: "17Ld...9s8D", connectedDate: "04-01-2026", status: "Paused", rows: 843 },
        { id: "GS_003", name: "Event Registrations", spreadsheetId: "19kS...j2Hk", connectedDate: "02-01-2026", status: "Active", rows: 2100 },
        { id: "GS_004", name: "Order Updates", spreadsheetId: "12mN...k9Ls", connectedDate: "28-12-2025", status: "Error", rows: 45 },
        { id: "GS_005", name: "New Subscribers", spreadsheetId: "14oP...l0Km", connectedDate: "20-12-2025", status: "Active", rows: 320 },
    ];

    return (
        <div className="p-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 uppercase tracking-tight">Google Sheet Messaging</h1>
                    <p className="text-gray-500 text-sm mt-1">Manage your connected Google Sheets for messaging</p>
                </div>
                <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm">
                    <Plus className="w-4 h-4" />
                    <span>Connect New Sheet</span>
                </button>
            </div>

            {/* Table Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Toolbar */}
                <div className="flex flex-col sm:flex-row items-center justify-between p-4 border-b border-gray-100 gap-4">
                    {/* Search */}
                    <div className="relative w-full sm:w-72">
                        <input
                            type="text"
                            placeholder="Search sheets..."
                            className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                        />
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
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
                        <thead className="bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-800 text-xs font-semibold tracking-wider uppercase border-b border-emerald-100">
                            <tr>
                                <th className="p-4 w-10">
                                    <input type="checkbox" className="rounded border-emerald-200 text-emerald-600 focus:ring-emerald-500 w-4 h-4 cursor-pointer" />
                                </th>
                                <th className="p-4 font-semibold min-w-[200px]">Sheet Name</th>
                                <th className="p-4 font-semibold min-w-[150px]">Spreadsheet ID</th>
                                <th className="p-4 font-semibold min-w-[120px]">Connected On</th>
                                <th className="p-4 font-semibold min-w-[100px]">Rows</th>
                                <th className="p-4 font-semibold min-w-[100px]">Status</th>
                                <th className="p-4 font-semibold w-16 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-gray-600 divide-y divide-emerald-50">
                            {sheets.map((sheet, index) => (
                                <tr key={index} className="hover:bg-emerald-50/40 transition-colors duration-150 group">
                                    <td className="p-4">
                                        <input type="checkbox" className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 w-4 h-4 cursor-pointer" />
                                    </td>
                                    <td className="p-4 border-l border-transparent group-hover:border-emerald-100 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-emerald-100/50 p-2 rounded-lg text-emerald-600">
                                                <FileSpreadsheet className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <div className="font-medium text-gray-900">{sheet.name}</div>
                                                <div className="text-xs text-gray-400 font-normal mt-0.5">{sheet.id}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-2 group/id cursor-pointer">
                                            <span className="font-mono text-xs bg-gray-50 px-2 py-1 rounded border border-gray-100 text-gray-500 group-hover/id:border-emerald-200 group-hover/id:text-emerald-700 transition-colors">
                                                {sheet.spreadsheetId}
                                            </span>
                                            <ExternalLink className="w-3 h-3 text-gray-300 opacity-0 group-hover/id:opacity-100 hover:text-emerald-500 transition-all" />
                                        </div>
                                    </td>
                                    <td className="p-4 text-gray-500">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5 text-gray-400" />
                                            <span>{sheet.connectedDate}</span>
                                        </div>
                                    </td>
                                    <td className="p-4 text-gray-500 font-mono text-xs">{sheet.rows.toLocaleString()}</td>
                                    <td className="p-4">
                                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border ${sheet.status === 'Active'
                                            ? 'bg-emerald-50 text-emerald-600 border-emerald-100'
                                            : sheet.status === 'Paused'
                                                ? 'bg-amber-50 text-amber-600 border-amber-100'
                                                : 'bg-red-50 text-red-600 border-red-100'
                                            }`}>
                                            {sheet.status}
                                        </span>
                                    </td>
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
