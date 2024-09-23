import { Crimson_Text, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/_components/Navbar";
import Footer from "./_components/Footer";

const inter = Inter({ subsets: ["latin"] });
const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-crimson_text",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${crimson.variable} ${inter.className}`}>
        <Navbar />
        <div className="mt-8">
          <hr />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}