import "../src/styles/global.css"
import "@ssd/ui/styles.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-zinc-900">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
