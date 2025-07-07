import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const merriweather = localFont({
  src: '/fonts/Merriweather-Regular.ttf',
  variable: '--font-merriweather',
})

const dm_sans = localFont({
  src: '/fonts/DMSans-Regular.ttf',
  variable: '--font-dm-sans',
});

const great_vibes = localFont({
  src: '/fonts/GreatVibes-Regular.ttf',
  variable: '--font-great-vibes',
});

export const metadata: Metadata = {
  title: "Elyon Ministry",
  description: "A place to worship, grow, and experience God's transforming love in community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.variable} ${dm_sans.variable} ${great_vibes.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
