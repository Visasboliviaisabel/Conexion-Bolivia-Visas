import type { Locale } from "./config";

export type GuideContent = {
  title: string;
  subtitle: string;
  intro: string;
  stepsTitle: string;
  steps: { title: string; text: string }[];
  faqTitle: string;
  faqs: { q: string; a: string }[];
  ctaTitle: string;
  ctaText: string;
};

export const guideNav: Record<Locale, string> = {
  es: "Guía",
  en: "Guide",
  zh: "指南",
  "zh-tw": "指南",
  ar: "دليل",
  pt: "Guia",
  ru: "Гид",
  id: "Panduan",
  uk: "Посібник",
  sr: "Vodič",
};

export const guideMeta: Record<Locale, { title: string; description: string }> = {
  es: {
    title: "Guía Visa Bolivia Cusco 2026 | Requisitos y Proceso – Conexión Bolivia",
    description:
      "¿Necesitas visa para Bolivia? Guía completa: requisitos, documentos, tiempos de trámite en Cusco y cómo visitar el Salar de Uyuni sin complicaciones.",
  },
  en: {
    title: "Bolivia Visa Guide Cusco 2026 | Requirements & Process – Conexión Bolivia",
    description:
      "Do you need a visa for Bolivia? Complete guide: requirements, documents, processing times in Cusco, and how to visit Salar de Uyuni hassle-free.",
  },
  zh: {
    title: "玻利维亚签证指南 库斯科 2026 | 要求与流程 – Conexión Bolivia",
    description:
      "去玻利维亚需要签证吗？完整指南：材料要求、库斯科办理时间，以及如何顺利前往乌尤尼盐沼。",
  },
  "zh-tw": {
    title: "玻利維亞簽證指南 庫斯科 2026 | 要求與流程 – Conexión Bolivia",
    description:
      "去玻利維亞需要簽證嗎？完整指南：材料要求、庫斯科辦理時間，以及如何順利前往烏尤尼鹽沼。",
  },
  ar: {
    title: "دليل تأشيرة بوليفيا كوسكو 2026 | المتطلبات والإجراءات – Conexión Bolivia",
    description:
      "هل تحتاج تأشيرة لدخول بوليفيا؟ دليل شامل: المتطلبات والمستندات وأوقات المعالجة في كوسكو وزيارة سالار دي أيويوني.",
  },
  pt: {
    title: "Guia Visto Bolívia Cusco 2026 | Requisitos e Processo – Conexión Bolivia",
    description:
      "Precisa de visto para a Bolívia? Guia completo: requisitos, documentos, prazos em Cusco e como visitar o Salar de Uyuni sem complicações.",
  },
  ru: {
    title: "Гид по визе в Боливию Куско 2026 | Требования и процесс – Conexión Bolivia",
    description:
      "Нужна ли виза в Боливию? Полный гид: требования, документы, сроки оформления в Куско и поездка на Салар-де-Уюни.",
  },
  id: {
    title: "Panduan Visa Bolivia Cusco 2026 | Syarat & Proses – Conexión Bolivia",
    description:
      "Apakah perlu visa ke Bolivia? Panduan lengkap: syarat, dokumen, waktu proses di Cusco, dan tips ke Salar de Uyuni.",
  },
  uk: {
    title: "Посібник з візи в Болівію Куско 2026 | Вимоги та процес – Conexión Bolivia",
    description:
      "Чи потрібна віза в Болівію? Повний посібник: вимоги, документи, терміни оформлення в Куско та поїздка на Салар-де-Уюні.",
  },
  sr: {
    title: "Vodič za vizu Bolivija Kusko 2026 | Uslovi i proces – Conexión Bolivia",
    description:
      "Da li vam treba viza za Boliviju? Kompletan vodič: uslovi, dokumenti, vreme obrade u Kusku i poseta Salar de Uyuni.",
  },
};

