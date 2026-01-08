import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ChevronRight, Crown, Users, Wallet, Box, LayoutGrid, Table as TableIcon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useOrder } from "@/context/OrderContext"
import { useRouter } from "next/navigation"

// --- Types ---
export interface Plan {
    name: string
    price: string
    credits: string
    rate: string
    validity: string
    isPopular?: boolean
    colorTheme?: 'blue' | 'purple' | 'green' | 'dark'
}

// --- Icons & Helpers ---
function CreditCardIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></svg>
    )
}

function FeatureItem({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-2 text-sm text-gray-600">
            <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
            <span>{text}</span>
        </div>
    )
}

// --- Shared Components ---

export function PlansHeader() {
    return (
        <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <CreditCardIcon className="h-6 w-6 text-blue-600" />
                Pricing Plans
            </h1>
            <p className="text-gray-500 mt-1">Choose the perfect plan for your messaging needs</p>
        </div>
    )
}

function OverviewCard({ label, value, color, icon }: { label: string, value: string, color: string, icon: React.ReactNode }) {
    return (
        <div className={`${color} rounded-lg p-6 relative overflow-hidden text-white shadow-md`}>
            {/* Background Shape */}
            <div className="absolute right-0 top-0 h-full w-24 bg-white/10 skew-x-12 transform translate-x-8" />

            <div className="relative z-10 flex justify-between items-center">
                <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-white/80">{label}</p>
                    <p className="text-3xl font-bold mt-1">{value}</p>
                </div>
                <div className="p-2 bg-white/20 rounded-full">
                    {icon}
                </div>
            </div>
        </div>
    )
}

export function PlansOverview() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <Link href="/plans" className="transition-transform hover:scale-105 block">
                <OverviewCard
                    label="ALL PLANS"
                    value="9"
                    color="bg-blue-600"
                    icon={<Box className="text-blue-200 h-8 w-8" />}
                />
            </Link>
            <Link href="/plans/reseller-plans" className="transition-transform hover:scale-105 block">
                <OverviewCard
                    label="RESELLER PLANS"
                    value="3"
                    color="bg-purple-600"
                    icon={<Crown className="text-purple-200 h-8 w-8" />}
                />
            </Link>
            <Link href="/plans/user-plans" className="transition-transform hover:scale-105 block">
                <OverviewCard
                    label="USER PLANS"
                    value="6"
                    color="bg-green-600"
                    icon={<Users className="text-green-200 h-8 w-8" />}
                />
            </Link>
            <OverviewCard
                label="AVERAGE PRICE"
                value="₹22,214"
                color="bg-orange-600"
                icon={<Wallet className="text-orange-200 h-8 w-8" />}
            />
        </div>
    )
}

export function PricingCard({ name, price, credits, rate, validity, isPopular, colorTheme = 'dark' }: Plan) {
    const isBlue = colorTheme === 'blue'
    const { addOrder } = useOrder()
    const router = useRouter()

    const handlePurchase = () => {
        if (price === "₹0") {
            addOrder({
                planName: name,
                price: price,
                credits: credits,
                validity: validity
            })
            router.push('/orders')
        } else {
            router.push(`/plans/checkout?planName=${encodeURIComponent(name)}`)
        }
    }

    return (
        <Card className={`relative border shadow-sm hover:shadow-md transition-shadow ${isPopular ? 'border-2 border-blue-500' : ''}`}>

            <CardContent className="pt-8 pb-8 flex flex-col items-center text-center">
                <div className={`p-3 rounded-full mb-4 ${isBlue ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-600'}`}>
                    <Crown className="h-6 w-6" />
                </div>

                <h3 className="text-sm font-bold uppercase tracking-wide text-gray-900 mb-2">{name}</h3>

                <div className="mb-1">
                    <span className="text-3xl font-bold text-gray-900">{price}</span>
                </div>
                <p className="text-xs text-gray-500 mb-6">One-time payment</p>

                <div className="w-full space-y-3 text-left mb-8">
                    <FeatureItem text={`${credits} Credits`} />
                    <FeatureItem text={`Rate: ${rate} per message`} />
                    <FeatureItem text="Wallet: ₹0" />
                    <FeatureItem text={`Validity: ${validity}`} />
                    <FeatureItem text="24/7 Support" />
                </div>

                <Button
                    onClick={handlePurchase}
                    className={`w-full group ${isBlue ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'}`}>
                    {price === "₹0" ? "Demo Plan - No Purchase Required" : (
                        <>
                            Get Started
                            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                    )}
                </Button>
            </CardContent>
        </Card>
    )
}

