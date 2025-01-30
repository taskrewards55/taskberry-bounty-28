import { ArrowRight } from "lucide-react";
import { Card } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface LeaderboardEntry {
  position: number;
  userId: string;
  amount: string;
  usdAmount: string;
  avatarColor: string;
}

export const Leaderboard = () => {
  const entries: LeaderboardEntry[] = [
    { position: 1, userId: "user911268c8-8a8", amount: "21.70659", usdAmount: "$24.93", avatarColor: "bg-yellow-400" },
    { position: 2, userId: "user55c6606e-486", amount: "18.00718", usdAmount: "$20.68", avatarColor: "bg-gray-300" },
    { position: 3, userId: "user457a6b51-aaa", amount: "15.25736", usdAmount: "$17.53", avatarColor: "bg-orange-400" },
    { position: 4, userId: "user09c0414e-3c6", amount: "13.36083", usdAmount: "$15.35", avatarColor: "bg-purple-400" },
    { position: 5, userId: "userd3f77cb8ee28", amount: "13.06169", usdAmount: "$15.00", avatarColor: "bg-green-400" },
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">Leaderboard</h2>
          <button className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
            View all <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {entries.map((entry) => (
              <CarouselItem key={entry.position} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="bg-gray-800 border-gray-700">
                  <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold">
                        {entry.position}
                      </div>
                      <div className={`w-10 h-10 rounded-full ${entry.avatarColor}`}></div>
                      <span className="text-gray-300">{entry.userId}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-white">{entry.amount}</span>
                        <span className="text-gray-400">JMPT</span>
                      </div>
                      <span className="text-gray-400">{entry.usdAmount}</span>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};