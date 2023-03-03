import SectionTitle from "../components/SectionTitle";

export default function About() {
  return (
    <section className="w-3/5 mx-auto pb-[30vh]">
      <SectionTitle title={"About"} />
      <p className="text-[24px] font-light leading-[30pt] mb-[30pt]">
        I’m passionate about creating intuitive and visually appealing user
        experiences, design is another of my main interest, and I’m working on
        expanding my knowledge to add it as a complementary skill.
      </p>
      <p className="text-[24px] font-light">
        My goal is to build applications that besides looking good, also have
        great performance and scalability.
      </p>
    </section>
  );
}
