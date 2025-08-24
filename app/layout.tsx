import { Poppins } from "next/font/google";
import ClientWrapper from "@/utils/clientWrapper";
import Navbar from "@/components/organisms/navbar";
import Footer from "@/components/organisms/footer";
import WhatsAppButton from "@/components/organisms/whatsapp";
import ScrollToTop from "@/components/organisms/scrollToTop";
import "./globals.css";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    variable: "--font-poppins",
    display: "swap",
});

export const metadata = {
    title: "Yuhulab +",
    description: "Yuhulab +",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <ClientWrapper/>
          <Navbar/>
          <main>
            {children}
          </main>
          <WhatsAppButton />
          <ScrollToTop />
          <Footer/>
      </body>
    </html>
  );
}

