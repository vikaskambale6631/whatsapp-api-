"use client";

import {
    Columns,
    Filter,
    ArrowDownUp,
    Download,
    Info
} from "lucide-react";

export default function TriggerPage() {
    return (
        <div className="p-8">
            {/* Header 1 */}
            <div className="flex justify-center mb-8">
                <h1 className="text-emerald-500 font-bold text-lg">SET TRIGGER</h1>
            </div>

            {/* Connected Device Section */}
            <div className="flex items-center mb-6">
                <label className="text-xs font-bold text-gray-700 w-40">CONNECTED DEVICE :</label>
                <div className="w-full max-w-xl">
                    <select className="w-full bg-gray-100 border border-gray-200 text-gray-700 py-2 px-3 rounded text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500">
                        <option>Select device</option>
                    </select>
                </div>
            </div>

            {/* Alert Box */}
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-12 flex items-center gap-3 rounded-r">
                <div className="bg-red-600 rounded-full p-0.5">
                    <Info className="w-3 h-3 text-white" />
                </div>
                <p className="text-sm font-medium">You are not a valid user for this service</p>
            </div>

            {/* Header 2 */}
            <div className="flex justify-center mb-6">
                <h1 className="text-emerald-500 font-bold text-lg">TRIGGER HISTORY</h1>
            </div>

            {/* Table Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                {/* Toolbar */}
                <div className="flex items-center gap-4 p-4 border-b border-gray-100 text-blue-500 text-xs font-semibold tracking-wide uppercase">
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
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-medium">
                            <tr>
                                <th className="p-4 w-10">
                                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                </th>
                                <th className="p-4 font-normal">Date Time</th>
                                <th className="p-4 font-normal border-l border-gray-100">Sheet ID</th>
                                <th className="p-4 font-normal border-l border-gray-100">Device ID</th>
                                <th className="p-4 font-normal border-l border-gray-100">Device Name</th>
                                <th className="p-4 font-normal border-l border-gray-100">Message</th>
                                <th className="p-4 font-normal border-l border-gray-100">Phone</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-gray-500">
                            {/* Empty State */}
                            <tr>
                                <td colSpan={7} className="p-12 text-center h-64 align-middle">
                                    No rows
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
