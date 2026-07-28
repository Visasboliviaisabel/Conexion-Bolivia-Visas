import type { Locale } from "./config";

export type ToursContent = {
  title: string;
  intro: string;
  recommendationsTitle: string;
  recommendations: string[];
  prohibitedTitle: string;
  prohibitedIntro: string;
  prohibited: string[];
  visaTitle: string;
  visaIntro: string;
  visaGroups: { label: string; text: string }[];
  visaNote: string;
  emergencyTitle: string;
  emergencyIntro: string;
  emergency: { label: string; number: string }[];
};

const emergencyContactsEn = [
  { label: "Emergency Ambulances", number: "118" },
  { label: "Bolivian Red Cross", number: "2226936" },
  { label: "Radio Patrol", number: "110" },
  { label: "Ambulance Network", number: "165" },
  { label: "Fire Department", number: "119" },
  { label: "Citizen Assistance Police (PAC)", number: "120" },
  { label: "Search and Rescue", number: "138" },
  { label: "Emergency Post", number: "114" },
  { label: "SAR Bolivia", number: "132" },
  { label: "Highway Patrol", number: "2334455" },
  { label: "Accidents", number: "2371230" },
];

export const toursNav: Record<Locale, string> = {
  es: "Viajes",
  en: "Travel",
  zh: "旅行",
  "zh-tw": "旅行",
  ar: "السفر",
  he: "טיולים",
  pt: "Viagens",
  ru: "Путешествия",
  id: "Perjalanan",
  uk: "Подорожі",
  sr: "Putovanja",
  hi: "यात्रा",
};

export const travelReadTime: Record<Locale, { tips: string; discover: string }> = {
  es: { tips: "1 min de lectura", discover: "3 min de lectura" },
  en: { tips: "1 min read", discover: "3 min read" },
  zh: { tips: "1 分钟阅读", discover: "3 分钟阅读" },
  "zh-tw": { tips: "1 分鐘閱讀", discover: "3 分鐘閱讀" },
  ar: { tips: "دقيقة واحدة", discover: "3 دقائق" },
  he: { tips: "דקה קריאה", discover: "3 דקות קריאה" },
  pt: { tips: "1 min de leitura", discover: "3 min de leitura" },
  ru: { tips: "1 мин", discover: "3 мин" },
  id: { tips: "1 menit baca", discover: "3 menit baca" },
  uk: { tips: "1 хв читання", discover: "3 хв читання" },
  sr: { tips: "1 min čitanja", discover: "3 min čitanja" },
  hi: { tips: "1 मिनट पढ़ें", discover: "3 मिनट पढ़ें" },
};

export const travelBackLabel: Record<Locale, string> = {
  es: "← Volver a Viajes",
  en: "← Back to Travel",
  zh: "← 返回旅行",
  "zh-tw": "← 返回旅行",
  ar: "← العودة إلى السفر",
  he: "← חזרה לטיולים",
  pt: "← Voltar a Viagens",
  ru: "← Назад к путешествиям",
  id: "← Kembali ke Perjalanan",
  uk: "← Назад до подорожей",
  sr: "← Nazad na putovanja",
  hi: "← यात्रा पर वापस",
};

export const tipsCardImage = {
  src: "/images/discover/consejos-de-viaje.png",
  alt: "Alpaca in the Bolivian highlands with a colonial church and snow-capped mountains",
};

export const travelTipsTab: Record<Locale, string> = {
  es: "Consejos de viaje",
  en: "Travel Tips",
  zh: "旅行建议",
  "zh-tw": "旅行建議",
  ar: "نصائح السفر",
  he: "טיפים לנסיעה",
  pt: "Dicas de viagem",
  ru: "Советы путешественникам",
  id: "Tips perjalanan",
  uk: "Поради мандрівникам",
  sr: "Saveti za put",
  hi: "यात्रा सुझाव",
};

export const toursMeta: Record<Locale, { title: string; description: string }> = {
  es: {
    title: "Tours Cusco y Bolivia | Machu Picchu, Uyuni – Conexión Bolivia",
    description:
      "Reserva tours en Cusco y Bolivia con Isabel desde Cusco: Machu Picchu, Montaña de Colores, Salar de Uyuni y Titicaca. Cotiza por WhatsApp.",
  },
  en: {
    title: "Cusco & Bolivia Tours | Machu Picchu, Uyuni – Conexión Bolivia",
    description:
      "Book Cusco and Bolivia tours with Isabel in Cusco: Machu Picchu, Rainbow Mountain, Salar de Uyuni, and Lake Titicaca. WhatsApp booking.",
  },
  zh: {
    title: "库斯科与玻利维亚旅游 | 马丘比丘、乌尤尼 – Conexión Bolivia",
    description:
      "在库斯科通过 Isabel 预订行程：马丘比丘、彩虹山、乌尤尼盐湖、的的喀喀湖。WhatsApp/微信咨询。",
  },
  "zh-tw": {
    title: "庫斯科與玻利維亞旅遊 | 馬丘比丘、烏尤尼 – Conexión Bolivia",
    description:
      "在庫斯科透過 Isabel 預訂行程：馬丘比丘、彩虹山、烏尤尼鹽湖、的的喀喀湖。WhatsApp/微信諮詢。",
  },
  ar: {
    title: "جولات كوسكو وبوليفيا | ماتشو بيتشو وأويوني – Conexión Bolivia",
    description:
      "احجز جولات كوسكو وبوليفيا مع Isabel من كوسكو: ماتشو بيتشو، جبل الألوان، سالار دي أويوني وتيتيكاكا عبر واتساب.",
  },
  he: {
    title: "טיולי קוסקו ובוליביה | מאצ'ו פיצ'ו ואויוני – Conexión Bolivia",
    description:
      "הזמינו טיולים בקוסקו ובבוליביה עם Isabel: מאצ'ו פיצ'ו, הר הקשת, סלר דה אויוני ואגם טיטיקקה בוואטסאפ.",
  },
  pt: {
    title: "Tours Cusco e Bolívia | Machu Picchu, Uyuni – Conexión Bolivia",
    description:
      "Reserve tours em Cusco e na Bolívia com Isabel em Cusco: Machu Picchu, Montanha Colorida, Salar de Uyuni e Titicaca. WhatsApp.",
  },
  ru: {
    title: "Туры Куско и Боливия | Мачу-Пикчу, Уюни – Conexión Bolivia",
    description:
      "Бронируйте туры в Куско и Боливию с Isabel: Мачу-Пикчу, Радужная гора, Солончак Уюни и Титикака. WhatsApp.",
  },
  id: {
    title: "Tur Cusco & Bolivia | Machu Picchu, Uyuni – Conexión Bolivia",
    description:
      "Pesan tur Cusco dan Bolivia lewat Isabel di Cusco: Machu Picchu, Rainbow Mountain, Salar de Uyuni, dan Titicaca via WhatsApp.",
  },
  uk: {
    title: "Тури Куско та Болівія | Мачу-Пікчу, Уюні – Conexión Bolivia",
    description:
      "Бронюйте тури в Куско та Болівію з Isabel: Мачу-Пікчу, Веселкова гора, Солончак Уюні та Тітікака. WhatsApp.",
  },
  sr: {
    title: "Ture Cusco i Bolivija | Machu Picchu, Uyuni – Conexión Bolivia",
    description:
      "Rezervišite ture u Cuscu i Boliviji sa Isabel: Machu Picchu, Rainbow Mountain, Salar de Uyuni i Titicaca preko WhatsApp-a.",
  },
  hi: {
    title: "कुस्को और बोलीविया टूर | Machu Picchu, Uyuni – Conexión Bolivia",
    description:
      "कुस्को में Isabel के साथ टूर बुक करें: Machu Picchu, Rainbow Mountain, Salar de Uyuni और Titicaca। WhatsApp से पूछें।",
  },
};

