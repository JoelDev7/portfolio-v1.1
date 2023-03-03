import ContactForm from "../components/ContactForm";
import SectionTitle from "../components/SectionTitle";

export default function Contact() {
  return (
    <section className="pb-10">
      <SectionTitle title={"Contact"} />
      <ContactForm />
    </section>
  );
}
