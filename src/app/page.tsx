import Image from "next/image";
import { Raleway } from "next/font/google";
import Button from '../components/button/page'
// const raleway = Raleway({
//   subsets:['latin'],
//   weight:['900'],
// })
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Button/>
    </main>
  );
}