export const tipsMeta: Record<Locale, { title: string; description: string }> = {
  es: {
    title: "Consejos de viaje a Bolivia 2026 | Visas, emergencias y más – Conexión Bolivia",
    description:
      "Recomendaciones, restricciones, requisitos de visa por nacionalidad y contactos de emergencia para viajar seguro a Bolivia.",
  },
  en: {
    title: "Bolivia Travel Tips 2026 | Visas, emergencies & more – Conexión Bolivia",
    description:
      "Travel recommendations, restrictions, visa requirements by nationality, and emergency contacts for a safe Bolivia trip.",
  },
  zh: {
    title: "玻利维亚旅行建议 2026 | 签证与紧急联系 – Conexión Bolivia",
    description: "玻利维亚旅行建议、限制规定、签证信息和紧急联系电话。",
  },
  "zh-tw": {
    title: "玻利維亞旅行建議 2026 | 簽證與緊急聯絡 – Conexión Bolivia",
    description: "玻利維亞旅行建議、限制規定、簽證資訊和緊急聯絡電話。",
  },
  ar: {
    title: "نصائح السفر إلى بوليفيا 2026 | التأشيرات والطوارئ – Conexión Bolivia",
    description: "توصيات وقيود ومعلومات التأشيرة وأرقام الطوارئ لزيارة آمنة لبوليفيا.",
  },
  he: {
    title: "טיפים לטיול בבולивיה 2026 | ויזות וחירום – Conexión Bolivia",
    description: "המלצות, הגבלות, מידע על ויזה ומספרי חירום לביקור בטוח בבוליביה.",
  },
  pt: {
    title: "Dicas de viagem à Bolívia 2026 | Vistos e emergências – Conexión Bolivia",
    description: "Recomendações, restrições, informações sobre visto e contatos de emergência para visita segura à Bolívia.",
  },
  ru: {
    title: "Советы для поездки в Боливию 2026 | Визы и экстренные контакты – Conexión Bolivia",
    description: "Рекомендации, ограничения, информация о визе и экстренные контакты.",
  },
  id: {
    title: "Tips Perjalanan ke Bolivia 2026 | Visa & darurat – Conexión Bolivia",
    description: "Rekomendasi, larangan, informasi visa, dan kontak darurat untuk kunjungan aman ke Bolivia.",
  },
  uk: {
    title: "Поради для подорожі до Болівії 2026 | Візи та екстрені контакти – Conexión Bolivia",
    description: "Рекомендації, обмеження, інформація про візу та екстрені контакти.",
  },
  sr: {
    title: "Saveti za putovanje u Boliviju 2026 | Vize i hitni kontakti – Conexión Bolivia",
    description: "Preporuke, ograničenja, informacije o vizi i hitni kontakti za sigurnu posetu Boliviji.",
  },
  hi: {
    title: "बोलीविया यात्रा सुझाव 2026 | वीज़ा और आपातकाल – Conexión Bolivia",
    description: "बोलीविया यात्रा के लिए सुझाव, प्रतिबंध, वीज़ा जानकारी और आपातकालीन संपर्क।",
  },
};

