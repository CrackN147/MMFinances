import { FC, ReactNode } from "react";

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
      <body className={`font-regular bg-dark`}>
        <div className="min-h-screen wrapper laptop:pb-0 w-full">
          {children}
        </div>
      </body>
    </html>
  );
}

export default RootLayout;