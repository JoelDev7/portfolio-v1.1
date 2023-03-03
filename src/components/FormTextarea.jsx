export default function FormTextarea({ id, title }) {
  return (
    <div className="flex flex-col mb-10 col-span-2">
      <label htmlFor={id} className={"font-light mb-2"}>
        {title}
      </label>
      <textarea
        id={`textarea${id}`}
        name={id}
        className="w-full h-32 bg-op_0 border rounded-sm border-white_op_70 text-lg px-2 py-1"
      ></textarea>
    </div>
  );
}
