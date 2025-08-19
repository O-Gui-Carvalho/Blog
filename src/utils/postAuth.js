import { auth } from "./auth";

export async function getCurrentUser() {
  const session = await auth(); // server-side
  return session?.user ?? null;
}

export async function requireAdmin(){
    const user = await getCurrentUser()
    if (!user || user.role !== "ADMIN"){
        throw new Error("Admin access required")
    }
    return user
}