import FormInput from "../components/FormInput";

export default function ContactForm() {
  const formFields = {
    inputs: [
      { title: "First Name", type: "text" },
      { title: "Last Name", type: "text" },
      { title: "Email", type: "email", span: "col-span-2" },
    ],
    textarea: [{ title: "Message" }],
  };
  return (
    <form className="w-6/12 h-[80vh] mx-auto bg-white bg-opacity-[15%] rounded p-16">
      <div className="grid grid-cols-2 gap-x-10">
        {formFields.inputs.map((input) => {
          const inputId = input.title.replace(/ /g, "_");
          return <FormInput {...input} id={inputId} key={inputId} />;
        })}
      </div>
    </form>
  );
}
