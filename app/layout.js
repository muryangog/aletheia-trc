import Navbar from "@/src/component/ui/navbar"; // Next.js trouve tout seul index.jsx
import Footer from "@/src/component/ui/footer"; // Idem ici
import "./globals.css";
export const metadata = {
  title: "ALETHEIA TRUTH REVEALED CHURCH",
  metadataBase: new URL("https://www.aletheiatrc.bi"),
  applicationName: "ALETHEIA TRUTH REVEALED CHURCH",
  description: "www.aletheiatrc.bi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
