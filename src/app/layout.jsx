import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/header/main header/MainHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ToDo App",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en" uppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="px-10 py-3 bg-emerald-400">
          <MainHeader />
        </header>
        <main className="px-10 py-10 bg-emerald-100 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
