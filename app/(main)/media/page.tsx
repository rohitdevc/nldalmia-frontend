import { redirect } from "next/navigation";

export const revalidate = 0;

export default async function Page() {
  redirect(process.env.NEXT_PUBLIC_PATH + "media/press-release");
}
