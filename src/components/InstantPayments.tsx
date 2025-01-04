export const InstantPayments = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold">Get paid instantly and easily</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Once you complete a task, your earnings are ready for transfer and can be quickly moved to your crypto wallet. With TaskRewards, getting paid is simple and hassle-free. If you're looking for the best ways to make money online, TaskRewards ensures you receive your rewards as soon as they are processed, making it one of the fastest ways to get paid online today.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="/lovable-uploads/738b88e7-1781-4f01-ae47-bd233939517f.png" 
              alt="Instant payment visualization with stacked coins"
              className="w-full h-auto rounded-lg shadow-xl animate-fade-up"
            />
          </div>
        </div>
      </div>
    </section>
  );
};