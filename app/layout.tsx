import { ReactNode } from "react";
import './globals.css'
import Head from "next/head";
import Footer from "./components/ui/Footer";
import Navbar from "./components/ui/Navbar";


interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <Head>
        <title>Blinder</title>
        <meta
          name="description"
          content="Blinder makes it simple for you to build and grow your SaaS applications, or any business idea"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
