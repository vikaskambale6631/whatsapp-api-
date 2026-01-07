"use client"

import DashboardLayout from "@/components/layout/DashboardLayout"
import { ProfileHeader, ProfileStats, InfoSection, InfoField, AccountPlanCard, SecurityCard } from "@/components/profile/ProfileComponents"

export default function ProfilePage() {
    return (
        <DashboardLayout>
            <div className="space-y-8 max-w-7xl mx-auto">

                {/* Header Section */}
                <ProfileHeader />

                {/* Stats Row */}
                <ProfileStats />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Info Column */}
                    <div className="lg:col-span-2 space-y-10">

                        {/* Personal Information */}
                        <InfoSection title="Personal Information">
                            <InfoField label="FULL NAME" value="rahul waghole" />
                            <InfoField label="EMAIL ADDRESS" value="rahulwaghole14@gmail.com" />
                            <InfoField label="USER ID" value="d1e0c262c9ed401099d186cb769e1652" fullWidth={true} />
                            <InfoField label="MOBILE NUMBER" value="9881976526" />
                            <InfoField label="COUNTRY" value="Not provided" />
                            <InfoField label="ADDRESS" value="Not provided" fullWidth={true} />
                        </InfoSection>

                        <div className="border-t border-gray-100" />

                        {/* Business Information */}
                        <InfoSection title="Business Information">
                            <InfoField label="COMPANY NAME" value="RSL Solution Pvt Ltd" />
                            <InfoField label="ORGANIZATION TYPE" value="RSL Solution Pvt Ltd" />
                            <InfoField label="ERP TYPE" value="Other" />
                            <InfoField label="BANK NAME" value="Indusind bank" />
                        </InfoSection>
                    </div>

                    {/* Side Column */}
                    <div className="space-y-6">
                        <AccountPlanCard />
                        <SecurityCard />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}
