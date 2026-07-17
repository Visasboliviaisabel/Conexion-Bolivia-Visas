import type { Locale } from "./config";

export type ChinaContactCopy = {
  bannerTitle: string;
  bannerText: string;
  xhsTitle: string;
  xhsText: string;
  xhsCta: string;
  wechatTitle: string;
  wechatText: string;
  wechatPending: string;
  wechatCta: string;
  whatsappNote: string;
};

export const chinaLocales = ["zh", "zh-tw"] as const satisfies readonly Locale[];
export type ChinaLocale = (typeof chinaLocales)[number];

export function isChinaLocale(locale: Locale): locale is ChinaLocale {
  return chinaLocales.includes(locale as ChinaLocale);
}

export const chinaContactCopy: Record<ChinaLocale, ChinaContactCopy> = {
  zh: {
    bannerTitle: "中国旅客专属联系方式",
    bannerText: "WhatsApp 在中国大陆无法使用。请通过小红书找到我们，或添加微信咨询玻利维亚签证。",
    xhsTitle: "小红书 — 查看旅友真实体验",
    xhsText: "在小红书搜索我们的账号，阅读库斯科办签攻略、乌尤尼盐沼旅行Tips和真实客户反馈。",
    xhsCta: "打开小红书",
    wechatTitle: "微信 — 最快咨询方式",
    wechatText: "添加我们的微信，发送您的国籍和旅行日期，我们即时回复签证要求和流程。",
    wechatPending: "微信账号即将上线，请先通过小红书联系我们。",
    wechatCta: "复制微信号",
    whatsappNote: "港澳台及海外用户仍可使用 WhatsApp 联系我们。",
  },
  "zh-tw": {
    bannerTitle: "中文旅客專屬聯絡方式",
    bannerText: "WhatsApp 在中國大陸無法使用。請透過小紅書找到我們，或添加微信諮詢玻利維亞簽證。",
    xhsTitle: "小紅書 — 查看旅友真實體驗",
    xhsText: "在小紅書搜尋我們的帳號，閱讀庫斯科辦簽攻略、烏尤尼鹽沼旅行Tips和真實客戶回饋。",
    xhsCta: "開啟小紅書",
    wechatTitle: "微信 — 最快諮詢方式",
    wechatText: "添加我們的微信，發送您的國籍和旅行日期，我們即時回覆簽證要求和流程。",
    wechatPending: "微信帳號即將上線，請先透過小紅書聯絡我們。",
    wechatCta: "複製微信號",
    whatsappNote: "港澳台及海外用戶仍可使用 WhatsApp 聯絡我們。",
  },
};
