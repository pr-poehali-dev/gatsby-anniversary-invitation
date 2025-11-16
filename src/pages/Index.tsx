import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !guests) {
      toast({
        title: "Заполните все поля",
        description: "Пожалуйста, укажите ваше имя и количество гостей",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Спасибо за подтверждение!",
      description: `${name}, мы ждём вас (${guests} чел.) на празднике!`,
    });
    
    setName('');
    setGuests('');
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="relative">
        <div 
          className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat"
          style={{backgroundImage: 'url(https://cdn.poehali.dev/projects/780d3e14-abc1-411a-808b-b2421c65c7b7/files/7350be48-6706-4564-b62d-127dae57222a.jpg)'}}
        ></div>

        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <div className="flex items-center justify-center mb-8">
                <div className="h-px w-20 bg-primary"></div>
                <Icon name="Sparkles" className="mx-4 text-primary" size={40} />
                <div className="h-px w-20 bg-primary"></div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-wider text-primary drop-shadow-lg">
                ПРИГЛАШЕНИЕ
              </h1>
              
              <div className="h-1 w-40 bg-primary mx-auto mb-8 shadow-lg shadow-primary/50"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-2 bg-primary/20 rounded-lg blur-xl"></div>
                  <img 
                    src="https://cdn.poehali.dev/files/3ec6102b-c851-4279-83d0-01c76d7e5cc5.jpeg"
                    alt="Именинница"
                    className="relative rounded-lg shadow-2xl border-4 border-primary w-full max-w-md"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="bg-card border-4 border-primary p-8 shadow-2xl shadow-primary/30 rounded-lg">
                  <div className="space-y-4 text-center">
                    <p className="text-2xl md:text-3xl leading-relaxed font-semibold text-card-foreground">
                      С радостью приглашаю вас отметить мой юбилей
                    </p>
                    
                    <div className="pt-4">
                      <div className="flex items-center justify-center mb-6">
                        <Icon name="Calendar" className="mr-3 text-primary" size={32} />
                        <div>
                          <p className="text-sm uppercase tracking-wide text-muted-foreground">Дата</p>
                          <p className="text-2xl font-bold text-card-foreground">20.12.2025</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-center mb-6">
                        <Icon name="Clock" className="mr-3 text-primary" size={32} />
                        <div>
                          <p className="text-sm uppercase tracking-wide text-muted-foreground">Время</p>
                          <p className="text-2xl font-bold text-card-foreground">16:00</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-center">
                        <Icon name="MapPin" className="mr-3 text-primary" size={32} />
                        <div>
                          <p className="text-sm uppercase tracking-wide text-muted-foreground">Место</p>
                          <p className="text-xl font-semibold text-card-foreground">Банкетный зал «Буа Алан»</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border-4 border-primary p-8 md:p-12 mb-8 shadow-2xl shadow-primary/30 rounded-lg">
              <div className="text-center space-y-4">
                <p className="text-xl md:text-2xl leading-relaxed text-card-foreground font-medium">
                  Погрузитесь в атмосферу 1920-х годов, когда стиль и элегантность были на пике моды. 
                  Одевайтесь в лучшие наряды, ведь вечер обещает быть незабываемым!
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-card border-4 border-primary p-8 shadow-2xl shadow-primary/30 rounded-lg">
                <div className="flex items-center justify-center mb-6">
                  <div className="h-px w-12 bg-primary"></div>
                  <Icon name="Music" className="mx-4 text-primary" size={36} />
                  <div className="h-px w-12 bg-primary"></div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-primary">Программа вечера</h3>
                
                <div className="space-y-3 text-lg text-card-foreground">
                  <div className="flex items-center">
                    <Icon name="Music2" className="mr-3 text-primary" size={24} />
                    <p>Живая музыка</p>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Disc3" className="mr-3 text-primary" size={24} />
                    <p>Танцы</p>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Wine" className="mr-3 text-primary" size={24} />
                    <p>Изысканные угощения</p>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Gift" className="mr-3 text-primary" size={24} />
                    <p>Много сюрпризов</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border-4 border-primary p-8 shadow-2xl shadow-primary/30 rounded-lg">
                <div className="flex items-center justify-center mb-6">
                  <div className="h-px w-12 bg-primary"></div>
                  <Icon name="Shirt" className="mx-4 text-primary" size={36} />
                  <div className="h-px w-12 bg-primary"></div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-primary">Дресс-Код</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-center mb-2">
                      <Icon name="User" className="mr-2 text-primary" size={28} />
                      <h4 className="text-xl font-bold text-card-foreground">Мужчины</h4>
                    </div>
                    <p className="text-center text-card-foreground">
                      Подтяжки и бабочки<br/>
                      Шляпы приветствуются
                    </p>
                  </div>
                  
                  <div className="h-px bg-primary/30"></div>
                  
                  <div>
                    <div className="flex items-center justify-center mb-2">
                      <Icon name="Sparkle" className="mr-2 text-primary" size={28} />
                      <h4 className="text-xl font-bold text-card-foreground">Женщины</h4>
                    </div>
                    <p className="text-center text-card-foreground">
                      Платье, боа и улыбка
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border-4 border-primary p-8 md:p-12 mb-8 shadow-2xl shadow-primary/30 rounded-lg">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="h-px w-16 bg-primary"></div>
                  <Icon name="Check" className="mx-4 text-primary" size={40} />
                  <div className="h-px w-16 bg-primary"></div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">Подтверждение присутствия</h3>
                <p className="text-lg text-muted-foreground">Пожалуйста, сообщите о вашем участии</p>
              </div>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
                <div>
                  <Label htmlFor="name" className="text-card-foreground text-lg mb-2 block">Ваше имя</Label>
                  <Input 
                    id="name"
                    type="text"
                    placeholder="Введите ваше имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border-2 border-primary text-lg bg-input text-card-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div>
                  <Label htmlFor="guests" className="text-card-foreground text-lg mb-2 block">Количество гостей</Label>
                  <Input 
                    id="guests"
                    type="number"
                    min="1"
                    placeholder="1"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="border-2 border-primary text-lg bg-input text-card-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full text-lg py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg shadow-primary/50 border-2 border-primary/50"
                >
                  Подтвердить присутствие
                </Button>
              </form>
            </div>

            <div className="text-center mb-8">
              <p className="text-2xl md:text-3xl leading-relaxed font-medium text-foreground italic">
                Давайте вместе отпразднуем эту важную веху и создадим воспоминания, <br className="hidden md:block"/>
                которые останутся с нами навсегда!
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="h-px w-20 bg-primary"></div>
                <Icon name="Heart" className="mx-4 text-primary" size={40} />
                <div className="h-px w-20 bg-primary"></div>
              </div>
              
              <p className="text-3xl md:text-4xl font-bold text-primary drop-shadow-lg">
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
