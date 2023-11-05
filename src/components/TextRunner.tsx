"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

const TextRunner = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["coming soon", "stay tuned"],
    loop: true,
    delaySpeed: 3000,
    deleteSpeed: 50,
  });
  return (
    <div>
      <span>{text}</span>
      <Cursor cursorStyle="." cursorColor="#C76988" cursorBlinking={true} />
    </div>
  );
};

export default TextRunner;
