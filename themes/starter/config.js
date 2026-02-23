/**
 * 另一个落地页主题
 */
const CONFIG = {
  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: '', // 普通logo图片 示例：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: '', // 透明底浅色logo 示例： /images/starter/logo/logo-white.svg

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: '湃索科技｜分布式特气增压与加注解决方案商', // 英雄区文字
  STARTER_HERO_TITLE_2: '为客户提供稳定、安静、安全可靠的气体增压系统，助力降本增效', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: '产品介绍', // 英雄区按钮
  STARTER_HERO_BUTTON_1_URL:
    'https://paisotech.com/category/产品介绍', // 英雄区按钮
  STARTER_HERO_BUTTON_2_TEXT: '技术分享', // 英雄区按钮
  STARTER_HERO_BUTTON_2_URL: 'https://paisotech.com/category/技术分享', // 英雄区按钮
  STARTER_HERO_BUTTON_2_ICON: '', // 英雄区按钮2的图标，不需要则留空

  // 英雄区配图，如需隐藏，改为空值即可 ''
  STARTER_HERO_PREVIEW_IMAGE: '/images/starter/hero/hero-image-paiso.webp', // 产品预览图 ，默认读取public目录下图片
  //STARTER_HERO_BANNER_IMAGE: '/images/starter/hero/paisotech-banner.jpg', // hero区下方的全宽图

  // 顶部右侧导航暗流
  //STARTER_NAV_BUTTON_1_TEXT: 'Sign In',
  //STARTER_NAV_BUTTON_1_URL: '/sign-in',

  //STARTER_NAV_BUTTON_2_TEXT: 'Sign Up',
  //STARTER_NAV_BUTTON_2_URL: '/sign-up',

  // 特性区块
  STARTER_FEATURE_ENABLE: true, // 特性区块开关
  STARTER_FEATURE_TITLE: '特性', // 特性
  STARTER_FEATURE_TEXT_1: 'PaisoTech产品的主要特性', // 特性
  STARTER_FEATURE_TEXT_2:
    'PaisoTech的愿景是帮助您简单、无感知地稳定地解决气体增压和加注任务,放大品牌的价值。', // 特性

  STARTER_FEATURE_1_TITLE_1: '极致的小型化', // 特性1
  STARTER_FEATURE_1_TEXT_1: '追求极致的空间设计，减少空间浪费', // 特性1
  STARTER_FEATURE_1_BUTTON_TEXT: '了解更多', // 特性1
  STARTER_FEATURE_1_BUTTON_URL: 'https://www.paisotech.com/feature-1', // 特性1

  STARTER_FEATURE_2_TITLE_1: '无噪音污染', // 特性2
  STARTER_FEATURE_2_TEXT_1: '低至60分贝的工作噪音,营造安静且高效的工作环境,杜绝员工听力损伤', // 特性2
  STARTER_FEATURE_2_BUTTON_TEXT: '了解更多', // 特性2
  STARTER_FEATURE_2_BUTTON_URL:'https://www.paisotech.com/feature-2', // 特性2

  STARTER_FEATURE_3_TITLE_1: '优秀的性能', // 特性3
  STARTER_FEATURE_3_TEXT_1: '基于电驱技术，更快的响应速度，更好的压力控制', // 特性3
  STARTER_FEATURE_3_BUTTON_TEXT: '了解更多', // 特性3
  STARTER_FEATURE_3_BUTTON_URL: 'https://www.paisotech.com/feature-3', // 特性3

  STARTER_FEATURE_4_TITLE_1: '安全可靠', // 特性4
  STARTER_FEATURE_4_TEXT_1: '伺服电机制动器具备断电抱闸自锁功能,全面的急停连锁控制,具有自主知识产权的离子液活塞增压技术,长达8000h的保养周期', // 特性4
  STARTER_FEATURE_4_BUTTON_TEXT: '了解更多', // 特性4
  STARTER_FEATURE_4_BUTTON_URL: 'https://www.paisotech.com/feature-4', // 特性4

  // 首页ABOUT区块
  STARTER_ABOUT_ENABLE: true, // ABOUT区块开关
  STARTER_ABOUT_TITLE: '分布式供氢应用的解决方案',
  STARTER_ABOUT_TEXT: 'PaisoTech的愿景是帮助非专业技术背景的客户,用最低成本,最快速地搭建专属的安全、高效用气解决方案。 <br /> <br /> 澎湃动力，探索无界，高压之上，湃索更强。',
  STARTER_ABOUT_BUTTON_TEXT: '了解更多',
  STARTER_ABOUT_BUTTON_URL: 'https://www.paisotech.com/case',
  STARTER_ABOUT_IMAGE_1: '/images/starter/about/about-image-01.jpg',
  STARTER_ABOUT_IMAGE_2: '/images/starter/about/about-image-02.jpg',
  STARTER_ABOUT_TIPS_1: '10+',
  STARTER_ABOUT_TIPS_2: '应用案例',
  STARTER_ABOUT_TIPS_3: '正在运行',

  // 首页价格区块
  STARTER_PRICING_ENABLE: false, // 价格区块开关
  STARTER_PRICING_TITLE: '价格表',
  STARTER_PRICING_TEXT_1: '很棒的定价计划',
  STARTER_PRICING_TEXT_2:
    '我们制定了灵活的付费模式，您可以按需选择。（NotionNext免费开源，这里仅演示产品订阅付费功能，请勿下单购买！）',

  STARTER_PRICING_1_TITLE: '入门版',
  STARTER_PRICING_1_PRICE: '19.9',
  STARTER_PRICING_1_PRICE_CURRENCY: '$',
  STARTER_PRICING_1_PRICE_PERIOD: '每月',
  STARTER_PRICING_1_HEADER: '功能点',
  STARTER_PRICING_1_FEATURES: '所有的主题,免费更新,帮助手册', // 英文逗号隔开
  STARTER_PRICING_1_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_1_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/c1a38a65-362e-44c5-8065-733fee39eb54',

  STARTER_PRICING_2_TAG: '推荐',
  STARTER_PRICING_2_TITLE: '基础版',
  STARTER_PRICING_2_PRICE: '39.9',
  STARTER_PRICING_2_PRICE_CURRENCY: '$',
  STARTER_PRICING_2_PRICE_PERIOD: '每月',
  STARTER_PRICING_2_HEADER: '功能点',
  STARTER_PRICING_2_FEATURES: '包含入门版,项目源码,内部社群,技术咨询,SEO优化', // 英文逗号隔开
  STARTER_PRICING_2_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_2_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/590ad70a-c3b7-4caf-94ec-9ca27bde06d4',

  STARTER_PRICING_3_TITLE: '高级版',
  STARTER_PRICING_3_PRICE: '59.9',
  STARTER_PRICING_3_PRICE_CURRENCY: '$',
  STARTER_PRICING_3_PRICE_PERIOD: '每月',
  STARTER_PRICING_3_HEADER: '功能点',
  STARTER_PRICING_3_FEATURES: '包含基础版,功能定制开发', // 英文逗号隔开
  STARTER_PRICING_3_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_3_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/df924d66-09dc-42a4-a632-a6b0c5cc4f28',

  // 首页用户测评区块
  STARTER_TESTIMONIALS_ENABLE: true, // 测评区块开关
  STARTER_TESTIMONIALS_TITLE: '用户反馈',
  STARTER_TESTIMONIALS_TEXT_1: '我们的用户怎么说',
  STARTER_TESTIMONIALS_TEXT_2:
    '湃索科技刚刚起步,通过定制化服务、技术咨询，帮助多家客户成功解决了各自的用气问题',
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // 评分图标

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TESTIMONIALS_ITEMS: [
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '氢能无人机增程中心凭借先进的离子液氢气压缩技术，已为物流、测绘、应急救援等多个行业提供了可靠的氢能解决方案了！ ',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22de3fcb-d90d-4271-bc01-f815f476122b%2F4FE0A0C0-E487-4C74-BF8E-6F01A27461B8-14186-000008094BC289A6.jpg?table=collection&id=a320a2cc-6ebe-4a8d-95cc-ea94e63bced9&width=200',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Ryan_G',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '中电丰业',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '我们使用氢能无人机进行城市配送。增程中心的移动式加氢服务让我们的无人机可以在任何作业现场快速加注氢气，续航时间比传统无人机提升了 3 倍，大大提高了配送效率。',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d33d169-f932-41ff-ac6b-88a923c08e02%2F%25E5%25A4%25B4%25E5%2583%258F.jfif?table=collection&id=7787658d-d5c0-4f34-8e32-60c523dfaba3&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Asenkits',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '中氢新能技术有限公司',
      STARTER_TESTIMONIALS_ITEM_URL: 'http://www.chetc.com.cn/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '作为一家测绘公司，我们经常需要在偏远地区进行地形测绘。增程中心的移动制氢加氢站可以跟随我们的作业团队移动，解决了我们在野外作业时的氢气供应难题，而且氢气纯度高达 99.999%，完全满足我们无人机的使用要求。',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F6c096b44-beb9-48ee-8f92-1efdde47f3a3%2F338962f1-d352-49c7-9a1b-746e35a7005c%2Fhf.png?table=block&id=ce5a48a9-d77a-4843-a3d9-a78cd4f794ce&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'DWIND',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '且听风吟 站长',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '作为农业植保公司，我们在大面积农田植保作业中使用氢能无人机。增程中心的服务让我们的无人机能够持续作业，单次飞行时间达到 4 小时以上，相比传统电池无人机效率提升了 5 倍，而且使用氢气更加环保。',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd52f6766-3e32-4c3d-8529-46e1f214360f%2Ffavicon.svg?table=collection&id=7d76aad5-a2c4-4d9a-887c-c7913fae4eed&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '迪升disheng ',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'A Blog',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '我们是一家应急救援公司，增程中心的移动制氢加氢站让我们的氢能无人机能够在灾害现场快速部署和持续作业。无论是地震、洪水还是火灾，我们的无人机都能够提供长时间的空中支持，帮助救援人员进行搜索和监测，大大提升了救援效率和安全性。',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fafb21381-f51b-4fd0-9998-800dbeb64dbe%2Favatar.png?table=block&id=195935d2-0d8d-49fc-bd81-1db42ee50840&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'AnJhon',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Anjhon`s',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: '作为一家电力巡检公司，我们使用氢能无人机进行电力线路巡检。增程中心的移动式加氢站可以跟随我们的巡检队伍，在山区等复杂地形中为无人机提供及时的氢气补给，确保巡检工作的顺利进行。',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe4f391d7-7d65-4c05-a82c-c6e2c40f06e4%2Fa2a7641a26b367608c6ef28ce9b7e983_(2).png?table=block&id=a386eb0e-4c07-4b18-9ece-bba4e79ce21c&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'LUCEN',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'LUCEN',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    }
  ],

  //   FAQ 常见问题模块
  STARTER_FAQ_ENABLE: true, // 常见问题模块开关
  STARTER_FAQ_TITLE: '常见问题解答',
  STARTER_FAQ_TEXT_1: '有任何问题吗？请看这里',
  STARTER_FAQ_TEXT_2: '我们收集了常见的用户疑问',

  STARTER_FAQ_1_QUESTION: '氢能无人机增程中心提供什么服务？',
  STARTER_FAQ_1_ANSWER:
    '我们提供 2Nm³/h 移动式制氢加氢站服务，专为氢燃料无人机和氢燃料小型飞机提供现场制氢、换气和加注服务，可集成于 4.2 米轻型卡车上实现灵活移动。',

  STARTER_FAQ_2_QUESTION: '离子液氢气压缩机相比传统压缩机有什么优势？',
  STARTER_FAQ_2_ANSWER:
    '离子液氢气压缩机具有显著优势：维护周期 8000 小时（是传统的 5 倍）、能耗仅 1.75kW/kg（降低 30-40%）、体积减小 50%、重量减轻 40%，且无油污染，氢气纯度可达 99.999%。',

  STARTER_FAQ_3_QUESTION: '移动式制氢加氢站的工作流程是怎样的？',
  STARTER_FAQ_3_ANSWER:
    '核心流程：去离子水 → PEM 电解水制氢 → 氢气纯化 → 离子液压缩机增压 → 储氢系统 → 加氢服务，实现现场制氢和按需加注。',

  STARTER_FAQ_4_QUESTION: '移动式加氢站的适用场景有哪些？',
  STARTER_FAQ_4_ANSWER:
    '移动式加氢站适用于多种场景：无人机物流配送、城市空中交通、农业植保、地形测绘、应急救援、电力巡检等，提供灵活的氢气供应解决方案。',

  // 团队成员区块
  STARTER_TEAM_ENABLE: true, // 团队成员区块开关
  STARTER_TEAM_TITLE: '团队成员',
  STARTER_TEAM_TEXT_1: '湃索科技的团队',
  STARTER_TEAM_TEXT_2:
    '团队成员来自中科院大化所、林德等知名机构和世界500强企业,存初心以致远、行正道而长久。',
  //'团队成员来自中科院大化所、林德等知名机构和世界500强企业,有专业技术和管理经验,感谢每一位<a className="underline" href="https://github.com/tangly1024/NotionNext/graphs/contributors">贡献者</a>',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TEAM_ITEMS: [
    {
      STARTER_TEAM_ITEM_AVATAR:'/images/starter/team/team-00.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Leo Liu',
      STARTER_TEAM_ITEM_DESCRIPTION: '总经理'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-01.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Sia Sun',
      STARTER_TEAM_ITEM_DESCRIPTION: '市场总监'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-02.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Quinn Wang',
      STARTER_TEAM_ITEM_DESCRIPTION: '设计总监'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-03.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Euan Liu',
      STARTER_TEAM_ITEM_DESCRIPTION: '生产经理'
    }
  ],

  // 博客文章区块
  STARTER_BLOG_ENABLE: true, // 首页博文区块开关
  STARTER_BLOG_TITLE: '我们的博客',
  STARTER_BLOG_COUNT: 3, // 首页博文区块默认展示前3篇文章
  STARTER_BLOG_TEXT_1: '最近的新闻',
  STARTER_BLOG_TEXT_2:
    '这里会发布一些关于Pasion的最新动态，包括新的动向、新的未来计划，以及新功能的特性',

  // 联系模块
  STARTER_CONTACT_ENABLE: true, // 联系模块开关
  STARTER_CONTACT_TITLE: '联系我们',
  STARTER_CONTACT_TEXT: '告诉我们您遇到的问题',
  STARTER_CONTACT_LOCATION_TITLE: '我们的位置',
  STARTER_CONTACT_LOCATION_TEXT: '中国',
  STARTER_CONTACT_EMAIL_TITLE: '我们如何帮助您？',
  STARTER_CONTACT_EMAIL_TEXT: '15524855312@139.com',

  // 嵌入外部表单
  STARTER_CONTACT_MSG_EXTERNAL_URL: '<iframe src="https://fragrant-beginner-bef.notion.site/ebd//3100d6794d898047a1a5c0d81e503669?v=3100d6794d8980ee9006000c8eba0914" width="100%" height="600" frameborder="0" allowfullscreen />',
  //STARTER_CONTACT_MSG_EXTERNAL_URL: 'https://noteforms.com/forms/yfctc7', // 基于NoteForm创建，将留言数据存在Notion中
  //   自定义留言表单，以下几个配置暂时废弃
  //   STARTER_CONTACT_MSG_TITLE: '向我们留言',
  //   STARTER_CONTACT_MSG_NAME: '姓名',
  //   STARTER_CONTACT_MSG_EMAIL: '邮箱地址',
  //   STARTER_CONTACT_MSG_PHONE: '联系电话',
  //   STARTER_CONTACT_MSG_TEXT: '消息内容',
  //   STARTER_CONTACT_MSG_SEND: '发送消息',
  //   STARTER_CONTACT_MSG_THANKS: '感谢您的留言',

  // 合作伙伴的图标
  STARTER_BRANDS_ENABLE: false, // 合作伙伴开关
  STARTER_BRANDS: [
    {
      IMAGE: '/images/starter/brands/graygrids.svg',
      IMAGE_WHITE: '/images/starter/brands/graygrids-white.svg',
      URL: 'http://www.chetc.com.cn/',
      TITLE: '中氢新能技术有限公司'
    },
    {
      IMAGE: '/images/starter/brands/lineicons.svg',
      IMAGE_WHITE: '/images/starter/brands/lineicons-white.svg',
      URL: 'https://lineicons.com/',
      TITLE: 'lineicons'
    },
    {
      IMAGE: '/images/starter/brands/uideck.svg',
      IMAGE_WHITE: '/images/starter/brands/uideck-white.svg',
      URL: 'https://uideck.com/',
      TITLE: 'uideck'
    },
    {
      IMAGE: '/images/starter/brands/ayroui.svg',
      IMAGE_WHITE: '/images/starter/brands/ayroui-white.svg',
      URL: 'https://ayroui.com/',
      TITLE: 'ayroui'
    },
    {
      IMAGE: '/images/starter/brands/tailgrids.svg',
      IMAGE_WHITE: '/images/starter/brands/tailgrids-white.svg',
      URL: '"https://tailgrids.com/',
      TITLE: 'tailgrids'
    }
  ],

  STARTER_FOOTER_SLOGAN: '我们通过技术为品牌和公司创造价值。',

  // 页脚三列菜单组
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: '氢气压缩机产品',
      LINK_GROUP: [
        //{ TITLE: '官方主页', URL: '/#home' },
        { TITLE: '选型指南', URL: 'https://docs.tangly1024.com/about' },
        {
          TITLE: '技术支持',
          URL: 'https://docs.tangly1024.com/article/how-to-question'
        },
        {
          TITLE: '合作申请',
          URL: 'https://docs.tangly1024.com/article/my-service'
        }
      ]
    },
    {
      TITLE: '氦气压缩机产品',
      LINK_GROUP: [
        {
          TITLE: '选型指南',
          URL: 'https://docs.tangly1024.com/article/vercel-deploy-notion-next'
        },
        {
          TITLE: '技术支持',
          URL: 'https://docs.tangly1024.com/article/how-to-update-notionnext'
        },
        { TITLE: '合作申请', URL: 'https://docs.tangly1024.com/article/latest' }
      ]
    },
    {
      TITLE: '定制化部署',
      LINK_GROUP: [
        {
          TITLE: '场景调研与需求定制',
          URL: 'https://docs.tangly1024.com/article/start-to-write'
        },
        {
          TITLE: '方案与报价',
          URL: 'https://docs.tangly1024.com/article/notion-short-key'
        },
        {
          TITLE: '部署案例',
          URL: 'https://paisotech.com/article/example-5'
        }
      ]
    }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: '最新文章',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
  STARTER_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务协议',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

  // 404页面的提示语
  STARTER_404_TITLE: '我们似乎找不到您要找的页面。',
  STARTER_404_TEXT: '抱歉！您要查找的页面不存在。可能已经移动或删除。',
  STARTER_404_BACK: '回到主页',

  // 页面底部的行动呼吁模块
  STARTER_CTA_ENABLE: true,
  STARTER_CTA_TITLE: '还在等待什么呢？',
  STARTER_CTA_TITLE_2: '立刻联系我们',
  STARTER_CTA_DESCRIPTION:
    '访问技术分享板块，我们提供了详细的应用案例，帮助您即刻了解',
  STARTER_CTA_BUTTON: true, // 是否显示按钮
  STARTER_CTA_BUTTON_URL:
    'https://www.paisotech.com/about',
  STARTER_CTA_BUTTON_TEXT: '联系方式',

  STARTER_POST_REDIRECT_ENABLE: false, // 默認開啟重定向
  STARTER_POST_REDIRECT_URL: 'https://blog.tangly1024.com', // 重定向域名
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
