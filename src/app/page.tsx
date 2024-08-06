import { Button } from "@/components/ui/button";
import Link
 from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Raspberry pi</h1>
      <div className="flex mt-10"><Link href={"/stats"}><Button className="mx-2">Stats</Button> </Link>
      <Link href={"/camera"}><Button>Camera</Button></Link></div>
      
    </main>
  );
}
