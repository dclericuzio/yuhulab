import { Noto_Sans_Grantha } from "next/font/google";
import ClientWrapper from "@/utils/clientWrapper";
import Navbar from "@/components/organisms/navbar";
import "./globals.css";
import 'leaflet/dist/leaflet.css'
import Footer from "@/components/organisms/footer";
import StatusMessageDisplay from "@/components/StatusMessageDisplay";
import { StatusMessageProvider } from "@/components/StatusMessageContext";

const notoSansGrantha = Noto_Sans_Grantha({
  weight: "400",
  variable: "--font-noto-sans-grantha",
  subsets: ["latin"],
});

export const metadata = {
    title: "PT Rana Putra Solid",
    description: "PT Rana Putra Solid",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${notoSansGrantha.variable} antialiased`}>
        <ClientWrapper/>
        <StatusMessageProvider>
          <Navbar/>
          <StatusMessageDisplay/>
          <main>
            {children}
          </main>
          <Footer/>
        </StatusMessageProvider>
      </body>
    </html>
  );
}

