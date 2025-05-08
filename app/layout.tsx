import { Exo_2 } from "next/font/google";
import ClientWrapper from "@/utils/clientWrapper";
import Navbar from "@/components/organisms/navbar";
import "./globals.css";
import Footer from "@/components/organisms/footer";

const exo2 = Exo_2({
  variable: "--font-exo-2",
  subsets: ["latin"],
});

export const metadata = {
    title: "PT SKL",
    description: "PT Sejahtera Karunia Lines",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <head>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${exo2.variable} antialiased`}>
        <ClientWrapper/>
        <Navbar/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
