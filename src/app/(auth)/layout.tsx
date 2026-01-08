export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[url('/login-bg.png')] bg-cover bg-center bg-no-repeat relative overflow-hidden">
            {/* Corner patch to hide logo if needed, or just relying on cover. 
                User asked to remove Gemini logo from bottom right. 
                If it's in the image, we can put a small blurry div there. */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-background/0 backdrop-blur-xl translate-x-10 translate-y-10 blur-xl pointer-events-none" />
            {children}
            <div className="mt-8 text-center text-sm text-gray-500">
                Protected by MessageAPI
            </div>
        </div>
    )
}
