import Image from "next/image";
import Navbar from "./Navbar";
import Wrapper from "./Wrapper";
import Photo from "../../public/photo.png";
import Slideright from "./Slideright";
import Button from "./Button";

export default function Home() {
  return (
    <>
      <Navbar />
      <Wrapper>
        <div className="bg-white pt-64 lg:pt-0 h-[100vh] flex px-24 py-32 justify-center items-center lg:flex-row flex-col lg:justify-between">
          <div className="left pt-10 px-5 lg:px-0 flex lg:w-[49%] order-2 lg:order-1 w-[100vw] flex-col gap-4">
            <p className="font-bold lg:text-lg text-center lg:text-left">I'm</p>
            <h2 className="lg:text-6xl text-5xl text-center lg:text-left text-sky-700 font-bold">
              Shahriar Ridom
            </h2>
            <p className="text-gray-700 text-center lg:text-left lg:text-lg">
              Experienced web developer with a strong focus on React JS, Next
              JS, and Tailwindcss. Proven ability to build high-quality,
              scalable, and user-friendly web applications. Expertise in
              server-side rendering, static site generation, and responsive
              design.
            </p>
            <Button exclass="my-8 self-center lg:self-start hover:bg-sky-600 lg:mx-20">Hire Me</Button>
          </div>
          <div className="right flex lg:w-[49%] items-center justify-center order-1 lg:order-2 w-[100vw]">
            <Slideright>
              <Image src={Photo} width={500} height={500} alt="Myself" />
            </Slideright>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
