import EventCard from "@/components/Card";
import TypingAnimation from "@/components/TextAnimation/TextType";

const Events = () => {
  const cardData = [
    {
      title: "UI Battles",
      description:
        "A thrilling web-based challenge that will put your design and coding skills to the test. Participate in this competition to showcase compelling UI using HTML, CSS, JavaScript and / or other CSS Libraries.",
      imageSrc: "ui-battles.webp",
      register: "",
      rule: "",
      link: "",
      date: "8th Dec",
      time: "01:30 - 03:00 PM",
    },

    {
      title: "Tech-Maze",
      description:
        "Dive into a high-tech adventure in this race against time to Navigate through puzzles and tackle tech-themed challenges which will present you with the key to escape the maze.",
      imageSrc: "techmaze.png",
      register: "",
      rule: "",
      link: "",
      date: "8th Dec",
      time: "11:30 - 01:00 PM",
    },

    {
      title: "Blind Bytes",
      description:
        "Gear up to test your coding intuition. This exclusive challenge provides an opportunity to enhance precision, logical thinking, and time-management skills, all without relying on sight.",
      imageSrc: "blindb.png",
      register: "",
      rule: "",
      link: "",
      date: "8th Dec",
      time: "02:45 - 04:00 PM",
    },

    {
      title: "The Wolf of Dalal Street",
      description:
        "Step into the world of financial markets and showcase your trading skills, learn, and compete with like-minded individuals, to claim the prestigious title of 'Wolf of Dalal Street'  and exclusive prizes.",
      imageSrc: "wolf-of-dalal-street.jpg",
      register: "",
      rule: "",
      link: "",
      date: "7th - 8th Dec",
      time: "",
    },

    {
      title: "Open Source Fiesta",
      description:
        "Delve into the world of open source, contribute to projects and learn from the community. Prepare to enhance your coding skills- one pull request at a time.",
      imageSrc: "open-source.png",
      register: "",
      rule: "",
      link: "",
      date: "6th - 9th Dec",
      time: "",
    },

    {
      title: "Code Quest",
      description:
        "Armour up with all your coding gear for a showdown in this time-bound quest to test your coding skills. Prepare to face coding challenges and take down your opponents to emerge victorious and claim exclusive prizes.",
      imageSrc: "code-quest.webp",
      register: "",
      rule: "",
      link: "",
      date: "8th Dec",
      time: "09:30 - 12:30 PM",
    },

    {
      title: "DeCode",
      description:
        "Suit up for this race to the finish line, by solving security-related challenges and capture virtual 'flags' to claim an exciting slew of prizes waiting at the finish line.",
      imageSrc: "decode.png",
      register: "",
      rule: "",
      link: "",
      date: "9th Dec",
      time: "01:30 - 02:45 PM",
    },

    {
      title: "The Pitchers",
      description:
        "Unveil your groundbreaking ideas, gain exposure, and compete for a place in the future of technology and entrepreneurship in this 'Tech Startup Pitching' competition.",
      imageSrc: "pitchers.png",
      register: "",
      rule: "",
      link: "",
      date: "8th Dec",
      time: "9:30 - 10:30 AM",
    },

    {
      title: "Firepower",
      description:
        "Compete for glory (and prizes) and experience the thrill of victory in these exciting games that need no introduction.",
      imageSrc: "firepower.png",
      register: "",
      rule: "",
      link: "",
      date: "8th - 9th Dec",
      time: "",
    },

    {
      title: "Aerophilia",
      description:
        "Aerophilia, a national tech fest, features Aeromodelling, Drone racing, RC Bots, and fun activities to inspire and educate young minds in technology for national development.",
      imageSrc: "aerophilia.png",
      register: "",
      rule: "",
      link: "https://aerophilia.in/",
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
            link={data.link}
            date={data.date}
            time={data.time}
          />
        ))}
      </div>
    </div>
  );
};

export default Events;
