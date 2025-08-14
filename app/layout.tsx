import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import ChakraProvider from "./ChakraProvider";
import QueryProvider from "./QueryProvider";
import {FavoritesProvider} from "../hooks/useFavorites";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Poke Resource",
	description: "Poke Resource",
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
					<FavoritesProvider>
						<ChakraProvider>{children}</ChakraProvider>
					</FavoritesProvider>
				</QueryProvider>
			</body>
		</html>
	);
}
