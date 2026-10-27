import { CartDrawer } from "./components/layout/CartDrawer";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { WhatsAppFloatingButton } from "./components/layout/WhatsAppFloatingButton";
import { Hero } from "./components/home/Hero";
import { WhyUs } from "./components/home/WhyUs";
import { ProductsSection } from "./components/products/ProductsSection";
import { AboutSection } from "./components/sections/AboutSection";
import { ContactSection } from "./components/sections/ContactSection";
import { FAQSection } from "./components/sections/FAQSection";
import { WholesaleSection } from "./components/sections/WholesaleSection";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <ProductsSection />
        <AboutSection />
        <WholesaleSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
      <CartDrawer />
    </CartProvider>
  );
}

export default App;
