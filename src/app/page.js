import Image from "next/image";
import Navbar from "./Navbar";
import Wrapper from "./Wrapper";
import Photo from "../../public/photo.png";
import Slideright from "./Slideright";
import Button from "./Button";

export default function Home() {
  return (
    <div className="h-[100vh] overflow-hidden">
      <Navbar />
      <Wrapper>
        <div className="h-full lg:pt-0 gap-3 lg:gap-0 flex px-24 justify-center items-center lg:flex-row flex-col lg:justify-between">
          <div className="left mb-16 lg:mb-0 px-5 lg:px-0 flex lg:w-[49%] order-2 lg:order-1 w-[100vw] flex-col gap-4">
            <h2 className="lg:text-5xl text-3xl text-center lg:text-left text-main font-bold">
              I'm Shahriar Ridom
            </h2>
            <h2 className="lg:text-5xl text-3xl text-center lg:text-left text-main font-bold">
              a <span className="text-primary font-bold">Web Developer</span>
            </h2>
            <p className="text-gray-700 text-sm text-center lg:text-left lg:text-lg">
              Experienced web developer with a strong focus on React JS, Next
              JS, and Tailwindcss. Proven ability to build high-quality,
              scalable, and user-friendly web applications. Expertise in
              server-side rendering, static site generation, and responsive
              design.
            </p>
            <Button exclass="lg:my-8 text-base self-center lg:self-start hover:bg-sky-600 lg:mx-20">Hire Me</Button>
          </div>
          <div className="right lg:w-[49%] flex items-center justify-center -z-50 lg:mb-40 lg:ml-14 order-1 lg:order-2 w-[100vw]">
            <Slideright>
              <Image className="w-80 lg:w-full" src={Photo} width={500} height={500} alt="Myself" />
            </Slideright>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
