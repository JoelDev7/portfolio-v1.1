export default function FormInput({ id, title, type, span = "", register }) {
  return (
    <div className={`flex flex-col mb-10 ${span}`}>
      <label htmlFor={id} className="font-light mb-2">
        {title}
      </label>
      <input
        id={id}
        type={type}
        className="bg-white_op_0 w-full border rounded-sm border-white_op_70 text-lg px-2 py-1"
        {...register}
      />
    </div>
  );
}
