import { Github, Instagram, Linkedin, Plus, Twitter } from "lucide-react";
import Button from "../ui/Button";

export default function UserCard() {
  const icons = [
    <Github />,
    <Instagram />,
    <Linkedin />,
    <Twitter />,
    <Plus />
  ]
  return (
    <div
      className="w-[348px] flex flex-col gap-5 items-center p-5 border border-white/10 bg-[#121212] rounded-3xl text-white"
    >
      <div className="size-48">
        <img
          className="w-full h-full object-cover rounded-full"
          src="https://avatars.githubusercontent.com/u/23002870?v=4"
          alt="John Everton"
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center gap-2">
          <h3 className="text-3xl font-bold min-w-0 overflow-hidden">
            John Everton
          </h3>
        </div>
        <p className="opacity-40">
          "Desenvolvedor Full Stack"
        </p>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <span className="uppercase text-xs font-medium">Links</span>
        <div className="flex gap-3">
          {icons.map((icon, index) => (
            <Button key={index} className="p-3 rounded-xl bg-[#1e1e1e] hover:bg-[#2e2e2e] transition-colors">
              {icon}
            </Button>
          ))}
        </div>
      </div>
        <div className="flex flex-col gap-3 w-full h-[172px]">
          <div className="w-full flex flex-col items-center gap-3">
            <Button className="w-full">Template SaaS - Compre Agora</Button>
            <Button className="p-3 rounded-xl bg-[#1e1e1e] hover:bg-[#2e2e2e] transition-colors">
              <Plus />
            </Button>
          </div>
        </div>
    </div>
  )
}