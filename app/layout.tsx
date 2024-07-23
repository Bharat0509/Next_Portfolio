import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import StarsCanvas from "@/components/StartBackground";
import NavBar from "@/components/navbar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://bharat001.me/"),
    title: "Bharat Bhammar - Aspiring Software Engineer | Full Stack Developer",
    description:
        "Aspiring Software Engineer currently pursuing B.Tech with a passion for AI, machine learning, and full-stack development. Experienced in developing AI-powered applications, enhancing network management operations, and creating scalable web solutions. Proficient in React, Node.js, and natural language processing.",
    keywords: [
        "Bhammar",
        "Bharat",
        "Bharat Bhammar",
        "Aspiring Software Engineer",
        "AI Enthusiast",
        "Machine Learning",
        "B.Tech Student",
        "Full Stack Developer",
        "AI-powered applications",
        "React Developer",
        "Node.js Developer",
        "NLP",
        "Natural Language Processing",
        "Portfolio",
        "JavaScript Developer",
        "Python Developer",
        "Software Intern",
        "Cisco Intern",
        "Frontend Developer",
        "Backend Developer",
        "Web Developer",
        "Tech Enthusiast",
    ],
    openGraph: {
        title: "Bharat Bhammar - Aspiring Software Engineer | Full Stack Developer",
        description:
            "Aspiring Software Engineer currently pursuing B.Tech with a passion for AI, machine learning, and full-stack development. Experienced in developing AI-powered applications, enhancing network management operations, and creating scalable web solutions. Proficient in React, Node.js, and natural language processing. Notable projects include ShopSwift, ChatCat, and Image Art Generator.",
        images: "/bharat-logo.png",
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
            <meta
                name='google-site-verification'
                content='tTPhKz96r1hhQLemKLlEmTQQXJHoUJ-QnKs5bjCnUNU'
            />
            <body
                className={`${inter.className} bg-[var(--bgColor)] overflow-y-scroll overflow-x-hidden`}
            >
                <NavBar />
                <StarsCanvas />
                {children}
            </body>
        </html>
    );
}
