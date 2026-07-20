import type { Locale } from "./config";
import { guideContent, guideMeta, guideNav } from "./guide-translations";
import type { GuideContent } from "./guide-translations";
import { chinaContactCopy, isChinaLocale } from "./china-translations";
import type { ChinaContactCopy } from "./china-translations";
import { heTranslations } from "./he-translations";
import { reviewsCopy } from "./reviews-translations";
import type { ReviewsCopy } from "./reviews-translations";

export type Translations = {
  meta: {
    home: { title: string; description: string };
    services: { title: string; description: string };
    contact: { title: string; description: string };
    guide: { title: string; description: string };
  };
  nav: { home: string; services: string; contact: string; guide: string };
  home: {
    eyebrow: string;
    title: string;
    subtitle: string;
    heroText: string;
    ctaWhatsapp: string;
    ctaContact: string;
    highlights: string[];
    requirementsTitle: string;
    requirements: string[];
    salarTitle: string;
    salarText: string;
    salarImageAlt: string;
    faqTitle: string;
    faqQuestion: string;
    faqAnswer: string;
    servicesTitle: string;
    servicesSubtitle: string;
    serviceCards: { title: string; text: string }[];
    galleryTitle: string;
    gallerySubtitle: string;
    gallery: {
      entrance: { alt: string; caption: string };
      happy: { alt: string; caption: string };
      passports: { alt: string; caption: string };
    };
  };
  services: {
    title: string;
    subtitle: string;
    cards: { title: string; text: string }[];
    faqTitle: string;
    faqs: { q: string; a: string }[];
  };
  contact: {
    title: string;
    subtitle: string;
    whatsappTitle: string;
    whatsappText: string;
    whatsappCta: string;
    formTitle: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    submitLabel: string;
    formSending: string;
    formSuccess: string;
    formError: string;
    locationTitle: string;
    locationText: string;
    hoursTitle: string;
    hoursWeekdays: string;
    hoursWeekends: string;
    directionsCta: string;
    contactImageAlt: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
  whatsappFloat: string;
  reviews: ReviewsCopy;
  guide: GuideContent;
  china?: ChinaContactCopy;
};

type BaseTranslations = Omit<Translations, "guide"> & {
  meta: Omit<Translations["meta"], "guide">;
  nav: Omit<Translations["nav"], "guide">;
};

export const translations: Record<Locale, BaseTranslations> = {
  es: {
    meta: {
      home: {
        title: "Visa para Bolivia en Cusco | Conexión Bolivia",
        description:
          "Trámites rápidos de visa para Bolivia desde Cusco. Asesoría personalizada frente al consulado. Ideal para viajeros al Salar de Uyuni.",
      },
      services: {
        title: "Servicios de Visa Bolivia | Conexión Bolivia Cusco",
        description:
          "Asesoría en visas turísticas, trabajo y estudio para Bolivia. Servicio de delivery de documentos en Cusco.",
      },
      contact: {
        title: "Contacto | Visa Bolivia Cusco – Conexión Bolivia",
        description:
          "Contáctanos por WhatsApp o formulario. Oficina frente al Consulado de Bolivia en Cusco.",
      },
    },
    nav: { home: "Inicio", services: "Servicios", contact: "Contacto" },
    home: {
      eyebrow: "Visas Bolivia en Cusco",
      title: "Conexión Bolivia – Mara Isabel",
      subtitle: "Tu visa para Bolivia, rápida y segura",
      heroText:
        "Gestiona tu visa para Bolivia de forma rápida y segura desde Cusco. Te guiamos paso a paso frente al consulado para que viajes sin errores ni demoras — ideal para quienes visitan el Salar de Uyuni y el sur de Bolivia.",
      ctaWhatsapp: "Escríbenos por WhatsApp",
      ctaContact: "Enviar consulta",
      highlights: [
        "Trámites rápidos y eficientes",
        "Asesoría personalizada para turistas",
        "Ubicación frente al consulado",
      ],
      requirementsTitle: "Requisitos para tramitar tu visa en Cusco",
      requirements: [
        "Pasaporte vigente (mínimo 6 meses)",
        "Foto tipo pasaporte con fondo blanco",
        "Vacuna contra la fiebre amarilla (según tu destino)",
        "Itinerario de viaje",
        "Reserva de hospedaje",
        "Sustento económico (estado de cuenta bancario)",
      ],
      salarTitle: "¿Vas al Salar de Uyuni?",
      salarText:
        "Miles de viajeros pasan por Cusco rumbo al Salar de Uyuni y el altiplano boliviano. Te ayudamos a obtener tu visa sin complicaciones para que disfrutes tu viaje.",
      salarImageAlt: "Mara Isabel en la entrada de la oficina Visas Bolivia",
      faqTitle: "Pregunta frecuente",
      faqQuestion: "¿Puedo gestionar la visa el mismo día?",
      faqAnswer:
        "Sí. Si vienes a nuestra oficina en Cusco con todos tus documentos, el trámite tarda aproximadamente 30 minutos. Si envías tus documentos con anticipación por correo o WhatsApp, recoger tu visa toma alrededor de 10 minutos.",
      servicesTitle: "Nuestros servicios",
      servicesSubtitle: "Asesoría experta para ingresar a Bolivia sin complicaciones",
      serviceCards: [
        { title: "Asesoría en visas", text: "Te guiamos en el proceso de obtención de tu visa para Bolivia." },
        { title: "Visa de trabajo y estudiante", text: "Te asesoramos si quieres trabajar o estudiar en Bolivia." },
        { title: "Servicio de delivery", text: "Entrega de documentos que faltan para tu viaje." },
      ],
      galleryTitle: "Viajeros felices, visas listas",
      gallerySubtitle:
        "Turistas de todo el mundo confían en Conexión Bolivia para ingresar a Bolivia sin complicaciones.",
      gallery: {
        entrance: {
          alt: "Grupo de viajeros frente a la oficina Visas Bolivia en Cusco",
          caption: "Nuestra oficina en Cusco, frente al consulado",
        },
        happy: {
          alt: "Clientes satisfechos con sus visas en la oficina de Conexión Bolivia",
          caption: "Clientes felices con su visa aprobada",
        },
        passports: {
          alt: "Viajeros internacionales mostrando sus pasaportes con visa de Bolivia",
          caption: "Viajeros de Taiwán con sus visas listas",
        },
      },
    },
    services: {
      title: "Nuestros servicios",
      subtitle: "Asesoría experta en trámites de visa para ingresar a Bolivia",
      cards: [
        { title: "Asesoría en visas", text: "Te guiamos paso a paso en la obtención de tu visa turística para Bolivia." },
        { title: "Visa de trabajo y estudiante", text: "Orientación para trámites de trabajo o estudio en Bolivia." },
        { title: "Servicio de delivery", text: "Coordinamos la entrega de documentación faltante para tu viaje." },
      ],
      faqTitle: "Preguntas frecuentes",
      faqs: [
        { q: "¿Qué servicios ofrecen?", a: "Asistencia con visas para Bolivia, visas de trabajo y estudio, y servicio de entrega de documentos." },
        { q: "¿Dónde están ubicados?", a: "Frente al Consulado de Bolivia en Cusco, Clorinda Matto de Turner 308." },
        { q: "¿Cuánto demora el proceso?", a: "Puede completarse el mismo día. Con documentos enviados antes, la recogida toma unos 10 minutos." },
        { q: "¿Qué requisitos necesito?", a: "Depende del tipo de visa, pero generalmente pasaporte, foto, itinerario, reserva de hotel y sustento económico." },
      ],
    },
    contact: {
      title: "Contáctanos",
      subtitle: "Estamos aquí para ayudarte con tu visa a Bolivia",
      whatsappTitle: "WhatsApp — la forma más rápida",
      whatsappText: "Escríbenos ahora y te respondemos de inmediato. Es nuestra vía principal de contacto.",
      whatsappCta: "Abrir WhatsApp",
      formTitle: "O envíanos un mensaje",
      nameLabel: "Nombre completo",
      emailLabel: "Correo electrónico",
      messageLabel: "Mensaje",
      submitLabel: "Enviar consulta",
      formSending: "Enviando…",
      formSuccess: "¡Gracias! Te responderemos pronto.",
      formError: "Algo salió mal. Intenta por WhatsApp.",
      locationTitle: "Ubicación",
      locationText: "Frente al Consulado de Bolivia en Cusco",
      hoursTitle: "Horario",
      hoursWeekdays: "Lunes a viernes: 8:00 AM – 7:00 PM",
      hoursWeekends: "Sábados y domingos: solo emergencias, con cita previa por WhatsApp",
      directionsCta: "Cómo llegar en Google Maps",
      contactImageAlt: "Vista de la oficina Visas Bolivia desde el exterior en Cusco",
    },
    footer: {
      tagline: "Asesoría inmediata y confiable para tu visa a Bolivia",
      rights: "Todos los derechos reservados",
    },
    whatsappFloat: "WhatsApp",
  },

  en: {
    meta: {
      home: {
        title: "Bolivia Visa in Cusco | Conexión Bolivia",
        description:
          "Fast Bolivia visa processing from Cusco, Peru. Expert guidance in front of the consulate. Perfect for Salar de Uyuni travelers.",
      },
      services: {
        title: "Bolivia Visa Services | Conexión Bolivia Cusco",
        description:
          "Tourist, work, and student visa assistance for Bolivia. Document delivery service in Cusco.",
      },
      contact: {
        title: "Contact | Bolivia Visa Cusco – Conexión Bolivia",
        description:
          "Contact us via WhatsApp or email form. Office located in front of the Bolivian Consulate in Cusco.",
      },
    },
    nav: { home: "Home", services: "Services", contact: "Contact" },
    home: {
      eyebrow: "Bolivia Visas in Cusco",
      title: "Conexión Bolivia – Mara Isabel",
      subtitle: "Your Bolivia visa — fast and secure",
      heroText:
        "Get your Bolivia visa quickly and safely from Cusco. We guide you step by step at the consulate so you travel without errors or delays — ideal for travelers heading to the Salar de Uyuni and southern Bolivia.",
      ctaWhatsapp: "Message us on WhatsApp",
      ctaContact: "Send inquiry",
      highlights: [
        "Fast and efficient processing",
        "Personalized guidance for tourists",
        "Located in front of the consulate",
      ],
      requirementsTitle: "Requirements to get your Bolivia visa in Cusco",
      requirements: [
        "Valid passport (minimum 6 months)",
        "Passport-size photo with white background",
        "Yellow fever vaccination (if required for your destination)",
        "Travel itinerary",
        "Hotel reservation",
        "Proof of funds (bank statement)",
      ],
      salarTitle: "Heading to the Salar de Uyuni?",
      salarText:
        "Thousands of travelers pass through Cusco on their way to the Salar de Uyuni and the Bolivian altiplano. We help you get your visa hassle-free so you can enjoy your trip.",
      salarImageAlt: "Mara Isabel welcoming travelers at the Visas Bolivia office entrance",
      faqTitle: "Frequently asked",
      faqQuestion: "Can I get my visa the same day?",
      faqAnswer:
        "Yes. If you come to our Cusco office with all documents, processing takes about 30 minutes. If you send documents in advance via email or WhatsApp, picking up your visa takes around 10 minutes.",
      servicesTitle: "Our services",
      servicesSubtitle: "Expert guidance for entering Bolivia without complications",
      serviceCards: [
        { title: "Visa assistance", text: "We guide you through obtaining your Bolivia visa." },
        { title: "Work & student visas", text: "Guidance if you want to work or study in Bolivia." },
        { title: "Document delivery", text: "Delivery of missing documents for your trip." },
      ],
      galleryTitle: "Happy travelers, visas ready",
      gallerySubtitle:
        "Tourists from around the world trust Conexión Bolivia to enter Bolivia hassle-free.",
      gallery: {
        entrance: {
          alt: "Group of travelers in front of the Visas Bolivia office in Cusco",
          caption: "Our Cusco office, in front of the consulate",
        },
        happy: {
          alt: "Satisfied customers at the Conexión Bolivia office with their visas",
          caption: "Happy clients with approved visas",
        },
        passports: {
          alt: "International travelers showing their passports with Bolivia visas",
          caption: "Travelers from Taiwan with visas ready",
        },
      },
    },
    services: {
      title: "Our services",
      subtitle: "Expert visa assistance for travelers entering Bolivia",
      cards: [
        { title: "Visa assistance", text: "Step-by-step guidance for your Bolivia tourist visa." },
        { title: "Work & student visas", text: "Orientation for work or study visa applications." },
        { title: "Document delivery", text: "We coordinate delivery of missing travel documents." },
      ],
      faqTitle: "Frequently asked questions",
      faqs: [
        { q: "What services do you offer?", a: "Bolivia visa assistance, work and student visas, and document delivery." },
        { q: "Where are you located?", a: "In front of the Bolivian Consulate in Cusco, Clorinda Matto de Turner 308." },
        { q: "How long does it take?", a: "Same-day processing is possible. With documents sent ahead, pickup takes about 10 minutes." },
        { q: "What do I need?", a: "Requirements vary by visa type, but generally passport, photo, itinerary, hotel booking, and bank statement." },
      ],
    },
    contact: {
      title: "Contact us",
      subtitle: "We're here to help you with your Bolivia visa",
      whatsappTitle: "WhatsApp — fastest way to reach us",
      whatsappText: "Message us now for an immediate response. This is our primary contact channel.",
      whatsappCta: "Open WhatsApp",
      formTitle: "Or send us a message",
      nameLabel: "Full name",
      emailLabel: "Email address",
      messageLabel: "Message",
      submitLabel: "Send inquiry",
      formSending: "Sending…",
      formSuccess: "Thank you! We'll get back to you soon.",
      formError: "Something went wrong. Please try WhatsApp instead.",
      locationTitle: "Location",
      locationText: "In front of the Bolivian Consulate in Cusco",
      hoursTitle: "Hours",
      hoursWeekdays: "Monday–Friday: 8:00 AM – 7:00 PM",
      hoursWeekends: "Saturday & Sunday: emergencies only, by WhatsApp appointment",
      directionsCta: "Get directions on Google Maps",
      contactImageAlt: "Looking into the Visas Bolivia office from the hallway in Cusco",
    },
    footer: {
      tagline: "Fast, reliable Bolivia visa assistance from Cusco",
      rights: "All rights reserved",
    },
    whatsappFloat: "WhatsApp",
  },

  zh: {
    meta: {
      home: {
        title: "库斯科玻利维亚签证 | Conexión Bolivia",
        description: "在秘鲁库斯科快速办理玻利维亚签证。领事馆对面，专业指导。乌尤尼盐沼旅行者首选。",
      },
      services: {
        title: "玻利维亚签证服务 | Conexión Bolivia 库斯科",
        description: "旅游、工作和学生签证咨询。库斯科文件递送服务。",
      },
      contact: {
        title: "联系我们 | 库斯科玻利维亚签证",
        description: "通过微信或表单联系我们。办公室位于库斯科玻利维亚领事馆对面。",
      },
    },
    nav: { home: "首页", services: "服务", contact: "联系" },
    home: {
      eyebrow: "库斯科玻利维亚签证",
      title: "Conexión Bolivia – Mara Isabel",
      subtitle: "玻利维亚签证 — 快速安全",
      heroText:
        "在库斯科快速安全地办理玻利维亚签证。我们在领事馆逐步指导您，避免错误和延误 — 非常适合前往乌尤尼盐沼和南玻利维亚的旅行者。",
      ctaWhatsapp: "微信联系我们",
      ctaContact: "发送咨询",
      highlights: ["快速高效办理", "为游客提供个性化指导", "位于领事馆对面"],
      requirementsTitle: "在库斯科办理玻利维亚签证的要求",
      requirements: [
        "有效护照（至少6个月）",
        "白底护照照片",
        "黄热病疫苗（如目的地要求）",
        "旅行行程",
        "酒店预订",
        "经济证明（银行对账单）",
      ],
      salarTitle: "要去乌尤尼盐沼吗？",
      salarText: "数千名旅行者途经库斯科前往乌尤尼盐沼。我们帮您轻松获得签证，尽情享受旅程。",
      salarImageAlt: "Mara Isabel 在 Visas Bolivia 办公室门口",
      faqTitle: "常见问题",
      faqQuestion: "可以当天办理签证吗？",
      faqAnswer:
        "可以。如果您携带所有文件来到库斯科办公室，大约需要30分钟。如果提前通过邮件或微信发送文件，领取签证约需10分钟。",
      servicesTitle: "我们的服务",
      servicesSubtitle: "专业签证咨询，轻松进入玻利维亚",
      serviceCards: [
        { title: "签证咨询", text: "指导您完成玻利维亚签证申请流程。" },
        { title: "工作和学生签证", text: "为在玻利维亚工作或学习提供咨询。" },
        { title: "文件递送", text: "递送旅行所需缺失文件。" },
      ],
      galleryTitle: "快乐旅行者，签证就绪",
      gallerySubtitle: "来自世界各地的游客信赖 Conexión Bolivia，轻松进入玻利维亚。",
      gallery: {
        entrance: {
          alt: "旅行者在库斯科 Visas Bolivia 办公室前的合影",
          caption: "我们在库斯科的办公室，领事馆对面",
        },
        happy: {
          alt: "在 Conexión Bolivia 办公室满意地展示签证的客户",
          caption: "签证获批的开心客户",
        },
        passports: {
          alt: "国际旅行者展示带有玻利维亚签证的护照",
          caption: "台湾旅行者签证已办好",
        },
      },
    },
    services: {
      title: "我们的服务",
      subtitle: "为进入玻利维亚的旅行者提供专业签证协助",
      cards: [
        { title: "签证咨询", text: "玻利维亚旅游签证逐步指导。" },
        { title: "工作和学生签证", text: "工作或学习签证申请指导。" },
        { title: "文件递送", text: "协调递送缺失的旅行文件。" },
      ],
      faqTitle: "常见问题",
      faqs: [
        { q: "提供哪些服务？", a: "玻利维亚签证协助、工作和学生签证、文件递送服务。" },
        { q: "办公室在哪里？", a: "库斯科玻利维亚领事馆对面，Clorinda Matto de Turner 308。" },
        { q: "需要多长时间？", a: "可当天办理。提前发送文件后，领取约需10分钟。" },
        { q: "需要什么材料？", a: "因签证类型而异，通常需要护照、照片、行程、酒店预订和银行对账单。" },
      ],
    },
    contact: {
      title: "联系我们",
      subtitle: "我们随时帮助您办理玻利维亚签证",
      whatsappTitle: "WhatsApp — 港澳台及海外用户",
      whatsappText: "港澳台及海外用户可通过 WhatsApp 联系我们。",
      whatsappCta: "打开WhatsApp",
      formTitle: "或发送消息",
      nameLabel: "全名",
      emailLabel: "电子邮件",
      messageLabel: "留言",
      submitLabel: "发送咨询",
      formSending: "发送中…",
      formSuccess: "谢谢！我们会尽快回复您。",
      formError: "出错了，请尝试通过微信联系我们。",
      locationTitle: "位置",
      locationText: "库斯科玻利维亚领事馆对面",
      hoursTitle: "营业时间",
      hoursWeekdays: "周一至周五：上午8:00 – 下午7:00",
      hoursWeekends: "周六和周日：仅限紧急情况，需通过微信预约",
      directionsCta: "在Google Maps上查看路线",
      contactImageAlt: "从外部看库斯科 Visas Bolivia 办公室",
    },
    footer: { tagline: "库斯科玻利维亚签证快速可靠咨询", rights: "版权所有" },
    whatsappFloat: "微信",
  },

  "zh-tw": {
    meta: {
      home: {
        title: "庫斯科玻利維亞簽證 | Conexión Bolivia",
        description: "在秘魯庫斯科快速辦理玻利維亞簽證。領事館對面，專業指導。烏尤尼鹽沼旅行者首選。",
      },
      services: {
        title: "玻利維亞簽證服務 | Conexión Bolivia 庫斯科",
        description: "旅遊、工作和學生簽證諮詢。庫斯科文件遞送服務。",
      },
      contact: {
        title: "聯絡我們 | 庫斯科玻利維亞簽證",
        description: "透過微信或表單聯絡我們。辦公室位於庫斯科玻利維亞領事館對面。",
      },
    },
    nav: { home: "首頁", services: "服務", contact: "聯絡" },
    home: {
      eyebrow: "庫斯科玻利維亞簽證",
      title: "Conexión Bolivia – Mara Isabel",
      subtitle: "玻利維亞簽證 — 快速安全",
      heroText:
        "在庫斯科快速安全地辦理玻利維亞簽證。我們在領事館逐步指導您，避免錯誤和延誤 — 非常適合前往烏尤尼鹽沼和南玻利維亞的旅行者。",
      ctaWhatsapp: "微信聯絡我們",
      ctaContact: "發送諮詢",
      highlights: ["快速高效辦理", "為遊客提供個人化指導", "位於領事館對面"],
      requirementsTitle: "在庫斯科辦理玻利維亞簽證的要求",
      requirements: [
        "有效護照（至少6個月）",
        "白底護照照片",
        "黃熱病疫苗（如目的地要求）",
        "旅行行程",
        "飯店預訂",
        "經濟證明（銀行對帳單）",
      ],
      salarTitle: "要去烏尤尼鹽沼嗎？",
      salarText: "數千名旅行者途經庫斯科前往烏尤尼鹽沼。我們幫您輕鬆獲得簽證，盡情享受旅程。",
      salarImageAlt: "Mara Isabel 在 Visas Bolivia 辦公室門口",
      faqTitle: "常見問題",
      faqQuestion: "可以當天辦理簽證嗎？",
      faqAnswer:
        "可以。如果您攜帶所有文件來到庫斯科辦公室，大約需要30分鐘。如果提前透過郵件或微信發送文件，領取簽證約需10分鐘。",
      servicesTitle: "我們的服務",
      servicesSubtitle: "專業簽證諮詢，輕鬆進入玻利維亞",
      serviceCards: [
        { title: "簽證諮詢", text: "指導您完成玻利維亞簽證申請流程。" },
        { title: "工作和學生簽證", text: "為在玻利維亞工作或學習提供諮詢。" },
        { title: "文件遞送", text: "遞送旅行所需缺失文件。" },
      ],
      galleryTitle: "快樂旅行者，簽證就緒",
      gallerySubtitle: "來自世界各地的遊客信賴 Conexión Bolivia，輕鬆進入玻利維亞。",
      gallery: {
        entrance: {
          alt: "旅行者在庫斯科 Visas Bolivia 辦公室前的合影",
          caption: "我們在庫斯科的辦公室，領事館對面",
        },
        happy: {
          alt: "在 Conexión Bolivia 辦公室滿意地展示簽證的客戶",
          caption: "簽證獲批的開心客戶",
        },
        passports: {
          alt: "國際旅行者展示帶有玻利維亞簽證的護照",
          caption: "台灣旅行者簽證已辦好",
        },
      },
    },
    services: {
      title: "我們的服務",
      subtitle: "為進入玻利維亞的旅行者提供專業簽證協助",
      cards: [
        { title: "簽證諮詢", text: "玻利維亞旅遊簽證逐步指導。" },
        { title: "工作和學生簽證", text: "工作或學習簽證申請指導。" },
        { title: "文件遞送", text: "協調遞送缺失的旅行文件。" },
      ],
      faqTitle: "常見問題",
      faqs: [
        { q: "提供哪些服務？", a: "玻利維亞簽證協助、工作和學生簽證、文件遞送服務。" },
        { q: "辦公室在哪裡？", a: "庫斯科玻利維亞領事館對面，Clorinda Matto de Turner 308。" },
        { q: "需要多長時間？", a: "可當天辦理。提前發送文件後，領取約需10分鐘。" },
        { q: "需要什麼材料？", a: "因簽證類型而異，通常需要護照、照片、行程、飯店預訂和銀行對帳單。" },
      ],
    },
    contact: {
      title: "聯絡我們",
      subtitle: "我們隨時幫助您辦理玻利維亞簽證",
      whatsappTitle: "WhatsApp — 港澳台及海外用戶",
      whatsappText: "港澳台及海外用戶可透過 WhatsApp 聯絡我們。",
      whatsappCta: "開啟WhatsApp",
      formTitle: "或發送訊息",
      nameLabel: "全名",
      emailLabel: "電子郵件",
      messageLabel: "留言",
      submitLabel: "發送諮詢",
      formSending: "傳送中…",
      formSuccess: "謝謝！我們會盡快回覆您。",
      formError: "出錯了，請嘗試透過微信聯絡我們。",
      locationTitle: "位置",
      locationText: "庫斯科玻利維亞領事館對面",
      hoursTitle: "營業時間",
      hoursWeekdays: "週一至週五：上午8:00 – 下午7:00",
      hoursWeekends: "週六和週日：僅限緊急情況，需透過微信預約",
      directionsCta: "在Google Maps上查看路線",
      contactImageAlt: "從外部看庫斯科 Visas Bolivia 辦公室",
    },
    footer: { tagline: "庫斯科玻利維亞簽證快速可靠諮詢", rights: "版權所有" },
    whatsappFloat: "微信",
  },

  ar: {
    meta: {
      home: {
        title: "تأشيرة بوليفيا في كوسكو | Conexión Bolivia",
        description: "معالجة سريعة لتأشيرة بوليفيا من كوسكو، بيرو. إرشاد خبير أمام القنصلية. مثالي لمسافري سالار دي أيويوني.",
      },
      services: {
        title: "خدمات تأشيرة بوليفيا | Conexión Bolivia كوسكو",
        description: "مساعدة في تأشيرات السياحة والعمل والدراسة. خدمة توصيل المستندات في كوسكو.",
      },
      contact: {
        title: "اتصل بنا | تأشيرة بوليفيا كوسكو",
        description: "تواصل معنا عبر واتساب أو النموذج. مكتبنا أمام قنصلية بوليفيا في كوسكو.",
      },
    },
    nav: { home: "الرئيسية", services: "الخدمات", contact: "اتصل بنا" },
    home: {
      eyebrow: "تأشيرات بوليفيا في كوسكو",
      title: "Conexión Bolivia – Mara Isabel",
      subtitle: "تأشيرة بوليفيا — سريعة وآمنة",
      heroText:
        "احصل على تأشيرة بوليفيا بسرعة وأمان من كوسكو. نرشدك خطوة بخطوة أمام القنصلية لتسافر دون أخطاء أو تأخير — مثالي للمسافرين إلى سالار دي أيويوني وجنوب بوليفيا.",
      ctaWhatsapp: "راسلنا على واتساب",
      ctaContact: "أرسل استفساراً",
      highlights: ["معالجة سريعة وفعّالة", "إرشاد شخصي للسياح", "موقع أمام القنصلية"],
      requirementsTitle: "متطلبات تأشيرة بوليفيا في كوسكو",
      requirements: [
        "جواز سفر ساري (6 أشهر على الأقل)",
        "صورة بحجم جواز السفر بخلفية بيضاء",
        "تطعيم الحمى الصفراء (إذا لزم الأمر)",
        "خط سير الرحلة",
        "حجز فندقي",
        "إثبات مالي (كشف حساب بنكي)",
      ],
      salarTitle: "هل أنت متجه إلى سالار دي أيويوني؟",
      salarText: "يمر آلاف المسافرين عبر كوسكو في طريقهم إلى سالار دي أيويوني. نساعدك في الحصول على تأشيرتك بسهولة.",
      salarImageAlt: "Mara Isabel عند مدخل مكتب Visas Bolivia",
      faqTitle: "سؤال شائع",
      faqQuestion: "هل يمكنني الحصول على التأشيرة في نفس اليوم؟",
      faqAnswer:
        "نعم. إذا أتيت إلى مكتبنا في كوسكو بجميع المستندات، تستغرق المعالجة حوالي 30 دقيقة. إذا أرسلت المستندات مسبقاً عبر البريد أو واتساب، يستغرق الاستلام حوالي 10 دقائق.",
      servicesTitle: "خدماتنا",
      servicesSubtitle: "إرشاد خبير لدخول بوليفيا دون تعقيدات",
      serviceCards: [
        { title: "مساعدة التأشيرة", text: "نرشدك في عملية الحصول على تأشيرة بوليفيا." },
        { title: "تأشيرات العمل والدراسة", text: "إرشاد للعمل أو الدراسة في بوليفيا." },
        { title: "توصيل المستندات", text: "توصيل المستندات الناقصة لرحلتك." },
      ],
      galleryTitle: "مسافرون سعداء، تأشيرات جاهزة",
      gallerySubtitle: "سياح من جميع أنحاء العالم يثقون بـ Conexión Bolivia لدخول بوليفيا بسهولة.",
      gallery: {
        entrance: {
          alt: "مجموعة من المسافرين أمام مكتب Visas Bolivia في كوسكو",
          caption: "مكتبنا في كوسكو، أمام القنصلية",
        },
        happy: {
          alt: "عملاء راضون مع تأشيراتهم في مكتب Conexión Bolivia",
          caption: "عملاء سعداء بتأشيراتهم المعتمدة",
        },
        passports: {
          alt: "مسافرون دوليون يعرضون جوازاتهم مع تأشيرة بوليفيا",
          caption: "مسافرون من تايوان بتأشيراتهم الجاهزة",
        },
      },
    },
    services: {
      title: "خدماتنا",
      subtitle: "مساعدة تأشيرة احترافية للمسافرين إلى بوليفيا",
      cards: [
        { title: "مساعدة التأشيرة", text: "إرشاد خطوة بخطوة لتأشيرة السياحة إلى بوليفيا." },
        { title: "تأشيرات العمل والدراسة", text: "توجيه لطلبات العمل أو الدراسة." },
        { title: "توصيل المستندات", text: "تنسيق توصيل المستندات الناقصة." },
      ],
      faqTitle: "الأسئلة الشائعة",
      faqs: [
        { q: "ما الخدمات التي تقدمونها؟", a: "مساعدة تأشيرة بوليفيا، تأشيرات العمل والدراسة، وتوصيل المستندات." },
        { q: "أين موقعكم؟", a: "أمام قنصلية بوليفيا في كوسكو، Clorinda Matto de Turner 308." },
        { q: "كم يستغرق الأمر؟", a: "يمكن الإنجاز في نفس اليوم. مع إرسال المستندات مسبقاً، الاستلام يستغرق 10 دقائق." },
        { q: "ما المستندات المطلوبة؟", a: "تختلف حسب نوع التأشيرة، لكن عادة جواز السفر والصورة وخط السير وحجز الفندق وكشف الحساب." },
      ],
    },
    contact: {
      title: "اتصل بنا",
      subtitle: "نحن هنا لمساعدتك في تأشيرة بوليفيا",
      whatsappTitle: "واتساب — أسرع طريقة للتواصل",
      whatsappText: "راسلنا الآن للحصول على رد فوري. هذه قناتنا الرئيسية للتواصل.",
      whatsappCta: "فتح واتساب",
      formTitle: "أو أرسل لنا رسالة",
      nameLabel: "الاسم الكامل",
      emailLabel: "البريد الإلكتروني",
      messageLabel: "الرسالة",
      submitLabel: "إرسال الاستفسار",
      formSending: "جارٍ الإرسال…",
      formSuccess: "شكراً لك! سنرد عليك قريباً.",
      formError: "حدث خطأ. يرجى المحاولة عبر واتساب.",
      locationTitle: "الموقع",
      locationText: "أمام قنصلية بوليفيا في كوسكو",
      hoursTitle: "ساعات العمل",
      hoursWeekdays: "الاثنين–الجمعة: 8:00 ص – 7:00 م",
      hoursWeekends: "السبت والأحد: حالات الطوارئ فقط، بموعد عبر واتساب",
      directionsCta: "الاتجاهات على خرائط جوجل",
      contactImageAlt: "منظر لمكتب Visas Bolivia من الخارج في كوسكو",
    },
    footer: { tagline: "مساعدة سريعة وموثوقة لتأشيرة بوليفيا من كوسكو", rights: "جميع الحقوق محفوظة" },
    whatsappFloat: "واتساب",
  },

  pt: {
    meta: {
      home: {
        title: "Visto para Bolívia em Cusco | Conexión Bolivia",
        description:
          "Processamento rápido de visto para a Bolívia a partir de Cusco, Peru. Orientação especializada em frente ao consulado. Ideal para viajantes do Salar de Uyuni.",
      },
      services: {
        title: "Serviços de Visto Bolívia | Conexión Bolivia Cusco",
        description: "Assistência para vistos turísticos, trabalho e estudo. Serviço de entrega de documentos em Cusco.",
      },
      contact: {
        title: "Contato | Visto Bolívia Cusco – Conexión Bolivia",
        description: "Entre em contato via WhatsApp ou formulário. Escritório em frente ao Consulado da Bolívia em Cusco.",
      },
    },
    nav: { home: "Início", services: "Serviços", contact: "Contato" },
    home: {
      eyebrow: "Vistos Bolívia em Cusco",
      title: "Conexión Bolivia – Mara Isabel",
      subtitle: "Seu visto para a Bolívia — rápido e seguro",
      heroText:
        "Obtenha seu visto para a Bolívia de forma rápida e segura em Cusco. Orientamos você passo a passo no consulado para viajar sem erros ou atrasos — ideal para quem vai ao Salar de Uyuni e ao sul da Bolívia.",
      ctaWhatsapp: "Fale conosco no WhatsApp",
      ctaContact: "Enviar consulta",
      highlights: [
        "Processamento rápido e eficiente",
        "Orientação personalizada para turistas",
        "Localização em frente ao consulado",
      ],
      requirementsTitle: "Requisitos para o visto da Bolívia em Cusco",
      requirements: [
        "Passaporte válido (mínimo 6 meses)",
        "Foto tamanho passaporte com fundo branco",
        "Vacina contra febre amarela (se necessário)",
        "Itinerário de viagem",
        "Reserva de hotel",
        "Comprovante financeiro (extrato bancário)",
      ],
      salarTitle: "Vai ao Salar de Uyuni?",
      salarText:
        "Milhares de viajantes passam por Cusco a caminho do Salar de Uyuni. Ajudamos você a obter seu visto sem complicações.",
      salarImageAlt: "Mara Isabel na entrada do escritório Visas Bolivia",
      faqTitle: "Pergunta frequente",
      faqQuestion: "Posso obter o visto no mesmo dia?",
      faqAnswer:
        "Sim. Se vier ao nosso escritório em Cusco com todos os documentos, o processo leva cerca de 30 minutos. Se enviar os documentos antecipadamente por e-mail ou WhatsApp, a retirada leva cerca de 10 minutos.",
      servicesTitle: "Nossos serviços",
      servicesSubtitle: "Orientação especializada para entrar na Bolívia sem complicações",
      serviceCards: [
        { title: "Assistência de visto", text: "Orientamos você na obtenção do visto para a Bolívia." },
        { title: "Vistos de trabalho e estudo", text: "Orientação para trabalhar ou estudar na Bolívia." },
        { title: "Entrega de documentos", text: "Entrega de documentos faltantes para sua viagem." },
      ],
      galleryTitle: "Viajantes felizes, vistos prontos",
      gallerySubtitle:
        "Turistas de todo o mundo confiam na Conexión Bolivia para entrar na Bolívia sem complicações.",
      gallery: {
        entrance: {
          alt: "Grupo de viajantes em frente ao escritório Visas Bolivia em Cusco",
          caption: "Nosso escritório em Cusco, em frente ao consulado",
        },
        happy: {
          alt: "Clientes satisfeitos com seus vistos no escritório Conexión Bolivia",
          caption: "Clientes felizes com vistos aprovados",
        },
        passports: {
          alt: "Viajantes internacionais mostrando passaportes com visto da Bolívia",
          caption: "Viajantes de Taiwan com vistos prontos",
        },
      },
    },
    services: {
      title: "Nossos serviços",
      subtitle: "Assistência profissional em vistos para viajantes à Bolívia",
      cards: [
        { title: "Assistência de visto", text: "Orientação passo a passo para o visto turístico da Bolívia." },
        { title: "Vistos de trabalho e estudo", text: "Orientação para vistos de trabalho ou estudo." },
        { title: "Entrega de documentos", text: "Coordenamos a entrega de documentos faltantes." },
      ],
      faqTitle: "Perguntas frequentes",
      faqs: [
        { q: "Quais serviços vocês oferecem?", a: "Assistência com vistos para a Bolívia, vistos de trabalho e estudo, e entrega de documentos." },
        { q: "Onde vocês estão?", a: "Em frente ao Consulado da Bolívia em Cusco, Clorinda Matto de Turner 308." },
        { q: "Quanto tempo demora?", a: "Pode ser concluído no mesmo dia. Com documentos enviados antes, a retirada leva cerca de 10 minutos." },
        { q: "O que preciso?", a: "Varia conforme o tipo de visto, mas geralmente passaporte, foto, itinerário, reserva de hotel e extrato bancário." },
      ],
    },
    contact: {
      title: "Contato",
      subtitle: "Estamos aqui para ajudar com seu visto para a Bolívia",
      whatsappTitle: "WhatsApp — forma mais rápida",
      whatsappText: "Envie uma mensagem agora para resposta imediata. É nosso canal principal.",
      whatsappCta: "Abrir WhatsApp",
      formTitle: "Ou envie uma mensagem",
      nameLabel: "Nome completo",
      emailLabel: "E-mail",
      messageLabel: "Mensagem",
      submitLabel: "Enviar consulta",
      formSending: "Enviando…",
      formSuccess: "Obrigado! Responderemos em breve.",
      formError: "Algo deu errado. Tente pelo WhatsApp.",
      locationTitle: "Localização",
      locationText: "Em frente ao Consulado da Bolívia em Cusco",
      hoursTitle: "Horário",
      hoursWeekdays: "Segunda a sexta: 8:00 – 19:00",
      hoursWeekends: "Sábado e domingo: apenas emergências, com agendamento via WhatsApp",
      directionsCta: "Como chegar no Google Maps",
      contactImageAlt: "Vista do escritório Visas Bolivia do corredor em Cusco",
    },
    footer: { tagline: "Assistência rápida e confiável para visto da Bolívia em Cusco", rights: "Todos os direitos reservados" },
    whatsappFloat: "WhatsApp",
  },

  ru: {
    meta: {
      home: {
        title: "Виза в Боливию в Куско | Conexión Bolivia",
        description:
          "Быстрое оформление визы в Боливию из Куско, Перу. Экспертная помощь напротив консульства. Идеально для путешественников на Салар-де-Уюни.",
      },
      services: {
        title: "Услуги по визе в Боливию | Conexión Bolivia Куско",
        description: "Помощь с туристическими, рабочими и студенческими визами. Доставка документов в Куско.",
      },
      contact: {
        title: "Контакты | Виза в Боливию Куско",
        description: "Свяжитесь с нами через WhatsApp или форму. Офис напротив консульства Боливии в Куско.",
      },
    },
    nav: { home: "Главная", services: "Услуги", contact: "Контакты" },
    home: {
      eyebrow: "Визы в Боливию в Куско",
      title: "Conexión Bolivia – Mara Isabel",
      subtitle: "Ваша виза в Боливию — быстро и надёжно",
      heroText:
        "Оформите визу в Боливию быстро и безопасно из Куско. Мы сопровождаем вас шаг за шагом у консульства — идеально для путешественников на Салар-де-Уюни и юг Боливии.",
      ctaWhatsapp: "Написать в WhatsApp",
      ctaContact: "Отправить запрос",
      highlights: [
        "Быстрое и эффективное оформление",
        "Персональная помощь туристам",
        "Удобное расположение напротив консульства",
      ],
      requirementsTitle: "Требования для визы в Боливию в Куско",
      requirements: [
        "Действующий паспорт (минимум 6 месяцев)",
        "Фото паспортного размера на белом фоне",
        "Прививка от жёлтой лихорадки (при необходимости)",
        "Маршрут путешествия",
        "Бронирование отеля",
        "Подтверждение финансов (выписка из банка)",
      ],
      salarTitle: "Едете на Салар-де-Уюни?",
      salarText:
        "Тысячи путешественников проезжают через Куско к Салар-де-Уюни. Мы поможем получить визу без лишних сложностей.",
      salarImageAlt: "Mara Isabel у входа в офис Visas Bolivia",
      faqTitle: "Частый вопрос",
      faqQuestion: "Можно ли получить визу в тот же день?",
      faqAnswer:
        "Да. Если прийти в наш офис в Куско со всеми документами, оформление занимает около 30 минут. Если отправить документы заранее по email или WhatsApp, получение визы занимает около 10 минут.",
      servicesTitle: "Наши услуги",
      servicesSubtitle: "Экспертная помощь для въезда в Боливию без осложнений",
      serviceCards: [
        { title: "Помощь с визой", text: "Сопровождаем вас в получении визы в Боливию." },
        { title: "Рабочие и студенческие визы", text: "Консультации для работы или учёбы в Боливии." },
        { title: "Доставка документов", text: "Доставка недостающих документов для поездки." },
      ],
      galleryTitle: "Счастливые путешественники, визы готовы",
      gallerySubtitle:
        "Туристы со всего мира доверяют Conexión Bolivia для безпроблемного въезда в Боливию.",
      gallery: {
        entrance: {
          alt: "Группа путешественников у офиса Visas Bolivia в Куско",
          caption: "Наш офис в Куско, напротив консульства",
        },
        happy: {
          alt: "Довольные клиенты с визами в офисе Conexión Bolivia",
          caption: "Счастливые клиенты с одобренными визами",
        },
        passports: {
          alt: "Международные путешественники с паспортами и визой в Боливию",
          caption: "Путешественники из Тайваня с готовыми визами",
        },
      },
    },
    services: {
      title: "Наши услуги",
      subtitle: "Профессиональная помощь с визами для путешественников в Боливию",
      cards: [
        { title: "Помощь с визой", text: "Пошаговое сопровождение туристической визы в Боливию." },
        { title: "Рабочие и студенческие визы", text: "Консультации по рабочим и студенческим визам." },
        { title: "Доставка документов", text: "Координация доставки недостающих документов." },
      ],
      faqTitle: "Часто задаваемые вопросы",
      faqs: [
        { q: "Какие услуги вы предлагаете?", a: "Помощь с визой в Боливию, рабочие и студенческие визы, доставка документов." },
        { q: "Где вы находитесь?", a: "Напротив консульства Боливии в Куско, Clorinda Matto de Turner 308." },
        { q: "Сколько времени занимает?", a: "Можно оформить в тот же день. При предварительной отправке документов получение занимает около 10 минут." },
        { q: "Что мне нужно?", a: "Зависит от типа визы, но обычно паспорт, фото, маршрут, бронь отеля и выписка из банка." },
      ],
    },
    contact: {
      title: "Контакты",
      subtitle: "Мы поможем вам с визой в Боливию",
      whatsappTitle: "WhatsApp — самый быстрый способ",
      whatsappText: "Напишите нам сейчас для быстрого ответа. Это наш основной канал связи.",
      whatsappCta: "Открыть WhatsApp",
      formTitle: "Или отправьте сообщение",
      nameLabel: "Полное имя",
      emailLabel: "Электронная почта",
      messageLabel: "Сообщение",
      submitLabel: "Отправить запрос",
      formSending: "Отправка…",
      formSuccess: "Спасибо! Мы скоро ответим.",
      formError: "Что-то пошло не так. Попробуйте WhatsApp.",
      locationTitle: "Адрес",
      locationText: "Напротив консульства Боливии в Куско",
      hoursTitle: "Часы работы",
      hoursWeekdays: "Пн–Пт: 8:00 – 19:00",
      hoursWeekends: "Сб и Вс: только экстренные случаи, по записи в WhatsApp",
      directionsCta: "Маршрут в Google Maps",
      contactImageAlt: "Вид на офис Visas Bolivia снаружи в Куско",
    },
    footer: { tagline: "Быстрая и надёжная помощь с визой в Боливию из Куско", rights: "Все права защищены" },
    whatsappFloat: "WhatsApp",
  },

  id: {
    meta: {
      home: {
        title: "Visa Bolivia Cusco | Syarat & Proses Cepat – Conexión Bolivia",
        description:
          "Urus visa Bolivia di Cusco, Peru dengan cepat dan aman. Kantor di depan konsulat Bolivia. Ideal untuk wisatawan ke Salar de Uyuni.",
      },
      services: {
        title: "Layanan Visa Bolivia Cusco | Conexión Bolivia",
        description:
          "Bantuan visa turis, kerja, dan studi ke Bolivia. Layanan pengiriman dokumen di Cusco, Peru.",
      },
      contact: {
        title: "Kontak Visa Bolivia Cusco | Conexión Bolivia",
        description:
          "Hubungi kami via WhatsApp atau formulir. Kantor kami di depan Konsulat Bolivia di Cusco, Peru.",
      },
    },
    nav: { home: "Beranda", services: "Layanan", contact: "Kontak" },
    home: {
      eyebrow: "Visa Bolivia di Cusco",
      title: "Conexión Bolivia – Mara Isabel",
      subtitle: "Visa Bolivia Anda — cepat dan aman",
      heroText:
        "Urus visa Bolivia dengan cepat dan aman dari Cusco, Peru. Kami membimbing Anda langkah demi langkah di depan konsulat agar perjalanan bebas hambatan — ideal untuk wisatawan menuju Salar de Uyuni dan selatan Bolivia.",
      ctaWhatsapp: "Hubungi kami via WhatsApp",
      ctaContact: "Kirim pertanyaan",
      highlights: [
        "Proses cepat dan efisien",
        "Panduan personal untuk wisatawan",
        "Lokasi di depan konsulat",
      ],
      requirementsTitle: "Syarat visa Bolivia di Cusco",
      requirements: [
        "Paspor valid (minimal 6 bulan)",
        "Foto paspor dengan latar belakang putih",
        "Vaksin demam kuning (jika diperlukan)",
        "Itinerary perjalanan",
        "Reservasi hotel",
        "Bukti keuangan (rekening koran)",
      ],
      salarTitle: "Menuju Salar de Uyuni?",
      salarText:
        "Ribuan wisatawan melalui Cusco menuju Salar de Uyuni dan dataran tinggi Bolivia. Kami bantu Anda mendapatkan visa tanpa repot agar perjalanan lebih menyenangkan.",
      salarImageAlt: "Mara Isabel di pintu masuk kantor Visas Bolivia",
      faqTitle: "Pertanyaan umum",
      faqQuestion: "Bisakah visa diproses di hari yang sama?",
      faqAnswer:
        "Ya. Jika Anda datang ke kantor kami di Cusco dengan semua dokumen, prosesnya sekitar 30 menit. Jika dokumen dikirim terlebih dahulu via email atau WhatsApp, pengambilan visa hanya sekitar 10 menit.",
      servicesTitle: "Layanan kami",
      servicesSubtitle: "Panduan ahli untuk masuk Bolivia tanpa kendala",
      serviceCards: [
        { title: "Bantuan visa", text: "Kami membimbing proses pengurusan visa Bolivia Anda." },
        { title: "Visa kerja & studi", text: "Panduan jika Anda ingin bekerja atau studi di Bolivia." },
        { title: "Pengiriman dokumen", text: "Pengiriman dokumen yang masih kurang untuk perjalanan Anda." },
      ],
      galleryTitle: "Wisatawan bahagia, visa siap",
      gallerySubtitle:
        "Wisatawan dari seluruh dunia mempercayai Conexión Bolivia untuk masuk Bolivia tanpa kendala.",
      gallery: {
        entrance: {
          alt: "Grup wisatawan di depan kantor Visas Bolivia di Cusco",
          caption: "Kantor kami di Cusco, di depan konsulat",
        },
        happy: {
          alt: "Pelanggan puas dengan visa mereka di kantor Conexión Bolivia",
          caption: "Pelanggan bahagia dengan visa yang disetujui",
        },
        passports: {
          alt: "Wisatawan internasional menunjukkan paspor dengan visa Bolivia",
          caption: "Wisatawan dari Taiwan dengan visa siap",
        },
      },
    },
    services: {
      title: "Layanan kami",
      subtitle: "Bantuan visa profesional untuk wisatawan ke Bolivia",
      cards: [
        { title: "Bantuan visa", text: "Panduan langkah demi langkah untuk visa turis Bolivia." },
        { title: "Visa kerja & studi", text: "Orientasi untuk pengajuan visa kerja atau studi." },
        { title: "Pengiriman dokumen", text: "Koordinasi pengiriman dokumen perjalanan yang kurang." },
      ],
      faqTitle: "Pertanyaan yang sering diajukan",
      faqs: [
        { q: "Layanan apa yang tersedia?", a: "Bantuan visa Bolivia, visa kerja dan studi, serta pengiriman dokumen." },
        { q: "Di mana lokasi kantor?", a: "Di depan Konsulat Bolivia di Cusco, Clorinda Matto de Turner 308." },
        { q: "Berapa lama prosesnya?", a: "Bisa selesai di hari yang sama. Jika dokumen dikirim terlebih dahulu, pengambilan sekitar 10 menit." },
        { q: "Dokumen apa yang diperlukan?", a: "Tergantung jenis visa, umumnya paspor, foto, itinerary, booking hotel, dan rekening koran." },
      ],
    },
    contact: {
      title: "Hubungi kami",
      subtitle: "Kami siap membantu pengurusan visa Bolivia Anda",
      whatsappTitle: "WhatsApp — cara tercepat",
      whatsappText: "Kirim pesan sekarang untuk respons cepat. Ini saluran utama kami.",
      whatsappCta: "Buka WhatsApp",
      formTitle: "Atau kirim pesan",
      nameLabel: "Nama lengkap",
      emailLabel: "Alamat email",
      messageLabel: "Pesan",
      submitLabel: "Kirim pertanyaan",
      formSending: "Mengirim…",
      formSuccess: "Terima kasih! Kami akan segera merespons.",
      formError: "Terjadi kesalahan. Silakan coba via WhatsApp.",
      locationTitle: "Lokasi",
      locationText: "Di depan Konsulat Bolivia di Cusco",
      hoursTitle: "Jam operasional",
      hoursWeekdays: "Senin–Jumat: 08.00 – 19.00",
      hoursWeekends: "Sabtu & Minggu: hanya darurat, dengan janji via WhatsApp",
      directionsCta: "Petunjuk arah di Google Maps",
      contactImageAlt: "Pemandangan kantor Visas Bolivia dari luar di Cusco",
    },
    footer: {
      tagline: "Bantuan visa Bolivia cepat dan terpercaya dari Cusco",
      rights: "Hak cipta dilindungi",
    },
    whatsappFloat: "WhatsApp",
  },

  uk: {
    meta: {
      home: {
        title: "Віза Болівія Куско | Швидке оформлення – Conexión Bolivia",
        description:
          "Швидке оформлення візи в Болівію з Куско, Перу. Експертна допомога навпроти консульства. Ідеально для мандрівників на Салар-де-Уюні.",
      },
      services: {
        title: "Послуги з візи в Болівію Куско | Conexión Bolivia",
        description:
          "Допомога з туристичними, робочими та студентськими візами. Доставка документів у Куско, Перу.",
      },
      contact: {
        title: "Контакти | Віза Болівія Куско – Conexión Bolivia",
        description:
          "Зв'яжіться з нами через WhatsApp або форму. Офіс навпроти консульства Болівії в Куско, Перу.",
      },
    },
    nav: { home: "Головна", services: "Послуги", contact: "Контакти" },
    home: {
      eyebrow: "Віза в Болівію в Куско",
      title: "Conexión Bolivia – Mara Isabel",
      subtitle: "Ваша віза в Болівію — швидко та надійно",
      heroText:
        "Оформіть візу в Болівію швидко та безпечно з Куско, Перу. Ми супроводжуємо вас крок за кроком біля консульства, щоб подорож пройшла без помилок і затримок — ідеально для мандрівників на Салар-де-Уюні та південь Болівії.",
      ctaWhatsapp: "Написати в WhatsApp",
      ctaContact: "Надіслати запит",
      highlights: [
        "Швидке та ефективне оформлення",
        "Персональна допомога туристам",
        "Зручне розташування навпроти консульства",
      ],
      requirementsTitle: "Вимоги для візи в Болівію в Куско",
      requirements: [
        "Дійсний закордонний паспорт (мінімум 6 місяців)",
        "Фото паспортного зразка на білому тлі",
        "Щеплення від жовтої лихоманки (за потреби)",
        "Маршрут подорожі",
        "Бронювання готелю",
        "Підтвердження фінансів (виписка з банку)",
      ],
      salarTitle: "Їдете на Салар-де-Уюні?",
      salarText:
        "Тисячі мандрівників проїжджають через Куско до Салар-де-Уюні та болівійського нагір'я. Ми допоможемо отримати візу без зайвих складнощів.",
      salarImageAlt: "Mara Isabel біля входу в офіс Visas Bolivia",
      faqTitle: "Поширене запитання",
      faqQuestion: "Чи можна отримати візу в той самий день?",
      faqAnswer:
        "Так. Якщо прийти до нашого офісу в Куско з усіма документами, оформлення займає близько 30 хвилин. Якщо надіслати документи заздалегідь електронною поштою або WhatsApp, отримання візи займає близько 10 хвилин.",
      servicesTitle: "Наші послуги",
      servicesSubtitle: "Експертна допомога для в'їзду в Болівію без ускладнень",
      serviceCards: [
        { title: "Допомога з візою", text: "Супроводжуємо вас у процесі отримання візи в Болівію." },
        { title: "Робочі та студентські візи", text: "Консультації для роботи або навчання в Болівії." },
        { title: "Доставка документів", text: "Доставка документів, яких не вистачає для подорожі." },
      ],
      galleryTitle: "Щасливі мандрівники, візи готові",
      gallerySubtitle:
        "Туристи з усього світу довіряють Conexión Bolivia для безпроблемного в'їзду в Болівію.",
      gallery: {
        entrance: {
          alt: "Група мандрівників біля офісу Visas Bolivia в Куско",
          caption: "Наш офіс у Куско, навпроти консульства",
        },
        happy: {
          alt: "Задоволені клієнти з візами в офісі Conexión Bolivia",
          caption: "Щасливі клієнти зі схваленими візами",
        },
        passports: {
          alt: "Міжнародні мандрівники з паспортами та візою в Болівію",
          caption: "Мандрівники з Тайваню з готовими візами",
        },
      },
    },
    services: {
      title: "Наші послуги",
      subtitle: "Професійна допомога з візами для мандрівників у Болівію",
      cards: [
        { title: "Допомога з візою", text: "Покроковий супровід оформлення туристичної візи в Болівію." },
        { title: "Робочі та студентські візи", text: "Консультації щодо робочих та студентських віз." },
        { title: "Доставка документів", text: "Координація доставки документів, яких не вистачає." },
      ],
      faqTitle: "Часті запитання",
      faqs: [
        { q: "Які послуги ви надаєте?", a: "Допомога з візою в Болівію, робочі та студентські візи, доставка документів." },
        { q: "Де ви знаходитесь?", a: "Навпроти консульства Болівії в Куско, Clorinda Matto de Turner 308." },
        { q: "Скільки часу займає оформлення?", a: "Можна оформити в той самий день. При попередній відправці документів отримання займає близько 10 хвилин." },
        { q: "Які документи потрібні?", a: "Залежить від типу візи, але зазвичай паспорт, фото, маршрут, бронювання готелю та банківська виписка." },
      ],
    },
    contact: {
      title: "Контакти",
      subtitle: "Ми допоможемо вам з візою в Болівію",
      whatsappTitle: "WhatsApp — найшвидший спосіб",
      whatsappText: "Напишіть нам зараз для швидкої відповіді. Це наш основний канал зв'язку.",
      whatsappCta: "Відкрити WhatsApp",
      formTitle: "Або надішліть повідомлення",
      nameLabel: "Повне ім'я",
      emailLabel: "Електронна пошта",
      messageLabel: "Повідомлення",
      submitLabel: "Надіслати запит",
      formSending: "Надсилання…",
      formSuccess: "Дякуємо! Ми скоро відповімо.",
      formError: "Щось пішло не так. Спробуйте WhatsApp.",
      locationTitle: "Адреса",
      locationText: "Навпроти консульства Болівії в Куско",
      hoursTitle: "Години роботи",
      hoursWeekdays: "Пн–Пт: 8:00 – 19:00",
      hoursWeekends: "Сб і Нд: лише екстрені випадки, за записом у WhatsApp",
      directionsCta: "Маршрут у Google Maps",
      contactImageAlt: "Вигляд офісу Visas Bolivia ззовні в Куско",
    },
    footer: {
      tagline: "Швидка та надійна допомога з візою в Болівію з Куско",
      rights: "Усі права захищені",
    },
    whatsappFloat: "WhatsApp",
  },

  sr: {
    meta: {
      home: {
        title: "Viza Bolivija Kusko | Brza i sigurna – Conexión Bolivia",
        description:
          "Brzo rešavanje vize za Boliviju iz Kuska, Peru. Stručna pomoć ispred konzulata. Idealno za putnike ka Salar de Uyuni.",
      },
      services: {
        title: "Usluge vize Bolivija Kusko | Conexión Bolivia",
        description:
          "Pomoć sa turističkim, radnim i studentskim vizama za Boliviju. Dostava dokumenata u Kusku, Peru.",
      },
      contact: {
        title: "Kontakt | Viza Bolivija Kusko – Conexión Bolivia",
        description:
          "Kontaktirajte nas putem WhatsApp-a ili formulara. Kancelarija ispred konzulata Bolivije u Kusku, Peru.",
      },
    },
    nav: { home: "Početna", services: "Usluge", contact: "Kontakt" },
    home: {
      eyebrow: "Viza Bolivija u Kusku",
      title: "Conexión Bolivia – Mara Isabel",
      subtitle: "Vaša viza za Boliviju — brzo i sigurno",
      heroText:
        "Rešite vizu za Boliviju brzo i sigurno iz Kuska, Peru. Vodimo vas korak po korak ispred konzulata da putujete bez grešaka i kašnjenja — idealno za putnike ka Salar de Uyuni i južnoj Boliviji.",
      ctaWhatsapp: "Pišite nam na WhatsApp",
      ctaContact: "Pošaljite upit",
      highlights: [
        "Brza i efikasna obrada",
        "Personalizovana pomoć turistima",
        "Lokacija ispred konzulata",
      ],
      requirementsTitle: "Uslovi za vizu Bolivije u Kusku",
      requirements: [
        "Važeći pasoš (minimum 6 meseci)",
        "Fotografija pasoškog formata sa belom pozadinom",
        "Vakcina protiv žute groznice (ako je potrebno)",
        "Plan putovanja",
        "Rezervacija hotela",
        "Dokaz o finansijama (izvod iz banke)",
      ],
      salarTitle: "Idete ka Salar de Uyuni?",
      salarText:
        "Hiljade putnika prolazi kroz Kusko na putu ka Salar de Uyuni i bolivijskom visoravni. Pomažemo vam da dobijete vizu bez komplikacija.",
      salarImageAlt: "Mara Isabel na ulazu u kancelariju Visas Bolivia",
      faqTitle: "Često pitanje",
      faqQuestion: "Mogu li dobiti vizu istog dana?",
      faqAnswer:
        "Da. Ako dođete u našu kancelariju u Kusku sa svim dokumentima, proces traje oko 30 minuta. Ako pošaljete dokumenta unapred putem emaila ili WhatsApp-a, preuzimanje vize traje oko 10 minuta.",
      servicesTitle: "Naše usluge",
      servicesSubtitle: "Stručna pomoć za ulazak u Boliviju bez komplikacija",
      serviceCards: [
        { title: "Pomoć sa vizom", text: "Vodimo vas kroz proces dobijanja vize za Boliviju." },
        { title: "Radne i studentske vize", text: "Savetovanje za rad ili studije u Boliviji." },
        { title: "Dostava dokumenata", text: "Dostava dokumenata koji nedostaju za vaše putovanje." },
      ],
      galleryTitle: "Srećni putnici, vize spremne",
      gallerySubtitle:
        "Turisti iz celog sveta veruju Conexión Bolivia za ulazak u Boliviju bez komplikacija.",
      gallery: {
        entrance: {
          alt: "Grupa putnika ispred kancelarije Visas Bolivia u Kusku",
          caption: "Naša kancelarija u Kusku, ispred konzulata",
        },
        happy: {
          alt: "Zadovoljni klijenti sa vizama u kancelariji Conexión Bolivia",
          caption: "Srećni klijenti sa odobrenim vizama",
        },
        passports: {
          alt: "Međunarodni putnici pokazuju pasoše sa vizom Bolivije",
          caption: "Putnici iz Tajvana sa spremnim vizama",
        },
      },
    },
    services: {
      title: "Naše usluge",
      subtitle: "Profesionalna pomoć sa vizama za putnike u Boliviju",
      cards: [
        { title: "Pomoć sa vizom", text: "Korak-po-korak vodič za turističku vizu Bolivije." },
        { title: "Radne i studentske vize", text: "Savetovanje za radne ili studentske vize." },
        { title: "Dostava dokumenata", text: "Koordiniramo dostavu nedostajućih dokumenata." },
      ],
      faqTitle: "Često postavljana pitanja",
      faqs: [
        { q: "Koje usluge nudite?", a: "Pomoć sa vizom za Boliviju, radne i studentske vize, i dostava dokumenata." },
        { q: "Gde se nalazite?", a: "Ispred konzulata Bolivije u Kusku, Clorinda Matto de Turner 308." },
        { q: "Koliko traje proces?", a: "Moguće je istog dana. Sa unapred poslatim dokumentima, preuzimanje traje oko 10 minuta." },
        { q: "Šta mi je potrebno?", a: "Zavisi od tipa vize, ali obično pasoš, fotografija, plan puta, rezervacija hotela i izvod iz banke." },
      ],
    },
    contact: {
      title: "Kontakt",
      subtitle: "Tu smo da vam pomognemo sa vizom za Boliviju",
      whatsappTitle: "WhatsApp — najbrži način",
      whatsappText: "Pošaljite poruku odmah za brzi odgovor. Ovo je naš glavni kanal komunikacije.",
      whatsappCta: "Otvori WhatsApp",
      formTitle: "Ili pošaljite poruku",
      nameLabel: "Puno ime",
      emailLabel: "Email adresa",
      messageLabel: "Poruka",
      submitLabel: "Pošalji upit",
      formSending: "Slanje…",
      formSuccess: "Hvala! Javićemo vam se uskoro.",
      formError: "Nešto je pošlo po zlu. Pokušajte putem WhatsApp-a.",
      locationTitle: "Lokacija",
      locationText: "Ispred konzulata Bolivije u Kusku",
      hoursTitle: "Radno vreme",
      hoursWeekdays: "Ponedeljak–petak: 8:00 – 19:00",
      hoursWeekends: "Subota i nedelja: samo hitni slučajevi, po dogovoru putem WhatsApp-a",
      directionsCta: "Uputstva na Google Maps",
      contactImageAlt: "Pogled na kancelariju Visas Bolivia spolja u Kusku",
    },
    footer: {
      tagline: "Brza i pouzdana pomoć sa vizom za Boliviju iz Kuska",
      rights: "Sva prava zadržana",
    },
    whatsappFloat: "WhatsApp",
  },

  he: heTranslations,
};

export function getTranslations(locale: Locale): Translations {
  const base = translations[locale];
  return {
    ...base,
    meta: { ...base.meta, guide: guideMeta[locale] },
    nav: { ...base.nav, guide: guideNav[locale] },
    guide: guideContent[locale],
    reviews: reviewsCopy[locale],
    ...(isChinaLocale(locale) ? { china: chinaContactCopy[locale] } : {}),
  };
}
