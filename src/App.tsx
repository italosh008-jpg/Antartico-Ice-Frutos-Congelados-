import { CartDrawer } from "./components/layout/CartDrawer";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { WhatsAppFloatingButton } from "./components/layout/WhatsAppFloatingButton";
import { FrozenOrbit } from "./components/home/FrozenOrbit";
import { FruitFall } from "./components/home/FruitFall";
import { Hero } from "./components/home/Hero";
import { WhyUs } from "./components/home/WhyUs";
import { ProductDetailModal } from "./components/products/ProductDetailModal";
import { ProductsSection } from "./components/products/ProductsSection";
import { AboutSection } from "./components/sections/AboutSection";
import { ContactSection } from "./components/sections/ContactSection";
import { FAQSection } from "./components/sections/FAQSection";
import { WholesaleSection } from "./components/sections/WholesaleSection";
import { CartProvider } from "./context/CartContext";
import { ProductDetailProvider } from "./context/ProductDetailContext";

function App() {
  return (
    <CartProvider>
      <ProductDetailProvider>
        <Header />
        <main>
          <Hero />
          <FruitFall />
          <WhyUs />
          <FrozenOrbit />
          <ProductsSection />
          <AboutSection />
          <WholesaleSection />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
        <WhatsAppFloatingButton />
        <CartDrawer />
        <ProductDetailModal />
      </ProductDetailProvider>
    </CartProvider>
  );
}

export default App;
