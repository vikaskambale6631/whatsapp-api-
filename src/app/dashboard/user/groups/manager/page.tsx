"use client";

import {
    Filter,
    Download,
    Users,
    ChevronLeft,
    ChevronRight,
    UserPlus,
    Trash2,
    Edit
} from "lucide-react";

export default function GroupsManagerPage() {
    const groups = [
        { id: "GRP_001", name: "VIP Customers", members: 154, createdDate: "12-12-2025", status: "Active", description: "High value customers for exclusive offers" },
        { id: "GRP_002", name: "New Leads", members: 890, createdDate: "05-01-2026", status: "Active", description: "Leads form website signup" },
        { id: "GRP_003", name: "Inactive Users", members: 45, createdDate: "10-11-2025", status: "Archived", description: "Users inactive for > 3 months" },
        { id: "GRP_004", name: "Beta Testers", members: 23, createdDate: "15-12-2025", status: "Active", description: "Early access feature testers" },
        { id: "GRP_005", name: "Support Team", members: 12, createdDate: "01-01-2025", status: "Active", description: "Internal support staff" },
    ];

    return (
        <div className="p-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 uppercase tracking-tight">Group Manager</h1>
                    <p className="text-gray-500 text-sm mt-1">Create and manage your contact groups</p>
                </div>
                <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm">
                    <UserPlus className="w-4 h-4" />
                    <span>Create New Group</span>
                </button>
            </div>

            {/* Content Area */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Toolbar */}
                <div className="flex flex-col sm:flex-row items-center justify-between p-4 border-b border-gray-100 gap-4">
                    {/* Search is handled elsewhere or omitted for brevity, adding back simpler version */}
                    <div className="relative w-full sm:w-72">
                        <input
                            type="text"
                            placeholder="Search groups..."
                            className="w-full pl-4 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 transition-all"
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

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gradient-to-r from-yellow-50 to-orange-50 text-yellow-800 text-xs font-semibold tracking-wider uppercase border-b border-yellow-100">
                            <tr>
                                <th className="p-4 w-10">
                                    <input type="checkbox" className="rounded border-yellow-300 text-yellow-600 focus:ring-yellow-500 w-4 h-4 cursor-pointer" />
                                </th>
                                <th className="p-4 font-semibold min-w-[200px]">Group Name</th>
                                <th className="p-4 font-semibold min-w-[150px]">Members</th>
                                <th className="p-4 font-semibold min-w-[250px]">Description</th>
                                <th className="p-4 font-semibold min-w-[120px]">Created Date</th>
                                <th className="p-4 font-semibold min-w-[100px]">Status</th>
                                <th className="p-4 font-semibold w-24 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-gray-600 divide-y divide-yellow-50">
                            {groups.map((group, index) => (
                                <tr key={index} className="hover:bg-yellow-50/40 transition-colors duration-150 group">
                                    <td className="p-4">
                                        <input type="checkbox" className="rounded border-gray-300 text-yellow-600 focus:ring-yellow-500 w-4 h-4 cursor-pointer" />
                                    </td>
                                    <td className="p-4 border-l border-transparent group-hover:border-yellow-100 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-yellow-100/50 p-2 rounded-lg text-yellow-600">
                                                <Users className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <div className="font-medium text-gray-900">{group.name}</div>
                                                <div className="text-xs text-gray-400 font-normal mt-0.5">{group.id}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-1.5">
                                            <span className="font-semibold text-gray-700">{group.members}</span>
                                            <span className="text-xs text-gray-400">contacts</span>
                                        </div>
                                    </td>
                                    <td className="p-4 text-gray-500 truncate max-w-xs">{group.description}</td>
                                    <td className="p-4 text-gray-500 font-mono text-xs">{group.createdDate}</td>
                                    <td className="p-4">
                                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border ${group.status === 'Active'
                                            ? 'bg-emerald-50 text-emerald-600 border-emerald-100'
                                            : 'bg-gray-100 text-gray-500 border-gray-200'
                                            }`}>
                                            {group.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-center">
                                        <div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-1.5 hover:bg-blue-50 text-blue-500 rounded-md transition-colors" title="Edit">
                                                <Edit className="w-4 h-4" />
                                            </button>
                                            <button className="p-1.5 hover:bg-red-50 text-red-500 rounded-md transition-colors" title="Delete">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
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
