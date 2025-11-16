import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="relative">
        <div 
          className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat"
          style={{backgroundImage: 'url(https://cdn.poehali.dev/projects/780d3e14-abc1-411a-808b-b2421c65c7b7/files/7350be48-6706-4564-b62d-127dae57222a.jpg)'}}
        ></div>
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary rotate-45"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border-2 border-primary rounded-full"></div>
          <div className="absolute bottom-40 left-1/4 w-20 h-20 border-2 border-primary"></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 border-2 border-primary rotate-12"></div>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="flex items-center justify-center mb-8">
                <div className="h-px w-16 bg-primary"></div>
                <Icon name="Sparkles" className="mx-4 text-primary" size={32} />
                <div className="h-px w-16 bg-primary"></div>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-wider text-primary">
                ПРИГЛАШЕНИЕ
              </h1>
              
              <div className="h-1 w-32 bg-primary mx-auto mb-8"></div>
            </div>

            <div className="bg-card border-2 border-primary p-8 md:p-12 mb-8 relative animate-scale-in">
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary"></div>
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-primary"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary"></div>

              <div className="text-center space-y-6">
                <p className="text-2xl md:text-3xl leading-relaxed">
                  Дорогие друзья!
                </p>
                
                <p className="text-xl md:text-2xl leading-relaxed font-light">
                  С радостью приглашаю вас отпраздновать мой юбилей
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card border border-primary p-6 text-center hover:scale-105 transition-transform duration-300">
                <Icon name="Calendar" className="mx-auto mb-3 text-primary" size={40} />
                <h3 className="text-2xl font-semibold mb-2 text-primary">Дата</h3>
                <p className="text-xl">20.12.2025</p>
              </div>

              <div className="bg-card border border-primary p-6 text-center hover:scale-105 transition-transform duration-300">
                <Icon name="Clock" className="mx-auto mb-3 text-primary" size={40} />
                <h3 className="text-2xl font-semibold mb-2 text-primary">Время</h3>
                <p className="text-xl">16:00</p>
              </div>
            </div>

            <div className="bg-card border border-primary p-8 mb-8 text-center">
              <Icon name="MapPin" className="mx-auto mb-3 text-primary" size={40} />
              <h3 className="text-2xl font-semibold mb-2 text-primary">Место</h3>
              <p className="text-xl">Банкетный зал «Буа Алан»</p>
            </div>

            <div className="bg-muted border-2 border-primary p-8 md:p-12 mb-8 relative">
              <div className="text-center space-y-4">
                <p className="text-xl md:text-2xl leading-relaxed italic">
                  Погрузитесь в атмосферу 1920-х годов, когда стиль и элегантность были на пике моды. 
                  Одевайтесь в лучшие наряды, ведь вечер обещает быть незабываемым!
                </p>
              </div>
            </div>

            <div className="bg-card border border-primary p-8 mb-8">
              <div className="flex items-center justify-center mb-6">
                <div className="h-px w-12 bg-primary"></div>
                <Icon name="Music" className="mx-4 text-primary" size={32} />
                <div className="h-px w-12 bg-primary"></div>
              </div>
              
              <h3 className="text-3xl font-semibold mb-4 text-center text-primary">Программа вечера</h3>
              
              <div className="space-y-3 text-lg md:text-xl text-center">
                <p>✨ Живая музыка</p>
                <p>💃 Танцы</p>
                <p>🍾 Изысканные угощения</p>
                <p>🎉 Много сюрпризов</p>
              </div>
            </div>

            <div className="bg-card border-2 border-primary p-8 md:p-12 mb-8">
              <h3 className="text-3xl font-semibold mb-6 text-center text-primary">Дресс-Код</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <Icon name="User" className="mx-auto mb-3 text-primary" size={40} />
                  <h4 className="text-2xl font-semibold mb-3 text-primary">Мужчины</h4>
                  <p className="text-lg leading-relaxed">
                    Подтяжки и бабочки.<br/>
                    Шляпы тоже приветствуются
                  </p>
                </div>
                
                <div className="text-center">
                  <Icon name="Sparkle" className="mx-auto mb-3 text-primary" size={40} />
                  <h4 className="text-2xl font-semibold mb-3 text-primary">Женщины</h4>
                  <p className="text-lg leading-relaxed">
                    Платье, боа и улыбка
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mb-8">
              <p className="text-2xl md:text-3xl leading-relaxed italic">
                Давайте вместе отпразднуем эту важную веху и создадим воспоминания, <br/>
                которые останутся с нами навсегда!
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="h-px w-16 bg-primary"></div>
                <Icon name="Heart" className="mx-4 text-primary" size={32} />
                <div className="h-px w-16 bg-primary"></div>
              </div>
              
              <p className="text-3xl font-semibold text-primary">
                С нетерпением жду вас!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;