export const toursContent: Record<Locale, ToursContent> = {
  es: {
    title: "🗺️ Consejos para tu viaje a Bolivia",
    intro:
      "Viajar a Bolivia es una experiencia única, llena de paisajes impresionantes, cultura vibrante y rica biodiversidad. Para que tu visita sea segura y agradable, aquí tienes algunas recomendaciones, restricciones, información sobre visas y contactos importantes que debes tener a mano.",
    recommendationsTitle: "✅ Recomendaciones para viajeros",
    recommendations: [
      "Reserva siempre con agencias legalmente establecidas (SIRETUR – BOLIVIA).",
      "Intenta generar la menor cantidad de residuos posible durante tus viajes.",
      "Respeta y apoya las medidas para reducir el impacto ambiental y proteger el paisaje.",
      "Si visitas zonas tropicales o de bajura, lleva tu carnet de vacuna contra fiebre amarilla.",
      "En Áreas Protegidas, pide orientación en los centros de interpretación para aprovechar al máximo tu visita.",
      "Lleva efectivo cambiado a la moneda nacional.",
    ],
    prohibitedTitle: "🚫 Qué está prohibido",
    prohibitedIntro: "Para proteger el medio ambiente y la cultura local:",
    prohibited: [
      "No dañar ni afectar la biodiversidad.",
      "Evitar el uso de elementos que puedan poner en riesgo la vida en la zona.",
      "La adquisición de drogas o estupefacientes está estrictamente prohibida.",
      "No retirar fauna, flora o patrimonio cultural.",
    ],
    visaTitle: "🌍 Requisitos de visa",
    visaIntro: "Según tu país de origen, las condiciones de entrada a Bolivia varían:",
    visaGroups: [
      { label: "Grupo I:", text: "No se requiere visa, solo un documento de identidad o pasaporte válido." },
      { label: "Grupo II:", text: "Se requiere visa de turista o visitante." },
      {
        label: "Grupo III:",
        text: "Se requiere visa, sujeta a verificación previa de requisitos por la Dirección General de Migración.",
      },
    ],
    visaNote:
      "(Decreto Supremo N° 1923, 13 de marzo de 2014 – Reglamento de la “Ley de Migración”)",
    emergencyTitle: "📞 Contactos de emergencia en Bolivia",
    emergencyIntro: "Ten a mano estos números útiles durante tu viaje:",
    emergency: [
      { label: "Ambulancias de emergencia", number: "118" },
      { label: "Cruz Roja Boliviana", number: "2226936" },
      { label: "Radiopatrullas", number: "110" },
      { label: "Red de Ambulancias", number: "165" },
      { label: "Bomberos", number: "119" },
      { label: "Policía de Atención al Ciudadano (PAC)", number: "120" },
      { label: "Búsqueda y Rescate", number: "138" },
      { label: "Puesto de Emergencia", number: "114" },
      { label: "SAR Bolivia", number: "132" },
      { label: "Patrulla Carreteras", number: "2334455" },
      { label: "Accidentes", number: "2371230" },
    ],
  },

  en: {
    title: "🗺️ Tips for Your Trip to Bolivia",
    intro:
      "Traveling to Bolivia is a unique experience, full of breathtaking landscapes, vibrant culture, and rich biodiversity. To make your visit safe and enjoyable, here are some recommendations, restrictions, visa information, and important contacts you should keep at hand.",
    recommendationsTitle: "✅ Traveler Recommendations",
    recommendations: [
      "Always book with legally established agencies (SIRETUR – BOLIVIA).",
      "Try to generate as little waste as possible during your trips.",
      "Respect and support measures to reduce environmental impact and protect the landscape.",
      "If you visit tropical areas or lowlands, carry your yellow fever vaccination card.",
      "In Protected Areas, ask for guidance at interpretation centers to make the most of your visit.",
      "Carry cash exchanged into the national currency.",
    ],
    prohibitedTitle: "🚫 What Is Prohibited",
    prohibitedIntro: "To protect the environment and local culture:",
    prohibited: [
      "Do not harm or damage biodiversity.",
      "Avoid using items that may endanger life in the area.",
      "The acquisition of drugs or narcotics is strictly prohibited.",
      "Do not remove wildlife, plants, or cultural heritage.",
    ],
    visaTitle: "🌍 Visa Requirements",
    visaIntro: "Depending on your country of origin, the entry conditions to Bolivia vary:",
    visaGroups: [
      { label: "Group I:", text: "No visa required, only a valid ID or passport." },
      { label: "Group II:", text: "A tourist or visitor visa is required." },
      {
        label: "Group III:",
        text: "A visa is required, subject to prior verification of requirements by the General Directorate of Migration.",
      },
    ],
    visaNote:
      '(Supreme Decree N° 1923, March 13, 2014 – Regulations of the "Migration Law")',
    emergencyTitle: "📞 Emergency Contacts in Bolivia",
    emergencyIntro: "Keep these useful numbers handy during your trip:",
    emergency: emergencyContactsEn,
  },

  zh: {
    title: "🗺️ 玻利维亚旅行建议",
    intro:
      "玻利维亚之旅独特而难忘，拥有令人叹为观止的景观、充满活力的文化和丰富的生物多样性。为了让您的访问安全愉快，以下是一些建议、限制规定、签证信息和应备的重要联系方式。",
    recommendationsTitle: "✅ 旅行者建议",
    recommendations: [
      "始终通过合法注册的旅行社预订（SIRETUR – BOLIVIA）。",
      "旅行中尽量减少垃圾产生。",
      "尊重并支持减少环境影响和保护景观的措施。",
      "如前往热带或低地地区，请携带黄热病疫苗接种证明。",
      "在保护区，请在解说中心寻求指导以充分利用您的访问。",
      "携带已兑换为当地货币的现金。",
    ],
    prohibitedTitle: "🚫 禁止事项",
    prohibitedIntro: "为保护环境和当地文化：",
    prohibited: [
      "不得损害或破坏生物多样性。",
      "不得使用可能危及生命的物品。",
      "严禁购买毒品或麻醉品。",
      "不得带走野生动物、植物或文化遗产。",
    ],
    visaTitle: "🌍 签证要求",
    visaIntro: "根据您的国籍，进入玻利维亚的条件有所不同：",
    visaGroups: [
      { label: "第一组：", text: "无需签证，只需有效身份证或护照。" },
      { label: "第二组：", text: "需要旅游或访客签证。" },
      { label: "第三组：", text: "需要签证，须由移民总局事先核实要求。" },
    ],
    visaNote: "（最高法令 N° 1923，2014年3月13日——《移民法》条例）",
    emergencyTitle: "📞 玻利维亚紧急联系电话",
    emergencyIntro: "旅行期间请保存以下有用号码：",
    emergency: emergencyContactsEn,
  },

  "zh-tw": {
    title: "🗺️ 玻利維亞旅行建議",
    intro:
      "玻利維亞之旅獨特而難忘，擁有令人嘆為觀止的景觀、充滿活力的文化和豐富的生物多樣性。為了讓您的訪問安全愉快，以下是一些建議、限制規定、簽證資訊和應備的重要聯絡方式。",
    recommendationsTitle: "✅ 旅行者建議",
    recommendations: [
      "始終透過合法註冊的旅行社預訂（SIRETUR – BOLIVIA）。",
      "旅行中盡量減少垃圾產生。",
      "尊重並支持減少環境影響和保護景觀的措施。",
      "如前往熱帶或低地地區，請攜帶黃熱病疫苗接種證明。",
      "在保護區，請在解說中心尋求指導以充分利用您的訪問。",
      "攜帶已兌換為當地貨幣的現金。",
    ],
    prohibitedTitle: "🚫 禁止事項",
    prohibitedIntro: "為保護環境和當地文化：",
    prohibited: [
      "不得損害或破壞生物多樣性。",
      "不得使用可能危及生命的物品。",
      "嚴禁購買毒品或麻醉品。",
      "不得帶走野生動物、植物或文化遺產。",
    ],
    visaTitle: "🌍 簽證要求",
    visaIntro: "根據您的國籍，進入玻利維亞的條件有所不同：",
    visaGroups: [
      { label: "第一組：", text: "無需簽證，只需有效身份證或護照。" },
      { label: "第二組：", text: "需要旅遊或訪客簽證。" },
      { label: "第三組：", text: "需要簽證，須由移民總局事先核實要求。" },
    ],
    visaNote: "（最高法令 N° 1923，2014年3月13日——《移民法》條例）",
    emergencyTitle: "📞 玻利維亞緊急聯絡電話",
    emergencyIntro: "旅行期間請保存以下有用號碼：",
    emergency: emergencyContactsEn,
  },

  ar: {
    title: "🗺️ نصائح لرحلتك إلى بوليفيا",
    intro:
      "السفر إلى بوليفيا تجربة فريدة، مليئة بمناظر خلابة وثقافة نابضة بالحياة وتنوع biológico غني. لجعل زيارتك آمنة وممتعة، إليك بعض التوصيات والقيود ومعلومات التأشيرة وجهات الاتصال المهمة.",
    recommendationsTitle: "✅ توصيات للمسافرين",
    recommendations: [
      "احجز دائماً مع وكالات مرخصة قانونياً (SIRETUR – BOLIVIA).",
      "حاول توليد أقل قدر ممكن من النفايات أثناء رحلاتك.",
      "احترم وادعم التدابير لتقليل الأثر البيئي وحماية المناظر الطبيعية.",
      "إذا زرت مناطق استوائية أو منخفضة، احمل بطاقة تطعيم الحمى الصفراء.",
      "في المناطق المحمية، اطلب الإرشاد في مراكز التفسير.",
      "احمل نقوداً محلية.",
    ],
    prohibitedTitle: "🚫 ما هو محظور",
    prohibitedIntro: "لحماية البيئة والثقافة المحلية:",
    prohibited: [
      "عدم إلحاق الضرر بالتنوع البيولوجي.",
      "تجنب استخدام عناصر قد تعرض الحياة للخطر.",
      "شراء المخدرات أو المؤثرات العقلية محظور تماماً.",
      "عدم إزالة الحياة البرية أو النباتات أو التراث الثقافي.",
    ],
    visaTitle: "🌍 متطلبات التأشيرة",
    visaIntro: "حسب بلد منشأك، تختلف شروط الدخول إلى بوليفيا:",
    visaGroups: [
      { label: "المجموعة I:", text: "لا يلزم تأشيرة، فقط هوية أو جواز سفر ساري." },
      { label: "المجموعة II:", text: "يلزم تأشيرة سياحية أو زائر." },
      {
        label: "المجموعة III:",
        text: "يلزم تأشيرة، subject to prior verification of requirements by the General Directorate of Migration.",
      },
    ],
    visaNote: '(Decreto Supremo N° 1923, 13 de marzo de 2014 – Reglamento de la "Ley de Migración")',
    emergencyTitle: "📞 أرقام الطوارئ في بوليفيا",
    emergencyIntro: "احتفظ بهذه الأرقام المفيدة أثناء رحلتك:",
    emergency: emergencyContactsEn,
  },

  he: {
    title: "🗺️ טיפים לטיול בבוליביה",
    intro:
      "נסיעה לבוליביה היא חוויה ייחודית, מלאה בנופים מרהיבים, תרבות תוססת ומגוון ביולוגי עשיר. כדי שהביקור יהיה בטוח ומהנה, הנה המלצות, הגבלות, מידע על ויזה ואנשי קשר חשובים.",
    recommendationsTitle: "✅ המלצות למטיילים",
    recommendations: [
      "הזמינו תמיד דרך סוכנויות מורשות (SIRETUR – BOLIVIA).",
      "הפחיתו פסולת ככל האפשר במהלך הטיול.",
      "כבדו ותמכו באמצעים להפחתת השפעה סביבתית ולהגנה על הנוף.",
      "באזורים טropיים, נשאו תעודת חיסון נגד קדחת צהובה.",
      "באזורים מוגנים, בקשו הדרכה במרכזי הסברה.",
      "נשאו מזומן במטבע מקומי.",
    ],
    prohibitedTitle: "🚫 מה אסור",
    prohibitedIntro: "להגנה על הסביבה והתרבות המקומית:",
    prohibited: [
      "לא לפגוע במגוון הביולוגי.",
      "להימנע מפריטים שעלולים לסכן חיים.",
      "רכישת סמים אסורה לחלוטין.",
      "לא להסיר חיות בר, צמחים או מורשת תרבותית.",
    ],
    visaTitle: "🌍 דרישות ויזה",
    visaIntro: "בהתאם למדינת המוצא, תנאי הכניסה לבוליביה משתנים:",
    visaGroups: [
      { label: "קבוצה I:", text: "לא נדרשת ויזה, רק תעודה או דרכון בתוקף." },
      { label: "קבוצה II:", text: "נדרשת ויזת תייר או מבקר." },
      { label: "קבוצה III:", text: "נדרשת ויזה, בכפוף לאימות מוקדם על ידי הנהלת ההגירה." },
    ],
    visaNote: '(Supreme Decree N° 1923, March 13, 2014 – Regulations of the "Migration Law")',
    emergencyTitle: "📞 מספרי חירום בבוליביה",
    emergencyIntro: "שמרו את המספרים האלה במהלך הטיול:",
    emergency: emergencyContactsEn,
  },

  pt: {
    title: "🗺️ Dicas para sua viagem à Bolívia",
    intro:
      "Viajar à Bolívia é uma experiência única, cheia de paisagens deslumbrantes, cultura vibrante e rica biodiversidade. Para tornar sua visita segura e agradável, aqui estão algumas recomendações, restrições, informações sobre visto e contatos importantes.",
    recommendationsTitle: "✅ Recomendações para viajantes",
    recommendations: [
      "Reserve sempre com agências legalmente estabelecidas (SIRETUR – BOLIVIA).",
      "Tente gerar o mínimo de resíduos possível durante suas viagens.",
      "Respeite e apoie medidas para reduzir o impacto ambiental e proteger a paisagem.",
      "Se visitar áreas tropicais ou de baixada, leve seu cartão de vacina contra febre amarela.",
      "Em Áreas Protegidas, peça orientação nos centros de interpretação.",
      "Leve dinheiro trocado na moeda nacional.",
    ],
    prohibitedTitle: "🚫 O que é proibido",
    prohibitedIntro: "Para proteger o meio ambiente e a cultura local:",
    prohibited: [
      "Não prejudique ou danifique a biodiversidade.",
      "Evite usar itens que possam colocar vidas em risco.",
      "A aquisição de drogas ou entorpecentes é estritamente proibida.",
      "Não remova fauna, flora ou patrimônio cultural.",
    ],
    visaTitle: "🌍 Requisitos de visto",
    visaIntro: "Dependendo do seu país de origem, as condições de entrada na Bolívia variam:",
    visaGroups: [
      { label: "Grupo I:", text: "Não é necessário visto, apenas documento de identidade ou passaporte válido." },
      { label: "Grupo II:", text: "É necessário visto de turista ou visitante." },
      {
        label: "Grupo III:",
        text: "É necessário visto, sujeito à verificação prévia de requisitos pela Direção Geral de Migração.",
      },
    ],
    visaNote:
      '(Decreto Supremo N° 1923, 13 de março de 2014 – Regulamento da "Lei de Migração")',
    emergencyTitle: "📞 Contatos de emergência na Bolívia",
    emergencyIntro: "Tenha estes números úteis à mão durante sua viagem:",
    emergency: emergencyContactsEn,
  },

  ru: {
    title: "🗺️ Советы для поездки в Боливию",
    intro:
      "Путешествие в Боливию — уникальный опыт с захватывающими пейзажами, яркой культурой и богатым биоразнообразием. Чтобы ваш визит был безопасным и приятным, вот рекомендации, ограничения, информация о визе и важные контакты.",
    recommendationsTitle: "✅ Рекомендации путешественникам",
    recommendations: [
      "Бронируйте только у легально зарегистрированных агентств (SIRETUR – BOLIVIA).",
      "Старайтесь создавать как можно меньше отходов во время поездок.",
      "Уважайте меры по снижению воздействия на окружающую среду и защите ландшафта.",
      "В тропических зонах имейте при себе сертификат о прививке от жёлтой лихорадки.",
      "В заповедниках обращайтесь за консультацией в информационные центры.",
      "Имейте наличные в национальной валюте.",
    ],
    prohibitedTitle: "🚫 Что запрещено",
    prohibitedIntro: "Для защиты окружающей среды и местной культуры:",
    prohibited: [
      "Не причинять вред биоразнообразию.",
      "Не использовать предметы, угрожающие жизни.",
      "Приобретение наркотиков строго запрещено.",
      "Не забирать дикую природу, растения или культурное наследие.",
    ],
    visaTitle: "🌍 Визовые требования",
    visaIntro: "В зависимости от страны происхождения условия въезда в Боливию различаются:",
    visaGroups: [
      { label: "Группа I:", text: "Виза не требуется, только действительное удостоверение личности или паспорт." },
      { label: "Группа II:", text: "Требуется туристическая или гостевая виза." },
      { label: "Группа III:", text: "Требуется виза с предварительной проверкой требований Главным управлением миграции." },
    ],
    visaNote: '(Supreme Decree N° 1923, March 13, 2014 – Regulations of the "Migration Law")',
    emergencyTitle: "📞 Экстренные контакты в Боливии",
    emergencyIntro: "Сохраните эти полезные номера во время поездки:",
    emergency: emergencyContactsEn,
  },

  id: {
    title: "🗺️ Tips Perjalanan ke Bolivia",
    intro:
      "Bepergian ke Bolivia adalah pengalaman unik, penuh dengan pemandangan menakjubkan, budaya yang hidup, dan keanekaragaman hayati yang kaya. Agar kunjungan Anda aman dan menyenangkan, berikut rekomendasi, larangan, informasi visa, dan kontak penting.",
    recommendationsTitle: "✅ Rekomendasi untuk wisatawan",
    recommendations: [
      "Selalu pesan melalui agensi resmi (SIRETUR – BOLIVIA).",
      "Kurangi sampah selama perjalanan.",
      "Hormati langkah perlindungan lingkungan dan lanskap.",
      "Di area tropis, bawa kartu vaksin demam kuning.",
      "Di kawasan lindung, minta panduan di pusat interpretasi.",
      "Bawa uang tunai dalam mata uang lokal.",
    ],
    prohibitedTitle: "🚫 Yang dilarang",
    prohibitedIntro: "Untuk melindungi lingkungan dan budaya lokal:",
    prohibited: [
      "Jangan merusak keanekaragaman hayati.",
      "Hindari barang yang membahayakan nyawa.",
      "Membeli narkoba sangat dilarang.",
      "Jangan mengambil satwa liar, tanaman, atau warisan budaya.",
    ],
    visaTitle: "🌍 Persyaratan visa",
    visaIntro: "Bergantung pada negara asal, syarat masuk ke Bolivia bervariasi:",
    visaGroups: [
      { label: "Grup I:", text: "Tidak perlu visa, hanya KTP atau paspor yang valid." },
      { label: "Grup II:", text: "Diperlukan visa turis atau pengunjung." },
      { label: "Grup III:", text: "Diperlukan visa, dengan verifikasi persyaratan sebelumnya oleh Direktorat Jenderal Migrasi." },
    ],
    visaNote: '(Supreme Decree N° 1923, March 13, 2014 – Regulations of the "Migration Law")',
    emergencyTitle: "📞 Kontak darurat di Bolivia",
    emergencyIntro: "Simpan nomor-nomor berguna ini selama perjalanan:",
    emergency: emergencyContactsEn,
  },

  uk: {
    title: "🗺️ Поради для подорожі до Болівії",
    intro:
      "Подорож до Болівії — унікальний досвід з захопливими пейзажами, живою культурою та багатим біорізноманіттям. Щоб ваш візит був безпечним і приємним, ось рекомендації, обмеження, інформація про візу та важливі контакти.",
    recommendationsTitle: "✅ Поради мандрівникам",
    recommendations: [
      "Бронюйте лише у легально зареєстрованих агентствах (SIRETUR – BOLIVIA).",
      "Мінімізуйте відходи під час подорожей.",
      "Поважайте заходи захисту довкілля та ландшафту.",
      "У тропічних зонах майте сертифікат про щеплення від жовтої лихоманки.",
      "У заповідниках звертайтеся до інформаційних центрів.",
      "Майте готівку в національній валюті.",
    ],
    prohibitedTitle: "🚫 Що заборонено",
    prohibitedIntro: "Для захисту довкілля та місцевої культури:",
    prohibited: [
      "Не шкодити біорізноманіттю.",
      "Не використовувати предмети, що загрожують життю.",
      "Придбання наркотиків суворо заборонено.",
      "Не забирати дику природу, рослини або культурну спадщину.",
    ],
    visaTitle: "🌍 Вимоги до візи",
    visaIntro: "Залежно від країни походження, умови в'їзду до Болівії різняться:",
    visaGroups: [
      { label: "Група I:", text: "Віза не потрібна, лише дійсний посвідчення особи або паспорт." },
      { label: "Група II:", text: "Потрібна туристична або гостьова віза." },
      { label: "Група III:", text: "Потрібна віза з попередньою перевіркою вимог Головним управлінням міграції." },
    ],
    visaNote: '(Supreme Decree N° 1923, March 13, 2014 – Regulations of the "Migration Law")',
    emergencyTitle: "📞 Екстрені контакти в Болівії",
    emergencyIntro: "Зберігайте ці корисні номери під час подорожі:",
    emergency: emergencyContactsEn,
  },

  sr: {
    title: "🗺️ Saveti za putovanje u Boliviju",
    intro:
      "Putovanje u Boliviju je jedinstveno iskustvo, puno zadivljujućih pejzaža, žive kulture i bogatog biodiverziteta. Da bi vaša poseta bila sigurna i prijatna, evo preporuka, ograničenja, informacija o vizi i važnih kontakata.",
    recommendationsTitle: "✅ Preporuke za putnike",
    recommendations: [
      "Uvek rezervišite kod legalno registrovanih agencija (SIRETUR – BOLIVIA).",
      "Generišite što manje otpada tokom putovanja.",
      "Poštujte mere zaštite životne sredine i pejzaža.",
      "U tropskim zonama nosite karton o vakcini protiv žute groznice.",
      "U zaštićenim područjima tražite savet u interpretacionim centrima.",
      "Nosite gotovinu u nacionalnoj valuti.",
    ],
    prohibitedTitle: "🚫 Šta je zabranjeno",
    prohibitedIntro: "Radi zaštite životne sredine i lokalne kulture:",
    prohibited: [
      "Ne oštećivati biodiverzitet.",
      "Ne koristiti predmete koji ugrožavaju život.",
      "Kupovina droge je strogo zabranjena.",
      "Ne uklanjati divlje biljke, životinje ili kulturno nasleđe.",
    ],
    visaTitle: "🌍 Zahtevi za vizu",
    visaIntro: "U zavisnosti od zemlje porekla, uslovi ulaska u Boliviju se razlikuju:",
    visaGroups: [
      { label: "Grupa I:", text: "Viza nije potrebna, samo važeća lična karta ili pasoš." },
      { label: "Grupa II:", text: "Potrebna je turistička ili posetilačka viza." },
      { label: "Grupa III:", text: "Potrebna je viza, uz prethodnu proveru uslova od strane Generalne direkcije za migracije." },
    ],
    visaNote: '(Supreme Decree N° 1923, March 13, 2014 – Regulations of the "Migration Law")',
    emergencyTitle: "📞 Hitni kontakti u Boliviji",
    emergencyIntro: "Držite ove korisne brojeve pri ruci tokom putovanja:",
    emergency: emergencyContactsEn,
  },

  hi: {
    title: "🗺️ बोलीविया यात्रा सुझाव",
    intro:
      "बोलीविया की यात्रा एक अनूठा अनुभव है — शानदार परिदृश्य, जीवंत संस्कृति और समृद्ध जैव विविधता। सुरक्षित और सुखद यात्रा के लिए यहाँ सुझाव, प्रतिबंध, वीज़ा जानकारी और महत्वपूर्ण संपर्क हैं।",
    recommendationsTitle: "✅ यात्रियों के लिए सुझाव",
    recommendations: [
      "हमेशा कानूनी रूप से पंजीकृत एजेंसियों (SIRETUR – BOLIVIA) के साथ बुक करें।",
      "यात्रा के दौरान कम से कम कचरा पैदा करने का प्रयास करें।",
      "पर्यावरण संरक्षण के उपायों का सम्मान करें।",
      "उष्णकटिबंधीय क्षेत्रों में पीले बुखार का टीकाकरण प्रमाणपत्र रखें।",
      "संरक्षित क्षेत्रों में पर्यटन केंद्रों से मार्गदर्शन लें।",
      "राष्ट्रीय मुद्रा में नकदी रखें।",
    ],
    prohibitedTitle: "🚫 क्या प्रतिबंधित है",
    prohibitedIntro: "पर्यावरण और स्थानीय संस्कृति की रक्षा के लिए:",
    prohibited: [
      "जैव विविधता को नुकसान न पहुँचाएं।",
      "जीवन को खतरे में डालने वाली वस्तुओं का उपयोग न करें।",
      "ड्रग्स का अधिग्रहण सख्त वर्जित है।",
      "वन्यजीव, पौधे या सांस्कृतिक विरासत न निकालें।",
    ],
    visaTitle: "🌍 वीज़ा आवश्यकताएं",
    visaIntro: "आपके देश के अनुसार, बोलीविया में प्रवेश की शर्तें भिन्न होती हैं:",
    visaGroups: [
      { label: "समूह I:", text: "वीज़ा की आवश्यकता नहीं, केवल वैध पहचान पत्र या पासपोर्ट।" },
      { label: "समूह II:", text: "पर्यटक या आगंतुक वीज़ा आवश्यक।" },
      { label: "समूह III:", text: "वीज़ा आवश्यक, प्रवासन महानिदेशालय द्वारा पूर्व जाँच के अधीन।" },
    ],
    visaNote: '(Supreme Decree N° 1923, March 13, 2014 – Regulations of the "Migration Law")',
    emergencyTitle: "📞 बोलीविया में आपातकालीन संपर्क",
    emergencyIntro: "यात्रा के दौरान ये उपयोगी नंबर संभाल कर रखें:",
    emergency: emergencyContactsEn,
  },
};

