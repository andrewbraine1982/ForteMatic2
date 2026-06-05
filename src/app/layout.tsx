import "./globals.css";

export const metadata = {
  title: "ForteMatic",
  description: "Premium supplements designed to support everyday health."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
