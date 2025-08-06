import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const services = [
    {
      title: "Продажа недвижимости",
      description: "Профессиональная помощь в продаже квартир, домов и коммерческой недвижимости",
      icon: "Home"
    },
    {
      title: "Покупка недвижимости", 
      description: "Подбор и покупка недвижимости с учетом всех ваших требований",
      icon: "Key"
    },
    {
      title: "Консультации",
      description: "Экспертные консультации по вопросам недвижимости и инвестиций",
      icon: "Users"
    },
    {
      title: "Оценка недвижимости",
      description: "Профессиональная оценка рыночной стоимости вашей недвижимости",
      icon: "Calculator"
    }
  ];

  const properties = [
    {
      id: 1,
      title: "3-к квартира в центре",
      price: "8 500 000 ₽",
      area: "85 м²",
      location: "ул. Пушкина, 25",
      type: "Продажа",
      rooms: 3,
      floor: "5/9",
      image: "/img/1ea9141f-20fc-480a-b61c-b34e9c28d67c.jpg"
    },
    {
      id: 2, 
      title: "Загородный дом",
      price: "15 200 000 ₽",
      area: "180 м²",
      location: "пос. Зеленый",
      type: "Продажа",
      rooms: 5,
      floor: "2 этажа",
      image: "/img/eff21d1f-e91b-4767-946c-2324935d6dc3.jpg"
    },
    {
      id: 3,
      title: "2-к квартира у парка",
      price: "6 800 000 ₽", 
      area: "65 м²",
      location: "ул. Садовая, 12",
      type: "Продажа",
      rooms: 2,
      floor: "3/5",
      image: "/img/052870c9-5fff-40cb-af63-24361dfa8627.jpg"
    }
  ];

  const reviews = [
    {
      name: "Анна Петрова",
      text: "Отличный специалист! Помог быстро продать квартиру по хорошей цене. Весь процесс прошел без проблем.",
      rating: 5
    },
    {
      name: "Михаил Сидоров", 
      text: "Профессиональный подход к делу. Нашли идеальную квартиру за короткое время. Рекомендую!",
      rating: 5
    },
    {
      name: "Елена Кузнецова",
      text: "Спасибо за качественную работу! Все документы оформили быстро и грамотно.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Building" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-business-gray">RealEstate Pro</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
              <a href="#properties" className="text-gray-600 hover:text-primary transition-colors">Объекты</a>
              <a href="#reviews" className="text-gray-600 hover:text-primary transition-colors">Отзывы</a>
              <a href="#contacts" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-business-gray mb-6 animate-fade-in">
            Профессиональные услуги<br />в сфере недвижимости
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Помогаю клиентам найти идеальную недвижимость и провести сделки быстро, безопасно и выгодно. 
            Индивидуальный подход к каждому клиенту.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-blue-700 text-white px-8">
              <Icon name="Phone" size={20} className="mr-2" />
              Получить консультацию
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white px-8">
              <Icon name="Home" size={20} className="mr-2" />
              Посмотреть объекты
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-business-gray mb-4">Мои услуги</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Полный спектр услуг для решения любых задач в сфере недвижимости
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-gray-100">
                <CardHeader className="text-center pb-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-business-gray">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="py-20 bg-business-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-business-gray mb-4">Актуальные объекты</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Подборка лучших предложений недвижимости
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <Card key={property.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white">
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-primary text-white">{property.type}</Badge>
                    <span className="text-2xl font-bold text-primary">{property.price}</span>
                  </div>
                  <CardTitle className="text-xl text-business-gray">{property.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Icon name="MapPin" size={16} className="mr-2" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center">
                        <Icon name="Square" size={16} className="mr-1" />
                        <span>{property.area}</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="Home" size={16} className="mr-1" />
                        <span>{property.rooms} комн.</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="Building" size={16} className="mr-1" />
                        <span>{property.floor}</span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-primary hover:bg-blue-700 text-white">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-business-gray mb-4">Отзывы клиентов</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Что говорят о моей работе довольные клиенты
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="border-gray-100 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-business-gray">{review.name}</CardTitle>
                      <div className="flex space-x-1 mt-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-business-gray text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Контакты</h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Свяжитесь со мной для консультации или записи на встречу
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Icon name="Phone" size={28} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold">Телефон</h4>
              <p className="text-gray-300">+7 (999) 123-45-67</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Icon name="Mail" size={28} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold">Email</h4>
              <p className="text-gray-300">info@realestate.pro</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Icon name="MapPin" size={28} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold">Офис</h4>
              <p className="text-gray-300">г. Москва, ул. Тверская, 1</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-blue-700 text-white px-8">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="Building" size={24} className="text-primary" />
            <span className="text-xl font-bold">RealEstate Pro</span>
          </div>
          <p className="text-gray-400">© 2024 RealEstate Pro. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;