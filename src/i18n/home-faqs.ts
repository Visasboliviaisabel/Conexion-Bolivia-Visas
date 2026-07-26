import type { Locale } from "./config";

export type HomeFaqBlock = {
  faqTitle: string;
  faqs: { q: string; a: string }[];
};

/** Search-intent FAQs for homepage + FAQPage schema (all locales). */
export const homeFaqs: Record<Locale, HomeFaqBlock> = {
  es: {
    faqTitle: "Preguntas frecuentes sobre la visa para Bolivia",
    faqs: [
      {
        q: "¿Necesito visa para Bolivia?",
        a: "Depende de tu nacionalidad. Viajeros de muchos países — como China, India, Indonesia, Serbia y Ucrania — sí necesitan visa boliviana. Usa nuestro verificador en esta página o escríbenos por WhatsApp y te confirmamos en minutos.",
      },
      {
        q: "¿Puedo tramitar la visa boliviana en Cusco?",
        a: "Sí. Cusco tiene Consulado de Bolivia y nuestra oficina Conexión Bolivia está justo enfrente. Es la opción más conveniente si viajas al Salar de Uyuni desde Perú.",
      },
      {
        q: "¿Puedo gestionar la visa el mismo día?",
        a: "Sí. Si vienes a nuestra oficina en Cusco con todos tus documentos, el trámite tarda aproximadamente 30 minutos. Si envías documentos con anticipación por correo o WhatsApp, recoger tu visa toma alrededor de 10 minutos.",
      },
      {
        q: "¿Qué documentos necesito para la visa de Bolivia?",
        a: "Generalmente: pasaporte vigente (mínimo 6 meses), foto tipo pasaporte con fondo blanco, itinerario de viaje, reserva de hospedaje, sustento económico (estado de cuenta) y vacuna contra la fiebre amarilla si tu ruta lo requiere.",
      },
      {
        q: "¿Necesito visa antes de ir al Salar de Uyuni?",
        a: "Sí, si tu nacionalidad lo exige. Tramítala en Cusco antes de cruzar a Bolivia para evitar demoras, multas o problemas en la frontera de Desaguadero o Villazón.",
      },
    ],
  },
  en: {
    faqTitle: "Frequently asked questions about Bolivia visas",
    faqs: [
      {
        q: "Do I need a Bolivian visa?",
        a: "It depends on your nationality. Travelers from many countries — including China, India, Indonesia, Serbia, and Ukraine — need a Bolivia visa. Use the visa checker on this page or message us on WhatsApp and we’ll confirm within minutes.",
      },
      {
        q: "Can I get a Bolivia visa in Cusco?",
        a: "Yes. Cusco has a Bolivian consulate and our Conexión Bolivia office is right across from it. It’s the most convenient option if you’re traveling from Peru to the Salar de Uyuni.",
      },
      {
        q: "Can I get my visa the same day?",
        a: "Yes. If you come to our Cusco office with all documents, processing takes about 30 minutes. If you send documents in advance via email or WhatsApp, picking up your visa takes around 10 minutes.",
      },
      {
        q: "What documents do I need for a Bolivia visa?",
        a: "Generally: valid passport (minimum 6 months), passport-size photo with white background, travel itinerary, hotel reservation, proof of funds (bank statement), and yellow fever vaccination if your route requires it.",
      },
      {
        q: "Do I need a visa before visiting Salar de Uyuni?",
        a: "Yes, if your nationality requires one. Process it in Cusco before crossing into Bolivia to avoid delays, fines, or problems at the Desaguadero or Villazón border.",
      },
    ],
  },
  zh: {
    faqTitle: "玻利维亚签证常见问题",
    faqs: [
      {
        q: "去玻利维亚需要签证吗？",
        a: "取决于您的国籍。来自中国、印度、印尼、塞尔维亚、乌克兰等许多国家的旅行者需要玻利维亚签证。可使用本页签证查询工具，或通过微信联系我们，几分钟内即可确认。",
      },
      {
        q: "可以在库斯科办理玻利维亚签证吗？",
        a: "可以。库斯科有玻利维亚领事馆，Conexión Bolivia办公室就在对面。如果您从秘鲁前往乌尤尼盐沼，这是最方便的办理方式。",
      },
      {
        q: "可以当天办理签证吗？",
        a: "可以。如果您携带所有文件来到库斯科办公室，大约需要30分钟。如果提前通过邮件或微信发送文件，领取签证约需10分钟。",
      },
      {
        q: "办理玻利维亚签证需要哪些材料？",
        a: "通常需要：有效护照（至少6个月）、白底护照照片、旅行行程、酒店预订、经济证明（银行对账单），以及如路线要求的黄热病疫苗接种证明。",
      },
      {
        q: "去乌尤尼盐沼之前需要办签证吗？",
        a: "如果您的国籍需要签证，是的。建议在库斯科入境玻利维亚之前办好，避免在Desaguadero或Villazón边境延误或被拒。",
      },
    ],
  },
  "zh-tw": {
    faqTitle: "玻利維亞簽證常見問題",
    faqs: [
      {
        q: "去玻利維亞需要簽證嗎？",
        a: "取決於您的國籍。來自中國、印度、印尼、塞爾維亞、烏克蘭等許多國家的旅行者需要玻利維亞簽證。可使用本頁簽證查詢工具，或透過微信聯絡我們，幾分鐘內即可確認。",
      },
      {
        q: "可以在庫斯科辦理玻利維亞簽證嗎？",
        a: "可以。庫斯科有玻利維亞領事館，Conexión Bolivia辦公室就在對面。如果您從秘魯前往烏尤尼鹽沼，這是最方便的辦理方式。",
      },
      {
        q: "可以當天辦理簽證嗎？",
        a: "可以。如果您攜帶所有文件來到庫斯科辦公室，大約需要30分鐘。如果提前透過郵件或微信發送文件，領取簽證約需10分鐘。",
      },
      {
        q: "辦理玻利維亞簽證需要哪些文件？",
        a: "通常需要：有效護照（至少6個月）、白底護照照片、旅行行程、飯店預訂、經濟證明（銀行對帳單），以及如路線要求的黃熱病疫苗接種證明。",
      },
      {
        q: "去烏尤尼鹽沼之前需要辦簽證嗎？",
        a: "如果您的國籍需要簽證，是的。建議在庫斯科入境玻利維亞之前辦好，避免在Desaguadero或Villazón邊境延誤或被拒。",
      },
    ],
  },
  ar: {
    faqTitle: "أسئلة شائعة حول تأشيرة بوليفيا",
    faqs: [
      {
        q: "هل أحتاج تأشيرة بوليفية؟",
        a: "يعتمد على جنسيتك. مسافرون من دول كثيرة — بما فيها الصين والهند وإندونيسيا وصربيا وأوكرانيا — يحتاجون تأشيرة بوليفيا. استخدم أداة التحقق في هذه الصفحة أو راسلنا على واتساب للتأكيد خلال دقائق.",
      },
      {
        q: "هل يمكنني الحصول على تأشيرة بوليفيا في كوسكو؟",
        a: "نعم. كوسكو فيها قنصلية بوليفيا ومكتب Conexión Bolivia مقابلها مباشرة. الخيار الأنسب إذا كنت متجهاً من بيرو إلى سالار دي أيويوني.",
      },
      {
        q: "هل يمكنني الحصول على التأشيرة في نفس اليوم؟",
        a: "نعم. إذا أتيت إلى مكتبنا في كوسكو بجميع المستندات، تستغرق المعالجة حوالي 30 دقيقة. إذا أرسلت المستندات مسبقاً عبر البريد أو واتساب، يستغرق الاستلام حوالي 10 دقائق.",
      },
      {
        q: "ما المستندات المطلوبة لتأشيرة بوليفيا؟",
        a: "عادة: جواز سفر ساري (6 أشهر على الأقل)، صورة بحجم جواز السفر بخلفية بيضاء، خط سير الرحلة، حجز فندقي، إثبات مالي، وشهادة تطعيم الحمى الصفراء إذا لزم الأمر.",
      },
      {
        q: "هل أحتاج تأشيرة قبل زيارة سالار دي أيويوني؟",
        a: "نعم إذا كانت جنسيتك تتطلب ذلك. أنجزها في كوسكو قبل عبور الحدود لتجنب التأخير أو المشاكل في Desaguadero أو Villazón.",
      },
    ],
  },
  he: {
    faqTitle: "שאלות נפוצות על ויזה לבוליביה",
    faqs: [
      {
        q: "האם אני צריך ויזה לבוליביה?",
        a: "תלוי באזרחות. מטיילים ממדינות רבות — כולל סין, הודו, אינדונזיה, סרביה ואוקראינה — צריכים ויזה בוליביאנית. השתמשו בבודק הויזה בעמוד זה או כתבו לנו ב-WhatsApp ונאשר תוך דקות.",
      },
      {
        q: "אפשר לקבל ויזה לבוליביה בקוסקו?",
        a: "כן. בקוסקו יש קונסוליה בוליביאנית והמשרד של Conexión Bolivia מול הקונסוליה. זו האפשרות הנוחה ביותר אם אתם נוסעים מפרו ל-Salar de Uyuni.",
      },
      {
        q: "אפשר לקבל ויזה באותו יום?",
        a: "כן. אם מגיעים למשרד בקוסקו עם כל המסמכים, התהליך לוקח כ-30 דקות. אם שולחים מסמכים מראש בדוא״ל או ב-WhatsApp, איסוף הויזה לוקח כ-10 דקות.",
      },
      {
        q: "אילו מסמכים צריך לויזה לבוליביה?",
        a: "בדרך כלל: דרכון בתוקף (לפחות 6 חודשים), תמונת דרכון על רקע לבן, מסלול נסיעה, הזמנת מלון, הוכחת יכולת כלכלית, וחיסון קדחת צהובה אם נדרש.",
      },
      {
        q: "צריך ויזה לפני Salar de Uyuni?",
        a: "כן, אם האזרחות שלכם דורשת זאת. עדיף לסדר בקוסקו לפני מעבר הגבול לבוליביה כדי להימנע מעיכובים ב-Desaguadero או Villazón.",
      },
    ],
  },
  pt: {
    faqTitle: "Perguntas frequentes sobre o visto para a Bolívia",
    faqs: [
      {
        q: "Preciso de visto para a Bolívia?",
        a: "Depende da sua nacionalidade. Viajantes de muitos países — incluindo China, Índia, Indonésia, Sérvia e Ucrânia — precisam de visto boliviano. Use o verificador nesta página ou fale conosco no WhatsApp e confirmamos em minutos.",
      },
      {
        q: "Posso obter visto da Bolívia em Cusco?",
        a: "Sim. Cusco tem consulado da Bolívia e nosso escritório Conexión Bolivia fica em frente. É a opção mais conveniente se você vai ao Salar de Uyuni saindo do Peru.",
      },
      {
        q: "Posso obter o visto no mesmo dia?",
        a: "Sim. Se vier ao nosso escritório em Cusco com todos os documentos, o processo leva cerca de 30 minutos. Se enviar os documentos antecipadamente por e-mail ou WhatsApp, a retirada leva cerca de 10 minutos.",
      },
      {
        q: "Quais documentos preciso para o visto da Bolívia?",
        a: "Geralmente: passaporte válido (mínimo 6 meses), foto com fundo branco, itinerário, reserva de hotel, comprovante financeiro e certificado de febre amarela se necessário.",
      },
      {
        q: "Preciso de visto antes do Salar de Uyuni?",
        a: "Sim, se sua nacionalidade exigir. Resolva em Cusco antes de cruzar para a Bolívia para evitar atrasos ou problemas na fronteira de Desaguadero ou Villazón.",
      },
    ],
  },
  ru: {
    faqTitle: "Частые вопросы о визе в Боливию",
    faqs: [
      {
        q: "Нужна ли виза в Боливию?",
        a: "Зависит от гражданства. Путешественникам из многих стран — включая Китай, Индию, Индонезию, Сербию и Украину — нужна боливийская виза. Используйте проверку на этой странице или напишите в WhatsApp — подтвердим за минуты.",
      },
      {
        q: "Можно ли получить визу в Боливию в Куско?",
        a: "Да. В Куско есть консульство Боливии, офис Conexión Bolivia расположен напротив. Самый удобный вариант, если вы едете из Перу на Салар-де-Уюни.",
      },
      {
        q: "Можно ли получить визу в тот же день?",
        a: "Да. Если прийти в наш офис в Куско со всеми документами, оформление занимает около 30 минут. Если отправить документы заранее по email или WhatsApp, получение визы занимает около 10 минут.",
      },
      {
        q: "Какие документы нужны для визы в Боливию?",
        a: "Обычно: паспорт (минимум 6 месяцев), фото на белом фоне, маршрут, бронь отеля, финансовые документы и сертификат о прививке от жёлтой лихорадки при необходимости.",
      },
      {
        q: "Нужна ли виза перед Салар-де-Уюни?",
        a: "Да, если ваше гражданство требует визу. Оформите в Куско до пересечения границы, чтобы избежать проблем в Desaguadero или Villazón.",
      },
    ],
  },
  id: {
    faqTitle: "Pertanyaan umum tentang visa Bolivia",
    faqs: [
      {
        q: "Apakah saya perlu visa Bolivia?",
        a: "Tergantung kewarganegaraan. Wisatawan dari banyak negara — termasuk Tiongkok, India, Indonesia, Serbia, dan Ukraina — memerlukan visa Bolivia. Gunakan pengecek visa di halaman ini atau hubungi kami via WhatsApp, kami konfirmasi dalam hitungan menit.",
      },
      {
        q: "Bisakah mengurus visa Bolivia di Cusco?",
        a: "Ya. Cusco memiliki konsulat Bolivia dan kantor Conexión Bolivia tepat di depannya. Pilihan paling praktis jika Anda menuju Salar de Uyuni dari Peru.",
      },
      {
        q: "Bisakah visa diproses di hari yang sama?",
        a: "Ya. Jika Anda datang ke kantor kami di Cusco dengan semua dokumen, prosesnya sekitar 30 menit. Jika dokumen dikirim terlebih dahulu via email atau WhatsApp, pengambilan visa hanya sekitar 10 menit.",
      },
      {
        q: "Dokumen apa yang diperlukan untuk visa Bolivia?",
        a: "Umumnya: paspor valid (min. 6 bulan), foto latar putih, itinerary, reservasi hotel, bukti keuangan, dan sertifikat vaksin demam kuning jika diperlukan.",
      },
      {
        q: "Apakah perlu visa sebelum ke Salar de Uyuni?",
        a: "Ya, jika kewarganegaraan Anda mewajibkan. Sebaiknya urus di Cusco sebelum menyeberang ke Bolivia agar tidak terkendala di perbatasan Desaguadero atau Villazón.",
      },
    ],
  },
  uk: {
    faqTitle: "Часті запитання про візу в Болівію",
    faqs: [
      {
        q: "Чи потрібна віза в Болівію?",
        a: "Залежить від громадянства. Мандрівникам з багатьох країн — включно з Китаєм, Індією, Індонезією, Сербією та Україною — потрібна болівійська віза. Скористайтеся перевіркою на цій сторінці або напишіть у WhatsApp — підтвердимо за хвилини.",
      },
      {
        q: "Чи можна оформити візу в Болівію в Куско?",
        a: "Так. У Куско є консульство Болівії, офіс Conexión Bolivia навпроти. Найзручніший варіант, якщо ви їдете з Перу на Салар-де-Уюні.",
      },
      {
        q: "Чи можна отримати візу в той самий день?",
        a: "Так. Якщо прийти до нашого офісу в Куско з усіма документами, оформлення займає близько 30 хвилин. Якщо надіслати документи заздалегідь електронною поштою або WhatsApp, отримання візи займає близько 10 хвилин.",
      },
      {
        q: "Які документи потрібні для візи в Болівію?",
        a: "Зазвичай: паспорт (мінімум 6 місяців), фото на білому тлі, маршрут, бронювання готелю, фінансові документи та сертифікат про щеплення від жовтої лихоманки за потреби.",
      },
      {
        q: "Чи потрібна віза перед Салар-де-Уюні?",
        a: "Так, якщо ваше громадянство вимагає візу. Оформіть у Куско до перетину кордону, щоб уникнути проблем у Desaguadero або Villazón.",
      },
    ],
  },
  sr: {
    faqTitle: "Česta pitanja o vizi za Boliviju",
    faqs: [
      {
        q: "Da li mi treba viza za Boliviju?",
        a: "Zavisi od državljanstva. Putnicima iz mnogih zemalja — uključujući Kinu, Indiju, Indoneziju, Srbiju i Ukrajinu — potrebna je bolivijska viza. Koristite proveru na ovoj stranici ili pišite na WhatsApp, potvrda za nekoliko minuta.",
      },
      {
        q: "Mogu li dobiti vizu Bolivije u Kusku?",
        a: "Da. Kusko ima konzulat Bolivije, a kancelarija Conexión Bolivia je tačno ispred. Najpraktičnija opcija ako idete iz Perua ka Salar de Uyuni.",
      },
      {
        q: "Mogu li dobiti vizu istog dana?",
        a: "Da. Ako dođete u našu kancelariju u Kusku sa svim dokumentima, proces traje oko 30 minuta. Ako pošaljete dokumenta unapred putem emaila ili WhatsApp-a, preuzimanje vize traje oko 10 minuta.",
      },
      {
        q: "Koja dokumenta su potrebna za vizu Bolivije?",
        a: "Obično: važeći pasoš (minimum 6 meseci), fotografija sa belom pozadinom, plan putovanja, rezervacija hotela, dokaz o finansijama i vakcina protiv žute groznice ako je potrebno.",
      },
      {
        q: "Treba li viza pre Salar de Uyuni?",
        a: "Da, ako vaše državljanstvo to zahteva. Rešite u Kusku pre prelaska granice da izbegnete kašnjenja na Desaguadero ili Villazón.",
      },
    ],
  },
  hi: {
    faqTitle: "बोलीविया वीज़ा के बारे में अक्सर पूछे जाने वाले प्रश्न",
    faqs: [
      {
        q: "क्या मुझे बोलीविया वीज़ा चाहिए?",
        a: "यह आपकी राष्ट्रीयता पर निर्भर करता है। चीन, भारत, इंडोनेशिया, सर्बिया और यूक्रेन सहित कई देशों के यात्रियों को बोलीविया वीज़ा चाहिए। इस पेज पर वीज़ा चेकर उपयोग करें या WhatsApp पर लिखें — कुछ ही मिनटों में पुष्टि करेंगे।",
      },
      {
        q: "क्या कुस्को में बोलीविया वीज़ा मिल सकता है?",
        a: "हाँ। कुस्को में बोलीवियाई वाणिज्य दूतावास है और Conexión Bolivia कार्यालय उसके ठीक सामने है। यदि आप पेरू से Salar de Uyuni जा रहे हैं तो यह सबसे सुविधाजनक विकल्प है।",
      },
      {
        q: "क्या मैं उसी दिन वीज़ा प्राप्त कर सकता हूँ?",
        a: "हाँ। यदि आप सभी दस्तावेज़ों के साथ हमारे कुस्को कार्यालय में आते हैं, तो प्रक्रिया लगभग 30 मिनट लेती है। यदि आप पहले से WhatsApp या ईमेल से दस्तावेज़ भेजते हैं, तो वीज़ा लेने में लगभग 10 मिनट लगते हैं।",
      },
      {
        q: "बोलीविया वीज़ा के लिए कौन से दस्तावेज़ चाहिए?",
        a: "आमतौर पर: वैध पासपोर्ट (न्यूनतम 6 महीने), सफेद पृष्ठभूमि वाली पासपोर्ट फोटो, यात्रा कार्यक्रम, होटल आरक्षण, धन का प्रमाण, और यदि आवश्यक हो तो पीला बुखार टीकाकरण।",
      },
      {
        q: "Salar de Uyuni से पहले वीज़ा चाहिए?",
        a: "हाँ, यदि आपकी राष्ट्रीयता इसकी मांग करती है। सीमा पार करने से पहले कुस्को में करवा लें ताकि Desaguadero या Villazón पर देरी न हो।",
      },
    ],
  },
};
