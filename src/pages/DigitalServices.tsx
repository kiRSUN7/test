import { motion } from "motion/react";
import { 
  Globe, 
  Search, 
  Instagram, 
  PenTool, 
  ChevronRight, 
  Zap, 
  Target, 
  Layout, 
  MessageSquare 
} from "lucide-react";

const ServiceCard = ({ icon: Icon, title, desc, features, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-gold/30 transition-all group"
  >
    <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="w-7 h-7 text-gold" />
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-white/50 text-sm mb-8 leading-relaxed">{desc}</p>
    <ul className="space-y-3 mb-8">
      {features.map((f: string, i: number) => (
        <li key={i} className="flex items-center gap-2 text-xs text-white/70">
          <div className="w-1 h-1 rounded-full bg-gold" />
          {f}
        </li>
      ))}
    </ul>
    <button className="flex items-center gap-2 text-gold text-sm font-bold group-hover:gap-3 transition-all">
      Подробнее <ChevronRight className="w-4 h-4" />
    </button>
  </motion.div>
);

const DigitalServices = () => {
  const services = [
    {
      icon: Globe,
      title: "Создание сайтов",
      desc: "Разработка высококонверсионных лендингов и корпоративных порталов с уникальным дизайном.",
      features: ["Адаптивная верстка", "SEO-оптимизация", "Интеграция с CRM", "Высокая скорость загрузки"],
      delay: 0.1
    },
    {
      icon: Search,
      title: "Яндекс Директ",
      desc: "Настройка и ведение контекстной рекламы для привлечения целевого трафика.",
      features: ["Анализ конкурентов", "Сбор семантики", "Настройка ретаргетинга", "Еженедельная отчетность"],
      delay: 0.2
    },
    {
      icon: Instagram,
      title: "Упаковка соцсетей",
      desc: "Создание единого визуального стиля и стратегии продвижения в социальных медиа.",
      features: ["Дизайн профиля", "Контент-план", "Reels & Stories стратегия", "Работа с блогерами"],
      delay: 0.3
    },
    {
      icon: PenTool,
      title: "Копирайтинг",
      desc: "Создание смысловых текстов, которые продают ваш бренд и формируют лояльность.",
      features: ["Тексты для сайтов", "Посты для соцсетей", "Email-рассылки", "PR-статьи"],
      delay: 0.4
    }
  ];

  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full circuit-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-40 -left-20 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <Zap className="w-3 h-3 text-gold" />
            <span className="text-[10px] font-semibold tracking-widest uppercase text-white/60">Additional Digital Solutions</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Digital-поддержка вашего <span className="gold-text-gradient">масштабирования</span>
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
            Комплексные решения для продвижения бренда: от разработки архитектуры сайта до настройки рекламных кампаний и упаковки смыслов.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>

        {/* Detailed Sections */}
        <div className="mt-32 space-y-32">
          {/* Section 1: Web & Ads */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold mb-6">Веб-разработка и трафик</h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                Мы создаем не просто сайты, а инструменты продаж. Каждый элемент интерфейса проектируется с учетом пользовательского пути и психологии конверсии. В связке с точной настройкой Яндекс Директ это дает кратный рост заявок.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <Target className="w-6 h-6 text-gold" />
                  <span className="text-sm font-medium">Точное попадание в целевую аудиторию</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <Layout className="w-6 h-6 text-gold" />
                  <span className="text-sm font-medium">Современный UX/UI дизайн</span>
                </div>
              </div>
            </motion.div>
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-zinc-900">
              <img 
                src="https://picsum.photos/seed/digital1/800/450" 
                alt="Digital Development" 
                className="w-full h-full object-cover opacity-50"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent" />
            </div>
          </div>

          {/* Section 2: SMM & Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-zinc-900">
              <img 
                src="https://picsum.photos/seed/digital2/800/450" 
                alt="Content Strategy" 
                className="w-full h-full object-cover opacity-50"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-bl from-gold/10 to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl font-display font-bold mb-6">Смыслы и упаковка</h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                В эпоху перенасыщения информацией побеждают те, кто умеет рассказывать истории. Мы упаковываем ваш бренд в социальных сетях так, чтобы он вызывал доверие с первого взгляда, и пишем тексты, которые резонируют с ценностями вашей аудитории.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <MessageSquare className="w-6 h-6 text-gold" />
                  <span className="text-sm font-medium">Копирайтинг с глубоким погружением в продукт</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <Instagram className="w-6 h-6 text-gold" />
                  <span className="text-sm font-medium">Эстетичный и системный SMM</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 rounded-[3rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full circuit-pattern opacity-5 pointer-events-none" />
          <h2 className="text-4xl font-display font-bold mb-6">Готовы усилить свой бренд?</h2>
          <p className="text-white/50 mb-10 max-w-xl mx-auto">
            Оставьте заявку на бесплатную консультацию по digital-стратегии вашего бизнеса.
          </p>
          <button className="px-10 py-5 bg-gold text-black font-bold rounded-full hover:scale-105 transition-transform">
            Обсудить проект
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default DigitalServices;
