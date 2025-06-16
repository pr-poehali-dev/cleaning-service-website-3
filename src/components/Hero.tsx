import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Профессиональная
              <span className="text-blue-500"> химчистка</span>
              <br />
              на дому
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Качественная чистка мебели и ковров с использованием
              профессиональной химии и современного оборудования. Работаем с
              выездом к вам домой.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 px-8 py-4 text-lg"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать услугу
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg border-blue-500 text-blue-500 hover:bg-blue-50"
              >
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500">5+</div>
                <div className="text-sm text-gray-600">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500">500+</div>
                <div className="text-sm text-gray-600">довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500">100%</div>
                <div className="text-sm text-gray-600">гарантия качества</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-blue-100 rounded-3xl p-8 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop"
                alt="Профессиональная химчистка мебели"
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg">
                <Icon name="Award" size={24} className="text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