export type TravelFunnelCopy = {
  heroEyebrow: string;
  heroTitle: string;
  heroLead: string;
  isabelTitle: string;
  isabelText: string;
  isabelCta: string;
  isabelPrefill: string;
  cuscoTitle: string;
  cuscoLead: string;
  boliviaTitle: string;
  boliviaLead: string;
  viewToursCta: string;
  bookTourCta: string;
  bookTourPrefill: string;
  guidesTitle: string;
  emptyRegion: string;
};

const travelFunnelEn: TravelFunnelCopy = {
  heroEyebrow: "Tours with Isabel",
  heroTitle: "Book Cusco & Bolivia tours",
  heroLead:
    "Even if you don’t need a visa, you can still travel with us. Isabel helps you book trusted tours in Cusco and Bolivia.",
  isabelTitle: "Book directly with Isabel",
  isabelText:
    "Message Mara Isabel on WhatsApp with the tour you want and your travel dates. She’ll confirm availability and details.",
  isabelCta: "WhatsApp Isabel about tours",
  isabelPrefill:
    "Hi Isabel! I’d like information about Cusco and Bolivia tours. My travel dates are…",
  cuscoTitle: "Cusco tours",
  cuscoLead: "Explore Cusco and the surrounding highlands with tours arranged by Isabel.",
  boliviaTitle: "Bolivia tours",
  boliviaLead: "From the Salar de Uyuni to Lake Titicaca — book your Bolivia itinerary with Isabel.",
  viewToursCta: "View tours",
  bookTourCta: "Book with Isabel",
  bookTourPrefill:
    "Hi Isabel! I’m interested in the tour “{tour}”. Can you share availability and details?",
  guidesTitle: "Travel guides",
  emptyRegion: "More tours coming soon — message Isabel for custom options.",
};

