import TypingAnimation from "@/components/TextAnimation/TextType";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center py-10 px-2 md:px-0">
      <h1 className="px-4 text-3xl md:text-4xl font-bold py-5">
        <TypingAnimation message="About" />
      </h1>
      <div className="px-4 space-y-5 text-lg">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio optio,
          omnis neque quos reiciendis tenetur tempore quo? Aliquid at vel porro
          eius, alias doloribus deleniti ullam, quod enim pariatur nihil
          doloremque? Perferendis vel ipsum quibusdam ipsam facere dolor
          voluptas ab ut maiores provident corporis eius, aspernatur a maxime
          aliquid eaque veritatis rem. Perferendis modi aperiam aliquam quasi
          harum iste adipisci illo iure quaerat ea!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio optio,
          omnis neque quos reiciendis tenetur tempore quo? Aliquid at vel porro
          eius, alias doloribus deleniti ullam, quod enim pariatur nihil
          doloremque? Perferendis vel ipsum quibusdam ipsam facere dolor
          voluptas ab ut maiores provident corporis eius, aspernatur a maxime
          aliquid eaque veritatis rem. Perferendis modi aperiam aliquam quasi
          harum iste adipisci illo iure quaerat ea!
        </p>
      </div>
    </div>
  );
};

export default About;
