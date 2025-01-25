import HeadMeta from "./(other)/HeadMeta";
import Header from "./(components)/header";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <HeadMeta />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