export const travelFunnelCopy: Record<Locale, TravelFunnelCopy> = {
  es: {
    heroEyebrow: "Tours con Isabel",
    heroTitle: "Reserva tours en Cusco y Bolivia",
    heroLead:
      "Aunque no necesites visa, puedes seguir viajando con nosotros. Isabel te ayuda a reservar tours de confianza en Cusco y Bolivia.",
    isabelTitle: "Reserva directamente con Isabel",
    isabelText:
      "Escríbele a Mara Isabel por WhatsApp con el tour que quieres y tus fechas. Ella confirma disponibilidad y detalles.",
    isabelCta: "WhatsApp a Isabel por tours",
    isabelPrefill:
      "¡Hola Isabel! Quiero información sobre tours en Cusco y Bolivia. Mis fechas de viaje son…",
    cuscoTitle: "Tours en Cusco",
    cuscoLead: "Explora Cusco y el altiplano con tours coordinados por Isabel.",
    boliviaTitle: "Tours en Bolivia",
    boliviaLead: "Del Salar de Uyuni al Lago Titicaca — reserva tu itinerario boliviano con Isabel.",
    viewToursCta: "Ver tours",
    bookTourCta: "Reservar con Isabel",
    bookTourPrefill:
      "¡Hola Isabel! Me interesa el tour “{tour}”. ¿Me puedes compartir disponibilidad y detalles?",
    guidesTitle: "Guías de viaje",
    emptyRegion: "Pronto más tours — escríbele a Isabel para opciones a medida.",
  },
  en: travelFunnelEn,
  zh: {
    ...travelFunnelEn,
    heroEyebrow: "与 Isabel 一起预订行程",
    heroTitle: "预订库斯科与玻利维亚旅游",
    heroLead: "即使不需要签证，也可以通过我们旅行。Isabel 帮您预订库斯科和玻利维亚的可靠行程。",
    isabelTitle: "直接向 Isabel 预订",
    isabelText: "通过 WhatsApp/微信告知 Isabel 想要的行程和出行日期，她会确认档期与细节。",
    isabelCta: "联系 Isabel 咨询行程",
    isabelPrefill: "你好 Isabel！我想了解库斯科和玻利维亚的旅游行程。我的出行日期是…",
    cuscoTitle: "库斯科行程",
    cuscoLead: "由 Isabel 安排，探索库斯科及周边高原。",
    boliviaTitle: "玻利维亚行程",
    boliviaLead: "从乌尤尼盐湖到的的喀喀湖——与 Isabel 预订玻利维亚行程。",
    viewToursCta: "查看行程",
    bookTourCta: "向 Isabel 预订",
    bookTourPrefill: "你好 Isabel！我对“{tour}”行程感兴趣。请告知档期和详情？",
    guidesTitle: "旅行指南",
    emptyRegion: "更多行程即将上线——联系 Isabel 定制方案。",
  },
  "zh-tw": {
    ...travelFunnelEn,
    heroEyebrow: "與 Isabel 一起預訂行程",
    heroTitle: "預訂庫斯科與玻利維亞旅遊",
    heroLead: "即使不需要簽證，也可以透過我們旅行。Isabel 幫您預訂庫斯科和玻利維亞的可靠行程。",
    isabelTitle: "直接向 Isabel 預訂",
    isabelText: "透過 WhatsApp/微信告知 Isabel 想要的行程和出行日期，她會確認檔期與細節。",
    isabelCta: "聯絡 Isabel 諮詢行程",
    isabelPrefill: "你好 Isabel！我想了解庫斯科和玻利維亞的旅遊行程。我的出行日期是…",
    cuscoTitle: "庫斯科行程",
    cuscoLead: "由 Isabel 安排，探索庫斯科及周邊高原。",
    boliviaTitle: "玻利維亞行程",
    boliviaLead: "從烏尤尼鹽湖到的的喀喀湖——與 Isabel 預訂玻利維亞行程。",
    viewToursCta: "查看行程",
    bookTourCta: "向 Isabel 預訂",
    bookTourPrefill: "你好 Isabel！我對「{tour}」行程感興趣。請告知檔期和詳情？",
    guidesTitle: "旅行指南",
    emptyRegion: "更多行程即將上線——聯絡 Isabel 客製方案。",
  },
  ar: {
    ...travelFunnelEn,
    heroEyebrow: "جولات مع Isabel",
    heroTitle: "احجز جولات كوسكو وبوليفيا",
    heroLead: "حتى إن لم تحتج إلى تأشيرة، يمكنك السفر معنا. Isabel تساعدك على حجز جولات موثوقة في كوسكو وبوليفيا.",
    isabelTitle: "احجز مباشرة مع Isabel",
    isabelText: "راسل Mara Isabel على واتساب بالجولة التي تريدها وتواريخ سفرك. تؤكد التوفر والتفاصيل.",
    isabelCta: "واتساب Isabel عن الجولات",
    isabelPrefill: "مرحباً Isabel! أريد معلومات عن جولات كوسكو وبوليفيا. تواريخ سفري هي…",
    cuscoTitle: "جولات كوسكو",
    cuscoLead: "استكشف كوسكو والمرتفعات مع جولات تنسقها Isabel.",
    boliviaTitle: "جولات بوليفيا",
    boliviaLead: "من سالار دي أويوني إلى بحيرة تيتيكاكا — احجز مسار بوليفيا مع Isabel.",
    viewToursCta: "عرض الجولات",
    bookTourCta: "احجز مع Isabel",
    bookTourPrefill: "مرحباً Isabel! أهتم بجولة “{tour}”. هل يمكنك مشاركة التوفر والتفاصيل؟",
    guidesTitle: "أدلة السفر",
    emptyRegion: "المزيد من الجولات قريباً — راسل Isabel لخيارات مخصصة.",
  },
  he: {
    ...travelFunnelEn,
    heroEyebrow: "טיולים עם Isabel",
    heroTitle: "הזמינו טיולים בקוסקו ובבוליביה",
    heroLead: "גם בלי ויזה אפשר לנסוע איתנו. Isabel עוזרת להזמין טיולים אמינים בקוסקו ובבוליביה.",
    isabelTitle: "הזמנה ישירה עם Isabel",
    isabelText: "כתבו ל-Mara Isabel ב-WhatsApp עם הטיול והתאריכים. היא תאשר זמינות ופרטים.",
    isabelCta: "WhatsApp ל-Isabel על טיולים",
    isabelPrefill: "היי Isabel! אשמח למידע על טיולים בקוסקו ובבוליביה. תאריכי הנסיעה שלי…",
    cuscoTitle: "טיולי קוסקו",
    cuscoLead: "גלו את קוסקו והרמה עם טיולים שמתאמת Isabel.",
    boliviaTitle: "טיולי בוליביה",
    boliviaLead: "מסלר דה אויוני עד אגם טיטיקקה — הזמינו מסלול בבוליביה עם Isabel.",
    viewToursCta: "צפו בטיולים",
    bookTourCta: "הזמנה עם Isabel",
    bookTourPrefill: "היי Isabel! מעניין אותי הטיול “{tour}”. אפשר לקבל זמינות ופרטים?",
    guidesTitle: "מדריכי טיול",
    emptyRegion: "עוד טיולים בקרוב — כתבו ל-Isabel לאפשרויות מותאמות.",
  },
  pt: {
    ...travelFunnelEn,
    heroEyebrow: "Tours com Isabel",
    heroTitle: "Reserve tours em Cusco e na Bolívia",
    heroLead:
      "Mesmo sem precisar de visto, você pode viajar conosco. Isabel ajuda a reservar tours confiáveis em Cusco e na Bolívia.",
    isabelTitle: "Reserve diretamente com Isabel",
    isabelText:
      "Envie mensagem para Mara Isabel no WhatsApp com o tour desejado e suas datas. Ela confirma disponibilidade e detalhes.",
    isabelCta: "WhatsApp Isabel sobre tours",
    isabelPrefill:
      "Olá Isabel! Quero informações sobre tours em Cusco e na Bolívia. Minhas datas de viagem são…",
    cuscoTitle: "Tours em Cusco",
    cuscoLead: "Explore Cusco e o altiplano com tours organizados por Isabel.",
    boliviaTitle: "Tours na Bolívia",
    boliviaLead: "Do Salar de Uyuni ao Lago Titicaca — reserve seu roteiro boliviano com Isabel.",
    viewToursCta: "Ver tours",
    bookTourCta: "Reservar com Isabel",
    bookTourPrefill:
      "Olá Isabel! Tenho interesse no tour “{tour}”. Pode compartilhar disponibilidade e detalhes?",
    guidesTitle: "Guias de viagem",
    emptyRegion: "Mais tours em breve — fale com Isabel para opções personalizadas.",
  },
  ru: {
    ...travelFunnelEn,
    heroEyebrow: "Туры с Isabel",
    heroTitle: "Бронируйте туры в Куско и Боливию",
    heroLead:
      "Даже без визы вы можете путешествовать с нами. Isabel поможет забронировать проверенные туры в Куско и Боливии.",
    isabelTitle: "Бронирование напрямую с Isabel",
    isabelText:
      "Напишите Mara Isabel в WhatsApp, какой тур вам нужен и даты поездки. Она подтвердит наличие и детали.",
    isabelCta: "WhatsApp Isabel о турах",
    isabelPrefill:
      "Здравствуйте, Isabel! Хочу информацию о турах в Куско и Боливию. Мои даты поездки…",
    cuscoTitle: "Туры в Куско",
    cuscoLead: "Исследуйте Куско и высокогорье с турами, которые организует Isabel.",
    boliviaTitle: "Туры в Боливию",
    boliviaLead: "От Солончака Уюни до озера Титикака — бронируйте маршрут с Isabel.",
    viewToursCta: "Смотреть туры",
    bookTourCta: "Забронировать с Isabel",
    bookTourPrefill:
      "Здравствуйте, Isabel! Меня интересует тур «{tour}». Можете сообщить наличие и детали?",
    guidesTitle: "Путеводители",
    emptyRegion: "Скоро больше туров — напишите Isabel для индивидуальных вариантов.",
  },
  id: {
    ...travelFunnelEn,
    heroEyebrow: "Tur dengan Isabel",
    heroTitle: "Pesan tur Cusco & Bolivia",
    heroLead:
      "Meski tidak perlu visa, Anda tetap bisa bepergian bersama kami. Isabel membantu memesan tur terpercaya di Cusco dan Bolivia.",
    isabelTitle: "Pesan langsung dengan Isabel",
    isabelText:
      "Pesan Mara Isabel di WhatsApp dengan tur yang Anda inginkan dan tanggal perjalanan. Dia akan konfirmasi ketersediaan dan detail.",
    isabelCta: "WhatsApp Isabel tentang tur",
    isabelPrefill:
      "Halo Isabel! Saya ingin info tur Cusco dan Bolivia. Tanggal perjalanan saya…",
    cuscoTitle: "Tur Cusco",
    cuscoLead: "Jelajahi Cusco dan dataran tinggi dengan tur yang diatur Isabel.",
    boliviaTitle: "Tur Bolivia",
    boliviaLead: "Dari Salar de Uyuni ke Danau Titicaca — pesan itinerary Bolivia dengan Isabel.",
    viewToursCta: "Lihat tur",
    bookTourCta: "Pesan dengan Isabel",
    bookTourPrefill:
      "Halo Isabel! Saya tertarik tur “{tour}”. Bisa bagikan ketersediaan dan detail?",
    guidesTitle: "Panduan perjalanan",
    emptyRegion: "Tur lainnya segera hadir — hubungi Isabel untuk opsi khusus.",
  },
  uk: {
    ...travelFunnelEn,
    heroEyebrow: "Тури з Isabel",
    heroTitle: "Бронюйте тури в Куско та Болівію",
    heroLead:
      "Навіть без візи ви можете подорожувати з нами. Isabel допоможе забронювати перевірені тури в Куско та Болівії.",
    isabelTitle: "Бронювання напряму з Isabel",
    isabelText:
      "Напишіть Mara Isabel у WhatsApp, який тур вам потрібен і дати поїздки. Вона підтвердить наявність і деталі.",
    isabelCta: "WhatsApp Isabel про тури",
    isabelPrefill:
      "Вітаю, Isabel! Хочу інформацію про тури в Куско та Болівію. Мої дати поїздки…",
    cuscoTitle: "Тури в Куско",
    cuscoLead: "Досліджуйте Куско та високогір’я з турами, які організовує Isabel.",
    boliviaTitle: "Тури в Болівію",
    boliviaLead: "Від Солончака Уюні до озера Тітікака — бронюйте маршрут з Isabel.",
    viewToursCta: "Переглянути тури",
    bookTourCta: "Забронювати з Isabel",
    bookTourPrefill:
      "Вітаю, Isabel! Мене цікавить тур «{tour}». Можете повідомити наявність і деталі?",
    guidesTitle: "Путівники",
    emptyRegion: "Незабаром більше турів — напишіть Isabel для індивідуальних варіантів.",
  },
  sr: {
    ...travelFunnelEn,
    heroEyebrow: "Ture sa Isabel",
    heroTitle: "Rezervišite ture u Cuscu i Boliviji",
    heroLead:
      "Čak i ako vam ne treba viza, možete putovati sa nama. Isabel pomaže da rezervišete pouzdane ture u Cuscu i Boliviji.",
    isabelTitle: "Rezervišite direktno sa Isabel",
    isabelText:
      "Pišite Mara Isabel na WhatsApp sa turom koju želite i datumima putovanja. Ona potvrđuje dostupnost i detalje.",
    isabelCta: "WhatsApp Isabel o turama",
    isabelPrefill:
      "Zdravo Isabel! Želim informacije o turama u Cuscu i Boliviji. Moji datumi putovanja su…",
    cuscoTitle: "Ture u Cuscu",
    cuscoLead: "Istražite Cusco i visoravan sa turama koje dogovara Isabel.",
    boliviaTitle: "Ture u Boliviji",
    boliviaLead: "Od Salar de Uyunija do jezera Titicaca — rezervišite itinerer sa Isabel.",
    viewToursCta: "Pogledaj ture",
    bookTourCta: "Rezerviši sa Isabel",
    bookTourPrefill:
      "Zdravo Isabel! Zanima me tura “{tour}”. Možete li podeliti dostupnost i detalje?",
    guidesTitle: "Vodiči za putovanje",
    emptyRegion: "Uskoro više tura — pišite Isabel za prilagođene opcije.",
  },
  hi: {
    ...travelFunnelEn,
    heroEyebrow: "Isabel के साथ टूर",
    heroTitle: "कुस्को और बोलीविया टूर बुक करें",
    heroLead:
      "वीज़ा न भी लगे तो भी आप हमारे साथ यात्रा कर सकते हैं। Isabel कुस्को और बोलीविया में भरोसेमंद टूर बुक करने में मदद करती हैं।",
    isabelTitle: "सीधे Isabel के साथ बुक करें",
    isabelText:
      "WhatsApp पर Mara Isabel को बताएं कि कौन-सा टूर चाहिए और आपकी तारीखें क्या हैं। वे उपलब्धता और विवरण बताएंगी।",
    isabelCta: "टूर के लिए Isabel को WhatsApp करें",
    isabelPrefill:
      "नमस्ते Isabel! मुझे कुस्को और बोलीविया टूर की जानकारी चाहिए। मेरी यात्रा तिथियाँ…",
    cuscoTitle: "कुस्को टूर",
    cuscoLead: "Isabel द्वारा व्यवस्थित टूर के साथ कुस्को और पठार घूमें।",
    boliviaTitle: "बोलीविया टूर",
    boliviaLead: "Salar de Uyuni से Lake Titicaca तक — Isabel के साथ बोलीविया यात्रा बुक करें।",
    viewToursCta: "टूर देखें",
    bookTourCta: "Isabel के साथ बुक करें",
    bookTourPrefill:
      "नमस्ते Isabel! मुझे “{tour}” टूर में दिलचस्पी है। उपलब्धता और विवरण बता सकती हैं?",
    guidesTitle: "यात्रा गाइड",
    emptyRegion: "और टूर जल्द आ रहे हैं — कस्टम विकल्पों के लिए Isabel को लिखें।",
  },
};

