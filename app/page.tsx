//Nexjs default
import Image from "next/image";
import Link from "next/link";
//Data
import {cards, payments} from "@/lib/data";
//Shadcn-ui
import {Button} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
//Own components
import CounterButton from "@/components/counter";
import {Payment, columns} from "./columns";
import {DataTable} from "./data-table";




export default function Home() {
  //const { theme, setTheme } = useTheme();

  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <Button className="mb-6 mt-10" asChild>
        <Link href="/login">Login</Link>
      </Button>

      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={payments} />
      </div>

      <div className="flex">
        {cards.map((card, index) => (
          <Card key={index} className="mr-4">
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                {card.description}
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="outline">{card.footer}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <CounterButton />
      
    </main>
  );
}
