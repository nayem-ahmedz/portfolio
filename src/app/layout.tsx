import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Nayem Ahmed | Full-stack Web Developer",
    description: "Explore the portfolio of Nayem Ahmed, a Full-stack Web Developer from Sylhet, Bangladesh. Discover his projects, skills, and expertise in modern web technologies",
    keywords: "Nayems Portfolio, nayem ahmed, nayem-ahmedz, nayem ahmedz, nayems website, nayems space, web developer, front-end developer, front end web developer, full stack developer, mern stack developer, javascript developer",
    authors: [{ name: "Nayem Ahmed" }],
    icons: {
        icon: '/favicon.ico',
        apple: '/logo192.png'
    },
    robots: "index, follow",
    verification: {
        google: "xON67QMLreyQ4Glp17B2DsSLyghLcN8xywu5aw5YX5s"
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
            >
                {children}
            </body>
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
        </html>
    );
}