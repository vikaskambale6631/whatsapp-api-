"use client"

import { CreditCard, MessageSquare, TrendingUp, Wallet, Layout, Users } from "lucide-react";

export default function UserDashboardPage() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, rahul waghole!</h1>
            <p className="text-gray-500">Here's what's happening with your account today.</p>
          </div>
          <div className="text-right text-xs text-gray-400">
            <p>User ID</p>
            <p className="font-mono bg-gray-100 px-2 py-1 rounded">d1e0c262c9ed401099d186cb769e1652</p>
          </div>
        </div>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Card 1: Total Credits */}
        <div className="bg-blue-600 text-white p-6 rounded-2xl relative overflow-hidden shadow-lg min-h-[140px] flex flex-col justify-between">
          <div className="relative z-10">
            <p className="text-blue-100 text-sm font-semibold uppercase tracking-wide">Total Credits</p>
            <h2 className="text-3xl font-bold mt-1">13,930</h2>
          </div>
          <CreditCard className="absolute right-4 bottom-4 w-12 h-12 text-blue-500/40" />
        </div>

        {/* Card 2: Used Credits */}
        <div className="bg-purple-600 text-white p-6 rounded-2xl relative overflow-hidden shadow-lg min-h-[140px] flex flex-col justify-between">
          <div className="relative z-10">
            <p className="text-purple-100 text-sm font-semibold uppercase tracking-wide">Used Credits</p>
            <h2 className="text-3xl font-bold mt-1">0</h2>
          </div>
          <MessageSquare className="absolute right-4 bottom-4 w-12 h-12 text-purple-500/40" />
        </div>

        {/* Card 3: Remaining Credits */}
        <div className="bg-emerald-500 text-white p-6 rounded-2xl relative overflow-hidden shadow-lg min-h-[140px] flex flex-col justify-between">
          <div className="relative z-10">
            <p className="text-emerald-100 text-sm font-semibold uppercase tracking-wide">Remaining Credits</p>
            <h2 className="text-3xl font-bold mt-1">13,930</h2>
          </div>
          <TrendingUp className="absolute right-4 bottom-4 w-12 h-12 text-emerald-400/40" />
        </div>

        {/* Card 4: Wallet Balance */}
        <div className="bg-orange-500 text-white p-6 rounded-2xl relative overflow-hidden shadow-lg min-h-[140px] flex flex-col justify-between">
          <div className="relative z-10">
            <p className="text-orange-100 text-sm font-semibold uppercase tracking-wide">Wallet Balance</p>
            <h2 className="text-3xl font-bold mt-1">₹0</h2>
          </div>
          <Wallet className="absolute right-4 bottom-4 w-12 h-12 text-orange-400/40" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Usage Overview */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold text-gray-800">Usage Overview</h3>
          </div>

          <div className="mb-2 flex justify-between text-sm text-gray-500">
            <span>Credits Used</span>
            <span>0.0%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-3 mb-8">
            <div className="bg-blue-600 h-3 rounded-full" style={{ width: '0%' }}></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <h4 className="text-2xl font-bold text-gray-900">0</h4>
              <p className="text-gray-500 text-sm">Messages Sent</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <h4 className="text-2xl font-bold text-gray-900">13930</h4>
              <p className="text-gray-500 text-sm">Credits Left</p>
            </div>
          </div>
        </div>

        {/* Right Column: Plan Details & Account Info */}
        <div className="space-y-6">
          {/* Plan Details Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <Layout className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-gray-800">Plan Details</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Plan Type</span>
                <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-semibold">MAP BA</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Expiry</span>
                <span className="font-semibold text-gray-900">UNLIMITED</span>
              </div>
            </div>
          </div>

          {/* Account Info Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-purple-600" />
              <h3 className="font-semibold text-gray-800">Account Info</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">User Type</span>
                <span className="font-semibold text-gray-900">Reseller</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Reseller ID</span>
                <span className="font-semibold text-gray-900 text-right w-24 truncate">...</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Message */}
      <div className="mt-12 text-center text-xs text-gray-400 font-medium">
        A UNIT OF <span className="text-gray-600">MAYAKRISHNASALES PVT LTD.</span>
      </div>
    </div>
  );
}
