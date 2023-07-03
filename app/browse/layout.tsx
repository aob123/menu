import "../globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/CustomNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "menü",
  description: "Låt din smak bestämma",
};

export default function BrowseLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
