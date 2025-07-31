"use server"

import { auth, signIn, signOut } from "@/app/lib/auth";

export async function manageAuth() {
  const session = await auth();

  return (!session) ? await signIn("google", { redirectTo: "/criar" }) : await signOut({
    redirectTo: "/",
  });
}