export const cuscoToursMeta: Record<Locale, { title: string; description: string }> = {
  es: {
    title: "Tours en Cusco: Machu Picchu y Montaña de Colores | Isabel",
    description:
      "Tours desde Cusco con Isabel: Machu Picchu, Montaña de Colores (Vinicunca) y más. Reserva y cotiza por WhatsApp en Cusco.",
  },
  en: {
    title: "Cusco Tours: Machu Picchu & Rainbow Mountain | Isabel",
    description:
      "Book Cusco day tours with Isabel: Machu Picchu, Rainbow Mountain (Vinicunca), and more. WhatsApp booking from Cusco, Peru.",
  },
  zh: {
    title: "库斯科旅游：马丘比丘与彩虹山 | Isabel",
    description: "通过 Isabel 预订库斯科一日游：马丘比丘、彩虹山等。库斯科当地 WhatsApp/微信咨询。",
  },
  "zh-tw": {
    title: "庫斯科旅遊：馬丘比丘與彩虹山 | Isabel",
    description: "透過 Isabel 預訂庫斯科一日遊：馬丘比丘、彩虹山等。庫斯科當地 WhatsApp/微信諮詢。",
  },
  ar: {
    title: "جولات كوسكو: ماتشو بيتشو وجبل الألوان | Isabel",
    description:
      "احجز جولات يومية من كوسكو مع Isabel: ماتشو بيتشو، جبل الألوان والمزيد عبر واتساب.",
  },
  he: {
    title: "טיולי קוסקו: מאצ'ו פיצ'ו והר הקשת | Isabel",
    description:
      "הזמינו טיולי יום מקוסקו עם Isabel: מאצ'ו פיצ'ו, הר הקשת ועוד. הזמנה בוואטסאפ מקוסקו.",
  },
  pt: {
    title: "Tours em Cusco: Machu Picchu e Montanha Colorida | Isabel",
    description:
      "Tours a partir de Cusco com Isabel: Machu Picchu, Montanha Colorida (Vinicunca) e mais. Reserve pelo WhatsApp.",
  },
  ru: {
    title: "Туры в Куско: Мачу-Пикчу и Радужная гора | Isabel",
    description:
      "Однодневные туры из Куско с Isabel: Мачу-Пикчу, Радужная гора и другое. Бронирование в WhatsApp.",
  },
  id: {
    title: "Tur Cusco: Machu Picchu & Rainbow Mountain | Isabel",
    description:
      "Pesan tur harian dari Cusco dengan Isabel: Machu Picchu, Rainbow Mountain, dan lainnya via WhatsApp.",
  },
  uk: {
    title: "Тури в Куско: Мачу-Пікчу та Веселкова гора | Isabel",
    description:
      "Одноденні тури з Куско з Isabel: Мачу-Пікчу, Веселкова гора та інше. Бронювання у WhatsApp.",
  },
  sr: {
    title: "Ture u Cuscu: Machu Picchu i Rainbow Mountain | Isabel",
    description:
      "Dnevne ture iz Cusca sa Isabel: Machu Picchu, Rainbow Mountain i više. Rezervacija preko WhatsApp-a.",
  },
  hi: {
    title: "कुस्को टूर: Machu Picchu और Rainbow Mountain | Isabel",
    description:
      "Isabel के साथ कुस्को डे टूर: Machu Picchu, Rainbow Mountain और अधिक। WhatsApp से बुक करें।",
  },
};

