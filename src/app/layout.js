import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bookit | Book a Room",
  description: "Book a meeting or conference room for your team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="container py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
