import reactIcon from "../assets/react-icon.svg";
import tailwindIcon from "../assets/tailwind-icon.svg";
import reactHookFormIcon from "../assets/react-hook-form-icon.svg";
import figmaIcon from "../assets/figma-icon.svg";

export const projectsInfo = [
  {
    title: "portfolio-v1.1",
    content: ["My current portfolio with updated design and content."],
    stack: [
      { name: "Tailwind CSS", icon: tailwindIcon },
      { name: "React", icon: reactIcon },
      { name: "React Hook Form", icon: reactHookFormIcon },
    ],
  },
  {
    title: "Registration form",
    content: ["A responsive registration form."],
    stack: [
      { name: "Tailwind CSS", icon: tailwindIcon },
      { name: "React", icon: reactIcon },
      { name: "React Hook Form", icon: reactHookFormIcon },
    ],
  },
  {
    title: "Not just a pomodoro",
    content: ["A task list manager combined with a pomodoro timer."],
    stack: [{ name: "Figma", icon: figmaIcon }],
  },
];
