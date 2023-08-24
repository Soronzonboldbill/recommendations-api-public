export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <main className="py-20">{children}</main>
}