export const boliviaToursMeta: Record<Locale, { title: string; description: string }> = {
  es: {
    title: "Tours en Bolivia: Salar de Uyuni y Titicaca | Isabel",
    description:
      "Tours a Bolivia con Isabel desde Cusco: Salar de Uyuni, Lago Titicaca / Copacabana y más. Reserva fácil por WhatsApp.",
  },
  en: {
    title: "Bolivia Tours: Salar de Uyuni & Titicaca | Isabel",
    description:
      "Book Bolivia tours with Isabel from Cusco: Salar de Uyuni, Lake Titicaca / Copacabana, and more. WhatsApp booking.",
  },
  zh: {
    title: "玻利维亚旅游：乌尤尼盐湖与的的喀喀湖 | Isabel",
    description:
      "通过 Isabel 从库斯科预订玻利维亚行程：乌尤尼盐湖、的的喀喀湖/科帕卡瓦纳等。WhatsApp/微信咨询。",
  },
  "zh-tw": {
    title: "玻利維亞旅遊：烏尤尼鹽湖與的的喀喀湖 | Isabel",
    description:
      "透過 Isabel 從庫斯科預訂玻利維亞行程：烏尤尼鹽湖、的的喀喀湖/科帕卡瓦納等。WhatsApp/微信諮詢。",
  },
  ar: {
    title: "جولات بوليفيا: أويوني وتيتيكاكا | Isabel",
    description:
      "احجز جولات بوليفيا مع Isabel من كوسكو: سالار دي أويوني، بحيرة تيتيكاكا / كوباكابانا عبر واتساب.",
  },
  he: {
    title: "טיולי בוליביה: אויוני וטיטיקקה | Isabel",
    description:
      "הזמינו טיולים בבוליביה עם Isabel מקוסקו: סלר דה אויוני, אגם טיטיקקה / קופאקבנה בוואטסאפ.",
  },
  pt: {
    title: "Tours na Bolívia: Salar de Uyuni e Titicaca | Isabel",
    description:
      "Tours na Bolívia com Isabel a partir de Cusco: Salar de Uyuni, Lago Titicaca / Copacabana e mais. WhatsApp.",
  },
  ru: {
    title: "Туры в Боливию: Уюни и Титикака | Isabel",
    description:
      "Туры в Боливию с Isabel из Куско: Солончак Уюни, озеро Титикака / Копакабана. WhatsApp.",
  },
  id: {
    title: "Tur Bolivia: Salar de Uyuni & Titicaca | Isabel",
    description:
      "Pesan tur Bolivia dengan Isabel dari Cusco: Salar de Uyuni, Danau Titicaca / Copacabana via WhatsApp.",
  },
  uk: {
    title: "Тури в Болівію: Уюні та Тітікака | Isabel",
    description:
      "Тури в Болівію з Isabel з Куско: Солончак Уюні, озеро Тітікака / Копакабана. WhatsApp.",
  },
  sr: {
    title: "Ture u Boliviji: Salar de Uyuni i Titicaca | Isabel",
    description:
      "Ture u Boliviji sa Isabel iz Cusca: Salar de Uyuni, jezero Titicaca / Copacabana preko WhatsApp-a.",
  },
  hi: {
    title: "बोलीविया टूर: Salar de Uyuni और Titicaca | Isabel",
    description:
      "कुस्को से Isabel के साथ बोलीविया टूर: Salar de Uyuni, Lake Titicaca / Copacabana। WhatsApp से बुक करें।",
  },
};

