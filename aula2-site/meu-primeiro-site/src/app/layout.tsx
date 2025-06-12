import "./globals.css";
import Header from "@/app/components/Header";

export const metadata = {
  title: "VB – Producer",
  description: "Site oficial do produtor VB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0F0F0F] text-[#F2F2F2] antialiased">
        <Header />                       {/* cabeçalho global */}
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
