import Footer from "./Footers";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
