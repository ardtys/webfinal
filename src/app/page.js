import Navbar from "./components/navbar";
import Hero from "./components/main";
import Benefit from './components/benefit'
import About from './components/aboutus'
import Product from './components/product'
import Testimoni from './components/testimoni'
import Footer from './components/footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Benefit/>
      <About/>
      <Product/>
      <Testimoni/>
      <Footer/>
    </>
  );
}
