export const metadata = {
  title: 'Banana Web Solutions',
  description: 'Banana Web Solutions',
}

export default function RootLayout({ children }) {
 return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
