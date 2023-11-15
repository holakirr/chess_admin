import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@src/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

const title = "Шахматы с Петунькиной";

export const metadata: Metadata = {
	title,
	description: "Админ-панель для отслеживания успехов вашего ребенка",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={`${inter.className} pt-16`}>
				<Navigation title={title} />
				{children}
			</body>
		</html>
	);
}
