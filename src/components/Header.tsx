import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <Icon name="Sparkles" size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">ЧистоДом</h1>
              <p className="text-sm text-gray-600">Химчистка на дому</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-500 transition-colors"
            >
              Услуги
            </a>
            <a
              href="#advantages"
              className="text-gray-700 hover:text-blue-500 transition-colors"
            >
              Преимущества
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-500 transition-colors"
            >
              О нас
            </a>
            <a
              href="#contacts"
              className="text-gray-700 hover:text-blue-500 transition-colors"
            >
              Контакты
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 text-blue-500">
              <Icon name="Phone" size={20} />
              <span className="font-semibold">+7 (999) 123-45-67</span>
            </div>
            <Button className="bg-blue-500 hover:bg-blue-600">
              Заказать звонок
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
