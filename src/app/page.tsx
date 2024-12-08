import Browse from "@/components/Browse";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Rating from "@/components/Rating";
import Image from "next/image";

export default function Home() {
  return (
  <>
  <Hero/>
  <Products/>
  <Browse/>
  <Rating/>
  </>
  );
}
