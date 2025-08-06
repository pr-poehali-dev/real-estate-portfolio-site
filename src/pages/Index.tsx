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
      description: "Профессиональная помощь в продаже квартир, домов и коммерческой недвижимости",
      icon: "Home",
      color: "from-neon-purple to-neon-pink"
    },
    {
      title: "Покупка недвижимости", 
      description: "Подбор и покупка недвижимости с учетом всех ваших требований",
      icon: "Key",
      color: "from-neon-pink to-neon-blue"
    },
    {
      title: "Консультации",
      description: "Экспертные консультации по вопросам недвижимости и инвестиций",
      icon: "Users",
      color: "from-neon-blue to-neon-purple"
    },
    {
      title: "Оценка недвижимости",
      description: "Профессиональная оценка рыночной стоимости вашей недвижимости",
      icon: "Calculator",
      color: "from-neon-purple via-neon-pink to-neon-blue"
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
      image: "/img/1ea9141f-20fc-480a-b61c-b34e9c28d67c.jpg",
      featured: true
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
      image: "/img/eff21d1f-e91b-4767-946c-2324935d6dc3.jpg",
      featured: false
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
      image: "/img/052870c9-5fff-40cb-af63-24361dfa8627.jpg",
      featured: true
    }
  ];

  const reviews = [
    {
      name: "Анна Петрова",
      text: "Отличный специалист! Помог быстро продать квартиру по хорошей цене. Весь процесс прошел без проблем.",
      rating: 5,
      avatar: "A"
    },
    {
      name: "Михаил Сидоров", 
      text: "Профессиональный подход к делу. Нашли идеальную квартиру за короткое время. Рекомендую!",
      rating: 5,
      avatar: "М"
    },
    {
      name: "Елена Кузнецова",
      text: "Спасибо за качественную работу! Все документы оформили быстро и грамотно.",
      rating: 5,
      avatar: "Е"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neon-dark via-slate-900 to-neon-dark font-sans overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-pink/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-neon-blue/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Header */}
      <header className="bg-black/20 backdrop-blur-md border-b border-neon-purple/30 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Icon name="Building" size={32} className="text-neon-purple animate-glow" />
                <div className="absolute inset-0 bg-neon-purple/20 rounded-full blur animate-pulse"></div>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue bg-clip-text text-transparent">
                RealEstate Neo
              </h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              {['Услуги', 'Объекты', 'Отзывы', 'Контакты'].map((item, index) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-neon-light hover:text-neon-purple transition-all duration-300 hover:glow relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-purple to-neon-pink group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-neon-purple/10 via-neon-pink/10 to-neon-blue/10"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-slide-up">
            <h2 className="text-7xl font-bold mb-8 bg-gradient-to-r from-white via-neon-light to-white bg-clip-text text-transparent leading-tight">
              Недвижимость<br />
              <span className="bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue bg-clip-text text-transparent animate-glow">
                Будущего
              </span>
            </h2>
            <p className="text-xl text-neon-light/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Революционный подход к рынку недвижимости. Используем передовые технологии 
              для поиска идеальных объектов и проведения сделок на космической скорости 🚀
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style={{animationDelay: '0.3s'}}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-neon-purple to-neon-pink hover:from-neon-pink hover:to-neon-blue text-white px-12 py-4 text-lg rounded-2xl animate-pulse-neon shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Icon name="Rocket" size={24} className="mr-3 animate-rotate-3d" />
              Запустить поиск
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white px-12 py-4 text-lg rounded-2xl backdrop-blur-sm shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Icon name="Sparkles" size={24} className="mr-3" />
              Смотреть портфолио
            </Button>
          </div>

          {/* Floating Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-20 animate-slide-up" style={{animationDelay: '0.6s'}}>
            {[
              { value: "500+", label: "Успешных сделок", icon: "TrendingUp" },
              { value: "98%", label: "Довольных клиентов", icon: "Heart" },
              { value: "24/7", label: "Поддержка", icon: "Zap" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-black/30 backdrop-blur-md rounded-3xl p-6 border border-neon-purple/30 hover:border-neon-pink/50 transition-all duration-300 animate-float group"
                style={{animationDelay: `${index * 0.5}s`}}
              >
                <Icon name={stat.icon as any} size={32} className="text-neon-purple mb-4 mx-auto group-hover:text-neon-pink transition-colors" />
                <div className="text-4xl font-bold bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-neon-light/70 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="услуги" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h3 className="text-5xl font-bold mb-6 bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue bg-clip-text text-transparent">
              Космические услуги
            </h3>
            <p className="text-neon-light/70 text-xl max-w-2xl mx-auto">
              Полный спектр услуг с технологиями будущего
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group bg-black/40 backdrop-blur-md border border-neon-purple/30 hover:border-neon-pink/50 transition-all duration-500 hover:shadow-2xl hover:shadow-neon-purple/20 transform hover:-translate-y-2 animate-slide-up overflow-hidden relative"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <CardHeader className="text-center pb-4 relative z-10">
                  <div className="bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 animate-float">
                    <Icon name={service.icon as any} size={32} className="text-neon-purple group-hover:text-neon-pink transition-colors" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-neon-light group-hover:text-white transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-neon-light/70 text-sm leading-relaxed group-hover:text-neon-light/90 transition-colors">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="объекты" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h3 className="text-5xl font-bold mb-6 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
              Галактика объектов
            </h3>
            <p className="text-neon-light/70 text-xl max-w-2xl mx-auto">
              Эксклюзивная подборка недвижимости из параллельной вселенной
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {properties.map((property, index) => (
              <Card 
                key={property.id} 
                className="group bg-black/40 backdrop-blur-md border border-neon-purple/30 hover:border-neon-pink/50 overflow-hidden hover:shadow-2xl hover:shadow-neon-purple/20 transform hover:-translate-y-4 hover:rotate-1 transition-all duration-500 animate-slide-up relative"
                style={{animationDelay: `${index * 0.3}s`}}
              >
                {property.featured && (
                  <div className="absolute top-4 right-4 z-20">
                    <Badge className="bg-gradient-to-r from-neon-pink to-neon-blue text-white animate-pulse">
                      ⭐ Хит
                    </Badge>
                  </div>
                )}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <Badge variant="secondary" className="bg-neon-purple/80 text-white backdrop-blur-sm">
                      {property.type}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
                      {property.price}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-neon-light group-hover:text-white transition-colors">
                    {property.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-neon-light/70 group-hover:text-neon-light transition-colors">
                      <Icon name="MapPin" size={18} className="mr-2 text-neon-purple" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-neon-light/70 group-hover:text-neon-light transition-colors">
                      <div className="flex items-center">
                        <Icon name="Square" size={16} className="mr-1 text-neon-blue" />
                        <span>{property.area}</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="Home" size={16} className="mr-1 text-neon-pink" />
                        <span>{property.rooms} комн.</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="Building" size={16} className="mr-1 text-neon-purple" />
                        <span>{property.floor}</span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-gradient-to-r from-neon-purple to-neon-pink hover:from-neon-pink hover:to-neon-blue text-white rounded-xl transform hover:scale-105 transition-all duration-300">
                    <Icon name="Eye" size={18} className="mr-2" />
                    Телепортироваться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="отзывы" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h3 className="text-5xl font-bold mb-6 bg-gradient-to-r from-neon-pink via-neon-blue to-neon-purple bg-clip-text text-transparent">
              Отзывы из будущего
            </h3>
            <p className="text-neon-light/70 text-xl max-w-2xl mx-auto">
              Что говорят клиенты из параллельной реальности
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card 
                key={index} 
                className="group bg-black/40 backdrop-blur-md border border-neon-purple/30 hover:border-neon-pink/50 transition-all duration-500 hover:shadow-2xl hover:shadow-neon-purple/20 transform hover:-translate-y-2 animate-slide-up relative overflow-hidden"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 via-neon-pink/5 to-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-neon-purple to-neon-pink rounded-2xl flex items-center justify-center text-white font-bold text-xl animate-float">
                      {review.avatar}
                    </div>
                    <div>
                      <CardTitle className="text-lg text-neon-light group-hover:text-white transition-colors">
                        {review.name}
                      </CardTitle>
                      <div className="flex space-x-1 mt-2">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon 
                            key={i} 
                            name="Star" 
                            size={18} 
                            className="text-yellow-400 fill-current animate-pulse" 
                            style={{animationDelay: `${i * 0.1}s`}}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-neon-light/70 group-hover:text-neon-light/90 italic leading-relaxed transition-colors">
                    "{review.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="контакты" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-dark to-black"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h3 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-neon-light to-white bg-clip-text text-transparent">
              Связь с командой
            </h3>
            <p className="text-neon-light/70 text-xl max-w-2xl mx-auto">
              Отправим сигнал в любую точку галактики
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            {[
              { icon: "Phone", title: "Квантовая связь", value: "+7 (999) 123-45-67", color: "neon-purple" },
              { icon: "Mail", title: "Галактическая почта", value: "info@realneo.space", color: "neon-pink" },
              { icon: "MapPin", title: "Орбитальная станция", value: "г. Москва, ул. Будущего, ∞", color: "neon-blue" }
            ].map((contact, index) => (
              <div 
                key={index}
                className="group animate-slide-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className={`w-24 h-24 bg-gradient-to-br from-${contact.color} to-${contact.color}/50 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 animate-float shadow-2xl shadow-${contact.color}/20`}>
                  <Icon name={contact.icon as any} size={36} className="text-white" />
                </div>
                <h4 className="text-2xl font-semibold text-neon-light mb-3 group-hover:text-white transition-colors">
                  {contact.title}
                </h4>
                <p className="text-neon-light/70 text-lg group-hover:text-neon-light transition-colors">
                  {contact.value}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue hover:from-neon-blue hover:via-neon-purple hover:to-neon-pink text-white px-16 py-6 text-xl rounded-3xl animate-glow shadow-2xl transform hover:scale-110 transition-all duration-300"
            >
              <Icon name="Zap" size={28} className="mr-3 animate-pulse" />
              Запустить контакт
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/60 backdrop-blur-md border-t border-neon-purple/30 py-12 relative">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Icon name="Building" size={28} className="text-neon-purple animate-glow" />
            <span className="text-2xl font-bold bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue bg-clip-text text-transparent">
              RealEstate Neo
            </span>
          </div>
          <p className="text-neon-light/50 mb-4">© 2024 RealEstate Neo. Все права защищены во всех вселенных.</p>
          <p className="text-neon-light/30 text-sm">Создано с 🚀 в далекой галактике</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;