import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "../styles/main.scss";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Jaworski Music",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
