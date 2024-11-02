
import { ClerkProvider } from "@clerk/nextjs";
import Header from "./_components/Header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="min-h-screen w-screen">
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
