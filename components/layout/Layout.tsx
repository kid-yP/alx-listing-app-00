import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen"></main>
      <Footer />
    </>
  );
}

export default Layout;