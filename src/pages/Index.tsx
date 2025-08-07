import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useState, useEffect, useRef } from 'react';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [splitImage, setSplitImage] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const floatingShapes = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 40,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * -20,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  const services = [
    {
      title: "AR Просмотр",
      description: "Дополненная реальность для виртуального осмотра недвижимости прямо у вас дома",
      icon: "Eye",
      color: "from-purple-500 to-pink-500",
      delay: 0
    },
    {
      title: "ИИ Подбор",
      description: "Искусственный интеллект находит идеальную недвижимость по вашим критериям",
      icon: "Brain",
      color: "from-blue-500 to-cyan-500",
      delay: 200
    },
    {
      title: "Блокчейн Сделки",
      description: "Прозрачные и безопасные сделки с использованием технологии блокчейн",
      icon: "Shield",
      color: "from-green-500 to-emerald-500",
      delay: 400
    },
    {
      title: "Drone Съемка",
      description: "Профессиональная аэросъемка объектов недвижимости в 4K качестве",
      icon: "Camera",
      color: "from-orange-500 to-red-500",
      delay: 600
    }
  ];

  const properties = [
    {
      id: 1,
      title: "Смарт Пентхаус",
      price: "₽45 000 000",
      area: "280 м²",
      location: "Москва-Сити",
      type: "Премиум",
      rooms: 4,
      floor: "42/50",
      image: "/img/144f19fe-f30e-4f5c-bf1c-89b230bd5bec.jpg",
      features: ["Smart Home", "Панорамный вид", "Паркинг"],
      gradient: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Эко Вилла",
      price: "₽28 500 000",
      area: "320 м²",
      location: "Рублевка",
      type: "Эко",
      rooms: 6,
      floor: "2 этажа",
      image: "/img/2fbf73a2-ce72-4fee-b4bf-4daa38926927.jpg",
      features: ["Солнечные батареи", "Сад", "Бассейн"],
      gradient: "from-green-600 to-blue-600"
    },
    {
      id: 3,
      title: "Лофт Студия",
      price: "₽12 800 000",
      area: "95 м²",
      location: "Патриаршие",
      type: "Лофт",
      rooms: 2,
      floor: "3/5",
      image: "/img/4991f8b5-bbd8-4c34-b093-6c026cbcbaf4.jpg",
      features: ["Высокие потолки", "Историческое здание", "Дизайн"],
      gradient: "from-orange-600 to-red-600"
    }
  ];

  const stats = [
    { value: "2.5K+", label: "VR Туров", icon: "Zap", color: "text-purple-500" },
    { value: "99.8%", label: "Точность ИИ", icon: "Target", color: "text-blue-500" },
    { value: "24/7", label: "AR Поддержка", icon: "Clock", color: "text-green-500" },
    { value: "∞", label: "Возможностей", icon: "Sparkles", color: "text-pink-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {floatingShapes.map((shape) => (
          <div
            key={shape.id}
            className="absolute opacity-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl"
            style={{
              width: shape.size,
              height: shape.size,
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              animation: `float ${shape.duration}s ${shape.delay}s infinite ease-in-out alternate`,
            }}
          />
        ))}
      </div>

      {/* Dynamic Header */}
      <header 
        className="fixed top-0 w-full z-50 backdrop-blur-2xl border-b border-white/10 transition-all duration-500"
        style={{
          background: `rgba(15, 23, 42, ${Math.min(scrollY / 100, 0.9)})`,
        }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon name="Zap" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  FutureEstate
                </h1>
                <p className="text-xs text-gray-400">Недвижимость будущего</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-300 hover:text-purple-400 transition-all duration-300 hover:scale-105">AR Услуги</a>
              <a href="#properties" className="text-gray-300 hover:text-purple-400 transition-all duration-300 hover:scale-105">VR Объекты</a>
              <a href="#tech" className="text-gray-300 hover:text-purple-400 transition-all duration-300 hover:scale-105">Технологии</a>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300">
                <Icon name="Rocket" size={16} className="mr-2" />
                Запуск
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with Parallax */}
      <section 
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative z-10"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-6xl mx-auto">
            {/* Floating cursor follower */}
            <div 
              className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
              style={{
                left: mousePos.x - 12,
                top: mousePos.y - 12,
                background: 'radial-gradient(circle, #8b5cf6, #ec4899)',
                borderRadius: '50%',
                transition: 'transform 0.1s ease-out',
              }}
            />

            <div className="space-y-8 animate-fadeIn">
              <Badge 
                variant="outline" 
                className="border-purple-500/50 text-purple-300 bg-purple-500/10 backdrop-blur-sm text-lg px-6 py-2 animate-pulse"
              >
                🚀 Первая в мире AR/VR недвижимость
              </Badge>
              
              <h2 className="text-7xl md:text-9xl font-black leading-none tracking-tight">
                <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent animate-gradient">
                  БУДУЩЕЕ
                </span>
                <span className="block text-white mt-4">
                  ЗДЕСЬ
                </span>
              </h2>

              <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Откройте новую эру недвижимости с помощью <br />
                <span className="text-purple-400 font-semibold">дополненной реальности</span> и <span className="text-pink-400 font-semibold">искусственного интеллекта</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-6 text-xl rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50"
                >
                  <Icon name="Play" size={24} className="mr-3" />
                  VR Тур
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-12 py-6 text-xl rounded-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Icon name="Sparkles" size={24} className="mr-3" />
                  AR Просмотр
                </Button>
              </div>

              {/* Animated Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="group cursor-pointer"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/10 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-500 group-hover:shadow-2xl">
                      <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                        <Icon name={stat.icon as any} size={28} className={stat.color} />
                      </div>
                      <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-gray-400 group-hover:text-gray-300 transition-colors">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovative Services Section */}
      <section id="services" className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <Badge variant="outline" className="mb-6 border-purple-500/50 text-purple-300 bg-purple-500/10 backdrop-blur-sm">
              Революционные технологии
            </Badge>
            <h3 className="text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Инновации
              </span>
              <br />
              будущего
            </h3>
            <p className="text-2xl text-gray-300">
              Мы используем передовые технологии для революции в сфере недвижимости
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                style={{ animationDelay: `${service.delay}ms` }}
              >
                <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-white/30 rounded-3xl overflow-hidden group-hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                  <CardHeader className="p-10">
                    <div className="flex items-start space-x-6">
                      <div className={`w-20 h-20 rounded-3xl flex items-center justify-center bg-gradient-to-r ${service.color} group-hover:rotate-12 transition-transform duration-300`}>
                        <Icon name={service.icon as any} size={32} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-3xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                          {service.title}
                        </CardTitle>
                        <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Image Properties Section */}
      <section id="properties" className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <Badge variant="outline" className="mb-6 border-pink-500/50 text-pink-300 bg-pink-500/10 backdrop-blur-sm">
              Эксклюзивная коллекция
            </Badge>
            <h3 className="text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Объекты
              </span>
              <br />
              мечты
            </h3>
            <Button 
              onClick={() => setSplitImage(!splitImage)}
              className="mb-8 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
            >
              {splitImage ? 'Собрать' : 'Разделить'} изображения
            </Button>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {properties.map((property, index) => (
              <div
                key={property.id}
                className="group cursor-pointer"
                style={{ 
                  transform: splitImage ? `translateX(${(index - 1) * 50}px) rotate(${(index - 1) * 5}deg)` : 'none',
                  transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
                  zIndex: splitImage ? 10 + index : 1
                }}
              >
                <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-white/30 rounded-3xl overflow-hidden group-hover:scale-105 transition-all duration-500 hover:shadow-2xl">
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={property.image} 
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${property.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
                    <div className="absolute top-6 right-6">
                      <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                        {property.type}
                      </Badge>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="text-4xl font-bold text-white mb-2">
                        {property.price}
                      </div>
                    </div>
                  </div>

                  <CardHeader className="p-8">
                    <CardTitle className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {property.title}
                    </CardTitle>
                    <div className="flex items-center text-gray-300 mb-6">
                      <Icon name="MapPin" size={18} className="mr-2" />
                      <span>{property.location}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="px-8 pb-8">
                    <div className="grid grid-cols-3 gap-4 mb-6 text-sm text-gray-300">
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

                    <div className="flex flex-wrap gap-2 mb-6">
                      {property.features.map((feature, i) => (
                        <Badge key={i} variant="secondary" className="bg-white/10 text-white border-white/20">
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <Button className={`w-full bg-gradient-to-r ${property.gradient} hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300`}>
                      VR Просмотр
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive CTA Section */}
      <section className="py-32 relative z-10">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-3xl"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        ></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-6xl font-bold text-white mb-8">
              Готовы войти в
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                будущее?
              </span>
            </h3>
            <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Присоединяйтесь к революции недвижимости уже сегодня
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-16 py-8 text-2xl rounded-3xl transform hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50"
              >
                <Icon name="Zap" size={28} className="mr-4" />
                Начать сейчас
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-16 py-8 text-2xl rounded-3xl transform hover:scale-110 transition-all duration-300"
              >
                <Icon name="Phone" size={28} className="mr-4" />
                Связаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-xl border-t border-white/10 py-16 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
              <Icon name="Zap" size={24} className="text-white" />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              FutureEstate
            </span>
          </div>
          <p className="text-center text-gray-400 mb-4 text-lg">
            © 2024 FutureEstate. Создано в будущем.
          </p>
          <p className="text-center text-gray-500">
            Революция недвижимости начинается здесь 🚀
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Index;