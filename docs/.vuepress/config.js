import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  base: '/WikiTest/',

  title: 'VuePress',
  description: 'My first VuePress Site',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: ['/', '/factions/'],
    sidebar: [
      {
        text: "Home",
        link: "/",
        children: [
          "get-started"
        ]
      },
      {
        text: "Factions",
        link: "/factions/",
        prefix: "/factions/",
        children: [
          "knights/",
          "undead/"
        ]
      }
    ]
  }),

  bundler: viteBundler(),
})
