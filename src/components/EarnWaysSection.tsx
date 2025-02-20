import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gamepad, ThumbsUp, Share, Search, Bot } from "lucide-react";
const ways = [{
  title: "Take Surveys",
  description: "Participate in surveys, help companies improve operations, and earn rewards.",
  icon: Search,
  color: "bg-blue-400"
}, {
  title: "Play games",
  description: "Receive rewards with each achievement milestone as you enjoy playing games.",
  icon: Gamepad,
  color: "bg-teal-400"
}, {
  title: "Social media tasks",
  description: "Watch your earnings grow by engaging on Twitter (X), Telegram, Discord, and other social media platforms.",
  icon: ThumbsUp,
  color: "bg-pink-400"
}, {
  title: "Share internet",
  description: "Share your extra mobile data with verified businesses and individuals to earn money.",
  icon: Share,
  color: "bg-yellow-400"
}, {
  title: "Test products",
  description: "Try out new apps and digital tools, provide feedback, and get paid for helping improve online services.",
  icon: Search,
  color: "bg-red-400"
}, {
  title: "Train AI",
  description: "Help train AI systems by completing tasks like data labeling and get rewarded for your contributions.",
  icon: Bot,
  color: "bg-violet-400"
}];
export const EarnWaysSection = () => {
  return <section className="bg-gray-50 my-0 py-0">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-6">
          Ways to earn money with JumpTask
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16 text-lg">
          Discover a wide variety of tasks, from quick and easy microtasks to advanced tasks
          with bigger payouts, and start earning money online today.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ways.map((way, index) => <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-2xl ${way.color} flex items-center justify-center mb-6`}>
                  <way.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{way.title}</h3>
                <p className="text-gray-600 mb-6">{way.description}</p>
                <Button variant="outline" className="text-primary hover:text-primary/90">
                  Learn more
                </Button>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};