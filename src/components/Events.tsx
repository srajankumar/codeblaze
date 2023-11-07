import EventCard from "@/components/Card";
import TypingAnimation from "@/components/TextAnimation/TextType";

const Events = () => {
  const cardData = [
    {
      title: "UI Battles",
      description:
        "A thrilling web-based challenge that will put your design and coding skills to the test. Participate in this competition to showcase compelling UI using front-end development frameworks.",
      imageSrc: "ui-battles.webp",
      register: "",
      rule: "",
    },

    {
      title: "Code Quest",
      description:
        "Armour up with all your coding gear for a showdown in this time-bound quest to test your coding skills. Prepare to face coding challenges and take down your opponents to emerge victorious and claim exclusive prizes.",
      imageSrc: "code-quest.webp",
      register: "",
      rule: "",
    },

    {
      title: "Blind Bytes",
      description:
        "Gear up to test your coding intuition. This exclusive challenge provides an opportunity to enhance precision, logical thinking, and time-management skills, all without relying on sight.",
      imageSrc: "blindb.png",
      register: "",
      rule: "",
    },

    {
      title: "Tech-Maze",
      description:
        "Dive into a high-tech adventure in this race against time to Navigate through puzzles and tackle tech-themed challenges which will present you with the key to escape the maze.",
      imageSrc: "techmaze.png",
      register: "",
      rule: "",
    },

    {
      title: "Open Source Fiesta",
      description:
        "Delve into the world of open source, contribute to projects and learn from the community. Prepare to enhance your coding skills- one pull request at a time.",
      imageSrc: "open-source.png",
      register: "",
      rule: "",
    },

    {
      title: "The Wolf of Dalal Street",
      description:
        "Step into the world of financial markets and showcase your trading skills, learn, and compete with like-minded individuals, to claim the prestigious title of 'Wolf of Dalal Street'  and exclusive prizes.",
      imageSrc: "wolf.png",
      register: "",
      rule: "",
    },

    {
      title: "DeCode",
      description:
        "Suit up for this race to the finish line, by solving security-related challenges and capture virtual 'flags' to claim an exciting slew of prizes waiting at the finish line.",
      imageSrc: "decode.png",
      register: "",
      rule: "",
    },

    {
      title: "The Pitchers",
      description:
        "Unveil your groundbreaking ideas, gain exposure, and compete for a place in the future of technology and entrepreneurship in this 'Tech Startup Pitching' competition.",
      imageSrc: "ui-battles.webp",
      register: "",
      rule: "",
    },

    {
      title: "E-Games",
      description:
        "Compete for glory (and prizes) and experience the thrill of victory in these exciting games that need no introduction.",
      imageSrc: "firepower.png",
      register: "",
      rule: "",
    },

    {
      title: "Aerophilia",
      description:
        "Aerophilia, a national tech fest, features Aeromodelling, Drone racing, RC Bots, and fun activities to inspire and educate young minds in technology for national development.",
      imageSrc: "aerophilia.png",
      register: "https://aerophilia.in/",
      rule: "",
    },
  ];
  return (
    <div className="py-10 px-2 md:px-0">
      <h1 className="px-4 select-none text-3xl md:text-4xl font-poppinsB py-5">
        <TypingAnimation message="Other Events" />
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 md:justify-start justify-center w-fit">
        {cardData.map((data, index) => (
          <EventCard
            key={index}
            title={data.title}
            description={data.description}
            imageSrc={data.imageSrc}
            register={data.register}
            rule={data.rule}
          />
        ))}
      </div>
    </div>
  );
};

export default Events;
