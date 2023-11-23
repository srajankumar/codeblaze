import EventCard from "@/components/Card";
import TypingAnimation from "@/components/TextAnimation/TextType";

const Events = () => {
  const cardData = [
    {
      collab_name: "Babith",
      collab_phone: "8971206807",
      coordinator_name: "Srajan",
      coordinator_phone: "8050215589",
      title: "UI Battles",
      description:
        "A thrilling web-based challenge that will put your design and coding skills to the test. Participate in this competition to showcase a compelling UI using HTML, CSS, JavaScript and / or other CSS Libraries.",
      imageSrc: "ui-battles.webp",
      register: "https://aerophilia.in/events",
      rule: "ui-battles.pdf",
      sentence:
        "The registration button will redirect to the Aerophilia website. Please register for this event there.",
      link: "",
      date: "8th Dec",
      time: "01:30 - 03:00 PM",
    },

    {
      collab_name: "Anudeep KK",
      collab_phone: "8762339086",
      coordinator_name: "Sankshipth",
      coordinator_phone: "6362531671",
      title: "Code Quest",
      description:
        "Armour up with all your coding gear for a showdown in this time-bound quest to test your coding skills. Prepare to face coding challenges and take down your opponents to emerge victorious and claim exclusive prizes.",
      imageSrc: "code-quest.webp",
      register: "https://aerophilia.in/events",
      rule: "code-quest.pdf",
      sentence:
        "The registration button will redirect to the Aerophilia website. Please register for this event there.",

      link: "",
      date: "9th Dec",
      time: "09:30 - 12:30 PM",
    },

    {
      collab_name: "",
      collab_phone: "",
      coordinator_name: "Toshan",
      coordinator_phone: "8549039062",
      title: "Firepower",
      description:
        "Join our Valorant Offline Tournament for top-tier gameplay, strategic brilliance, and the chance to win incredible prizes! Experience intense competition, unexpected comebacks, and the thrill of victory!",
      imageSrc: "firepower.png",
      register: "https://aerophilia.in/events",
      rule: "firepower.pdf",
      sentence:
        "The registration button will redirect to the Aerophilia website. Please register for this event there.",
      link: "",
      date: "8th - 9th Dec",
      time: "",
    },

    {
      coordinator_name: "Hamshini",
      coordinator_phone: "8970625725",
      collab_name: "",
      collab_phone: "",
      title: "Tech-Maze",
      description:
        "Dive into a high-tech adventure in this race against time to Navigate through puzzles and tackle tech-themed challenges which will present you with the key to escape the maze.",
      imageSrc: "techmaze.png",
      // register: "https://sankalp.sosc.org.in/events/tech-maze",
      register: "",
      rule: "tech-maze.pdf",
      sentence: "",
      link: "",
      date: "8th Dec",
      time: "11:30 - 01:00 PM",
    },

    {
      coordinator_name: "Akkil M G",
      coordinator_phone: "8762205219",
      collab_name: "Rishabh Laxmikanth",
      collab_phone: "7204783161",
      title: "Blind Bytes",
      description:
        "Gear up to test your coding intuition. This exclusive challenge provides an opportunity to enhance precision, logical thinking, and time-management skills, all without relying on sight.",
      imageSrc: "blindb.png",
      // register: "https://sankalp.sosc.org.in/events/blind-bytes",
      register: "",
      rule: "blind-bytes.pdf",
      sentence: "",
      link: "",
      date: "8th Dec",
      time: "02:45 - 04:00 PM",
    },

    {
      coordinator_name: "Tejas GK",
      coordinator_phone: "9480987928",
      collab_name: "",
      collab_phone: "",
      title: "Open Source Fiesta",
      description:
        "Delve into the world of open source, contribute to projects and learn from the community. Prepare to enhance your coding skills- one pull request at a time.",
      imageSrc: "open-source.png",
      // register: "https://sankalp.sosc.org.in/events/open-source-fiesta",
      register: "",
      rule: "open-source-fiesta.pdf",
      sentence: "",
      link: "",
      date: "6th - 9th Dec",
      time: "",
    },

    {
      coordinator_name: "Achal",
      coordinator_phone: "9480933652",
      collab_name: "",
      collab_phone: "",
      title: "The Wolf of Dalal Street",
      description:
        "Step into the world of financial markets and showcase your trading skills, learn, and compete with like-minded individuals, to claim the prestigious title of 'Wolf of Dalal Street'  and exclusive prizes.",
      imageSrc: "wolf-of-dalal-street.jpg",
      // register: "https://sankalp.sosc.org.in/events/wolf-of-dalal-street",
      register: "",
      rule: "wolf-of-dalal-street.pdf",
      sentence: "",
      link: "",
      date: "7th - 8th Dec",
      time: "",
    },

    {
      coordinator_name: "Srujal",
      coordinator_phone: "8073386740",
      collab_name: "",
      collab_phone: "",
      title: "The Pitchers",
      description:
        "Unveil your groundbreaking ideas, gain exposure, and compete for a place in the future of technology and entrepreneurship in this 'Tech Startup Pitching' competition.",
      imageSrc: "pitchers.png",
      // register: "https://sankalp.sosc.org.in/events/the-pitchers",
      register: "",
      rule: "the-pitchers.pdf",
      sentence: "",
      link: "",
      date: "8th Dec",
      time: "12:00 - 01:00 PM",
    },

    {
      coordinator_name: "Sushruth",
      coordinator_phone: "7899372011",
      collab_name: "Rishab Bhudale",
      collab_phone: "8618579447",
      title: "DeCode",
      description:
        "Suit up for this race to the finish line, by solving security-related challenges and capture virtual 'flags' to claim an exciting slew of prizes waiting at the finish line.",
      imageSrc: "decode.png",
      // register: "https://sankalp.sosc.org.in/events/decode",
      register: "",
      rule: "decode.pdf",
      sentence: "",
      link: "",
      date: "9th Dec",
      time: "02:00 - 03:00 PM",
    },

    {
      coordinator_name: "",
      coordinator_phone: "",
      collab_name: "",
      collab_phone: "",
      title: "Aerophilia",
      description:
        "Aerophilia, a national tech fest, features Aeromodelling, Drone racing, RC Bots, and fun activities to inspire and educate young minds in technology for national development.",
      imageSrc: "aerophilia.png",
      register: "",
      rule: "",
      sentence:
        "Clicking on more events will redirect you to Aerophilia website.",
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
            coordinator_name={data.coordinator_name}
            coordinator_phone={data.coordinator_phone}
            description={data.description}
            imageSrc={data.imageSrc}
            register={data.register}
            rule={data.rule}
            link={data.link}
            date={data.date}
            time={data.time}
            sentence={data.sentence}
            collab_name={data.collab_name}
            collab_phone={data.collab_phone}
          />
        ))}
      </div>
    </div>
  );
};

export default Events;
