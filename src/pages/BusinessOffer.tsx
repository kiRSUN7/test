import { motion } from "motion/react";
import { 
  ArrowLeft, 
  ChevronRight, 
  AlertTriangle, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Clock, 
  Star,
  CheckCircle2,
  ArrowRight,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";

const BusinessOffer = () => {
  const problems = [
    {
      title: "Гигантская ответственность",
      desc: "Вы становитесь «нянькой» для партнеров, отвечая за каждый их шаг."
    },
    {
      title: "Снабжение заказами",
      desc: "Вы обязаны строить маркетинг и обеспечивать поток клиентов за них."
    },
    {
      title: "Мизерные роялти",
      desc: "Риски несопоставимы с прибылью. Вы получаете копейки за огромный труд."
    },
    {
      title: "Бесконечная операционка",
      desc: "Вместо развития своего бизнеса, вы тушите пожары в чужих филиалах."
    }
  ];

  const cases = [
    {
      category: "Сфера услуг (Бьюти-индустрия)",
      client: "Владелица сети студий лазерной эпиляции",
      problem: "2 года упаковки франшизы. Франчайзи постоянно жаловались на отсутствие трафика, требовали поддержки 24/7. Роялти едва покрывали зарплату менеджера.",
      transformation: "Упаковка «Мастер-группы для владельцев студий» по управлению персоналом и маркетингу.",
      result: "12 продаж за 5 дней. Чек: 350 000 ₽. Доход: 4 200 000 ₽. Операционка снизилась на 80%."
    },
    {
      category: "Производство (Пищевое оборудование)",
      client: "Производитель мини-пекарен и тестомесов",
      problem: "Хотел продавать франшизу пекарен «под ключ». Столкнулся с юридическим адом (СанПиН, аренда) и низким интересом из-за входа от 5 млн ₽.",
      transformation: "Наставничество «Бизнес на выпечке: от закупа до первой прибыли» для тех, кто уже купил оборудование.",
      result: "8 контрактов за неделю по 450 000 ₽. Продажи оборудования выросли в 3 раза за счет лояльности учеников."
    },
    {
      category: "Технический B2B (IT-сервис/Ремонт)",
      client: "Основатель сервисного центра по ремонту промышленной электроники",
      problem: "Год пытался найти партнеров. Люди боялись сложности техпроцессов и ответственности за дорогое оборудование. Продаж — 0.",
      transformation: "Перепаковка в технический коучинг «Инженерный бизнес: как зарабатывать на сложном ремонте».",
      result: "Запуск на теплую базу. 15 продаж по 300 000 ₽ за 10 дней. Прибыль: 4 500 000 ₽."
    },
    {
      category: "Образование (Детские центры)",
      client: "Владелец школы робототехники",
      problem: "Запустил 3 франшизы. Франчайзи воровали методики и уходили под своим брендом, чтобы не платить роялти.",
      transformation: "Закрытый экспертный клуб + наставничество по масштабированию детских центров. Продажа чистой методологии.",
      result: "Рекордная выручка — 3 800 000 ₽ за запуск. Больше никаких судов за бренд — только оплата за опыт."
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Высокий Чек",
      desc: "Чистая прибыль от 2,5 млн ₽ за передачу вашего уникального опыта."
    },
    {
      icon: Users,
      title: "Нет Операционки",
      desc: "Вы не контролируете чужой бизнес и не снабжаете его заказами."
    },
    {
      icon: Clock,
      title: "Скорость Запуска",
      desc: "Всего 2 недели на упаковку, а не месяцы на регламенты и ДКК."
    },
    {
      icon: Star,
      title: "Личный Бренд",
      desc: "Вы становитесь лидером мнений в нише, а не просто владельцем сети."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24 md:pt-32 pb-24 selection:bg-gold selection:text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <Link to="/" className="inline-flex items-center gap-2 text-gold hover:gap-4 transition-all mb-8 md:mb-12 group">
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Вернуться на главную</span>
        </Link>

        {/* Hero Section */}
        <div className="mb-20 md:mb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 mb-6 md:mb-8">
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <span className="text-[10px] font-bold tracking-widest uppercase text-gold">Специальное предложение</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-7xl font-display font-bold leading-[1.1] mb-6 md:mb-8">
                Наставничество <br />
                <span className="gold-text-gradient">вместо Франшизы</span>
              </h1>
              <p className="text-lg md:text-xl text-white/60 mb-8 md:mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Запустите своё высокочековое наставничество за 14 дней с чистой прибылью от 2,5 млн рублей. Масштабирование через экспертность.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-10 text-left max-w-md mx-auto lg:mx-0">
                {[
                  "Высокий Чек (от 250к)",
                  "Нет Операционки",
                  "Запуск за 14 дней",
                  "Личный Бренд",
                  "Чистая прибыль от 2,5 млн",
                  "Элитное комьюнити"
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                    {feat}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start">
                <button 
                  onClick={() => document.getElementById('CTA')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 md:px-10 py-4 md:py-5 bg-gold text-black font-bold rounded-full hover:shadow-[0_0_40px_rgba(255,215,0,0.4)] transition-all flex items-center justify-center gap-3 group"
                >
                  Начать трансформацию
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-[4/5] w-full max-w-[450px] ml-auto rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" 
                  alt="Mentorship Expert" 
                  className="w-full h-full object-cover transition-all duration-700 scale-110 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                
                {/* Floating Badge */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-10 -left-6 p-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center border border-gold/30">
                      <Award className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-white/40 font-semibold">Expert Status</div>
                      <div className="text-sm font-bold text-white">Verified Partner</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Problem Section - Redesigned */}
        <section className="mb-24 md:mb-40 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-red-500/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="text-center mb-12 md:mb-20 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-6"
            >
              <AlertTriangle className="w-4 h-4 text-red-500" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-red-500">Опасная зона</span>
            </motion.div>
            <h2 className="text-3xl md:text-6xl font-display font-bold mb-6">Ловушка Франшизы</h2>
            <p className="text-white/40 max-w-2xl mx-auto text-base md:text-lg">
              Многие предприниматели видят во франшизе путь к свободе, но находят там новую работу 24/7. Упаковка франшизы — это часто путь в никуда.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative z-10">
            {problems.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-zinc-900/50 border border-white/5 hover:border-red-500/30 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-red-500/10 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-500">
                    <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4 group-hover:text-red-500 transition-colors">{p.title}</h4>
                  <p className="text-white/40 text-xs md:text-sm leading-relaxed group-hover:text-white/60 transition-colors">{p.desc}</p>
                </div>

                {/* Decorative Number */}
                <div className="absolute -bottom-4 -right-4 text-6xl md:text-8xl font-display font-black text-white/[0.02] group-hover:text-red-500/[0.05] transition-colors">
                  0{i + 1}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quote / Warning Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 md:mt-12 p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-gradient-to-r from-red-950/20 to-zinc-900 border border-red-500/20 flex flex-col md:flex-row items-center gap-6 md:gap-8"
          >
            <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/30">
              <Zap className="w-8 h-8 md:w-10 md:h-10 text-red-500 animate-pulse" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Вы становитесь заложником собственных партнеров</h3>
              <p className="text-white/50 text-sm md:text-base">Франшиза требует бесконечной поддержки, контроля и снабжения. Мы предлагаем модель, где вы продаете опыт, а не обязательства.</p>
            </div>
          </motion.div>
        </section>

        {/* Solution Section */}
        <section className="mb-20 md:mb-32 p-6 md:p-24 rounded-[2.5rem] md:rounded-[4rem] bg-zinc-950 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-gold/10 rounded-full blur-[80px] md:blur-[120px]" />
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl md:text-6xl font-display font-bold mb-6 md:mb-8">Решение iMperius: <br /><span className="gold-text-gradient">Модель Наставничества</span></h2>
            <p className="text-lg md:text-xl text-white/60 mb-6 md:mb-10 leading-relaxed">
              Зачем строить сложную, юридически обязывающую инфраструктуру сети, если ваш главный актив — это ваши знания и опыт?
            </p>
            <p className="text-lg md:text-xl text-white/60 mb-8 md:mb-12 leading-relaxed">
              iMperius Global Scaling предлагает альтернативный путь: Перепаковка вашего бизнеса в Элитное Наставничество. Мы поможем вам продавать вашу экспертизу с чеком <span className="text-gold font-bold">250 000 — 500 000 рублей</span> без жестких обязательств.
            </p>
            <div className="flex items-start md:items-center gap-4 text-gold font-bold text-base md:text-lg">
              <CheckCircle2 className="w-6 h-6 shrink-0 mt-1 md:mt-0" />
              <span>Масштабирование без оков договора франчайзинга</span>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="mb-20 md:mb-32">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Реальные Кейсы</h2>
            <p className="text-white/40 text-sm md:text-base">Системный результат наших клиентов после трансформации</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {cases.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-white/5 border border-white/10 hover:border-gold/30 transition-all group"
              >
                <div className="text-[10px] font-bold tracking-widest uppercase text-gold mb-3 md:mb-4">{c.category}</div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">{c.client}</h3>
                
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <div className="text-white/30 text-[10px] uppercase mb-1 md:mb-2">Проблема:</div>
                    <p className="text-white/60 text-xs md:text-sm leading-relaxed">{c.problem}</p>
                  </div>
                  <div className="h-px bg-white/10 w-full" />
                  <div>
                    <div className="text-gold/50 text-[10px] uppercase mb-1 md:mb-2">Трансформация iMperius:</div>
                    <p className="text-white/80 text-xs md:text-sm leading-relaxed font-medium">{c.transformation}</p>
                  </div>
                  <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-gold/10 border border-gold/20">
                    <div className="text-gold text-[10px] uppercase mb-1 md:mb-2 font-bold">Результат:</div>
                    <p className="text-white text-sm md:text-base font-bold leading-relaxed">{c.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-20 md:mb-32">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Почему Наставничество работает лучше?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-zinc-900 border border-white/5 text-center group hover:border-gold/30 transition-all">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:bg-gold group-hover:text-black transition-all">
                  <b.icon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4">{b.title}</h4>
                <p className="text-white/40 text-xs md:text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section id="CTA" className="relative p-8 md:p-24 rounded-[2.5rem] md:rounded-[4rem] bg-zinc-950 border border-white/10 overflow-hidden text-center">
          <div className="absolute inset-0 circuit-pattern opacity-10" />
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-6xl font-display font-bold mb-6 md:mb-8">Готовы перейти от сложной франшизы <br className="hidden md:block" /> к <span className="gold-text-gradient">сверхприбыльному</span> наставничеству?</h2>
            <p className="text-lg md:text-xl text-white/40 mb-8 md:mb-12 max-w-2xl mx-auto">
              Оставьте заявку на стратегический разбор вашего бизнеса. Мы определим потенциал вашей экспертности и составим план запуска.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <button className="px-8 md:px-12 py-4 md:py-5 bg-gold text-black font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,215,0,0.3)]">
                Записаться на разбор
              </button>
              <a href="tel:+79667003303" className="px-8 md:px-12 py-4 md:py-5 border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                Связаться напрямую
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BusinessOffer;
