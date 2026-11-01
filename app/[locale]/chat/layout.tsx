import { getServerSession } from "next-auth";

import NextAuthProvider from "@/SessionProvider";

export default async function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return <NextAuthProvider session={session}>{children}</NextAuthProvider>;
}
