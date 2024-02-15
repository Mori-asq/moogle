import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Moogle",
  description: "The Text Crawler",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="mainWrapper w-[100%] h-[100%] relative">
          <div className="header w-[100%] h-[5%] text-[2rem] centerRow">
            Search Whatever You Want
          </div>
          <div className="main w-[100%]  centerCol">{children}</div>
          <div className="footer w-[100%] h-[5%] text-[2rem] centerRow">
            Morteza Asgharzadeh & Ahmadreza Majd
          </div>
        </div>
      </body>
    </html>
  );
}
