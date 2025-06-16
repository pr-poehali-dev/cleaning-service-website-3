import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Advantages = () => {
  const advantages = [
    {
      icon: "Home",
      title: "Работа на дому",
      description:
        "Приезжаем к вам со всем необходимым оборудованием. Не нужно никуда везти мебель.",
    },
    {
      icon: "Droplets",
      title: "Профессиональная химия",
      description:
        "Используем только сертифицированные и безопасные чистящие средства европейского качества.",
    },
    {
      icon: "Wind",
      title: "Полная сушка",
      description:
        "Используем профессиональное сушильное оборудование для быстрого и качественного высушивания.",
    },
    {
      icon: "Shield",
      title: "Гарантия качества",
      description:
        "Предоставляем гарантию на все виды работ. Если не устроит результат — переделаем бесплатно.",
    },
  ];

  return (
    <section id="advantages" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Наши преимущества
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Почему клиенты выбирают именно нас для химчистки мебели и ковров
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <Card
              key={index}
              className="bg-white hover:shadow-md transition-shadow duration-300 border-0 shadow-sm"
            >
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={advantage.icon as any}
                    size={28}
                    className="text-blue-500"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
