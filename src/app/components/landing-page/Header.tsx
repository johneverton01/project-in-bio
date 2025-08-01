import { manageAuth } from "@/app/actions/manage-auth";
import { auth } from "@/app/lib/auth";
import Button from "../ui/Button";

export async function Header() {
  const session = await auth();

  console.log(session);
  return (
    <div className="absolute top-0 left-0 right-0 max-w-7xl w-full mx-auto flex items-center justify-between py-10 z-10">
      <div className="flex items-center gap-4">
        <img src="/logo.svg" alt="Project in Bio Logo"/>
        <h1 className="text-white text-2xl font-bold">ProjectInBio</h1>
      </div>
      <div className="flex items-center gap-4">
        { session && <Button>Minha Página</Button> }
        <form action={manageAuth}>
          <Button>{session ? "Sair" : "Login"}</Button>
        </form>
      </div>
    </div>
  )
}