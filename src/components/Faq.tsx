import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import TypingAnimation from "@/components/TextAnimation/TextType";

const accordionData = [
  {
    id: "item-1",
    question: "Is it accessible?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: "item-2",
    question: "Is it styled?",
    answer:
      "Yes. It comes with default styles that match the other components' aesthetic.",
  },
  {
    id: "item-3",
    question: "Is it animated?",
    answer:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
];

export default function FAQ() {
  return (
    <Accordion
      type="single"
      collapsible
      className="xl:mx-40 md:mx-20 mx-10 my-20 mb-28"
    >
      <h1 className="select-none text-3xl md:text-4xl font-poppinsB py-5">
        <TypingAnimation message="FAQ's" />
      </h1>
      {accordionData.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger className="text-lg font-poppinsSB tracking-wide">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="font-poppinsR">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
