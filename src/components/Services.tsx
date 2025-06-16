import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Sofa",
      title: "Химчистка мягкой мебели",
      description:
        "Профессиональная чистка диванов, кресел, стульев с использованием безопасной химии",
      price: "от 1500 руб",
      features: [
        "Удаление пятен",
        "Устранение запахов",
        "Дезинфекция",
        "Защитная обработка",
      ],
    },
    {
      icon: "Home",
      title: "Химчистка ковров",
      description:
        "Глубокая чистка ковров любых размеров и материалов с полной сушкой",
      price: "от 800 руб/м²",
      features: [
        "Все типы ковров",
        "Удаление сложных пятен",
        "Антибактериальная обработка",
        "Восстановление цвета",
      ],
    },
    {
      icon: "Bed",
      title: "Химчистка матрасов",
      description:
        "Качественная чистка матрасов с устранением клещей и аллергенов",
      price: "от 2000 руб",
      features: [
        "Противоклещевая обработка",
        "Удаление пятен",
        "Дезодорация",
        "Гипоаллергенная химия",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Профессиональная химчистка любых видов мебели и ковров с
            использованием современного оборудования
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-blue-100"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={service.icon as any}
                    size={32}
                    className="text-blue-500"
                  />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {service.title}
                </CardTitle>
                <div className="text-2xl font-bold text-blue-500">
                  {service.price}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 text-center">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-500 mr-2 flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
