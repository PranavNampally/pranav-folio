import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto px-6 flex",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <div className="pointer-events-none fixed z-30 mx-auto mb-4 flex origin-bottom h-full max-w-20 w-48 min-h-[100dvh] -ml-[5rem]">
              <div className="absolute bottom-0 inset-x-0 h-full w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_left,black,transparent)] dark:bg-background"></div>

            </div>
            {children}
            <div className="pointer-events-none fixed z-30 mx-auto mb-4 flex origin-bottom h-full max-w-20 w-48 min-h-[100dvh] ml-[39rem] -mr-[5rem]">
              <div className="absolute bottom-0 inset-x-0 h-full w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_right,black,transparent)] dark:bg-background"></div>

            </div>
            <AnimatedGridPattern
              numSquares={30}
              maxOpacity={0.2}
              duration={3}
              repeatDelay={0.1}
              className={cn(
                "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]",
                "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 fixed",
              )}
            />
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
