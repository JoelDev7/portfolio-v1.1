export default function ProjectCard({ title, content, stack }) {
  return (
    <li className="w-[330px] h-[420px] bg-white bg-opacity-[15%] pt-[45px] p-10 mx-3 rounded-sm flex flex-col justify-between">
      <div>
        <h3 className="font-bold text-[22px] mb-5">{title}</h3>
        <div className="font-light text-lg">
          <p>{content[0]}</p>
        </div>
      </div>
      <div className="flex">
        {stack.map((tech) => {
          return (
            <img
              src={tech.icon}
              alt={tech.name}
              className="h-5 mr-4"
              key={tech.name}
            />
          );
        })}
      </div>
    </li>
  );
}
