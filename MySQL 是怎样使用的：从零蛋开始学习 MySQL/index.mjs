#!/usr/bin/env zx
import { Sitdown } from 'sitdown'

const section = [
  {
      "title": "Vue.js 运行机制全局概览",
      "section_id": "6844733705211084808"
  },
  {
      "title": "响应式系统的基本原理",
      "section_id": "6844733705227862023"
  },
  {
      "title": "响应式系统的依赖收集追踪原理",
      "section_id": "6844733705228025869"
  },
  {
      "title": "实现 Virtual DOM 下的一个 VNode 节点",
      "section_id": "6844733705232056327"
  },
  {
      "title": "template 模板是怎样通过 Compile 编译的",
      "section_id": "6844733705232056334"
  },
  {
      "title": "数据状态更新时的差异 diff 及 patch 机制",
      "section_id": "6844733705232056328"
  },
  {
      "title": "批量异步更新策略及 nextTick 原理",
      "section_id": "6844733705236283405"
  },
  {
      "title": "Vuex 状态管理的工作原理",
      "section_id": "6844733705236299789"
  },
  {
      "title": "总结 & 常见问题解答",
      "section_id": "6844733705236250632"
  }
]

const sitdown = new Sitdown()
const getRes = async (id) => {
  const results = await fetch(
    'https://api.juejin.cn/booklet_api/v1/section/get?aid=2608&uuid=6898699399317407239',
    {
      headers: {
        accept: '*/*',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'no-cache',
        'content-type': 'application/json',
        pragma: 'no-cache',
        'sec-ch-ua':
          '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        cookie:
          '_ga=GA1.2.1783711588.1606228623; MONITOR_WEB_ID=f6b786d1-487e-4877-9de6-97ec5b2d04d6; __tea_cookie_tokens_2608=%257B%2522web_id%2522%253A%25226898699399317407239%2522%252C%2522ssid%2522%253A%2522cf98d4b4-a8fe-4bb4-b784-609d0aa015a5%2522%252C%2522user_unique_id%2522%253A%25226898699399317407239%2522%252C%2522timestamp%2522%253A1626140813274%257D; passport_csrf_token_default=a618ffb0f791a11ec78f34670aea9056; passport_csrf_token=a618ffb0f791a11ec78f34670aea9056; _tea_utm_cache_2608={%22utm_source%22:%22gold_browser_extension%22}; sid_guard=b9cc80913ec40fca14e88cfd87390b79%7C1645783200%7C5184000%7CTue%2C+26-Apr-2022+10%3A00%3A00+GMT; uid_tt=080ecb3253f9f057a33c7ef0af2f3684; uid_tt_ss=080ecb3253f9f057a33c7ef0af2f3684; sid_tt=b9cc80913ec40fca14e88cfd87390b79; sessionid=b9cc80913ec40fca14e88cfd87390b79; sessionid_ss=b9cc80913ec40fca14e88cfd87390b79; sid_ucp_v1=1.0.0-KDRhYWVmYTA5MGNkY2QwMDhkMDAwYTA0MTM5Y2VmYzJjYWU3Yzc2MTkKFgj-qaDA_fWJAxCg0eKQBhiwFDgIQAsaAmxmIiBiOWNjODA5MTNlYzQwZmNhMTRlODhjZmQ4NzM5MGI3OQ; ssid_ucp_v1=1.0.0-KDRhYWVmYTA5MGNkY2QwMDhkMDAwYTA0MTM5Y2VmYzJjYWU3Yzc2MTkKFgj-qaDA_fWJAxCg0eKQBhiwFDgIQAsaAmxmIiBiOWNjODA5MTNlYzQwZmNhMTRlODhjZmQ4NzM5MGI3OQ; n_mh=mk-HdLl76-WFY83hX8WLivnTawrkrTlFihi8xdUeJdQ; _gid=GA1.2.1680943609.1647928830',
        Referer: 'https://juejin.cn/',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
      },
      body: JSON.stringify({ section_id: id }),
      method: 'POST',
    }
  ).then(res => res.json())
  let { markdown_show, content } = results.data.section

  // let content = await fs.readFile(fileName)
  let markdown = markdown_show
  if (markdown === '') {
    markdown = sitdown.HTMLToMD(content)
  }

  return markdown
}
import path from 'path'
// const basePath = path.resolve(__dirname,'../剖析 Vue.js 内部运行机制/')
const getFileName = ({ title }, index) => path.resolve(__dirname,'../剖析 Vue.js 内部运行机制/',`${index + 1}：${title}.md`)

// 创建文件
// section.forEach(async ({title}, index) => {
//   const fileName = getFileName({title},index)
//   await $`touch ${fileName}`
// })

const writeFile = async ({ title, section_id }, index) => {
  const fileName = getFileName({ title }, index)
  // console.log(fileName)
  // await $`touch ${fileName}`
  const markdown_show = await getRes(section_id)
  await $`echo ${markdown_show} >> ${fileName}`
}

const index = 8
writeFile(section[index], index)

// await $`vue create vue-demo`
// await $`cd vue-demo`
// await $`npm run dev`
