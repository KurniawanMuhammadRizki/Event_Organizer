import { cookies } from "next/headers";

export async function getServerSideToken(): Promise<string | null> {
  const cookieStore = cookies();
  const token = cookieStore.get("sid")?.value;
  return token || null;
}
