"use client";

import {
    Columns,
    Filter,
    ArrowDownUp,
    Download,
    ChevronLeft,
    ChevronRight
} from "lucide-react";

export default function ScheduleReportsPage() {
    return (
        <div className="p-8">
            {/* Header */}
            <div className="flex flex-col items-center mb-8">
                <h1 className="text-gray-500 font-medium text-lg uppercase tracking-wide">SCHEDULE DELIVERY REPORTS</h1>
            </div>

            {/* Table Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden min-h-[500px] flex flex-col">
                {/* Toolbar */}
                <div className="flex items-center gap-4 p-4 text-blue-500 text-xs font-semibold tracking-wide uppercase border-b border-gray-100">
                    <button className="flex items-center gap-1 hover:text-blue-600">
                        <Columns className="w-4 h-4" />
                        <span>Columns</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-blue-600">
                        <Filter className="w-4 h-4" />
                        <span>Filters</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-blue-600">
                        <ArrowDownUp className="w-4 h-4" />
                        <span>Density</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-blue-600">
                        <Download className="w-4 h-4" />
                        <span>Export</span>
                    </button>
                </div>

                {/* Table Header */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50 text-gray-600 text-xs font-medium border-b border-gray-100">
                            <tr>
                                <th className="p-4 w-10">
                                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-4 h-4" />
                                </th>
                                <th className="p-4 font-normal min-w-[150px] border-l border-gray-100">Date Time</th>
                                <th className="p-4 font-normal min-w-[200px] border-l border-gray-100">Message</th>
                                <th className="p-4 font-normal min-w-[150px] border-l border-gray-100">Device Name</th>
                                <th className="p-4 font-normal min-w-[120px] border-l border-gray-100">Phones</th>
                                <th className="p-4 font-normal min-w-[100px] border-l border-gray-100">Status</th>
                                <th className="p-4 font-normal min-w-[150px] border-l border-gray-100">Attachment</th>
                                <th className="p-4 font-normal min-w-[120px] border-l border-gray-100">Completed</th>
                                <th className="p-4 font-normal min-w-[80px] border-l border-gray-100 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-xs text-gray-500">
                            {/* Empty State */}
                            <tr>
                                <td colSpan={9} className="p-12 text-center h-64 align-middle">
                                    No rows
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Pagination Footer */}
                <div className="mt-auto flex items-center justify-end p-4 text-xs text-gray-500 gap-6 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                        <span>Rows per page:</span>
                        <div className="flex items-center gap-1 cursor-pointer">
                            <span>100</span>
                            <ArrowDownUp className="w-3 h-3" />
                        </div>
                    </div>
                    <div>0–0 of 0</div>
                    <div className="flex items-center gap-4">
                        <button disabled className="text-gray-300"><ChevronLeft className="w-4 h-4" /></button>
                        <button disabled className="text-gray-300"><ChevronRight className="w-4 h-4" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
