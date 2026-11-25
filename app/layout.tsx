import "./globals.css";
import { Anton, Montserrat, Dancing_Script } from "next/font/google";
const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton" });
const mont = Montserrat({ subsets: ["latin"], variable: "--font-mont" });
const script = Dancing_Script({ subsets: ["latin"], variable: "--font-script" });
export const metadata = { title: "Anshul Surve | Video Editor & Motion Designer", description: "Portfolio of Anshul Surve" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${mont.variable} ${script.variable} font-body`}>{children}</body>
    </html>
  );
}
