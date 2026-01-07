import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { Header } from "../atoms/Header";
import { config } from "../../constants/config";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import SpotlightCard  from "../canvas/spotlight";

const Tech = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 12,
        },
        },
    };

  return (
    <>
        <Header useMotion={true} {...config.sections.toolstechnologies} />

        <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
        >
        {config.sections.toolstechnologies.content}
      </motion.p>
      <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {technologies.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <SpotlightCard className="bg-card rounded-lg p-6 shadow-sm border-[1px] border-white/10 backdrop-blur-sm transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                    <motion.div
                        className="p-2 bg-primary/10 text-primary rounded-md"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        {/* Render the icon as a component with proper props */}
                        {/* <category.icon className="h-5 w-5" /> */}
                    </motion.div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                    </div>
                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      className="inline-block px-3 py-1 bg-background border border-white/10 rounded-full text-sm"
                      whileHover="hovered"
                      variants={{
                        hovered: { scale: 1.05, backgroundColor: "rgba(var(--primary), 0.05)" },
                        initial: { scale: 1, backgroundColor: "transparent" },
                      }}
                      initial="initial"
                      animate="initial"
                      whileTap={{ scale: 0.98 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");