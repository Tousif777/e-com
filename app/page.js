import Feature from "./components/Feature";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Stats from "./components/Stats";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <>
     <Hero />
     <Stats />
     <Products />
     <Feature />
     <Testimonial />
    </>
  )
}
