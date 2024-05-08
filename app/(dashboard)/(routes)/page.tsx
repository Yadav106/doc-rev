import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <p className="text-3xl text-sky-700">
      <UserButton 
        afterSignOutUrl="/sign-in"
      />
    </p>
  );
}
