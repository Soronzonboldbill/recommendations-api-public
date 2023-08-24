import "@/styles/globals.css"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section className="py-20">{children}</section>
}
