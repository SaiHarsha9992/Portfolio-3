import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});


export const metadata = {
  title: "GKSHarsha's Portfolio",
  description: "Welcome to my portfolio! Explore my projects, skills, and experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
