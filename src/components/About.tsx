import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              О нашей компании
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Мы занимаемся профессиональной химчисткой мебели и ковров уже
              более 5 лет. За это время помогли сотням семей вернуть свежесть и
              чистоту их любимой мебели.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Работаем исключительно на дому у клиентов, используя современное
              портативное оборудование и профессиональную химию. Каждая работа
              выполняется с гарантией качества.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon name="Users" size={24} className="text-green-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">
                    Довольных клиентов
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Icon name="Calendar" size={24} className="text-blue-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">5+</div>
                  <div className="text-sm text-gray-600">Лет опыта</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
              alt="Команда профессионалов"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Icon name="Star" size={24} className="text-yellow-500" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">4.9/5</div>
                  <div className="text-sm text-gray-600">Рейтинг клиентов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
