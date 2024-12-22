import React, { useState } from "react";
import Texts from "../Texts";
import { AnimatePresence, motion } from "framer-motion";

const Faq: React.FC = () => {
  // const [isActive, setIsActive] = useState<boolean>(false);
  const [getId, setGetId] = useState<string | number>("");

  const [faqs] = useState([
    {
      id: 1,
      question: "How is IC-IMPACT different from other mentorship programs?",
      answer:
        "IC-IMPACT stands out by integrating spiritual guidance, skill development, and financial empowerment in a structured and faith-centered approach",
      isOpen: false,
    },
    {
      id: 2,
      question:
        "What is the difference between the InnerCircle and the Circle of Impact??",
      answer:
        "IC-Impact directly takes charge of all that concerns a member  while the circle of impact is the outer layer of the innercircle members",
      isOpen: false,
    },
    {
      id: 3,
      question: "How do I join the IC-IMPACT program?",
      answer:
        "Send us a message with all requested details and we'll respond accordingly.",
      isOpen: false,
    },
    {
      id: 4,
      question: "What is the cost of Joining either of the two communities?",
      answer: "The cost is $100 for the InnerCircle and $50 for the Circle of",
      isOpen: false,
    },
    {
      id: 5,
      question: "HWho can Join IC-IMPACT Community?",
      answer: "Anybody can join either of the  two communities.",
      isOpen: false,
    },
  ]);

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center bg-greyish">
      <div>
        <div>
          <h2 className="scroll-m-20 text-[35px] text-center font-semibold tracking-tight first:mt-0">
            {" "}
            FAQs
          </h2>
        </div>
        <div className="!bg-white max-w-[550px] min-[680px]:w-[550px] max-[680px]:w-[90%] mx-auto flex flex-col items-center justify-center mt-[20px] pt-[40px] pb-[60px] rounded-[20px]">
          <ul className="flex flex-col items-start justify-center w-full gap-2">
            {faqs.map((faq, index: number) => (
              <li className="w-full" key={faq.id}>
                <div className="w-[85%] mx-auto ">
                  <Texts
                    className={`w-full mx-auto rounded-[7px] py-3 px-3 cursor-pointer ${
                      getId === index + 1
                        ? "bg-cyanish text-white"
                        : "bg-greyish"
                    }`}
                    onClick={() => setGetId(getId === index + 1 ? "" : faq?.id)}
                  >
                    <span>{faq.question}</span>
                  </Texts>
                  <AnimatePresence>
                    {getId === index + 1 && (
                      <motion.div
                        layout
                        className="w-full border border-black/40 rounded-bl-[10px] rounded-br-[10px] px-4 bg-white overflow-hidden"
                        initial={{ opacity: 0, maxHeight: 0 }}
                        animate={{
                          opacity: 1,
                          width: "100%",
                          maxHeight: 200,
                        }}
                        exit={{ opacity: 0, maxHeight: 0 }}
                        transition={{ duration: 0.8 }}
                      >
                        <Texts className="w-[100%] mx-auto py-4">
                          {faq.answer}
                        </Texts>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Faq;
