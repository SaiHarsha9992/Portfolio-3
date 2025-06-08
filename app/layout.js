import { Geist } from "next/font/google";
import "./globals.css";

// Load only Geist
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "GKSHarsha's Portfolio",
  description: "Welcome to my portfolio! Explore my projects, skills, and experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased font-geist`}>
        {children}
      </body>
    </html>
  );
}