export const guideContent: Record<Locale, GuideContent> = {
  es: {
    title: "Guía completa: visa para Bolivia en Cusco",
    subtitle: "Todo lo que necesitas saber antes de viajar al Salar de Uyuni",
    intro:
      "Miles de viajeros de China, Indonesia, India, Serbia, Ucrania y otros países pasan por Cusco rumbo a Bolivia. Esta guía responde las preguntas más frecuentes sobre cómo obtener tu visa de forma rápida y segura en nuestra oficina, frente al Consulado de Bolivia.",
    stepsTitle: "Cómo obtener tu visa en 4 pasos",
    steps: [
      { title: "Contáctanos por WhatsApp", text: "Escríbenos con tu nacionalidad y fechas de viaje. Te confirmamos si necesitas visa y qué documentos preparar." },
      { title: "Prepara tus documentos", text: "Pasaporte vigente, foto, itinerario, reserva de hotel, sustento económico y vacuna de fiebre amarilla si aplica." },
      { title: "Visita nuestra oficina en Cusco", text: "Estamos frente al Consulado de Bolivia en Clorinda Matto de Turner 308. Si envías documentos antes, la recogida toma ~10 minutos." },
      { title: "Recibe tu visa y viaja a Bolivia", text: "Con tu visa lista, continúa tu ruta al Salar de Uyuni, La Paz o el altiplano boliviano sin demoras en la frontera." },
    ],
    faqTitle: "Preguntas frecuentes sobre la visa de Bolivia",
    faqs: [
      { q: "¿Necesito visa para entrar a Bolivia?", a: "Depende de tu nacionalidad. Viajeros de muchos países — incluyendo China, India, Indonesia, Serbia y Ucrania — necesitan visa. Contáctanos por WhatsApp con tu pasaporte y te confirmamos en minutos." },
      { q: "¿Puedo tramitar la visa en Cusco, Perú?", a: "Sí. Cusco tiene consulado de Bolivia y nuestra oficina está justo enfrente. Es la forma más conveniente para quienes visitan el Salar de Uyuni, ya que Cusco es parada natural en la ruta." },
      { q: "¿Cuánto demora el trámite de visa en Cusco?", a: "Con todos los documentos en mano, el trámite toma aproximadamente 30 minutos. Si envías documentos con anticipación por WhatsApp o email, recoger tu visa toma unos 10 minutos." },
      { q: "¿Qué documentos necesito para la visa turística?", a: "Generalmente: pasaporte vigente (mínimo 6 meses), foto tipo pasaporte con fondo blanco, itinerario de viaje, reserva de hospedaje, sustento económico (estado de cuenta) y certificado de vacuna contra fiebre amarilla si tu ruta lo requiere." },
      { q: "¿Necesito visa antes de ir al Salar de Uyuni?", a: "Sí, si tu nacionalidad lo requiere. Lo ideal es tramitarla en Cusco antes de cruzar a Bolivia. Así evitas demoras, multas o problemas en la frontera de Desaguadero o Villazón." },
      { q: "¿Dónde queda el consulado de Bolivia en Cusco?", a: "El Consulado de Bolivia está en Cusco, Perú. Nuestra oficina Conexión Bolivia está en Clorinda Matto de Turner 308, directamente frente al consulado." },
      { q: "¿Puedo obtener la visa el mismo día?", a: "Sí, en la mayoría de casos. Ven a nuestra oficina con todos los documentos listos y te guiamos en el proceso el mismo día." },
      { q: "¿Por qué tramitar la visa en Cusco y no en la frontera?", a: "En Cusco tienes asesoría personalizada, revisión de documentos antes del trámite y un proceso más rápido y seguro. En la frontera no hay asesoría y los errores pueden costarte tiempo o la entrada al país." },
    ],
    ctaTitle: "¿Listo para tu visa?",
    ctaText: "Escríbenos por WhatsApp y te guiamos paso a paso. Respuesta inmediata.",
  },

  en: {
    title: "Complete guide: Bolivia visa in Cusco",
    subtitle: "Everything you need to know before visiting Salar de Uyuni",
    intro:
      "Thousands of travelers from China, Indonesia, India, Serbia, Ukraine, and other countries pass through Cusco on their way to Bolivia. This guide answers the most common questions about getting your visa quickly and safely at our office, directly in front of the Bolivian Consulate.",
    stepsTitle: "How to get your visa in 4 steps",
    steps: [
      { title: "Contact us on WhatsApp", text: "Message us with your nationality and travel dates. We'll confirm if you need a visa and which documents to prepare." },
      { title: "Prepare your documents", text: "Valid passport, photo, itinerary, hotel reservation, proof of funds, and yellow fever vaccination if required." },
      { title: "Visit our Cusco office", text: "We're located at Clorinda Matto de Turner 308, in front of the Bolivian Consulate. If you send documents ahead, pickup takes ~10 minutes." },
      { title: "Receive your visa and travel to Bolivia", text: "With your visa ready, continue to Salar de Uyuni, La Paz, or the Bolivian altiplano without border delays." },
    ],
    faqTitle: "Frequently asked questions about the Bolivia visa",
    faqs: [
      { q: "Do I need a visa to enter Bolivia?", a: "It depends on your nationality. Travelers from many countries — including China, India, Indonesia, Serbia, and Ukraine — require a visa. Contact us on WhatsApp with your passport details and we'll confirm within minutes." },
      { q: "Can I get a Bolivia visa in Cusco, Peru?", a: "Yes. Cusco has a Bolivian consulate and our office is right across from it. It's the most convenient option for Salar de Uyuni travelers, since Cusco is a natural stop on the route." },
      { q: "How long does the visa process take in Cusco?", a: "With all documents in hand, processing takes about 30 minutes. If you send documents in advance via WhatsApp or email, picking up your visa takes around 10 minutes." },
      { q: "What documents do I need for a tourist visa?", a: "Generally: valid passport (minimum 6 months), passport-size photo with white background, travel itinerary, hotel reservation, proof of funds (bank statement), and yellow fever vaccination certificate if your route requires it." },
      { q: "Do I need a visa before visiting Salar de Uyuni?", a: "Yes, if your nationality requires one. It's best to process it in Cusco before crossing into Bolivia. This avoids delays, fines, or entry problems at the Desaguadero or Villazón border." },
      { q: "Where is the Bolivian consulate in Cusco?", a: "The Bolivian Consulate is in Cusco, Peru. Our Conexión Bolivia office is at Clorinda Matto de Turner 308, directly across from the consulate." },
      { q: "Can I get same-day visa processing?", a: "Yes, in most cases. Come to our office with all documents ready and we'll guide you through the process the same day." },
      { q: "Why get your visa in Cusco instead of at the border?", a: "In Cusco you get personalized guidance, document review before submission, and a faster, safer process. At the border there's no assistance and mistakes can cost you time or entry into the country." },
    ],
    ctaTitle: "Ready for your visa?",
    ctaText: "Message us on WhatsApp and we'll guide you step by step. Immediate response.",
  },

  zh: {
    title: "完整指南：在库斯科办理玻利维亚签证",
    subtitle: "前往乌尤尼盐沼前您需要了解的一切",
    intro:
      "来自中国、印尼、印度、塞尔维亚、乌克兰等国家的数千名旅行者途经库斯科前往玻利维亚。本指南解答关于在我们办公室（玻利维亚领事馆对面）快速安全办理签证的常见问题。",
    stepsTitle: "4步获取签证",
    steps: [
      { title: "通过WhatsApp联系我们", text: "告诉我们您的国籍和旅行日期。我们将确认是否需要签证以及需要准备哪些材料。" },
      { title: "准备文件", text: "有效护照、照片、行程单、酒店预订、经济证明，以及如需要的黄热病疫苗接种证明。" },
      { title: "前往库斯科办公室", text: "地址：Clorinda Matto de Turner 308，玻利维亚领事馆对面。如提前发送文件，领取仅需约10分钟。" },
      { title: "领取签证，前往玻利维亚", text: "签证办好后，继续前往乌尤尼盐沼、拉巴斯或玻利维亚高原，无需在边境等待。" },
    ],
    faqTitle: "玻利维亚签证常见问题",
    faqs: [
      { q: "进入玻利维亚需要签证吗？", a: "取决于您的国籍。来自中国、印度、印尼、塞尔维亚、乌克兰等许多国家的旅行者需要签证。通过WhatsApp联系我们，几分钟内即可确认。" },
      { q: "可以在秘鲁库斯科办理玻利维亚签证吗？", a: "可以。库斯科有玻利维亚领事馆，我们的办公室就在对面。对于乌尤尼盐沼旅行者来说，库斯科是路线上的自然中转站，最为便利。" },
      { q: "在库斯科办理签证需要多长时间？", a: "携带所有文件，约需30分钟。如提前通过WhatsApp或邮件发送文件，领取签证约需10分钟。" },
      { q: "旅游签证需要哪些材料？", a: "通常需要：有效护照（至少6个月）、白底护照照片、旅行行程、酒店预订、经济证明（银行对账单），以及如路线要求的黄热病疫苗接种证明。" },
      { q: "去乌尤尼盐沼之前需要办签证吗？", a: "如果您的国籍需要签证，是的。建议在库斯科入境玻利维亚之前办好，避免在Desaguadero或Villazón边境延误或被拒。" },
      { q: "玻利维亚领事馆在库斯科哪里？", a: "玻利维亚领事馆位于秘鲁库斯科。Conexión Bolivia办公室地址：Clorinda Matto de Turner 308，领事馆正对面。" },
      { q: "可以当天办理签证吗？", a: "大多数情况下可以。携带所有文件到我们的办公室，当天即可完成。" },
      { q: "为什么在库斯科办签证而不是在边境？", a: "在库斯科您将获得个性化指导、文件预审，以及更快更安全的流程。边境没有咨询服务，文件错误可能导致延误或无法入境。" },
    ],
    ctaTitle: "准备好办理签证了吗？",
    ctaText: "通过WhatsApp联系我们，逐步指导。即时回复。",
  },

  "zh-tw": {
    title: "完整指南：在庫斯科辦理玻利維亞簽證",
    subtitle: "前往烏尤尼鹽沼前您需要了解的一切",
    intro:
      "來自中國、印尼、印度、塞爾維亞、烏克蘭等國家的數千名旅行者途經庫斯科前往玻利維亞。本指南解答關於在我們辦公室（玻利維亞領事館對面）快速安全辦理簽證的常見問題。",
    stepsTitle: "4步取得簽證",
    steps: [
      { title: "透過WhatsApp聯絡我們", text: "告訴我們您的國籍和旅行日期。我們將確認是否需要簽證以及需要準備哪些文件。" },
      { title: "準備文件", text: "有效護照、照片、行程表、飯店預訂、經濟證明，以及如需要的黃熱病疫苗接種證明。" },
      { title: "前往庫斯科辦公室", text: "地址：Clorinda Matto de Turner 308，玻利維亞領事館對面。如提前發送文件，領取僅需約10分鐘。" },
      { title: "領取簽證，前往玻利維亞", text: "簽證辦好後，繼續前往烏尤尼鹽沼、拉巴斯或玻利維亞高原，無需在邊境等待。" },
    ],
    faqTitle: "玻利維亞簽證常見問題",
    faqs: [
      { q: "進入玻利維亞需要簽證嗎？", a: "取決於您的國籍。來自中國、印度、印尼、塞爾維亞、烏克蘭等許多國家的旅行者需要簽證。透過WhatsApp聯絡我們，幾分鐘內即可確認。" },
      { q: "可以在秘魯庫斯科辦理玻利維亞簽證嗎？", a: "可以。庫斯科有玻利維亞領事館，我們的辦公室就在對面。對於烏尤尼鹽沼旅行者來說，庫斯科是路線上的自然中轉站，最為便利。" },
      { q: "在庫斯科辦理簽證需要多長時間？", a: "攜帶所有文件，約需30分鐘。如提前透過WhatsApp或郵件發送文件，領取簽證約需10分鐘。" },
      { q: "旅遊簽證需要哪些文件？", a: "通常需要：有效護照（至少6個月）、白底護照照片、旅行行程、飯店預訂、經濟證明（銀行對帳單），以及如路線要求的黃熱病疫苗接種證明。" },
      { q: "去烏尤尼鹽沼之前需要辦簽證嗎？", a: "如果您的國籍需要簽證，是的。建議在庫斯科入境玻利維亞之前辦好，避免在Desaguadero或Villazón邊境延誤或被拒。" },
      { q: "玻利維亞領事館在庫斯科哪裡？", a: "玻利維亞領事館位於秘魯庫斯科。Conexión Bolivia辦公室地址：Clorinda Matto de Turner 308，領事館正對面。" },
      { q: "可以當天辦理簽證嗎？", a: "大多數情況下可以。攜帶所有文件到我們的辦公室，當天即可完成。" },
      { q: "為什麼在庫斯科辦簽證而不是在邊境？", a: "在庫斯科您將獲得個人化指導、文件預審，以及更快更安全的流程。邊境沒有諮詢服務，文件錯誤可能導致延誤或無法入境。" },
    ],
    ctaTitle: "準備好辦理簽證了嗎？",
    ctaText: "透過WhatsApp聯絡我們，逐步指導。即時回覆。",
  },

  ar: {
    title: "دليل شامل: تأشيرة بوليفيا في كوسكو",
    subtitle: "كل ما تحتاج معرفته قبل زيارة سالار دي أيويوني",
    intro:
      "يمر آلاف المسافرين من الصين وإندونيسيا والهند وصربيا وأوكرانيا ودول أخرى عبر كوسكو في طريقهم إلى بوليفيا. يجيب هذا الدليل على الأسئلة الأكثر شيوعاً حول الحصول على تأشيرتك بسرعة وأمان في مكتبنا أمام قنصلية بوليفيا.",
    stepsTitle: "كيفية الحصول على تأشيرتك في 4 خطوات",
    steps: [
      { title: "تواصل معنا عبر واتساب", text: "أرسل لنا جنسيتك وتواريخ سفرك. سنؤكد ما إذا كنت تحتاج تأشيرة وأي مستندات تجهز." },
      { title: "جهّز مستنداتك", text: "جواز سفر ساري، صورة، خط سير الرحلة، حجز فندق، إثبات مالي، وتطعيم الحمى الصفراء إذا لزم." },
      { title: "زر مكتبنا في كوسكو", text: "Clorinda Matto de Turner 308، أمام قنصلية بوليفيا. إذا أرسلت المستندات مسبقاً، الاستلام ~10 دقائق." },
      { title: "استلم تأشيرتك وسافر إلى بوليفيا", text: "مع تأشيرتك الجاهزة، تابع إلى سالار دي أيويوني أو لا Paz أو هضبة بوليفيا دون تأخير على الحدود." },
    ],
    faqTitle: "أسئلة شائعة حول تأشيرة بوليفيا",
    faqs: [
      { q: "هل أحتاج تأشيرة لدخول بوليفيا؟", a: "يعتمد على جنسيتك. مسافرون من دول كثيرة — بما فيها الصين والهند وإندونيسيا وصربيا وأوكرانيا — يحتاجون تأشيرة. تواصل معنا عبر واتساب للتأكيد في دقائق." },
      { q: "هل يمكنني الحصول على تأشيرة بوليفيا في كوسكو، Peru؟", a: "نعم. كوسكو فيها قنصلية بوليفيا ومكتبنا مقابلها مباشرة. الخيار الأنسب لمسافري سالار دي أيويوني." },
      { q: "كم يستغرق إجراء التأشيرة في Cusco؟", a: "مع جميع المستندات، حوالي 30 دقيقة. إذا أرسلت المستندات مسبقاً عبر واتساب أو البريد، الاستلام حوالي 10 دقائق." },
      { q: "ما المستندات المطلوبة للتأشيرة السياحية؟", a: "عادة: جواز سفر ساري (6 أشهر على الأقل)، صورة بخلفية بيضاء، خط سير، حجز فندق، إثبات مالي، وشهادة تطعيم الحمى الصفراء إذا لزم." },
      { q: "هل أحتاج تأشيرة قبل سالار دي أيويوني؟", a: "نعم إذا كانت جنسيتك تتطلب ذلك. الأفضل إنجازها في كوسكو قبل عبور الحدود لتجنب التأخير أو الرفض." },
      { q: "أين قنصلية بوليفيا في Cusco؟", a: "في Cusco، Peru. مكتب Conexión Bolivia في Clorinda Matto de Turner 308، أمام القنصلية مباشرة." },
      { q: "هل يمكن الحصول على التأشيرة في نفس اليوم؟", a: "نعم في معظم الحالات. تعال بجميع المستندات وسنرشدك في نفس اليوم." },
      { q: "لماذا في Cusco وليس على الحدود؟", a: "في Cusco تحصل على إرشاد شخصي ومراجعة مستندات وعملية أسرع. على الحدود لا مساعدة والأخطاء قد تمنع دخولك." },
    ],
    ctaTitle: "مستعد لتأشيرتك؟",
    ctaText: "راسلنا على واتساب وسنرشدك خطوة بخطوة. رد فوري.",
  },

  pt: {
    title: "Guia completo: visto para Bolívia em Cusco",
    subtitle: "Tudo o que você precisa saber antes de visitar o Salar de Uyuni",
    intro:
      "Milhares de viajantes da China, Indonésia, Índia, Sérvia, Ucrânia e outros países passam por Cusco a caminho da Bolívia. Este guia responde às perguntas mais comuns sobre como obter seu visto de forma rápida e segura em nosso escritório, em frente ao Consulado da Bolívia.",
    stepsTitle: "Como obter seu visto em 4 passos",
    steps: [
      { title: "Fale conosco no WhatsApp", text: "Envie sua nacionalidade e datas de viagem. Confirmamos se você precisa de visto e quais documentos preparar." },
      { title: "Prepare seus documentos", text: "Passaporte válido, foto, itinerário, reserva de hotel, comprovante financeiro e vacina de febre amarela se necessário." },
      { title: "Visite nosso escritório em Cusco", text: "Clorinda Matto de Turner 308, em frente ao Consulado da Bolívia. Se enviar documentos antes, a retirada leva ~10 minutos." },
      { title: "Receba seu visto e viaje para a Bolívia", text: "Com o visto pronto, continue para o Salar de Uyuni, La Paz ou o altiplano boliviano sem demoras na fronteira." },
    ],
    faqTitle: "Perguntas frequentes sobre o visto da Bolívia",
    faqs: [
      { q: "Preciso de visto para entrar na Bolívia?", a: "Depende da sua nacionalidade. Viajantes de muitos países — incluindo China, Índia, Indonésia, Sérvia e Ucrânia — precisam de visto. Contate-nos no WhatsApp para confirmar em minutos." },
      { q: "Posso obter visto da Bolívia em Cusco, Peru?", a: "Sim. Cusco tem consulado da Bolívia e nosso escritório fica em frente. É a opção mais conveniente para quem visita o Salar de Uyuni." },
      { q: "Quanto tempo demora o processo em Cusco?", a: "Com todos os documentos, cerca de 30 minutos. Se enviar com antecedência via WhatsApp ou email, a retirada leva cerca de 10 minutos." },
      { q: "Quais documentos preciso para visto turístico?", a: "Geralmente: passaporte válido (mínimo 6 meses), foto com fundo branco, itinerário, reserva de hotel, comprovante financeiro e certificado de febre amarela se necessário." },
      { q: "Preciso de visto antes do Salar de Uyuni?", a: "Sim, se sua nacionalidade exigir. O ideal é resolver em Cusco antes de cruzar para a Bolívia, evitando problemas na fronteira." },
      { q: "Onde fica o consulado da Bolívia em Cusco?", a: "Em Cusco, Peru. Nosso escritório Conexión Bolivia fica em Clorinda Matto de Turner 308, em frente ao consulado." },
      { q: "Posso obter o visto no mesmo dia?", a: "Sim, na maioria dos casos. Venha com todos os documentos e orientamos no mesmo dia." },
      { q: "Por que em Cusco e não na fronteira?", a: "Em Cusco você tem orientação personalizada, revisão de documentos e processo mais rápido. Na fronteira não há assessoria e erros podem impedir sua entrada." },
    ],
    ctaTitle: "Pronto para seu visto?",
    ctaText: "Fale conosco no WhatsApp e orientamos passo a passo. Resposta imediata.",
  },

  ru: {
    title: "Полный гид: виза в Боливию в Куско",
    subtitle: "Всё, что нужно знать перед поездкой на Салар-де-Уюни",
    intro:
      "Тысячи путешественников из Китая, Индонезии, Индии, Сербии, Украины и других стран проезжают через Куско в Боливию. Этот гид отвечает на самые частые вопросы о быстром и безопасном оформлении визы в нашем офисе напротив консульства Боливии.",
    stepsTitle: "Как получить визу за 4 шага",
    steps: [
      { title: "Напишите нам в WhatsApp", text: "Сообщите гражданство и даты поездки. Мы подтвердим, нужна ли виза и какие документы подготовить." },
      { title: "Подготовьте документы", text: "Действующий паспорт, фото, маршрут, бронь отеля, финансовые документы и прививка от жёлтой лихорадки при необходимости." },
      { title: "Приходите в офис в Куско", text: "Clorinda Matto de Turner 308, напротив консульства Боливии. Если отправите документы заранее, получение ~10 минут." },
      { title: "Получите визу и отправляйтесь в Боливию", text: "С готовой визой — на Салар-де-Уюни, в Ла-Пас или на альтиплано без задержек на границе." },
    ],
    faqTitle: "Частые вопросы о визе в Боливию",
    faqs: [
      { q: "Нужна ли виза для въезда в Боливию?", a: "Зависит от гражданства. Путешественникам из многих стран — включая Китай, Индию, Индонезию, Сербию и Украину — нужна виза. Напишите нам в WhatsApp — подтвердим за минуты." },
      { q: "Можно ли получить визу в Куско, Перу?", a: "Да. В Куско есть консульство Боливии, наш офис прямо напротив. Самый удобный вариант для поездки на Салар-де-Уюни." },
      { q: "Сколько времени занимает оформление в Куско?", a: "Со всеми документами — около 30 минут. При предварительной отправке через WhatsApp или email получение занимает около 10 минут." },
      { q: "Какие документы нужны для туристической визы?", a: "Обычно: паспорт (минимум 6 месяцев), фото на белом фоне, маршрут, бронь отеля, финансовые документы и сертификат о прививке от жёлтой лихорадки при необходимости." },
      { q: "Нужна ли виза перед Салар-де-Уюни?", a: "Да, если ваше гражданство требует визу. Лучше оформить в Куско до пересечения границы, чтобы избежать проблем в Desaguadero или Villazón." },
      { q: "Где консульство Боливии в Куско?", a: "В Куско, Перу. Офис Conexión Bolivia: Clorinda Matto de Turner 308, напротив консульства." },
      { q: "Можно ли получить визу в тот же день?", a: "Да, в большинстве случаев. Приходите со всеми документами — проведём через процесс в тот же день." },
      { q: "Почему в Куско, а не на границе?", a: "В Куско — персональная помощь, проверка документов и быстрый процесс. На границе нет консультаций, ошибки могут стоить времени или въезда." },
    ],
    ctaTitle: "Готовы оформить визу?",
    ctaText: "Напишите в WhatsApp — проведём шаг за шагом. Быстрый ответ.",
  },

  id: {
    title: "Panduan lengkap: visa Bolivia di Cusco",
    subtitle: "Semua yang perlu Anda ketahui sebelum ke Salar de Uyuni",
    intro:
      "Ribuan wisatawan dari Tiongkok, Indonesia, India, Serbia, Ukraina, dan negara lain melalui Cusco menuju Bolivia. Panduan ini menjawab pertanyaan umum tentang mengurus visa dengan cepat dan aman di kantor kami, di depan Konsulat Bolivia.",
    stepsTitle: "Cara mendapatkan visa dalam 4 langkah",
    steps: [
      { title: "Hubungi kami via WhatsApp", text: "Kirim kewarganegaraan dan tanggal perjalanan. Kami konfirmasi apakah Anda butuh visa dan dokumen apa yang perlu disiapkan." },
      { title: "Siapkan dokumen", text: "Paspor valid, foto, itinerary, reservasi hotel, bukti keuangan, dan vaksin demam kuning jika diperlukan." },
      { title: "Kunjungi kantor kami di Cusco", text: "Clorinda Matto de Turner 308, di depan Konsulat Bolivia. Jika dokumen dikirim terlebih dahulu, pengambilan ~10 menit." },
      { title: "Terima visa dan lanjut ke Bolivia", text: "Dengan visa siap, lanjutkan ke Salar de Uyuni, La Paz, atau dataran tinggi Bolivia tanpa hambatan di perbatasan." },
    ],
    faqTitle: "Pertanyaan umum tentang visa Bolivia",
    faqs: [
      { q: "Apakah saya perlu visa untuk masuk Bolivia?", a: "Tergantung kewarganegaraan. Wisatawan dari banyak negara — termasuk Tiongkok, India, Indonesia, Serbia, dan Ukraina — memerlukan visa. Hubungi kami via WhatsApp, konfirmasi dalam hitungan menit." },
      { q: "Bisakah mengurus visa Bolivia di Cusco, Peru?", a: "Ya. Cusco memiliki konsulat Bolivia dan kantor kami tepat di depannya. Pilihan paling praktis untuk wisatawan Salar de Uyuni." },
      { q: "Berapa lama proses visa di Cusco?", a: "Dengan semua dokumen, sekitar 30 menit. Jika dokumen dikirim terlebih dahulu via WhatsApp atau email, pengambilan sekitar 10 menit." },
      { q: "Dokumen apa yang diperlukan untuk visa turis?", a: "Umumnya: paspor valid (min. 6 bulan), foto latar putih, itinerary, reservasi hotel, bukti keuangan, dan sertifikat vaksin demam kuning jika diperlukan." },
      { q: "Apakah perlu visa sebelum ke Salar de Uyuni?", a: "Ya, jika kewarganegaraan Anda mewajibkan. Sebaiknya urus di Cusco sebelum menyeberang ke Bolivia agar tidak terkendala di perbatasan Desaguadero atau Villazón." },
      { q: "Di mana konsulat Bolivia di Cusco?", a: "Di Cusco, Peru. Kantor Conexión Bolivia: Clorinda Matto de Turner 308, tepat di depan konsulat." },
      { q: "Bisakah proses visa di hari yang sama?", a: "Ya, dalam kebanyakan kasus. Datang dengan semua dokumen dan kami bimbing di hari yang sama." },
      { q: "Mengapa di Cusco, bukan di perbatasan?", a: "Di Cusco Anda mendapat panduan personal, pemeriksaan dokumen, dan proses lebih cepat. Di perbatasan tidak ada bantuan dan kesalahan bisa menghalangi masuk." },
    ],
    ctaTitle: "Siap urus visa?",
    ctaText: "Hubungi kami via WhatsApp, kami bimbing langkah demi langkah. Respons cepat.",
  },

  uk: {
    title: "Повний посібник: віза в Болівію в Куско",
    subtitle: "Усе, що потрібно знати перед поїздкою на Салар-де-Уюні",
    intro:
      "Тисячі мандрівників з Китаю, Індонезії, Індії, Сербії, України та інших країн проїжджають через Куско до Болівії. Цей посібник відповідає на найчастіші запитання про швидке та безпечне оформлення візи в нашому офісі навпроти консульства Болівії.",
    stepsTitle: "Як отримати візу за 4 кроки",
    steps: [
      { title: "Напишіть нам у WhatsApp", text: "Повідомте громадянство та дати подорожі. Підтвердимо, чи потрібна віза та які документи підготувати." },
      { title: "Підготуйте документи", text: "Дійсний паспорт, фото, маршрут, бронювання готелю, фінансові документи та щеплення від жовтої лихоманки за потреби." },
      { title: "Прийдіть до офісу в Куско", text: "Clorinda Matto de Turner 308, навпроти консульства Болівії. Якщо надішлете документи заздалегідь, отримання ~10 хвилин." },
      { title: "Отримайте візу та вирушайте в Болівію", text: "З готовою візою — на Салар-де-Уюні, до Ла-Пасу або на нагір'я без затримок на кордоні." },
    ],
    faqTitle: "Часті запитання про візу в Болівію",
    faqs: [
      { q: "Чи потрібна віза для в'їзду в Болівію?", a: "Залежить від громадянства. Мандрівникам з багатьох країн — включно з Китаєм, Індією, Індонезією, Сербією та Україною — потрібна віза. Напишіть у WhatsApp — підтвердимо за хвилини." },
      { q: "Чи можна оформити візу в Куско, Перу?", a: "Так. У Куско є консульство Болівії, наш офіс прямо навпроти. Найзручніший варіант для поїздки на Салар-де-Уюні." },
      { q: "Скільки часу займає оформлення в Куско?", a: "З усіма документами — близько 30 хвилин. При попередній відправці через WhatsApp або email отримання займає близько 10 хвилин." },
      { q: "Які документи потрібні для туристичної візи?", a: "Зазвичай: паспорт (мінімум 6 місяців), фото на білому тлі, маршрут, бронювання готелю, фінансові документи та сертифікат про щеплення від жовтої лихоманки за потреби." },
      { q: "Чи потрібна віза перед Салар-де-Уюні?", a: "Так, якщо ваше громадянство вимагає візу. Краще оформити в Куско до перетину кордону, щоб уникнути проблем у Desaguadero або Villazón." },
      { q: "Де консульство Болівії в Куско?", a: "У Куско, Перу. Офіс Conexión Bolivia: Clorinda Matto de Turner 308, навпроти консульства." },
      { q: "Чи можна отримати візу в той самий день?", a: "Так, у більшості випадків. Приходьте з усіма документами — проведемо через процес у той самий день." },
      { q: "Чому в Куско, а не на кордоні?", a: "У Куско — персональна допомога, перевірка документів і швидкий процес. На кордоні немає консультацій, помилки можуть коштувати часу або в'їзду." },
    ],
    ctaTitle: "Готові оформити візу?",
    ctaText: "Напишіть у WhatsApp — проведемо крок за кроком. Швидка відповідь.",
  },

  sr: {
    title: "Kompletan vodič: viza Bolivija u Kusku",
    subtitle: "Sve što treba da znate pre posete Salar de Uyuni",
    intro:
      "Hiljade putnika iz Kine, Indonezije, Indije, Srbije, Ukrajine i drugih zemalja prolazi kroz Kusko ka Boliviji. Ovaj vodič odgovara na najčešća pitanja o brzom i sigurnom rešavanju vize u našoj kancelariji ispred konzulata Bolivije.",
    stepsTitle: "Kako dobiti vizu u 4 koraka",
    steps: [
      { title: "Pišite nam na WhatsApp", text: "Pošaljite državljanstvo i datume putovanja. Potvrdićemo da li vam treba viza i koje dokumente pripremiti." },
      { title: "Pripremite dokumenta", text: "Važeći pasoš, fotografija, plan puta, rezervacija hotela, finansijski dokazi i vakcina protiv žute groznice ako je potrebno." },
      { title: "Posetite našu kancelariju u Kusku", text: "Clorinda Matto de Turner 308, ispred konzulata Bolivije. Ako pošaljete dokumenta unapred, preuzimanje ~10 minuta." },
      { title: "Primite vizu i putujte u Boliviju", text: "Sa spremnom vizom nastavite ka Salar de Uyuni, La Pazu ili bolivijskoj visoravni bez zastoja na granici." },
    ],
    faqTitle: "Često postavljana pitanja o vizi Bolivije",
    faqs: [
      { q: "Da li mi treba viza za ulazak u Boliviju?", a: "Zavisi od državljanstva. Putnicima iz mnogih zemalja — uključujući Kinu, Indiju, Indoneziju, Srbiju i Ukrajinu — potrebna je viza. Pišite nam na WhatsApp, potvrda za nekoliko minuta." },
      { q: "Mogu li dobiti vizu Bolivije u Kusku, Peru?", a: "Da. Kusko ima konzulat Bolivije, a naša kancelarija je tačno ispred. Najpraktičnija opcija za putnike ka Salar de Uyuni." },
      { q: "Koliko traje proces vize u Kusku?", a: "Sa svim dokumentima, oko 30 minuta. Ako pošaljete unapred putem WhatsApp-a ili emaila, preuzimanje traje oko 10 minuta." },
      { q: "Koja dokumenta su potrebna za turističku vizu?", a: "Obično: važeći pasoš (min. 6 meseci), fotografija sa belom pozadinom, plan puta, rezervacija hotela, finansijski dokazi i sertifikat o vakcini protiv žute groznice ako je potrebno." },
      { q: "Da li mi treba viza pre Salar de Uyuni?", a: "Da, ako vaše državljanstvo to zahteva. Najbolje rešiti u Kusku pre prelaska granice, kako biste izbegli probleme na Desaguadero ili Villazón." },
      { q: "Gde je konzulat Bolivije u Kusku?", a: "U Kusku, Peru. Kancelarija Conexión Bolivia: Clorinda Matto de Turner 308, direktno ispred konzulata." },
      { q: "Mogu li dobiti vizu istog dana?", a: "Da, u većini slučajeva. Dođite sa svim dokumentima i vodimo vas istog dana." },
      { q: "Zašto u Kusku, a ne na granici?", a: "U Kusku dobijate ličnu pomoć, proveru dokumenata i brži proces. Na granici nema savetovanja, greške mogu koštati vremena ili ulaska." },
    ],
    ctaTitle: "Spremni za vizu?",
    ctaText: "Pišite nam na WhatsApp, vodimo vas korak po korak. Brz odgovor.",
  },
};
