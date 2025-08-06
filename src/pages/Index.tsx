import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useState, useEffect } from 'react';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Продажа недвижимости",
      description: "Полное сопровождение сделок купли-продажи. Оценка, маркетинг, показы и юридическое сопровождение.",
      icon: "Home",
      gradient: "from-primary/10 to-primary/5"
    },
    {
      title: "Покупка недвижимости", 
      description: "Поиск и подбор объектов под ваши критерии. Проверка документов и безопасность сделки.",
      icon: "Key", 
      gradient: "from-accent/10 to-accent/5"
    },
    {
      title: "Консультации",
      description: "Экспертная оценка рынка, консультации по инвестициям и правовым вопросам недвижимости.",
      icon: "Users",
      gradient: "from-brand-blue/10 to-brand-blue/5"
    },
    {
      title: "Оценка стоимости",
      description: "Профессиональная оценка рыночной стоимости с учетом всех факторов и характеристик объекта.",
      icon: "Calculator",
      gradient: "from-primary/10 to-accent/10"
    }
  ];

  const properties = [
    {
      id: 1,
      title: "3-комнатная квартира в центре",
      price: "8 500 000 ₽",
      area: "85 м²",
      location: "ул. Пушкина, 25",
      type: "Продажа",
      rooms: 3,
      floor: "5/9",
      image: "/img/1ea9141f-20fc-480a-b61c-b34e9c28d67c.jpg",
      featured: true
    },
    {
      id: 2, 
      title: "Загородный дом с участком",
      price: "15 200 000 ₽",
      area: "180 м²",
      location: "пос. Зеленый",
      type: "Продажа",
      rooms: 5,
      floor: "2 этажа",
      image: "/img/eff21d1f-e91b-4767-946c-2324935d6dc3.jpg",
      featured: false
    },
    {
      id: 3,
      title: "2-комнатная квартира у парка",
      price: "6 800 000 ₽", 
      area: "65 м²",
      location: "ул. Садовая, 12",
      type: "Продажа",
      rooms: 2,
      floor: "3/5",
      image: "/img/052870c9-5fff-40cb-af63-24361dfa8627.jpg",
      featured: false
    }
  ];

  const reviews = [
    {
      name: "Анна Петрова",
      position: "Предприниматель",
      text: "Отличный специалист! Помог быстро продать квартиру по хорошей цене. Весь процесс прошел без проблем и стресса.",
      rating: 5
    },
    {
      name: "Михаил Сидоров", 
      position: "IT-директор",
      text: "Профессиональный подход к делу. Нашли идеальную квартиру за короткое время. Все рекомендации были точными.",
      rating: 5
    },
    {
      name: "Елена Кузнецова",
      position: "Менеджер",
      text: "Спасибо за качественную работу! Все документы оформили быстро и грамотно. Рекомендую всем друзьям.",
      rating: 5
    }
  ];

  const stats = [
    { value: "500+", label: "Успешных сделок", icon: "TrendingUp" },
    { value: "98%", label: "Довольных клиентов", icon: "Heart" },
    { value: "15", label: "Лет опыта", icon: "Award" },
    { value: "24/7", label: "Поддержка", icon: "Phone" }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center">
                <Icon name="Building2" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-brand-dark">RealEstate</h1>
                <p className="text-xs text-brand-gray">Профессиональная недвижимость</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-brand-gray hover:text-primary transition-colors font-medium">Услуги</a>
              <a href="#properties" className="text-brand-gray hover:text-primary transition-colors font-medium">Объекты</a>
              <a href="#reviews" className="text-brand-gray hover:text-primary transition-colors font-medium">Отзывы</a>
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                Консультация
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-24 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 border-primary/20 text-primary">
              🏆 #1 по продажам в регионе
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-brand-dark mb-6 leading-tight">
              Найдем идеальную<br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                недвижимость
              </span>
            </h2>
            <p className="text-xl text-brand-gray mb-8 max-w-2xl mx-auto leading-relaxed">
              Профессиональная помощь в покупке, продаже и аренде недвижимости. 
              Индивидуальный подход и гарантия результата.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl">
                <Icon name="Phone" size={20} className="mr-2" />
                Получить консультацию
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-gray-200 text-brand-dark hover:bg-gray-50 px-8 py-3 rounded-xl">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть каталог
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon name={stat.icon as any} size={20} className="text-brand-gray" />
                  </div>
                  <div className="text-3xl font-bold text-brand-dark mb-1">{stat.value}</div>
                  <div className="text-sm text-brand-gray">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
              Наши услуги
            </Badge>
            <h3 className="text-4xl font-bold text-brand-dark mb-6">
              Полный спектр услуг
            </h3>
            <p className="text-xl text-brand-gray">
              От поиска до заключения сделки — мы сопровождаем каждый этап работы с недвижимостью
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                <CardHeader className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={service.icon as any} size={24} className="text-brand-gray group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-brand-dark mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                      <p className="text-brand-gray leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="py-20 bg-gray-50/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
              Актуальные предложения
            </Badge>
            <h3 className="text-4xl font-bold text-brand-dark mb-6">
              Лучшие объекты
            </h3>
            <p className="text-xl text-brand-gray">
              Тщательно отобранная недвижимость с проверенными документами
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <Card key={property.id} className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden bg-white">
                {property.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-primary text-white shadow-lg">
                      Рекомендуем
                    </Badge>
                  </div>
                )}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <CardHeader className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-gray-100 text-brand-gray">
                      {property.type}
                    </Badge>
                    <span className="text-2xl font-bold text-brand-dark">
                      {property.price}
                    </span>
                  </div>
                  <CardTitle className="text-lg font-bold text-brand-dark mb-2">
                    {property.title}
                  </CardTitle>
                  <div className="flex items-center text-brand-gray mb-4">
                    <Icon name="MapPin" size={16} className="mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <div className="flex items-center justify-between text-sm text-brand-gray mb-6">
                    <div className="flex items-center">
                      <Icon name="Square" size={16} className="mr-1" />
                      <span>{property.area}</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Bed" size={16} className="mr-1" />
                      <span>{property.rooms} комн.</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Building" size={16} className="mr-1" />
                      <span>{property.floor}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl">
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
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
              Отзывы клиентов
            </Badge>
            <h3 className="text-4xl font-bold text-brand-dark mb-6">
              Довольные клиенты
            </h3>
            <p className="text-xl text-brand-gray">
              Более 500 успешных сделок и благодарных клиентов за 15 лет работы
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="border-0 shadow-lg rounded-2xl p-8 bg-white">
                <div className="flex space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <CardContent className="p-0">
                  <p className="text-brand-gray italic mb-6 leading-relaxed">
                    "{review.text}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-brand-dark">{review.name}</div>
                      <div className="text-sm text-brand-gray">{review.position}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold text-white mb-6">
            Готовы найти идеальную недвижимость?
          </h3>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Оставьте заявку и получите персональную консультацию. Мы поможем решить любые вопросы с недвижимостью.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-xl">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить сейчас
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-xl">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={20} className="text-primary" />
              </div>
              <h4 className="font-semibold text-brand-dark mb-2">Телефон</h4>
              <p className="text-brand-gray">+7 (999) 123-45-67</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={20} className="text-accent" />
              </div>
              <h4 className="font-semibold text-brand-dark mb-2">Email</h4>
              <p className="text-brand-gray">info@realestate.ru</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={20} className="text-brand-blue" />
              </div>
              <h4 className="font-semibold text-brand-dark mb-2">Офис</h4>
              <p className="text-brand-gray">г. Москва, ул. Тверская, 1</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
              <Icon name="Building2" size={16} className="text-white" />
            </div>
            <span className="text-xl font-bold">RealEstate</span>
          </div>
          <p className="text-center text-gray-400 mb-4">
            © 2024 RealEstate. Все права защищены.
          </p>
          <p className="text-center text-sm text-gray-500">
            Профессиональные услуги в сфере недвижимости
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;