import { ArrowRight } from "lucide-react";
import { Card } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
interface Reward {
  icon: string;
  amount: string;
  usdAmount: string;
}
export const LatestRewards = () => {
  const rewards: Reward[] = [{
    icon: "🪙",
    amount: "13.54",
    usdAmount: "$15.55"
  }, {
    icon: "🛍️",
    amount: "1.04",
    usdAmount: "$1.20"
  }, {
    icon: "📦",
    amount: "0.01",
    usdAmount: "$0.01"
  }, {
    icon: "✈️",
    amount: "0.3",
    usdAmount: "$0.35"
  }, {
    icon: "🎮",
    amount: "0.01",
    usdAmount: "$0.01"
  }];
  const plugin = React.useMemo(() => Autoplay({
    delay: 4000,
    stopOnInteraction: true,
    stopOnMouseEnter: true
  }), []);
  return <section className="bg-gray-900 py-[40px]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">Latest rewards</h2>
          <button className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
            View all <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <Carousel opts={{
        align: "start",
        loop: true
      }} plugins={[plugin]} className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {rewards.map((reward, index) => <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/4 lg:basis-1/5">
                <Card className="bg-gray-800 border-gray-700">
                  <div className="p-4">
                    <div className="text-4xl mb-4">{reward.icon}</div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-white">{reward.amount}</span>
                        <span className="text-gray-400">JMPT</span>
                      </div>
                      <span className="text-gray-400">{reward.usdAmount}</span>
                    </div>
                  </div>
                </Card>
              </CarouselItem>)}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>;
};