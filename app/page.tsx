"use client";
import AOS from "aos";
import { exploreImages, socialHandles } from "@/constant";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="w-full bg-[#01ff02]/5 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-6xl mx-auto w-full p-3 lg:p-5">
        <div
          data-aos="zoom-in"
          className="bg-[#18f878]/10 rounded-t-3xl p-1.5 lg:p-5 relative"
        >
          <Image
            src="/lab.jpg"
            width={600}
            height={500}
            alt="drunken lab"
            className="w-full rounded-t-3xl border border-[#01ff02] h-[250px] sm:h-[350px] lg:h-[500px]"
          />
          <div className="absolute inset-x-0 mx-auto w-24 h-24 sm:w-32 sm:h-32 rounded-full -bottom-12 sm:-bottom-16 border-4 border-[#01ff02]/80 overflow-hidden">
            <Image
              src="/duck.jpg"
              width={150}
              height={150}
              alt="drunken duck"
              className="object-cover rounded-full"
            />
          </div>
        </div>
        <div className="mt-24 text-center space-y-3">
          <h2 className="uppercase font-semibold text-xl sm:text-2xl pt-2">
            The Drunken Laboratory
          </h2>
          <p className="w-full text-sm sm:text-base max-w-xl mx-auto">
            The Drunken Laboratory is an immersive experience where guests
            transform into scientists, conduct experiments, compete in thrilling
            contests, party with a DJ, and of course, enjoy delicious drinks!
          </p>
        </div>
        <ul
          data-aos="zoom-in-down"
          className="flex items-center justify-center flex-wrap gap-3 my-5"
        >
          {socialHandles.map((social) => (
            <li
              key={social.name}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full p-2 bg-[#01ff02]/20 hover:bg-[#01ff02]/70"
            >
              <a href={social.href}>
                <Image
                  src={social.img}
                  width={40}
                  height={40}
                  alt={social.name}
                  className="object-contain"
                />
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <h2 className="uppercase font-semibold text-center text-lg sm:text-xl pt-2">
            Explore
          </h2>
          <div className="w-full grid sm:grid-cols-2 mt-5 gap-5">
            {exploreImages.map((img, index) => (
              <div
                data-aos={index % 2 === 0 ? "flip-left" : "flip-right"}
                key={index}
                className="w-full"
              >
                <Image
                  src={img}
                  width={500}
                  height={500}
                  alt="Explore images"
                  className="rounded-xl object-cover h-[300px] sm:h-[400px] w-full"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 md:flex items-center">
          <div className="w-full flex flex-col items-center justify-center space-y-3 text-center">
            <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold uppercase">
              BirthDay Coming Up?
            </h3>
            <p className="text-sm sm:text-base pt-2 max-w-md mx-auto">
              Leave the birthday plan to us, and get ready to celebrate WILDLY
              at The Drunken Lab - the ULTIMATE BIRTHDAY PARTY
            </p>
            <button className="py-2 px-5 bg-[#01ff02]/50 hover:bg-[#01ff02]/30 rounded">
              Book Now!
            </button>
          </div>
          <Image
            src="/birthday.jpg"
            width={500}
            height={500}
            alt="Birthday"
            className="w-full lg:w-[2/3] h-[450px] object-fit rounded-2xl mt-5"
          />
        </div>
      </div>
      <footer>
        <p className="text-center p-5">@ DrunkenLab 2024</p>
      </footer>
    </main>
  );
}
