import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import ChakraProvider from "./ChakraProvider";
import QueryProvider from "./QueryProvider";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Pokemon",
	description: "Pokemon Resource App ",
	icons: {
		icon: "/favicon.png", // or "/icon.png", "/icon.svg"
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<QueryProvider>
					<ChakraProvider>{children}</ChakraProvider>
				</QueryProvider>
			</body>
		</html>
	);
}
