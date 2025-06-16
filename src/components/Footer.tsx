import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <Icon name="Sparkles" size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">ЧистоДом</h3>
                <p className="text-sm text-gray-400">Химчистка на дому</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Профессиональная химчистка мебели и ковров с выездом на дом.
              Гарантия качества и доступные цены.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Химчистка диванов</li>
              <li>Химчистка кресел</li>
              <li>Химчистка ковров</li>
              <li>Химчистка матрасов</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>О компании</li>
              <li>Наши преимущества</li>
              <li>Отзывы клиентов</li>
              <li>Гарантии</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>Москва и область</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} />
                <span>Ежедневно 8:00-22:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 ЧистоДом. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
