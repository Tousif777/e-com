import DemoHead from "./components/Demohead";
import Feature from "./components/Feature";
import Products from "./components/Products";
import ProductsThree from "./components/ProductsThree";
import Productstwo from "./components/Productstwo";
import Stats from "./components/Stats";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <>
      <DemoHead />
      <Stats />
      <Products />
      <Productstwo />
      <ProductsThree />
      <Feature />
      <Testimonial />
    </>
  )
}
