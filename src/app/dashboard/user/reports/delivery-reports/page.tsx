"use client";

import {
    Columns,
    Filter,
    ArrowDownUp,
    Download,
    ChevronLeft,
    ChevronRight
} from "lucide-react";

export default function DeliveryReportsPage() {
    // Sample Data matching the screenshot
    const reports = [
        { dateTime: "05-01-2026 5:58:27.856 PM", message: "Hi", from: "918999796824", to: "919503109635", attachment: "/app/uploads/213ab3a4da5aaa5cc...", status: "Success" },
        { dateTime: "05-01-2026 1:42:42.869 PM", message: "Hi please check your file", from: "918999796824", to: "919503109635", attachment: "/app/uploads/ae7d67cc289656085...", status: "Success" },
        { dateTime: "05-01-2026 1:33:08.608 PM", message: "Hi", from: "918999796824", to: "919503109635", attachment: "", status: "Success" },
        { dateTime: "05-01-2026 1:32:42.073 PM", message: "Hi", from: "918999796824", to: "919921280208", attachment: "", status: "Success" },
    ];

    return (
        <div className="p-8">
            {/* Header */}
            <div className="flex flex-col items-center mb-6 space-y-2">
                <h1 className="text-gray-500 font-medium text-lg uppercase tracking-wide">DELIVERY REPORTS</h1>
                <p className="text-red-400 text-xs font-medium">Every saturday we remove all delivery reports, Please download</p>
            </div>

            {/* Table Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                {/* Toolbar */}
                <div className="flex items-center gap-4 p-4 text-blue-500 text-xs font-semibold tracking-wide uppercase">
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
                        <thead className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-800 text-xs font-semibold tracking-wider uppercase border-b border-indigo-100">
                            <tr>
                                <th className="p-4 w-10">
                                    <input type="checkbox" className="rounded border-indigo-200 text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer" />
                                </th>
                                <th className="p-4 font-semibold min-w-[200px] border-l border-indigo-100/50">Date Time</th>
                                <th className="p-4 font-semibold min-w-[200px] border-l border-indigo-100/50">Message</th>
                                <th className="p-4 font-semibold min-w-[150px] border-l border-indigo-100/50">From</th>
                                <th className="p-4 font-semibold min-w-[150px] border-l border-indigo-100/50">To</th>
                                <th className="p-4 font-semibold min-w-[250px] border-l border-indigo-100/50">Attachment</th>
                                <th className="p-4 font-semibold min-w-[100px] border-l border-indigo-100/50">Status</th>
                            </tr>
                        </thead>
                        <tbody className="text-xs text-gray-600 divide-y divide-indigo-50">
                            {reports.map((row, index) => (
                                <tr key={index} className="hover:bg-blue-50/40 transition-colors duration-150">
                                    <td className="p-4">
                                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer" />
                                    </td>
                                    <td className="p-4 font-medium text-gray-700">{row.dateTime}</td>
                                    <td className="p-4">{row.message}</td>
                                    <td className="p-4 text-gray-500">{row.from}</td>
                                    <td className="p-4 text-gray-500">{row.to}</td>
                                    <td className="p-4 text-blue-500 truncate max-w-xs">{row.attachment}</td>
                                    <td className="p-4">
                                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${row.status === 'Success'
                                            ? 'bg-emerald-100 text-emerald-600 border border-emerald-200'
                                            : 'bg-red-100 text-red-600 border border-red-200'
                                            }`}>
                                            {row.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Footer */}
                <div className="flex items-center justify-end p-4 text-xs text-gray-500 gap-6 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                        <span>Rows per page:</span>
                        <div className="flex items-center gap-1 cursor-pointer">
                            <span>100</span>
                            <ArrowDownUp className="w-3 h-3" /> {/* Using generic icon for dropdown arrow if standard select not wanted */}
                        </div>
                    </div>
                    <div>1–4 of 4</div>
                    <div className="flex items-center gap-4">
                        <button disabled className="text-gray-300"><ChevronLeft className="w-4 h-4" /></button>
                        <button disabled className="text-gray-300"><ChevronRight className="w-4 h-4" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
