// components/layout/Layout.jsx
import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, title = "Dr. Selvan's Homeopathy" }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Dr. Selvan's Homeopathy - Natural healing solutions for a healthier life"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Caveat:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
