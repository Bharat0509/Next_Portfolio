import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import StarsCanvas from "@/components/StartBackground";
import NavBar from "@/components/navbar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://bharat001.me/"),
    title: "Bharat Bhammar - SWE | UX",
    description:
        "Frontend & Mobile App Developer from Pakistan with 3+ years of expertise. Senior Software Engineer. Specializing mobile apps, UX, and JavaScript technologies.",
    keywords: [
        "Developer",
        "Portfolio",
        "Developer Portflio",
        "Bharat",
        "Bharat Bhammar",
        "Bhammar",
        "Next.js",
        "React",
        "ReactNative",
        "Android",
    ],
    openGraph: {
        title: "Bharat Bhammar",
        description:
            "Frontend & Mobile App Developer from Pakistan with 3+ years of expertise. Senior Software Engineer. Specializing mobile apps, UX, and JavaScript technologies.",
        images: "/OpenGraph.jpg",
    },
    alternates: {
        canonical: "https://bharat001.me",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body
                className={`${inter.className} bg-[var(--bgColor)] overflow-y-scroll overflow-x-hidden`}
            >
                <NavBar/>
                <StarsCanvas />
                {children}
            </body>
        </html>
    );
}
