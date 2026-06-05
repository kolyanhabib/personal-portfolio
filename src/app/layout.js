import "./globals.css";

export const metadata = {
  title: "Kolyan Habib Portfolio",
  description: "Professional Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
