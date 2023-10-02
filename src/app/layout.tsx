import "@/app/styles/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const lineca = localFont({
  src: [
    {
      path: "../../public/fonts/F37LinecaTrial-Thin.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/F37LinecaTrial-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/F37LinecaTrial-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/F37LinecaTrial-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/F37LinecaTrial-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/F37LinecaTrial-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/F37LinecaTrial-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-lineca",
});

export const metadata: Metadata = {
  title: "Wildcat Finance",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${lineca.variable}`}>
      <body className='font-sans'>{children}</body>
    </html>
  );
}
