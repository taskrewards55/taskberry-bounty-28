import { Card, CardContent } from "@/components/ui/card";
const VisionSection = () => {
  const stats = [{
    title: "Total paid out",
    value: "3 426 897",
    bgColor: "bg-primary"
  }, {
    title: "Registered users",
    value: "8 727 646",
    bgColor: "bg-purple-500"
  }, {
    title: "Completed payouts",
    value: "2 347 758",
    bgColor: "bg-gray-900"
  }];
  return <section className="bg-white py-[5px]">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-6">Our vision</h2>
        <p className="text-gray-600 text-center max-w-4xl mx-auto mb-16 text-lg">
          JumpTask helps people make money online by offering simple and easy ways to earn.
          Our platform gives everyone access to a wide variety of small tasks, allowing users to
          earn extra income from anywhere. With no special skills needed, JumpTask makes it
          possible for anyone to start earning and be part of the online economy.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => <Card key={index} className={`overflow-hidden ${stat.bgColor} text-white`}>
              <CardContent className="p-8">
                <h3 className="text-xl font-medium mb-4">{stat.title}</h3>
                <p className="font-semibold text-left px-0 mx-0 text-xl">{stat.value}</p>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default VisionSection;