import Image from "next/image";
import Slider from "./(component)/slider/Slider";
import FairAndExhibitions from "./(component)/fair&exhibitions/Fair&Exhibitions";
import OurProcessIn from "./(component)/ourProcessin/OurProcessIn";
import OurProducts from "./(component)/ourproducts/OurProducts";
import Animation from "./(component)/textanimation/Animation";



export default function Home() {
  return (
    <>
      <Slider />
      <Animation />
      <FairAndExhibitions />
      <OurProcessIn />
      <OurProducts />
    </>
  );
}
