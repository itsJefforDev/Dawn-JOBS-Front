import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-28 px-8">{children}</main>
      <Footer />
    </>
  );
}