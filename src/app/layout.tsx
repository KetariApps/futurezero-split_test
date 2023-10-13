import React from "react";
import GoogleAnalytics from "@/lib/ga4/googleAnalytics";
import { AntdStyleProvider } from "./components/antdStyleProvider";
import { Metadata } from "next";
import "@/css/globals.css";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: "FutureZero",
  description:
    "Leverage deep real estate expertise and artificial intelligence to help families make their homes safer, more valuable and friendly for the planet. ",
};
export const dynamic = "force-dynamic";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />
        <AntdStyleProvider>
          <main className={styles.contentContainer}>
            <section className={styles.contentContainer__contentSection}>
              {children}
            </section>
          </main>
        </AntdStyleProvider>
      </body>
    </html>
  );
};

export default RootLayout;
