import { redirect } from "next/navigation";

export default function Home() {
  redirect("/home"); // or "/" if that's your homepage
}
