import { motion } from "framer-motion";

const Section = (props) => {
  const { children } = props;

  return (
    <motion.section
      className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start 
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: 0.5,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <Section><h1></h1></Section>
      <Section><h1></h1></Section>
      <SkillsSection />
      <Section><h1></h1></Section>
      <AboutSection/>
      <Section><h1></h1></Section>
      <ContactSection />
    </div>
  );
};

const projects = [
  {
    title: "Construction Dashboard",
    level: 90,
  },
  {
    title: "Youtube Clone",
    level: 70,
  },
  {
    title: "Sign Language Detector",
    level: 60,
  },
  {
    title: "Spam message Classifier",
    level: 80,
  },
  {
    title: "Hand Gesture Volume Control",
    level: 50,
  },
];
const hobbies = [
  {
    title: "Body Building",
    level: 100,
  },
  {
    title: "Swimming",
    level: 30,
  },
  {
    title: "Eating",
    level: 50,
  },
];

const AboutSection = () => {
  return (
    <Section>
      <Section>
      <motion.div whileInView={"visible"} className="m-10 pt-5">
        <h2 className="text-5xl font-bold  text-gray-100">Projects</h2>
        <div className=" mt-8 space-y-4">
          {projects.map((skill, index) => (
            <div className="w-64" key={index}>
              <motion.h3
                className="text-xl font-bold text-gray-100"
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
              >
                {skill.title}
              </motion.h3>
              <div className="h-2 w-full bg-gray-400 rounded-full mt-2">
                <motion.div
                  className="h-full bg-indigo-500 rounded-full "
                  style={{ width: `${skill.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-5xl font-bold mt-10  text-gray-100">Hobbies</h2>
          <div className=" mt-8 space-y-4">
            {hobbies.map((lng, index) => (
              <div className="w-64" key={index}>
                <motion.h3
                  className="text-xl font-bold text-gray-100"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 2 + index * 0.2,
                      },
                    },
                  }}
                >
                  {lng.title}
                </motion.h3>
                <div className="h-2 w-full bg-gray-400 rounded-full mt-2">
                  <motion.div
                    className="h-full bg-indigo-500 rounded-full "
                    style={{ width: `${lng.level}%` }}
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: 2 + index * 0.2,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
    </Section>
  );
};

const skills = [
  {
    title: "Threejs / React Three Fiber",
    level: 60,
  },
  {
    title: "React",
    level: 80,
  },
  {
    title: "Machine Learning",
    level: 90,
  },
  {
    title: "Data Structures",
    level: 60,
  },
  {
    title: "Computer Vision",
    level: 40,
  },
];
const languages = [
  {
    title: "SIH 2023 Winner",
    level: 100,
  },
  {
    title: "Machine Leaning | Udemy",
    level: 80,
  },
  {
    title: "Data Structures | Codehelp",
    level: 20,
  },
];

const SkillsSection = () => {
  return (
    <Section>
      <motion.div whileInView={"visible"} className="m-10 pt-5">
        <h2 className="text-5xl font-bold  text-gray-100">Skills</h2>
        <div className=" mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-64" key={index}>
              <motion.h3
                className="text-xl font-bold text-gray-100"
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
              >
                {skill.title}
              </motion.h3>
              <div className="h-2 w-full bg-gray-400 rounded-full mt-2">
                <motion.div
                  className="h-full bg-indigo-500 rounded-full "
                  style={{ width: `${skill.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-5xl font-bold mt-10  text-gray-100">Certificates</h2>
          <div className=" mt-8 space-y-4">
            {languages.map((lng, index) => (
              <div className="w-64" key={index}>
                <motion.h3
                  className="text-xl font-bold text-gray-100"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 2 + index * 0.2,
                      },
                    },
                  }}
                >
                  {lng.title}
                </motion.h3>
                <div className="h-2 w-full bg-gray-400 rounded-full mt-2">
                  <motion.div
                    className="h-full bg-indigo-500 rounded-full "
                    style={{ width: `${lng.level}%` }}
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: 2 + index * 0.2,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

const ContactSection = () => {
  return (
    <Section>
      <motion.h2 className="text-5xl font-bold  text-gray-100"
      initial={{
        opacity:0,
        y:50
      }}
      whileInView={{
        opacity:1,
        y:0
      }}
      transition={{
        duration:1,
        delay:0.5
      }}
      >Contact me</motion.h2>
      <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full">
        <motion.form
        initial={{
            opacity:0,
            y:25
          }}
          whileInView={{
            opacity:1,
            y:0
          }}
          transition={{
            duration:1,
            delay:1
          }}
            >
          <label for="name" className="font-medium text-gray-900 block mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <label
            for="email"
            className="font-medium text-gray-900 block mb-1 mt-8"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <label
            for="email"
            className="font-medium text-gray-900 block mb-1 mt-8"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <button className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 ">
            Submit
          </button>
        </motion.form>
      </div>
    </Section>
  );
};

export default Interface;