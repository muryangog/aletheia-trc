import ClerkAppProvider from "@/components/providers/ClerkAppProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import "./globals.css";

export const metadata = {
  title: "ALETHEIA TRUTH REVEALED CHURCH",
  metadataBase: new URL("https://www.aletheiatrc.bi"),
  description:
    "Bienvenue à Aletheia - Truth Revealed Church. Une communauté passionnée par Jésus-Christ à Kinindo, Bujumbura.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkAppProvider>
      <html lang="fr" suppressHydrationWarning>
        <body className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
          <ThemeProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkAppProvider>
  );
}
