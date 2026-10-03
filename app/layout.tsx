import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"Milo's Story — Guardians of the Elements",description:"Enter the world of Milo's fantasy adventure, Guardians of the Elements."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}