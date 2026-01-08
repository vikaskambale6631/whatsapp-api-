import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ShieldCheck, History } from "lucide-react"

export function ProfileHeader() {
    return (
        <div className="flex items-start justify-between">
            <div className="flex gap-4">
                <div className="relative">
                    <Avatar className="h-16 w-16 bg-blue-600 text-white">
                        <AvatarFallback className="text-xl font-medium bg-blue-600">RW</AvatarFallback>
                    </Avatar>
                    <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-red-500 border-2 border-white" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">rahul waghole</h1>
                    <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="bg-red-50 text-red-500 border-red-100 hover:bg-red-50">Disconnected</Badge>
                        <Badge variant="secondary" className="bg-blue-50 text-blue-600 hover:bg-blue-50 font-normal">Reseller</Badge>
                    </div>
                </div>
            </div>
            <div className="text-right">
                <p className="text-xs text-gray-500">Member since</p>
                <p className="text-sm font-medium text-gray-900">Mar 26, 2024</p>
            </div>
        </div>
    )
}

export function ProfileStats() {
    return (
        <div className="grid grid-cols-4 gap-8 py-6 border-t border-b border-gray-100">
            <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">TOTAL CREDITS</p>
                <p className="text-2xl font-bold text-blue-600 mt-1">13,930</p>
            </div>
            <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">USED CREDITS</p>
                <p className="text-2xl font-bold text-purple-600 mt-1">0</p>
            </div>
            <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">REMAINING</p>
                <p className="text-2xl font-bold text-green-600 mt-1">13,930</p>
            </div>
            <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">BALANCE</p>
                <p className="text-2xl font-bold text-orange-500 mt-1">₹0</p>
            </div>
        </div>
    )
}

export function InfoSection({ title, children, showEdit = true }: { title: string, children: React.ReactNode, showEdit?: boolean }) {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <UserIcon title={title} />
                    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                </div>
                {showEdit && <button className="text-sm font-medium text-blue-600 hover:text-blue-700">Edit</button>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {children}
            </div>
        </div>
    )
}

function UserIcon({ title }: { title: string }) {
    if (title.includes("Personal")) return <div className="p-1 rounded bg-blue-50 text-blue-600"><CheckCircle2 className="h-4 w-4" /></div>
    if (title.includes("Business")) return <div className="p-1 rounded bg-blue-50 text-blue-600"><CheckCircle2 className="h-4 w-4" /></div> // Using check icon for business too as per generic 'icon' request or similar
    return null
}

export function InfoField({ label, value, fullWidth = false }: { label: string, value: string, fullWidth?: boolean }) {
    return (
        <div className={fullWidth ? "col-span-2" : ""}>
            <p className="text-xs font-semibold text-gray-500 uppercase">{label}</p>
            <p className={`mt-1 text-sm font-medium ${value === "Not provided" || value === "Other" ? "text-gray-900 italic" : "text-gray-900"}`}>{value}</p>
            {fullWidth && <div className="mt-2" />} {/* Spacing fix for full width items if needed */}
        </div>
    )
}

export function AccountPlanCard() {
    return (
        <Card className="bg-white border text-card-foreground shadow-sm">
            <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-blue-600" />
                    <CardTitle className="text-base font-semibold">Account Plan</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="space-y-4 pt-2">
                <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">PLAN TYPE</p>
                    <p className="text-lg font-bold">MAP 8A</p>
                </div>
                <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">USER TYPE</p>
                    <p className="text-base font-medium">Reseller</p>
                </div>
                <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">EXPIRY DATE</p>
                    <div className="flex items-center gap-2 text-green-600 font-bold">
                        <History className="h-4 w-4" />
                        <span>UNLIMITED</span>
                    </div>
                </div>
                <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">USERNAME</p>
                    <p className="text-sm font-medium break-all">rahulwaghole14@gmail.com</p>
                </div>
            </CardContent>
        </Card>
    )
}

export function SecurityCard() {
    return (
        <Card className="bg-blue-50/50 border-blue-100 shadow-sm">
            <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-blue-600" />
                    <CardTitle className="text-base font-semibold">Security</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="pt-2">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <History className="h-6 w-6 text-blue-600 rotate-180" />
                </div>
                <p className="text-sm text-gray-600 text-center mb-6">
                    Keep your account secure by updating your password regularly.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium">
                    Change Password
                </Button>

                <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-2">CURRENT PASSWORD</p>
                    <div className="bg-white p-2 rounded border flex gap-1 justify-between tracking-widest text-lg h-10 items-center overflow-hidden">
                        ••••••••••••
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
