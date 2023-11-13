import Image from "next/image";
import Navbar from "./Navbar";
import Wrapper from "./Wrapper";
import Photo from "../../public/photo.png";
import Slideright from "./Slideright";
import Button from "./Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-[100vh] lg:overflow-hidden">
      <Navbar />
      {/* Home page */}
      <Wrapper>
        <div className="h-full lg:pt-0 gap-3 lg:gap-0 flex px-24 justify-center items-center lg:flex-row flex-col lg:justify-between">
          <div className="left mb-16 lg:mb-0 px-5 lg:px-0 flex lg:w-[49%] order-2 lg:order-1 w-[100vw] flex-col gap-4">
            <h2 className="space-y-3 text-center lg:text-left text-main font-bold">
              <p className="text-xl lg:text-2xl">i'm</p>
              <p className="lg:text-5xl text-3xl">Shahriar Ridom</p>
            </h2>
            <h2 className="lg:text-5xl text-3xl text-center lg:text-left text-main font-bold">
              a <span className="text-primary font-bold">web developer</span>
            </h2>
            <p className="text-gray-700 text-sm text-center lg:text-left lg:text-lg">
              Experienced web developer with a strong focus on React JS, Next
              JS, and Tailwindcss. Proven ability to build high-quality,
              scalable, and user-friendly web applications. Expertise in
              server-side rendering, static site generation, and responsive
              design.
            </p>
            <div className="lg:inline-flex flex lg:flex-row flex-col lg:self-start self-center gap-4">
              <Button exclass="lg:my-8 px-6 py-3 text-white bg-primary text-base self-center lg:self-start hover:bg-opacity-90">
                Hire Me
              </Button>
              <Link href="/projects">
                <Button exclass="lg:my-8 px-6 py-3 text-white bg-main text-base self-center lg:self-start hover:bg-opacity-90">
                  Browse Projects
                </Button>
              </Link>
            </div>
          </div>
          <div className="right mt-10 lg:w-[49%] flex items-center justify-center -z-50 lg:mb-40 lg:ml-14 order-1 lg:order-2 w-[100vw]">
            <Slideright>
              <Image
                className="w-80 lg:w-full"
                src={Photo}
                width={450}
                height={450}
                alt="Myself"
              />
            </Slideright>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
