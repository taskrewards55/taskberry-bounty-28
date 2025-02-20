import { Smartphone, Laptop, Tablet } from "lucide-react";
export const EarnFromDevices = () => {
  return <section className="bg-gradient-to-b from-white to-gray-50 py-[40px]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-up">
            Earn money online from all your devices
          </h2>
          <p className="text-lg text-gray-600 mb-12 animate-fade-up" style={{
          animationDelay: "100ms"
        }}>
            Complete tasks from the comfort of your home or on the go, and access the platform anytime, anywhere. 
            If you're looking for how to make money from home, or simply want to earn on the move, we offer flexible 
            options that work across all your devices.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-up" style={{
            animationDelay: "200ms"
          }}>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mobile</h3>
              <p className="text-gray-600">Earn on the go with your smartphone</p>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-up" style={{
            animationDelay: "300ms"
          }}>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Tablet className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tablet</h3>
              <p className="text-gray-600">Complete tasks on your tablet</p>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-up" style={{
            animationDelay: "400ms"
          }}>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Laptop className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Computer</h3>
              <p className="text-gray-600">Work from your desktop or laptop</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};