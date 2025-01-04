import { Button } from "@/components/ui/button";

export default function EarnRewards() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl font-bold text-white mb-6 animate-fade-up">
            Turn Your Time into Real Earnings!
          </h1>
          <p className="text-2xl text-emerald-400 mb-12 animate-fade-up" style={{ animationDelay: "100ms" }}>
            Complete tasks, refer friends, or participate in surveys to earn rewards anytime, anywhere.
          </p>
          <Button 
            size="lg"
            className="animate-fade-up bg-emerald-500 hover:bg-emerald-600"
            style={{ animationDelay: "200ms" }}
          >
            Start earning now
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8 animate-fade-up">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Easy-to-Start Tasks</h3>
                <p className="text-gray-300">
                  Choose from a variety of tasks, including watching videos, taking surveys, sharing your internet, and more. Every task is designed to be quick, fun, and rewarding.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Earn Real Money</h3>
                <p className="text-gray-300">
                  Your efforts are rewarded with real cash or cryptocurrency. Simply complete tasks, accumulate earnings, and cash out at your convenience.
                </p>
              </div>
            </div>
            <div className="space-y-8 animate-fade-up" style={{ animationDelay: "100ms" }}>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Flexible and Accessible</h3>
                <p className="text-gray-300">
                  Whether you have 5 minutes or 5 hours, there's always something to do. Work at your own pace from anywhere in the world.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Referral Rewards</h3>
                <p className="text-gray-300">
                  Invite friends to join and earn bonuses for every successful referral. The more your friends earn, the more you gain!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-8 animate-fade-up">
            Start earning now and unlock new opportunities!
          </h2>
          <Button 
            size="lg"
            className="animate-fade-up bg-emerald-500 hover:bg-emerald-600"
            style={{ animationDelay: "100ms" }}
          >
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
}