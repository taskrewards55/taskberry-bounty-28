import React from "react";
import { ArrowRight } from "lucide-react";
import { Card } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
interface TaskType {
  icon: string;
  title: string;
  description: string;
}
export const TaskTypes = () => {
  const taskTypes: TaskType[] = [{
    icon: "🎮",
    title: "Gaming Tasks",
    description: "Play games and earn rewards for your achievements"
  }, {
    icon: "📝",
    title: "Surveys",
    description: "Share your opinion and get paid for your feedback"
  }, {
    icon: "🌐",
    title: "Web Tasks",
    description: "Complete simple web-based tasks for quick earnings"
  }, {
    icon: "📱",
    title: "Mobile Tasks",
    description: "Test mobile apps and earn rewards on the go"
  }, {
    icon: "💡",
    title: "Creative Tasks",
    description: "Use your creativity to complete unique assignments"
  }];
  const plugin = React.useMemo(() => Autoplay({
    delay: 4000,
    stopOnInteraction: true
  }), []);
  return <section className="bg-gray-900 py-[40px]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">Task Types</h2>
          <button className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
            View all <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <Carousel opts={{
        align: "start",
        loop: true
      }} plugins={[plugin]} className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {taskTypes.map((task, index) => <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="bg-gray-800 border-gray-700 h-full">
                  <div className="p-6">
                    <div className="text-4xl mb-4">{task.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{task.title}</h3>
                    <p className="text-gray-400">{task.description}</p>
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