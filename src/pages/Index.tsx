import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Навигация */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight flex items-center gap-2">
              <Icon name="Zap" className="text-primary" size={24} />
              ЭЛЕКТРИК МАСТЕР
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                Услуги
              </a>
              <a href="#works" className="text-muted-foreground hover:text-foreground transition-colors">
                Работы
              </a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                О нас
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Контакты
              </a>
            </div>
            <Button size="sm">
              Вызвать электрика
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero секция */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[80vh]">
            {/* Основной контент Hero */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge variant="secondary" className="w-fit">
                    <Icon name="Shield" className="w-3 h-3 mr-1" />
                    Лицензированный электрик
                  </Badge>
                  <h1 className="text-6xl lg:text-8xl font-bold tracking-tight text-balance">
                    Электрика под
                    <span className="text-primary block">ключ, быстро</span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-2xl text-pretty">
                    Профессиональный монтаж электропроводки, щитов, розеток и освещения. Работаем в квартирах,
                    домах и офисах. Гарантия на все виды работ.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8">
                    Вызвать электрика
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                    Наши работы
                  </Button>
                </div>
              </div>
            </div>

            {/* Hero сетка изображений */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-2 auto-rows-fr h-fit self-center">
              <Card className="aspect-square bg-card overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop"
                  alt="Монтаж проводки"
                  className="w-full h-full object-cover"
                />
              </Card>
              <Card className="aspect-square bg-primary/20 overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=300&h=300&fit=crop"
                  alt="Электрический щит"
                  className="w-full h-full object-cover"
                />
              </Card>
              <Card className="aspect-square bg-accent/20 overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=300&h=300&fit=crop"
                  alt="Установка розеток"
                  className="w-full h-full object-cover"
                />
              </Card>
              <Card className="aspect-square bg-card overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=300&h=300&fit=crop"
                  alt="Освещение"
                  className="w-full h-full object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Секция преимуществ */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">ПОЧЕМУ ВЫБИРАЮТ НАС</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Надёжность, скорость и качество — наши главные принципы в каждом проекте
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Clock" className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">1. Быстро</h3>
              <p className="text-muted-foreground">
                Выезд мастера в день обращения. Аварийные вызовы — в течение 1 часа в любое время суток.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="ShieldCheck" className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">2. Безопасно</h3>
              <p className="text-muted-foreground">
                Все работы выполняются согласно нормам ПУЭ. Лицензия и допуск СРО. Гарантия до 3 лет.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Banknote" className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">3. Честно</h3>
              <p className="text-muted-foreground">
                Фиксированные цены без скрытых доплат. Смета до начала работ. Оплата после сдачи объекта.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Секция услуг */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold">НАШИ УСЛУГИ</h2>
            <Button variant="outline">Все услуги</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="aspect-video bg-primary/20 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
                  alt="Монтаж проводки"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4">Популярное</Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Монтаж проводки</h3>
                <p className="text-muted-foreground mb-4">Полная замена или новая электропроводка в квартире/доме</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" className="w-4 h-4" />
                    от 1 дня
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Banknote" className="w-4 h-4" />
                    от 800 ₽/м²
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="aspect-video bg-accent/20 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop"
                  alt="Электрощиты"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4" variant="secondary">
                  Срочно
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Установка щитов</h3>
                <p className="text-muted-foreground mb-4">Монтаж и замена электрощитов, автоматов и УЗО</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" className="w-4 h-4" />
                    от 2 часов
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Banknote" className="w-4 h-4" />
                    от 3 000 ₽
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="aspect-video bg-primary/20 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&h=400&fit=crop"
                  alt="Освещение"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4" variant="outline">
                  Под ключ
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Монтаж освещения</h3>
                <p className="text-muted-foreground mb-4">Точечные светильники, люстры, LED-подсветка и умный свет</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" className="w-4 h-4" />
                    от 1 часа
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Banknote" className="w-4 h-4" />
                    от 500 ₽/шт
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Секция О нас */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-balance">Надёжная электрика для вашего дома и бизнеса</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Мы выполняем полный спектр электромонтажных работ: от замены розетки до проектирования
                  и монтажа электрики в новостройках под ключ. Работаем аккуратно, без пыли и мусора.
                </p>
                <p>
                  Каждый объект сдаём с замерами и проверкой всех цепей. Вы получаете исполнительную
                  документацию и гарантийный лист на выполненные работы.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-muted-foreground">Объектов сдано</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">3 года</div>
                  <div className="text-muted-foreground">Гарантия на работы</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=750&fit=crop"
                  alt="Электрик за работой"
                  className="w-full h-full object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6 text-balance">Нужен электрик? Позвоните прямо сейчас!</h2>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            Бесплатная консультация и выезд на объект. Рассчитаем стоимость работ в течение 30 минут.
            Работаем без выходных.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Вызвать электрика
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent" asChild>
              <a href="tel:+79326158860">
                <Icon name="Phone" className="w-4 h-4 mr-2" />
                Позвонить нам
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer id="contact" className="bg-secondary/50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Icon name="Zap" className="text-primary" size={22} />
                ЭЛЕКТРИК МАСТЕР
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Профессиональные электромонтажные работы для квартир, домов и офисов. Быстро, безопасно, с гарантией.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm">
                  Телеграм
                </Button>
                <Button variant="outline" size="sm">
                  ВКонтакте
                </Button>
                <Button variant="outline" size="sm">
                  WhatsApp
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>г. Екатеринбург</p>
                <p>ул. Белинского, 132</p>
                <p>Ежедневно 8:00 - 22:00</p>
                <p>+7 (932) 615-88-60</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Монтаж проводки</p>
                <p>Установка щитов</p>
                <p>Монтаж освещения</p>
                <p>Аварийный вызов</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Электрик Мастер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;