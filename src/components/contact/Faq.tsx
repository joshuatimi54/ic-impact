import React, { useState } from 'react';
import Texts from '../Texts';
import { AnimatePresence, motion } from 'framer-motion';

const Faq: React.FC = () => {
  // const [isActive, setIsActive] = useState<boolean>(false);
  const [getId, setGetId] = useState<string | number>('');

  const [faqs] = useState([
    {
      id: 1,
      question: 'How is IC-IMPACT different from other mentorship programs?',
      answer:
        'IC-IMPACT combines spiritual guidance, purpose discovery, and financial empowerment in a structured and faith-centered approach.',
      isOpen: false,
    },
    {
      id: 2,
      question:
        'What is the difference between the InnerCircle and the Circle of Impact??',
      answer:
        'The InnerCircle is a smaller group of 20 members who receive intensive, personalized mentorship, while the Circle of Impact is a larger community of 500 members engaged in broader training and resources.',
      isOpen: false,
    },
    {
      id: 3,
      question: 'How do I join the IC-IMPACT program?',
      answer:
        ' Selection for the InnerCircle is based on fairness and merit on the submitted form. To increase your chances, carefully complete the sign-up form, as we prioritize applicants who demonstrate a strong need for mentorship and growth.',
      answerTwo:
        'If you’re not selected for the InnerCircle, don’t worry—you’ll still be part of the larger Circle of Impact Community. By staying active and engaged, you can improve your chances for the next intake. In fact, the top 5 most active members of the Circle of Impact Community automatically qualify for the InnerCircle in the following enrollment cycle.',
      isOpen: false,
    },
    {
      id: 4,
      question: 'What is the cost of Joining either of the two communities?',
      answer:
        'Both Communities are entirely FREE, infact the Citizens of Inner Circle of Impact Community enjoy Free Financial Empowerment.',
      isOpen: false,
    },
    {
      id: 5,
      question: 'Who can Join IC-IMPACT Community?',
      answer:
        'The community is open to individuals aged 12 to 30 who are eager to grow spiritually, develop their skills, and make an impact in their lives and society.',
      isOpen: false,
    },
  ]);

  return (
    <div className="min-[1800px]:min-h-[60vh] max-[1800px]:min-h-[80vh] flex flex-col items-center justify-center bg-greyish">
      <div>
        <div>
          <h2 className="scroll-m-20 text-[35px] text-center font-semibold tracking-tight first:mt-0">
            {' '}
            FAQs
          </h2>
        </div>
        <div className="bg-white mb-[50px] max-w-[550px] min-[680px]:w-[550px] max-[680px]:w-[90%] mx-auto flex flex-col items-center justify-center mt-[20px] pt-[40px] pb-[60px] rounded-[20px]">
          <ul className="flex flex-col items-start justify-center w-full gap-2">
            {faqs.map((faq, index: number) => (
              <li className="w-full" key={faq.id}>
                <div className="w-[85%] mx-auto ">
                  <Texts
                    className={`w-full mx-auto rounded-[7px] py-3 px-3 cursor-pointer ${
                      getId === index + 1 ? 'bg-cyanish text-white' : 'bg-greyish'
                    }`}
                    onClick={() => setGetId(getId === index + 1 ? '' : faq?.id)}
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
                          width: '100%',
                          maxHeight: 300,
                        }}
                        exit={{ opacity: 0, maxHeight: 0 }}
                        transition={{ duration: 0.8 }}
                      >
                        <Texts className="w-[100%] mx-auto py-4">{faq.answer}</Texts>
                        {faq.answerTwo && (
                          <Texts className="w-[100%] mx-auto ">{faq.answerTwo}</Texts>
                        )}
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
