import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  return (
    <section id="contacts" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Готовы ответить на ваши вопросы и записать на удобное время
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader className="text-center pb-4">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={28} className="text-blue-500" />
              </div>
              <CardTitle className="text-lg">Телефон</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-2xl font-bold text-blue-500 mb-2">
                +7 (999) 123-45-67
              </p>
              <p className="text-gray-600 text-sm">Ежедневно с 8:00 до 22:00</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm">
            <CardHeader className="text-center pb-4">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon
                  name="MessageCircle"
                  size={28}
                  className="text-green-500"
                />
              </div>
              <CardTitle className="text-lg">WhatsApp</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-2xl font-bold text-green-500 mb-2">
                +7 (999) 123-45-67
              </p>
              <p className="text-gray-600 text-sm">
                Быстрые ответы в мессенджере
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm">
            <CardHeader className="text-center pb-4">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={28} className="text-purple-500" />
              </div>
              <CardTitle className="text-lg">Зона работы</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-xl font-bold text-purple-500 mb-2">
                Москва и область
              </p>
              <p className="text-gray-600 text-sm">Выезжаем в радиусе 50 км</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Получите бесплатную консультацию
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Расскажем о наших услугах, рассчитаем стоимость и подберем удобное
              время для работы
            </p>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-blue-500 hover:bg-gray-50 px-8 py-4"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
