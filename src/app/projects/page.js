import React from "react";
import Wrapper from "../Wrapper";
import Navbar from "../Navbar";
import Card from "../Card";
import { BiLogoGithub } from "react-icons/bi";
import Button from "../Button";
import Image from "next/image";

export default function page() {
  const projects = [
    {
      image: "/projects/pro1.png",
      title: "Simple Login Page",
      visit: "https://gglogintp.netlify.app",
      github: "https://github.com/ggtech360/transparent-loginpage",
    },
    {
      image: "/projects/pro2.png",
      title: "Simple Working Weather App",
      visit: "https://weatherlookgg.netlify.app",
      github: "https://github.com/ggtech360/weather-app",
    },
    {
      image: "/projects/pro3.png",
      title: "Another Login Page Design",
      visit: "https://anloginpage.netlify.app",
      github: "https://github.com/ggtech360/anotherloginpage",
    },
    {
      image: "/projects/pro4.png",
      title: "Transparent Login Page",
      visit: "https://tploginpage2.netlify.app",
      github: "https://github.com/ggtech360/transparent-login-page-2.0",
    },
    {
      image: "/projects/pro5.png",
      title: "Text Utils App",
      visit: "https://ggtextformat.netlify.app",
      github: "https://github.com/ggtech360/Text-Utils-in-React",
    },
  ];

  return (
    <div className="lg:overflow-hidden">
      <Navbar />
      <Wrapper>
        <div>
          <div className="mt-10">
            <h2 className="text-primary text-2xl lg:text-4xl font-bold text-center">
              Projects That I've made
            </h2>
          </div>
          <div className="grid place-items-center my-14 grid-auto-fit mx-10 gap-8">
            {projects.map((project) => (
              <Card key={project.image}>
                <div className="relative space-y-2 w-fit">
                  <div className="image rounded-md overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={400}
                      className="w-80 transition-all duration-200 ease-in-out hover:scale-110"
                    />
                  </div>
                  <div className="info space-y-2">
                    <p className="text-main font-medium">{project.title}</p>
                    <div className="link flex items-center justify-between px-2">
                      <Button exclass="border-primary hover:bg-primary hover:text-white transition-all ease-linear border-2 text-main py-2 px-10">
                        <a
                          href={project.visit}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit
                        </a>
                      </Button>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all duration-200 ease-in-out hover:scale-110 hover:shadow-md rounded-full"
                      >
                        <BiLogoGithub className="text-3xl" />
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
