"use client";

import {
    Send,
    Paperclip,
    Clock,
} from "lucide-react";
import { useState } from "react";

export default function GroupsMessagingPage() {
    const [selectedGroups, setSelectedGroups] = useState<string[]>([]);

    const availableGroups = [
        "VIP Customers", "New Leads", "Beta Testers", "Support Team"
    ];

    const toggleGroup = (group: string) => {
        if (selectedGroups.includes(group)) {
            setSelectedGroups(selectedGroups.filter(g => g !== group));
        } else {
            setSelectedGroups([...selectedGroups, group]);
        }
    };

    return (
        <div className="p-8 max-w-5xl mx-auto">
            <div className="mb-8 text-center">
                <h1 className="text-2xl font-bold text-gray-800 uppercase tracking-tight">Group Messaging</h1>
                <p className="text-gray-500 text-sm mt-1">Send bulk messages to your contact groups instantly</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 md:p-8 space-y-8">

                    {/* Step 1: Select Groups */}
                    <div className="space-y-3">
                        <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center text-xs">1</div>
                            Select Groups
                        </label>
                        <div className="flex flex-wrap gap-2 p-4 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                            {availableGroups.map(group => (
                                <button
                                    key={group}
                                    onClick={() => toggleGroup(group)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedGroups.includes(group)
                                        ? 'bg-yellow-500 text-white shadow-md transform scale-105'
                                        : 'bg-white text-gray-600 border border-gray-200 hover:border-yellow-300 hover:bg-yellow-50'
                                        }`}
                                >
                                    {group}
                                </button>
                            ))}
                        </div>
                        {selectedGroups.length > 0 && (
                            <p className="text-xs text-gray-400 pl-2">Selected: {selectedGroups.join(", ")}</p>
                        )}
                    </div>

                    {/* Step 2: Message Content */}
                    <div className="space-y-3">
                        <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center text-xs">2</div>
                            Compose Message
                        </label>
                        <div className="relative">
                            <textarea
                                className="w-full h-48 p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 transition-all resize-none text-sm text-gray-700"
                                placeholder="Type your message here..."
                            ></textarea>
                            <div className="absolute bottom-3 right-3 flex items-center gap-2">
                                <button className="p-2 text-gray-400 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors" title="Attach File">
                                    <Paperclip className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-between text-xs text-gray-400 px-1">
                            <span>Markdown supported</span>
                            <span>0 / 1000 characters</span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-end border-t border-gray-100">
                        <button className="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors w-full sm:w-auto justify-center">
                            <Clock className="w-4 h-4" />
                            <span>Schedule Later</span>
                        </button>
                        <button className="flex items-center gap-2 px-8 py-2.5 rounded-lg bg-yellow-500 text-white font-medium hover:bg-yellow-600 shadow-md hover:shadow-lg transition-all w-full sm:w-auto justify-center">
                            <Send className="w-4 h-4" />
                            <span>Send Message</span>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
