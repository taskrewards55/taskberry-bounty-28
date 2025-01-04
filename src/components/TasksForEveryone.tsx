import { Button } from "./ui/button";

export const TasksForEveryone = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold">Thousands of tasks for everyone</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Whether you're a student, stay-at-home parent, or freelancer, TaskRewards offers some of the best ways to make money online with thousands of microtasks that require no special skills. From taking surveys to playing games or completing quick 3-5 minute tasks, you can turn your spare time into valuable earnings.
            </p>
            <Button size="lg" className="mt-4">
              Explore all tasks here
            </Button>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="/lovable-uploads/f8c98310-aa4c-45d8-98f2-af6944c9545c.png" 
              alt="Task categories showing different ways to earn"
              className="w-full h-auto rounded-lg shadow-xl animate-fade-up"
            />
          </div>
        </div>
      </div>
    </section>
  );
};