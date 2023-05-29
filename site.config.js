const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Vignesh Garrapally",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "data scientist",
    bio: "Data scientist specializing in computer vision and deep learning, leveraging AI to unlock insights and solve complex visual challenges.",
    email: "garrapallyvignesh8055@gmail.com",
    linkedin: "vignesh-garrapally",
    github: "vigneshgarrapally",
    instagram: "",
  },
  projects: [
    {
      name: `vignesh-garrapally`,
      href: "https://vigneshgarrapally.github.io/",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Vignesh-Blog",
    description: "welcome to vignesh-notes!",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://notion-blog-eight-theta-40.vercel.app/",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: "f04f870e31214ed9be60277b1f07b064",
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: "morethanmin/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}

module.exports = { CONFIG }