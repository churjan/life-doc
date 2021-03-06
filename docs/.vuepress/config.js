const fs = require('fs')

// 获取该文件夹下的所有文件名
const getFileNames = parentFileName => {
  const results = []
  const files = fs.readdirSync(`./docs/${parentFileName}`)
  files.forEach(val => {
    if (val.endsWith('.md') && val !== 'README.md') {
      results.push(parentFileName + val)
    }
  })
  return results
}
module.exports = {
  title: '邱健的个人文档',
  description: '生活备忘录',
  base: '/life-doc/',
  plugins: ['@vuepress/back-to-top', '@vuepress/medium-zoom'],
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      {
        text: '用药',
        link: '/用药/',
      },
    ],
    sidebar: {
      '/用药/': [
        {
          title: '用药',
          children: getFileNames('/用药/'),
        },
      ],
    },
  },
}
