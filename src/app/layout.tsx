import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { profile } from "@/content/portfolio";
import { siteUrl } from "@/lib/site";
import "./globals.css";
export const metadata: Metadata = {
  ...(siteUrl && {
    metadataBase: new URL(siteUrl + "/"),
    alternates: { canonical: siteUrl + "/" },
  }),
  title: {
    default: profile.name + " — " + profile.title,
    template: "%s · " + profile.name,
  },
  description: profile.description,
  openGraph: {
    ...(siteUrl && { url: siteUrl + "/" }),
    title: profile.name + " — " + profile.title,
    description: profile.description,
    type: "website",
    locale: "en_US",
    siteName: profile.name,
  },
  twitter: {
    card: "summary",
    title: profile.name + " — " + profile.title,
    description: profile.description,
  },
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <div className="site-shell" id="top">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
