import { auth } from "@/utils/auth";

export const getAuthSession = async () => {
  return await auth();
};