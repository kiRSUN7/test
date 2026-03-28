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
  ArrowRight,
  Activity,
  Globe,
  BarChart3,
  Award,
  CheckCircle2,
  Shield,
  Send,
  Check
} from "lucide-react";
import { useCallback, useEffect, useRef, useState, FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      badge: "Global Scaling Expert",
      title: "iMperius: Масштабирование бизнеса через франчайзинг",
      desc: "12 лет опыта упаковки и масштабирования. Работа напрямую с основателем и командой узких специалистов без лишних посредников.",
      image: "/hero-image.jpg.png",
      cta: "Получить аудит",
      secondaryCta: "О компании",
      path: "/#Контакты"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-16 lg:pt-20 lg:pb-0 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-gold/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-gold/5 rounded-full blur-[120px]" />
      <div className="absolute inset-0 circuit-pattern opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-white/60">{slides[currentSlide].badge}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6 break-words">
              {slides[currentSlide].title.split(':').length > 1 ? (
                <>
                  {slides[currentSlide].title.split(':')[0]}: <span className="gold-text-gradient">{slides[currentSlide].title.split(':')[1]}</span>
                </>
              ) : (
                <span className="gold-text-gradient">{slides[currentSlide].title}</span>
              )}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/60 mb-10 max-w-xl leading-relaxed">
              {slides[currentSlide].desc}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => {
                  if (slides[currentSlide].path.startsWith('/#')) {
                    const id = slides[currentSlide].path.substring(2);
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    navigate(slides[currentSlide].path);
                  }
                }}
                className="px-8 py-4 bg-gold text-black font-bold rounded-full flex items-center justify-center gap-2 hover:scale-105 transition-transform group"
              >
                {slides[currentSlide].cta}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-colors">
                {slides[currentSlide].secondaryCta}
              </button>
            </div>
          </motion.div>

          <motion.div
            key={`image-${currentSlide}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative block mt-12 lg:mt-0"
          >
            <div className="relative z-10">
              {/* Expert Image Container */}
              <div className="relative aspect-[4/5] w-full max-w-[450px] mx-auto lg:ml-auto rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group">
                <img 
                  src={slides[currentSlide].image} 
                  alt={slides[currentSlide].title} 
                  className="w-full h-full object-cover transition-all duration-700 scale-110 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                
                {/* Floating Badges removed as per user request */}

                {/* Bottom Info Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-8 pt-20 bg-gradient-to-t from-black to-transparent">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-4 h-4 text-gold" />
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">Founder & Lead Strategist</span>
                  </div>
                  <div className="text-2xl font-display font-bold text-white">Direct Expert Access</div>
                </div>
              </div>

              {/* Decorative background elements */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-gold/10 rounded-full blur-[100px] -z-10" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 border-b-2 border-l-2 border-gold/20 rounded-bl-[3rem] -z-10" />
              <div className="absolute top-20 -right-4 w-20 h-20 border-t-2 border-r-2 border-gold/20 rounded-tr-[2rem] -z-10" />
            </div>
          </motion.div>
        </div>

        {/* Slider Controls */}
        <div className="flex justify-center gap-3 mt-12">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-12 h-1 rounded-full transition-all ${currentSlide === idx ? "bg-gold" : "bg-white/20"}`}
            />
          ))}
        </div>
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
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800" 
                alt="Expertise" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
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
      title: "Готовый бизнес (идея, инструкция)",
      price: "89 000 ₽",
      desc: "Полный комплект для запуска вашего бизнеса с нуля.",
      features: [
        "Разработка концепции",
        "Фин. Модель",
        "Презентация",
        "Пошаговая инструкция",
        "Договор",
        "Сопровождение продаж",
        "Доп: Сайт, Соц. сети, Директ, Метрика"
      ],
      accent: true
    },
    {
      title: "Оптимальный",
      price: "109 000 ₽",
      desc: "Полная разработка без лишних трат.",
      features: ["Полная упаковка", "Маркетинговая стратегия", "Детальная финмодель", "Презентация для инвесторов", "Обучающие материалы"],
      accent: false
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

              <Link 
                to="/#Контакты"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('Контакты')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-full py-4 rounded-xl font-bold transition-all text-center block ${pkg.accent ? "bg-gold text-black hover:bg-gold-neon" : "bg-white/10 text-white hover:bg-white/20"}`}
              >
                Выбрать тариф
              </Link>
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
                { title: "Прозрачное ценообразование", desc: "Никаких скрытых платежей и комиссий. Фиксированная стоимость и четкие сроки." },
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
            className="relative aspect-[4/5] lg:aspect-auto lg:h-full min-h-[500px] rounded-[2.5rem] overflow-hidden border border-white/10 group"
          >
            <img 
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800" 
              alt="Expert Focus" 
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            
            <div className="absolute inset-0 p-12 flex flex-col justify-end relative z-10">
              <div className="absolute top-0 right-0 p-8">
                <TrendingUp className="w-20 h-20 text-gold opacity-20" />
              </div>
              
              <div className="text-6xl font-display font-bold text-gold mb-4">100%</div>
              <h3 className="text-3xl font-bold mb-4 text-white">Фокус на масштабировании</h3>
              <p className="text-white/70 leading-relaxed max-w-md">
                Мы не просто «упаковываем» франшизу. Мы создаем надежный фундамент для кратного роста вашего бизнеса, обеспечивая контроль качества и устойчивое развитие сети.
              </p>
              
              <div className="mt-8 flex gap-4">
                <div className="w-12 h-1 bg-gold rounded-full" />
                <div className="w-12 h-1 bg-white/20 rounded-full" />
                <div className="w-12 h-1 bg-white/20 rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Quiz = ({ onFinish }: { onFinish: (answers: string[]) => void }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const steps = [
    {
      question: "Тип вашего бизнеса",
      options: ["Услуги", "Ритейл", "Производство", "IT / Online", "Другое"]
    },
    {
      question: "Текущий оборот в месяц",
      options: ["До 500 000 ₽", "500к – 2 млн ₽", "2 млн – 10 млн ₽", "Более 10 млн ₽"]
    },
    {
      question: "Цель масштабирования",
      options: ["Запуск франшизы", "Выход на новые регионы", "Автоматизация процессов", "Увеличение прибыли"]
    }
  ];

  const handleOptionSelect = (option: string) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setIsFinished(true);
      onFinish(newAnswers);
    }
  };

  return (
    <section id="Квиз" className="py-24 bg-black relative">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold mb-4">Рассчитайте потенциал роста</h2>
          <p className="text-white/40">Ответьте на 3 вопроса и получите предварительный план масштабирования</p>
        </div>

        <div className="bg-zinc-900/50 border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
          {!isFinished ? (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="flex justify-between items-end mb-4">
                <span className="text-gold font-mono text-sm uppercase tracking-widest">Вопрос {step + 1} из {steps.length}</span>
                <div className="flex gap-1">
                  {steps.map((_, i) => (
                    <div key={i} className={`h-1 w-8 rounded-full transition-colors ${i <= step ? 'bg-gold' : 'bg-white/10'}`} />
                  ))}
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold">{steps[step].question}</h3>

              <div className="grid gap-4">
                {steps[step].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionSelect(option)}
                    className="w-full text-left p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/50 hover:bg-gold/5 transition-all group flex justify-between items-center"
                  >
                    <span className="text-lg group-hover:text-white transition-colors">{option}</span>
                    <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-gold transition-colors" />
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-gold" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Анализ готов!</h3>
              <p className="text-white/60 mb-8 max-w-md mx-auto">
                Мы подготовили предварительный расчет для вашего бизнеса. Оставьте контакты ниже, чтобы получить PDF-отчет.
              </p>
              <button 
                onClick={() => document.getElementById('Контакты')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gold text-black font-bold rounded-full hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] transition-all"
              >
                Получить результат
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

const Contact = ({ quizAnswers }: { quizAnswers: string[] }) => {
  const [formState, setFormState] = useState({ name: '', phone: '', comment: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formState,
          answers: quizAnswers
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormState({ name: '', phone: '', comment: '' });
      } else {
        const data = await response.json();
        setError(data.error || 'Ошибка при отправке');
      }
    } catch (err) {
      setError('Ошибка сети. Попробуйте позже.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="Контакты" className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-display font-bold mb-6">Готовы к росту?</h2>
            <p className="text-xl text-white/50 mb-12 leading-relaxed">
              Оставьте заявку на бесплатную стратегическую сессию, и мы разберем ваш бизнес по косточкам.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-black transition-all duration-300">
                  <Zap className="w-6 h-6 text-gold group-hover:text-black" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Связаться напрямую</h4>
                  <a href="tel:+79667003303" className="text-white/40 text-sm hover:text-gold transition-colors">+7 (966) 700-33-03</a>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center shrink-0">
                  <Globe className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Работаем по всему миру</h4>
                  <p className="text-white/40 text-sm">Удаленное сопровождение и выездные сессии</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Конфиденциальность 100%</h4>
                  <p className="text-white/40 text-sm">Подписываем NDA перед началом любого обсуждения</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900 border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Заявка принята!</h3>
                <p className="text-white/50">Мы свяжемся с вами в течение 30 минут.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-white/40 mb-2 ml-1">Ваше имя</label>
                  <input 
                    type="text" 
                    required
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                    placeholder="Иван Иванов"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-gold/50 focus:bg-white/10 transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-white/40 mb-2 ml-1">Телефон</label>
                  <input 
                    type="tel" 
                    required
                    value={formState.phone}
                    onChange={e => setFormState({...formState, phone: e.target.value})}
                    placeholder="+7 (999) 000-00-00"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-gold/50 focus:bg-white/10 transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-white/40 mb-2 ml-1">Комментарий</label>
                  <textarea 
                    rows={4}
                    value={formState.comment}
                    onChange={e => setFormState({...formState, comment: e.target.value})}
                    placeholder="Расскажите кратко о вашем проекте..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-gold/50 focus:bg-white/10 transition-all outline-none resize-none"
                  />
                </div>
                {error && (
                  <p className="text-red-500 text-xs text-center mb-4">{error}</p>
                )}
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-gold text-black font-bold rounded-2xl hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] transition-all flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                  {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </button>
                <p className="text-[10px] text-center text-white/20">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);

  return (
    <div className="font-sans selection:bg-gold selection:text-black">
      <main>
        <Hero />
        <About />
        <Pricing />
        <Process />
        <Advantages />
        <Quiz onFinish={setQuizAnswers} />
        <Contact quizAnswers={quizAnswers} />
      </main>
    </div>
  );
}

export default Home;
