import "./globals.css";
import GlobalStyles from "../components/GlobalStyles";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import MobileCtaBanner from "../components/MobileCtaBanner";

export const metadata = {
  title: "Nat Weaver | Marriage Celebrant · Tasmania",
  description:
    "Bespoke wedding ceremonies written entirely for you — crafted with warmth, delivered with calm — across Tasmania's most extraordinary landscapes.",
  keywords: "marriage celebrant, Tasmania, wedding ceremony, Hobart, Bruny Island, elopement",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GlobalStyles />
        <Nav />
        <main>{children}</main>
        <Footer />
        <MobileCtaBanner />
      </body>
    </html>
  );
}
