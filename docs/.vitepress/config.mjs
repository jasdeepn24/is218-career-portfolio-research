import { defineConfig } from 'vitepress'
export default defineConfig({
  title: 'Career & Portfolio Lab',
  description: 'NJIT IS218 career research and portfolio planning.',
  lang: 'en-US',
  base: '/is218-career-portfolio-research/',
  head: [['meta', { name: 'robots', content: 'noindex, nofollow' }]],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Job Research', link: '/job-research' },
      { text: 'Career Comparison', link: '/career-comparison' },
      { text: 'Portfolio Plan', link: '/portfolio-plan' }
    ],
    outline: [2, 3],
    footer: { message: 'NJIT IS218 · Research and planning · Checked November 11, 2026' }
  }
})
