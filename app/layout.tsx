import { FC, ReactNode } from "react";
import "./globals.css";
import Script from "next/script";
type Props = {
  children: ReactNode;
  params: {
    locale: string;
  };
}

const RootLayout: FC<Props> = async ({
  children,
  params: { }
}) => {
  return (
    <html lang={'en'}>
      <body className={``}>
        <div className="min-h-screen wrapper laptop:pb-0 w-full">
          {children}
        </div>
        <Script
          src='https://assets.mamopay.com/public/checkout-inline.min.js'
        />
      </body>
    </html>
  );
}

export default RootLayout;