// --- New Components for Refactor ---

export function PlansTable({ plans }: { plans: Plan[] }) {
    const { addOrder } = useOrder()
    const router = useRouter()

    const handlePurchase = (plan: Plan) => {
        // Check if allow demo, otherwise redirect to checkout
        if (plan.price === "₹0") {
            addOrder({
                planName: plan.name,
                price: plan.price,
                credits: plan.credits,
                validity: plan.validity
            })
            router.push('/orders')
        } else {
            router.push(`/plans/checkout?planName=${encodeURIComponent(plan.name)}`)
        }
    }

    return (
        <div className="rounded-md border bg-white shadow-sm overflow-hidden">
            <Table>
                <TableHeader>
                    <TableRow className="bg-gray-50 hover:bg-gray-50">
                        <TableHead className="w-[200px] font-semibold">Plan Name</TableHead>
                        <TableHead className="font-semibold">Price</TableHead>
                        <TableHead className="font-semibold">Credits</TableHead>
                        <TableHead className="font-semibold">Rate</TableHead>
                        <TableHead className="font-semibold">Validity</TableHead>
                        <TableHead className="text-right font-semibold">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {plans.map((plan) => (
                        <TableRow key={plan.name}>
                            <TableCell className="font-medium">
                                <div className="flex items-center gap-2">
                                    <div className={`p-1.5 rounded-full ${plan.colorTheme === 'blue' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
                                        <Crown className="h-4 w-4" />
                                    </div>
                                    {plan.name}
                                    {plan.isPopular && (
                                        <span className="ml-2 inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                                            Popular
                                        </span>
                                    )}
                                </div>
                            </TableCell>
                            <TableCell>{plan.price}</TableCell>
                            <TableCell>{plan.credits}</TableCell>
                            <TableCell>{plan.rate}</TableCell>
                            <TableCell>{plan.validity}</TableCell>
                            <TableCell className="text-right">
                                <Button
                                    size="sm"
                                    variant={plan.price === "₹0" ? "outline" : "default"}
                                    className={plan.colorTheme === 'blue' ? 'bg-blue-600 hover:bg-blue-700' : ''}
                                    onClick={() => handlePurchase(plan)}
                                >
                                    {plan.price === "₹0" ? "Try Demo" : "Select"}
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

interface PlanSectionProps {
    title: string
    icon?: React.ReactNode
    plans: Plan[]
    defaultView?: 'card' | 'table'
    viewMode?: 'card' | 'table'
    onViewModeChange?: (mode: 'card' | 'table') => void
    hideToggle?: boolean
}

export function PlanSection({ title, icon, plans, defaultView = 'card', viewMode: controlledViewMode, onViewModeChange, hideToggle = false }: PlanSectionProps) {
    const [internalViewMode, setInternalViewMode] = useState<'card' | 'table'>(defaultView)

    const isControlled = controlledViewMode !== undefined
    const viewMode = isControlled ? controlledViewMode : internalViewMode

    const handleViewChange = (mode: 'card' | 'table') => {
        if (isControlled) {
            onViewModeChange?.(mode)
        } else {
            setInternalViewMode(mode)
        }
    }

    return (
        <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    {icon}
                    {title}
                </h2>
                {!hideToggle && (
                    <div className="flex bg-gray-100 rounded-lg p-1 text-sm">
                        <button
                            onClick={() => handleViewChange('card')}
                            className={`flex items-center gap-1 px-3 py-1 rounded-md font-medium transition-all ${viewMode === 'card' ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
                        >
                            <LayoutGrid className="h-4 w-4" />
                            Card View
                        </button>
                        <button
                            onClick={() => handleViewChange('table')}
                            className={`flex items-center gap-1 px-3 py-1 rounded-md font-medium transition-all ${viewMode === 'table' ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
                        >
                            <TableIcon className="h-4 w-4" />
                            Table View
                        </button>
                    </div>
                )}
            </div>

            {viewMode === 'card' ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {plans.map((plan) => (
                        <PricingCard key={plan.name} {...plan} />
                    ))}
                </div>
            ) : (
                <PlansTable plans={plans} />
            )}
        </div>
    )
}
