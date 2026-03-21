import { motion } from "motion/react";
import { 
  Zap, 
  ShieldCheck, 
  Cpu, 
  TrendingUp, 
  Scale, 
  Users, 
  FileText, 
  ChevronRight,
  ArrowRight
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-gold/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-gold/5 rounded-full blur-[120px]" />
      <div className="absolute inset-0 circuit-pattern opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-xs font-semibold tracking-widest uppercase text-white/60">Global Scaling Expert</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6">
            iMperius: <span className="gold-text-gradient">Масштабирование</span> бизнеса через франчайзинг
          </h1>
          <p className="text-lg md:text-xl text-white/60 mb-10 max-w-lg leading-relaxed">
            12 лет опыта упаковки и масштабирования. Работа напрямую с основателем и командой узких специалистов без лишних посредников.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gold text-black font-bold rounded-full flex items-center justify-center gap-2 hover:scale-105 transition-transform group">
              Получить аудит
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-colors">
              Наши кейсы
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 bg-gradient-to-br from-white/10 to-transparent p-1 rounded-2xl border border-white/10 backdrop-blur-sm">
             <div className="bg-black/40 rounded-xl p-8 aspect-square flex flex-col justify-between border border-white/5">
                <div className="flex justify-between items-start">
                  <Cpu className="w-12 h-12 text-gold opacity-50" />
                  <div className="text-right">
                    <div className="text-xs text-white/40 uppercase tracking-widest mb-1">Efficiency</div>
                    <div className="text-2xl font-bold text-gold">98.4%</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "75%" }}
                      transition={{ duration: 2, delay: 0.5 }}
                      className="h-full bg-gold" 
                    />
                  </div>
                  <div className="flex justify-between text-[10px] uppercase tracking-tighter text-white/30 font-mono">
                    <span>Scaling Vector</span>
                    <span>Market Expansion</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="h-20 bg-white/5 rounded-lg border border-white/5" />
                  ))}
                </div>
             </div>
          </div>
          {/* Decorative lines */}
          <div className="absolute -top-10 -right-10 w-40 h-40 border-t-2 border-r-2 border-gold/20 rounded-tr-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 border-b-2 border-l-2 border-gold/20 rounded-bl-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="О компании" className="py-24 bg-zinc-950/50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-display font-bold">О компании</h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Мы отказались от модели агентства с раздутым штатом менеджеров по продажам. В iMperius вы работаете напрямую с основателем и командой экспертов, каждый из которых является лучшим в своей нише.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: ShieldCheck, title: "Юрист", desc: "Защита ИС и договоры" },
                { icon: TrendingUp, title: "Экономист", desc: "Финмодели и ROI" },
                { icon: Zap, title: "Маркетолог", desc: "Упаковка и лиды" },
                { icon: Users, title: "Основатель", desc: "Стратегия и контроль" },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start p-4 rounded-xl bg-white/5 border border-white/10">
                  <item.icon className="w-6 h-6 text-gold shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-xs text-white/40 uppercase tracking-wider">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black group">
              <img 
                src="https://picsum.photos/seed/business/800/450" 
                alt="Expertise" 
                className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="text-3xl font-bold text-gold mb-1">12+ лет</div>
                <div className="text-xs uppercase tracking-widest text-white/60">Практического опыта</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const packages = [
    {
      title: "Быстрый старт",
      price: "89 000 ₽",
      desc: "Идеален для оформления готовой сделки.",
      features: ["Юридический аудит", "Договор франчайзинга", "Консультация эксперта", "Базовая финмодель"],
      accent: false
    },
    {
      title: "Оптимальный",
      price: "109 000 ₽",
      desc: "Полная разработка без лишних трат.",
      features: ["Полная упаковка", "Маркетинговая стратегия", "Детальная финмодель", "Презентация для инвесторов", "Обучающие материалы"],
      accent: true
    },
    {
      title: "VIP-упаковка",
      price: "300 000 ₽",
      desc: "Премиальный продукт для сильных брендов.",
      features: ["Индивидуальная стратегия", "Личное сопровождение", "Масштабирование под ключ", "Защита ИС во всех регионах", "Гарантия результата"],
      accent: false
    }
  ];

  return (
    <section id="Тарифы" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Тарифные пакеты</h2>
          <p className="text-white/40 max-w-xl mx-auto">Выберите оптимальный уровень погружения для вашего бизнеса</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-8 rounded-3xl border transition-all duration-500 hover:-translate-y-2 ${pkg.accent ? "bg-white/10 border-gold shadow-[0_0_30px_rgba(255,215,0,0.1)]" : "bg-white/5 border-white/10 hover:border-white/30"}`}
            >
              {pkg.accent && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-black text-[10px] font-bold uppercase tracking-widest rounded-full">
                  Популярный выбор
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
              <div className="text-3xl font-display font-bold text-gold mb-4">
                <span className="text-sm font-normal text-white/40 mr-1">от</span>
                {pkg.price}
              </div>
              <p className="text-sm text-white/60 mb-8 h-12">{pkg.desc}</p>
              
              <ul className="space-y-4 mb-10">
                {pkg.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                    <ShieldCheck className="w-5 h-5 text-gold shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${pkg.accent ? "bg-gold text-black hover:bg-gold-neon" : "bg-white/10 text-white hover:bg-white/20"}`}>
                Выбрать тариф
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { icon: FileText, title: "Аудит", desc: "Анализ текущей модели и потенциала" },
    { icon: Cpu, title: "Упаковка", desc: "Создание стандартов и документов" },
    { icon: Zap, title: "Запуск", desc: "Тестирование и первые продажи" },
    { icon: Scale, title: "Масштаб", desc: "Выход на глобальные рынки" },
  ];

  return (
    <section id="Процесс" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-display font-bold mb-4">Технологический процесс</h2>
          <p className="text-white/40">Четкий алгоритм превращения бизнеса в империю</p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 group-hover:border-gold/50 group-hover:shadow-[0_0_20px_rgba(255,215,0,0.2)] transition-all duration-500 relative">
                  <step.icon className="w-8 h-8 text-gold" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gold text-black text-xs font-bold flex items-center justify-center">
                    0{idx + 1}
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Advantages = () => {
  return (
    <section id="Преимущества" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-8">Преимущества работы с нами</h2>
            <div className="space-y-6">
              {[
                { title: "Прозрачное ценообразование", desc: "Никаких скрытых платежей и комиссий. Вы платите только за результат." },
                { title: "Отсутствие раздутого штата", desc: "Вы не оплачиваете работу десятков менеджеров, только экспертов." },
                { title: "Интеллектуальная собственность", desc: "Полная защита вашего бренда и технологий на всех этапах." },
              ].map((adv, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-gold" />
                    {adv.title}
                  </h4>
                  <p className="text-sm text-white/50 leading-relaxed">{adv.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gold/5 border border-gold/20 rounded-3xl p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4">
              <TrendingUp className="w-24 h-24 text-gold opacity-10" />
            </div>
            <div className="relative z-10">
              <div className="text-6xl font-display font-bold text-gold mb-4">100%</div>
              <h3 className="text-2xl font-bold mb-4">Фокус на масштабировании</h3>
              <p className="text-white/60 leading-relaxed">
                Мы не просто «упаковываем» франшизу. Мы создаем систему, которая работает автономно и приносит прибыль владельцу, минимизируя операционные риски.
              </p>
              <div className="mt-8 flex gap-4">
                <div className="w-12 h-1 bg-gold rounded-full" />
                <div className="w-12 h-1 bg-white/10 rounded-full" />
                <div className="w-12 h-1 bg-white/10 rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Trust = () => {
  return (
    <section id="Кейсы" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {[
            { label: "Успешных кейсов", val: "150+" },
            { label: "Средний ROI", val: "45%" },
            { label: "Стран присутствия", val: "12" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="text-5xl font-display font-bold text-gold mb-2">{stat.val}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-white/40">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 grid md:grid-cols-2 gap-8">
          {[1, 2].map(i => (
            <div key={i} className="group relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-black">
              <img 
                src={`https://picsum.photos/seed/case${i}/800/450`} 
                alt="Case Study" 
                className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black to-transparent">
                <h4 className="text-2xl font-bold mb-2">Кейс: Сеть кофеен {i === 1 ? "Global Brew" : "Urban Fit"}</h4>
                <p className="text-sm text-white/60 mb-4">Масштабирование с 2 до 45 точек за 18 месяцев.</p>
                <button className="flex items-center gap-2 text-gold text-sm font-bold group-hover:gap-4 transition-all">
                  Смотреть детали <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="font-sans selection:bg-gold selection:text-black">
      <main>
        <Hero />
        <About />
        <Pricing />
        <Process />
        <Advantages />
        <Trust />
      </main>
    </div>
  );
}

export default Home;
