import { auth } from "@/auth";

export const getAuthSession = async () => {
  return await auth();
};