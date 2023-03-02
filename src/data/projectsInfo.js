import react from "../assets/react-icon.svg";
import tailwind from "../assets/tailwind-icon.svg";
import reactHookForm from "../assets/react-hook-form-icon.svg";
import figma from "../assets/figma-icon.svg";

export const projectsInfo = [
  {
    title: "portfolio-v1.1",
    content: ["My current portfolio with updated design and content."],
    stack: [
      { name: "React", icon: react },
      { name: "Tailwind CSS", icon: tailwind },
      { name: "React Hook Form", icon: reactHookForm },
    ],
  },
  {
    title: "Registration form",
    content: ["A responsive registration form."],
    stack: [
      { name: "React", icon: react },
      { name: "Tailwind CSS", icon: tailwind },
      { name: "React Hook Form", icon: reactHookForm },
    ],
  },
  {
    title: "Not just a pomodoro",
    content: ["A task list manager combined with a pomodoro timer."],
    stack: [{ name: "Figma", icon: figma }],
  },
];
