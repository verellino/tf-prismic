import sm from './sm.json'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Innovating Indonesia",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Innovating Indonesia",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    link: [{ rel: "preconnect", href: "https://fonts.gstatic.com" }],
    link: [
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css",
        integrity:
          "sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==",
        crossorigin: "anonymous",
        referrerpolicy: "no-referrer",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Lora:wght@400;500;600&display=swap",
      },
    ],
  },
  loading: {
    color: "#991b1b",
  },
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxt/postcss8", "@nuxtjs/prismic", "@nuxtjs/google-fonts"],

  modules: ["vue-social-sharing/nuxt"],

  generate: {
    exclude: ["/slice-simulator"],
  },

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    transpile: ["@prismicio/vue"],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/styles/global.css",
    "@/assets/css/fonts.css",
    "vue-slick-carousel/dist/vue-slick-carousel.css",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  plugins: [
    { src: "./plugins/vue-slick-carousel.js" },
    { src: "./plugins/vue-nested-menu.js" },
    // { src: "./plugins/analytics.js"},
    // { src: "./plugins/analytics.server.js"},
  ],

  prismic: {
    endpoint: sm.apiEndpoint,
    modern: true,
    apiOptions: {
      routes: [
        {
          type: "page",
          path: "/:uid",
        },
        {
          type: "article",
          path: "/articles/:uid",
        },
        {
          type: "news",
          path: "/news/:uid",
        },
        {
          type: "report",
          path: "/report/:uid",
        },
        {
          type: "events",
          path: "/events/:uid",
        },
        {
          type: "training",
          path: "/training/:uid",
        },
      ],
    },
    htmlSerializer(type, element, content, children) {
      switch (type) {
        case "heading1":
          return /* html */ `<h2 class="font-serif text-slate-800 mb-7 mt-12 first:mt-0 last:mb-0">${children.join(
            ""
          )}</h2>`;

        case "heading2":
          return /* html */ `<h3 class="font-serif text-slate-800 mb-7 last:mb-0">${children.join(
            ""
          )}</h3>`;

        case "heading3":
          return /* html */ `<h4 class="font-sans font-semibold text-slate-800 mb-7 last:mb-0">${children.join(
            ""
          )}</h4>`;

        case "paragraph":
          return /* html */ `<p class="mb-7 last:mb-0">${children.join(
            ""
          )}</p>`;

        case "group-o-list-item":
          return /* html */ `<ol class="mb-7 pl-4 last:mb-0 md:pl-6">${children.join(
            ""
          )}</ol>`;

        case "o-list-item":
          return /* html */ `<li class="mb-1 list-decimal pl-1 last:mb-0 md:pl-2">${children.join(
            ""
          )}</li>`;

        case "group-list-item":
          return /* html */ `<ul class="mb-7 pl-4 last:mb-0 md:pl-6">${children.join(
            ""
          )}</ul>`;

        case "list-item":
          return /* html */ `<li class="mb-1 list-disc pl-1 last:mb-0 md:pl-2">${children.join(
            ""
          )}</li>`;

        case "preformatted":
          return /* html */ `<pre class="mb-7 rounded bg-slate-100 p-4 text-sm last:mb-0 md:p-8 md:text-lg">
  <code>${children.join("")}</code>
</pre>`;

        case "strong":
          return /* html */ `<strong class="font-semibold">${children.join(
            ""
          )}</strong>`;

        case "hyperlink":
          return /* html */ `<a href="${
            element.data.url
          }" class="underline decoration-1 underline-offset-2">${children.join(
            ""
          )}</a>`;

        default:
          return null;
      }
    },
  },
  googleFonts: {
    families: {
      Inter: true,
      Lora: true,
      Lato: true,
    },
    display: "swap",
    prefetch: true,
    download: true,
  },
  env: {
    googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID
  },
};
