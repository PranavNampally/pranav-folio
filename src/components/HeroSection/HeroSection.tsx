import Image from "next/image";
import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const HeroSection = () => {
  return (
    <div className="mx-4 my-16 flex flex-col gap-12">
      <Image src="" alt="" />

      <div className="flex flex-col gap-12 items-start">
        <div className="flex flex-col gap-2">
          <h1 className="m-0 text-gray-dark-900 text-4xl font-semibold">
            Hi, I'm Pranav
          </h1>
          <p className="m-0 text-gray-dark-600 text-base">
          I’m a passionate Software Developer with expertise in React.js, Next.js (and more...) committed to crafting high-quality solutions that elevate projects to new heights. With a relentless drive for innovation and a keen eye for detail, I'm ready to turn your ideas into impactful realities!
          </p>
        </div>
        <div className="flex flex-col gap-2 text-base text-gray-dark-600">
          <div className="flex gap-2 items-center">
            <PlaceIcon />
            <span>India</span>
          </div>
          <div className="flex gap-4 items-center ">
            <div className="relative p-2">
              <div className="pulsating-ring"></div>
              <div className="bg-emerald w-2 h-2 rounded-[50%] absolute left-2"></div>
            </div>
            <span className="pt-1.5">Open to explore</span>
          </div>
        </div>
        <div className="flex gap-2">
          <GitHubIcon />
          <LinkedInIcon />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
