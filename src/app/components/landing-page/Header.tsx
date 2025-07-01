import Button from "../ui/Button";

export function Header() {
  return (
    <div className="absolute top-0 max-w-7xl w-full mx-auto flex items-center justify-between py-10 z-10">
      <div className="flex items-center gap-4">
        <img src="/logo.svg" alt="Project in Bio Logo"/>
        <h1 className="text-white text-2xl font-bold">ProjectInBio</h1>
      </div>
      <div className="flex items-center gap-4">
        <Button>Minha Página</Button>
        <Button>Sair</Button>
      </div>
    </div>
  )
}