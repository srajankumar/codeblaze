import Card from "@/components/Card";
import TypingAnimation from "@/components/TextAnimation/TextType";

const Events = () => {
  const cardData = [
    {
      title: "UI Battles",
      description:
        "Hello, coders! Get ready for an exhilarating challenge that resonates with your web development enthusiasm. Introducing UI Battles - Code the Logic & Page Cloning Challenge, where your core coding skills face the ultimate test. Compete for a chance to win a ₹10,000 prize pool!",
      imageSrc: "/og.png",
      register: "https://www.sosc.org.in/",
    },
    {
      title: "Code Quest",
      description:
        "Want to show off your coding skills? Then you have come to the right place. Here you can show your skills by completing the given challenges. Face against your peers to test your current level. Make sure to keep your foundations of coding skills strong. Winners of the competition will be awarded prizes worth ₹10,000/-",
      imageSrc: "/og.png",
      register: "https://www.sosc.org.in/",
    },
    {
      title: "E-Games",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit eveniet unde explicabo voluptates cum. Nulla omnis reiciendis asperiores illum odit laboriosam consequatur cumque velit non sapiente, quae ad porro perspiciatis.",
      imageSrc: "/og.png",
      register: "https://www.sosc.org.in/",
    },
    {
      title: "Open Source Fiesta",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit eveniet unde explicabo voluptates cum. Nulla omnis reiciendis asperiores illum odit laboriosam consequatur cumque velit non sapiente, quae ad porro perspiciatis.",
      imageSrc: "/og.png",
      register: "https://www.sosc.org.in/",
    },
    {
      title: "DeCode",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit eveniet unde explicabo voluptates cum. Nulla omnis reiciendis asperiores illum odit laboriosam consequatur cumque velit non sapiente, quae ad porro perspiciatis.",
      imageSrc: "/og.png",
      register: "https://www.sosc.org.in/",
    },
    {
      title: "Techmaze",
      description:
        "Are you ready for the ultimate tech-infused escape room challenge? Test your problem-solving and teamwork skills in our immersive Escape Room Tech Challenge! Dive into a high-tech adventure and race against the clock to escape and win amazing prizes.",
      imageSrc: "/og.png",
      register: "https://www.sosc.org.in/",
    },
    {
      title: "The Wolf of Dalal Street",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit eveniet unde explicabo voluptates cum. Nulla omnis reiciendis asperiores illum odit laboriosam consequatur cumque velit non sapiente, quae ad porro perspiciatis.",
      imageSrc: "/og.png",
      register: "https://www.sosc.org.in/",
    },
    {
      title: "Blind Bytes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit eveniet unde explicabo voluptates cum. Nulla omnis reiciendis asperiores illum odit laboriosam consequatur cumque velit non sapiente, quae ad porro perspiciatis.",
      imageSrc: "/og.png",
      register: "https://www.sosc.org.in/",
    },
    {
      title: "The Pitchers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit eveniet unde explicabo voluptates cum. Nulla omnis reiciendis asperiores illum odit laboriosam consequatur cumque velit non sapiente, quae ad porro perspiciatis.",
      imageSrc: "/og.png",
      register: "https://www.sosc.org.in/",
    },
  ];
  return (
    <div className="py-10 px-2 md:px-0">
      <h1 className="px-4 text-3xl md:text-4xl font-bold py-5">
        <TypingAnimation message="Other Events" />
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 md:justify-start justify-center w-fit">
        {cardData.map((data, index) => (
          <Card
            key={index}
            title={data.title}
            description={data.description}
            imageSrc={data.imageSrc}
            register={data.register}
          />
        ))}
      </div>
    </div>
  );
};

export default Events;
