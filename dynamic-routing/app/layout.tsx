export const metadata = {
  title: 'Dynamic Routing',
  description: 'Dynamic Routing in Next.js',
}       
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <header
            style={{
                padding: '1rem',
                backgroundColor: '#f0f0f0',
            }}
            >
            <p>Header</p>
        </header>
        {children}
        <footer
            style={{
                padding: '1rem',
                backgroundColor: '#eb9999ff',
            }}
        >
            <p>Footer</p>
        </footer>
      </body>
    </html>
  )
}