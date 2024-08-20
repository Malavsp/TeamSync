import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen gap-32">
      <Image
        src={"/HR-logo.png"}
        height={400}
        width={500}
        alt="An HR logo"
        className="mr-8 shadow-inner  "
      />
      <div>
        <p className="text-2xl font-semibold mb-4">Welcome to HR Manager</p>
        <p className="mb-2">
          Please login to continue <span>...</span>
        </p>
        <Button className="px-6 py-2 ">
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </div>
  );
}
