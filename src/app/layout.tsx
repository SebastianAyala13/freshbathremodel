import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

// TODO: Replace with your final production domain.
const SITE_URL = "https://freshbathrenovations.com";
// TODO: Replace with your real GTM ID.
const GTM_ID = "GTM-XXXXXXX";
// TODO: Replace with your real Meta Pixel ID.
const META_PIXEL_ID = "123456789012345";
const OG_IMAGE = "/freshbath/og-cover.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "Fresh Bath Renovations | Professional Bathroom Remodeling & Renovation",
  description:
    "Professional bathroom renovation services including full remodels, tub-to-shower conversions, vanity upgrades, tile work, and fixture installation with free estimates.",
  keywords: [
    "bathroom remodel",
    "bathroom renovation",
    "tub to shower conversion",
    "vanity installation",
    "tile replacement",
    "bathroom remodeling company",
    "bathroom contractor usa",
    "bathroom remodel near me"
  ],
  category: "Home Services",
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title:
      "Fresh Bath Renovations | Professional Bathroom Remodeling & Renovation",
    description:
      "Transform your bathroom with expert design, quality materials, and professional installation. Free estimates, no obligation.",
    url: SITE_URL,
    siteName: "Fresh Bath Renovations",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Fresh Bath Renovations bathroom remodeling"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Fresh Bath Renovations | Professional Bathroom Remodeling & Renovation",
    description:
      "Free estimates for full bathroom remodels, tub-to-shower conversions, and vanity upgrades.",
    images: [OG_IMAGE]
  }
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Fresh Bath Renovations",
  description:
    "Professional bathroom renovation and remodeling with free, no-obligation estimates.",
  url: SITE_URL,
  areaServed: "US",
  knowsAbout: [
    "Bathroom remodeling",
    "Tub-to-shower conversions",
    "Vanity and sink upgrades",
    "Tile replacement"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="trustedform-script" strategy="afterInteractive">
          {`
            (function() {
              var field = "xxTrustedFormCertUrl";
              var s = document.createElement("script");
              s.type = "text/javascript";
              s.async = true;
              s.src =
                "https://api.trustedform.com/trustedform.js?field=" +
                field +
                "&use_tagged_consent=true&l=" +
                (new Date().getTime() + Math.random());
              var first = document.getElementsByTagName("script")[0];
              if (first && first.parentNode) {
                first.parentNode.insertBefore(s, first);
              } else {
                document.head.appendChild(s);
              }
            })();
          `}
        </Script>

        <Script id="gtm-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>

        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* TODO: Replace XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX with your real Jornaya campaign id */}
        <Script id="jornaya-leadid" strategy="afterInteractive">
          {`
            (function() {
              var s = document.createElement('script');
              s.type = 'text/javascript';
              s.async = true;
              s.src = '//create.lidstatic.com/campaign/XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX.js?snippet_version=2';
              var x = document.getElementsByTagName('script')[0];
              x.parentNode.insertBefore(s, x);
            })();
          `}
        </Script>

        <Script
          id="localbusiness-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="min-h-screen">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
