import type { Metadata } from "next";
import {
  Figtree,
  Instrument_Serif,
  Inter,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ViewTransitions } from "next-view-transitions";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pratham Singh",
  description:
    "Pratham singh's portfolio for the Full Stack Engineer.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={`${figtree.variable} ${inter.variable} ${jetbrainsMono.variable} ${instrument.variable} h-full antialiased`}
        suppressHydrationWarning
      >
        <body
          className="min-h-full flex flex-col"
          suppressHydrationWarning
        >
          <ThemeProvider
            defaultTheme="system"
            enableSystem
            attribute="class"
            disableTransitionOnChange
          >
            <main className="bg-background text-foreground">
              {children}
            </main>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
