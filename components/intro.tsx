import { CMS_NAME } from "../lib/constants";

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        akshay<span className="text-[#9333ea]">.</span>
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Dive into the collection of articles, tutorials, and thoughts of{" "}
        <a
          href="https://akshaykp.in/"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          akshaykp.in
        </a>{" "}
      </h4>
    </section>
  );
};

export default Intro;
