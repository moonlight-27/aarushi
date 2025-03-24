import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { metadata } from "./metadata";
import "./index.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        {/* Metadata */}
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta
          property="og:image:alt"
          content={metadata.openGraph.images[0].alt}
        />
        <meta property="og:url" content={metadata.metadataBase.toString()} />{" "}
        {/* Fixed url */}
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <link rel="icon" href={metadata.icons[0].url} />
        <title>{metadata.title}</title>
        {/* Structured Data (JSON-LD for SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Aarushi",
              description:
                "Aarushi is a YouTube creator sharing creative videos and behind-the-scenes content. Her channel is popular for insightful and engaging content.",
              url: metadata.metadataBase.toString(),
              image: [metadata.openGraph.images[0].url],
              sameAs: [
                "https://www.youtube.com/@AARUSHI_SINHA",
                "https://www.instagram.com/arushehh_?igsh=cWhraW52ZGVyN2Jy",
              ],
              occupation: "Content Creator, YouTube Creator",
            }),
          }}
        />
      </head>
      <body className="bg-black text-white">
        <Navbar /> {/* Navbar */}
        {/* OpenGraph Image Section */}
        <div className="open-graph-image-container hidden">
          <img
            src={metadata.openGraph.images[0].url}
            alt="Aarushi in front of camera creating YouTube content"
            width="1200"
            height="630"
            className="w-full h-auto"
          />
        </div>
        {/* Main Content */}
        <main>{children}</main>
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
