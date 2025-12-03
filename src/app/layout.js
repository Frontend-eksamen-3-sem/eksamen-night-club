
import { Ubuntu } from "next/font/google";


import "./reset.css";
import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
});


export const metadata = {
  title: "Night Club",
  description: "Af Lærke, Klara og Helene",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${ubuntu.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
