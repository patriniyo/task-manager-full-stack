import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Task Manager Full-stack",
  description: "Learning to create a separated concerns with Next JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex bg-gray-100 min-h-[600px] space-x-4 p-5">
          <Sidebar />
          <main className="flex-1 p-4 bg-white rounded-md border border-gray-300">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
