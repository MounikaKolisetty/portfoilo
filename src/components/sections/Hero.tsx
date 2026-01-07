import { styles } from "../../constants/styles";
import { config } from "../../constants/config";
import { github } from "../../assets";
import { instagram } from "../../assets";
import { linkedin } from "../../assets";

const Hero = () => {
  return (
    <section className={`relative mx-auto h-screen w-full`}>
      <div
        className={`absolute inset-0 top-[270px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">{config.hero.name}</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            {config.hero.p[0]} <br className="hidden sm:block" />
            {config.hero.p[1]}
          </p>
          <div className="flex gap-6 mt-8">
            <div
                onClick={() => window.open(config.hero.sourceCodeLink[0], "_blank")}
                className="cursor-pointer items-center justify-center rounded-full"
              >
              <img
                src={instagram}
                alt="instagram"
                className="h-12 w-12 bg-white p-1 rounded object-contain"
              />
            </div>
            <div
                onClick={() => window.open(config.hero.sourceCodeLink[1], "_blank")}
                className="cursor-pointer items-center justify-center rounded-full"
              >
              <img
                src={github}
                alt="github"
                className="h-12 w-12 object-contain"
              />
            </div>
            <div
                onClick={() => window.open(config.hero.sourceCodeLink[2], "_blank")}
                className="cursor-pointer items-center justify-center rounded-full"
              >
              <img
                src={linkedin}
                alt="linkedin"
                className="h-12 w-12 bg-white p-1 rounded object-contain"
              />
            </div>
          </div>
          <a
            href="/Lakshmi_Mounika_Kolisetty_Resume.pdf"
            download
            className="bg-[#915EFF] shadow-primary w-fit rounded-xl px-20 py-3 font-bold text-white shadow-md outline-none mt-8 inline-block"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
