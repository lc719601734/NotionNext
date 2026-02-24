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
  STARTER_HERO_TITLE_1: 'PaisoTech focuses on the hydrogen boosting and refueling solutions.', // 英雄区文字
  STARTER_HERO_TITLE_2: 'Provide customers with stable, quiet, safe and reliable hydrogen boosting systems to help reduce costs and improve efficiency.', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: 'Technology', // 英雄区按钮
  STARTER_HERO_BUTTON_1_URL:
    'https://paisotech.com/en/category/Technology', // 英雄区按钮
  STARTER_HERO_BUTTON_2_TEXT: 'Knowledge', // 英雄区按钮
  STARTER_HERO_BUTTON_2_URL: 'https://paisotech.com/en/category/Knowledge', // 英雄区按钮
  STARTER_HERO_BUTTON_2_ICON: '', // 英雄区按钮2的图标，不需要则留空

  // 英雄区配图，如需隐藏，改为空值即可 ''
  STARTER_HERO_PREVIEW_IMAGE: '/images/starter/hero/hero-image-paiso.webp', // 产品预览图 ，默认读取public目录下图片
  STARTER_HERO_BANNER_IMAGE: '', // hero区下方的全宽图

  // 顶部右侧导航暗流
  //STARTER_NAV_BUTTON_1_TEXT: 'Sign In',
  //STARTER_NAV_BUTTON_1_URL: '/sign-in',

  //STARTER_NAV_BUTTON_2_TEXT: 'Sign Up',
  //STARTER_NAV_BUTTON_2_URL: '/sign-up',

  // 特性区块
  STARTER_FEATURE_ENABLE: true, // 特性区块开关
  STARTER_FEATURE_TITLE: 'Features', // 特性
  STARTER_FEATURE_TEXT_1: 'Main features of PaisoTech products', // 特性
  STARTER_FEATURE_TEXT_2:
    'Vision of Paisotech is to handle hydrogen boosting and refilling tasks easily, seamlessly, and reliably, while amplifying the value of your brand.', // 特性

  STARTER_FEATURE_1_TITLE_1: 'Ultimate Miniaturization', // 特性1
  STARTER_FEATURE_1_TEXT_1: 'Optimize space. Eliminate waste', // 特性1
  STARTER_FEATURE_1_BUTTON_TEXT: 'Learn more', // 特性1
  STARTER_FEATURE_1_BUTTON_URL: 'https://www.paisotech.com/en/feature-1', // 特性1

  STARTER_FEATURE_2_TITLE_1: 'Pollution-Free', // 特性2
  STARTER_FEATURE_2_TEXT_1: 'As low as 60dB during operation, creating a quiet and efficient working environment and protecting employees from hearing damage.', // 特性2
  STARTER_FEATURE_2_BUTTON_TEXT: 'Learn more', // 特性2
  STARTER_FEATURE_2_BUTTON_URL:'https://www.paisotech.com/en/feature-2', // 特性2

  STARTER_FEATURE_3_TITLE_1: 'Excellent Performance', // 特性3
  STARTER_FEATURE_3_TEXT_1: 'Based on liner actuator technology, it delivers faster response and more precise pressure control.', // 特性3
  STARTER_FEATURE_3_BUTTON_TEXT: 'Learn more', // 特性3
  STARTER_FEATURE_3_BUTTON_URL: 'https://www.paisotech.com/en/feature-3', // 特性3

  STARTER_FEATURE_4_TITLE_1: 'Safe & Reliable', // 特性4
  STARTER_FEATURE_4_TEXT_1: 'Servo brake with self-locking, emergency stop interlock, patented ionic liquid boosting, 8000h service life.', // 特性4
  STARTER_FEATURE_4_BUTTON_TEXT: 'Learn more', // 特性4
  STARTER_FEATURE_4_BUTTON_URL: 'https://www.paisotech.com/en/feature-4', // 特性4

  // 首页ABOUT区块
  STARTER_ABOUT_ENABLE: true, // ABOUT区块开关
  STARTER_ABOUT_TITLE: 'A typical hydrogen boosting and filling solution.',
  STARTER_ABOUT_TEXT: 'PaisoTech empowers customers to build safe, efficient and cost-effective hydrogen solutions with ease and speed. <br /> <br /> Above high pressure, PaisoTech stands stronger.',
  STARTER_ABOUT_BUTTON_TEXT: 'Learn more',
  STARTER_ABOUT_BUTTON_URL: 'https://www.paisotech.com/en/case',
  STARTER_ABOUT_IMAGE_1: '/images/starter/about/about-image-01.jpg',
  STARTER_ABOUT_IMAGE_2: '/images/starter/about/about-image-02.jpg',
  STARTER_ABOUT_TIPS_1: '10+',
  STARTER_ABOUT_TIPS_2: 'Applications',
  STARTER_ABOUT_TIPS_3: 'Operating',

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
  STARTER_TESTIMONIALS_TITLE: 'User feedback',
  STARTER_TESTIMONIALS_TEXT_1: 'What our users say',
  STARTER_TESTIMONIALS_TEXT_2:
    'PaisoTech is just getting started. Through customized services and technical consulting, we have helped many customers successfully solve their hydrogen supply problems.',
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // 评分图标

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TESTIMONIALS_ITEMS: [
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'The Hydrogen Energy Range Extension Center, relying on advanced ionic liquid hydrogen compression technology, has already provided reliable hydrogen energy solutions for multiple industries such as logistics, surveying and mapping, and emergency rescue! ',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22de3fcb-d90d-4271-bc01-f815f476122b%2F4FE0A0C0-E487-4C74-BF8E-6F01A27461B8-14186-000008094BC289A6.jpg?table=collection&id=a320a2cc-6ebe-4a8d-95cc-ea94e63bced9&width=200',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Ryan_G',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'dlqy',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'We use hydrogen-powered drones for urban delivery. The mobile hydrogen refueling service at the range-extending center allows our drones to quickly refuel hydrogen at any work site, and the endurance time is better than that of traditional drones.',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d33d169-f932-41ff-ac6b-88a923c08e02%2F%25E5%25A4%25B4%25E5%2583%258F.jfif?table=collection&id=7787658d-d5c0-4f34-8e32-60c523dfaba3&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Asenkits',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'CHETC',
      STARTER_TESTIMONIALS_ITEM_URL: 'http://www.chetc.com.cn/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'As a surveying company, we often need to conduct topographic surveys in remote areas. The mobile hydrogen production and refueling station of the Range Extension Center can follow our working teams, solving the hydrogen supply problems in our field operations, and the hydrogen purity is as high as 99.999%, fully meeting the usage requirements of our drones.',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F6c096b44-beb9-48ee-8f92-1efdde47f3a3%2F338962f1-d352-49c7-9a1b-746e35a7005c%2Fhf.png?table=block&id=ce5a48a9-d77a-4843-a3d9-a78cd4f794ce&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'DWIND',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'A surveying company',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'As an agricultural protection company, we use hydrogen-powered drones for large-scale farmland protection operations. The service of the Range Extension Center allows our drones to operate continuously, with a single flight time exceeding 4 hours, and efficiency is 5 times higher than traditional battery-powered drones, while using hydrogen is more environmentally friendly.',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd52f6766-3e32-4c3d-8529-46e1f214360f%2Ffavicon.svg?table=collection&id=7d76aad5-a2c4-4d9a-887c-c7913fae4eed&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'disheng ',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'An agricultural protection company',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'We are an emergency rescue company, and the mobile hydrogen production and refueling station of the Range Extension Center allows our hydrogen-powered drones to be quickly deployed and continuously operated at disaster sites. Whether it is an earthquake, flood, or fire, our drones can provide long-term aerial support, helping rescue personnel conduct searches and monitoring, greatly improving rescue efficiency and safety.',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fafb21381-f51b-4fd0-9998-800dbeb64dbe%2Favatar.png?table=block&id=195935d2-0d8d-49fc-bd81-1db42ee50840&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'AnJhon',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'An emergency rescue company',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: 'As an electric power inspection company, we use hydrogen-powered drones for power line inspections. The mobile hydrogen refueling station of the Range Extension Center can follow our inspection teams, providing timely hydrogen refueling for drones in complex terrains such as mountainous areas, ensuring the smooth progress of inspection work.',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe4f391d7-7d65-4c05-a82c-c6e2c40f06e4%2Fa2a7641a26b367608c6ef28ce9b7e983_(2).png?table=block&id=a386eb0e-4c07-4b18-9ece-bba4e79ce21c&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'LUCEN',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'An electric power inspection company',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    }
  ],

  //   FAQ 常见问题模块
  STARTER_FAQ_ENABLE: true, // 常见问题模块开关
  STARTER_FAQ_TITLE: 'Frequently Asked Questions',
  STARTER_FAQ_TEXT_1: 'Any questions? Please see here',
  STARTER_FAQ_TEXT_2: 'We have collected common user questions',

  STARTER_FAQ_1_QUESTION: 'What services does the Hydrogen Energy Drone Range Extension Center provide?',
  STARTER_FAQ_1_ANSWER:
    'We provide 25Nm³/h mobile hydrogen production and refueling station services, specifically offering on-site hydrogen production, hydrogen replacement, and refueling services for hydrogen-fueled drones and small hydrogen-fueled aircraft. It can be integrated into a 4.2-meter light truck to achieve flexible mobility.',

  STARTER_FAQ_2_QUESTION: 'What are the advantages of ionic liquid hydrogen compressors compared to traditional compressors?',
  STARTER_FAQ_2_ANSWER:
    'Ionic liquid hydrogen compressors have significant advantages: a maintenance cycle of 8,000 hours (5 times that of traditional ones), energy consumption of only 1.75kW/kg (reduced by 30-40%), 50% reduction in volume, 40% reduction in weight, no oil pollution, and hydrogen purity up to 99.999%.',

  STARTER_FAQ_3_QUESTION: 'What is the working process of a mobile hydrogen production and refueling station?',
  STARTER_FAQ_3_ANSWER:
    'Core process: deionized water → PEM electrolysis hydrogen production → hydrogen purification → ionic liquid compressor pressurization → hydrogen storage system → refueling service, achieving on-site hydrogen production and on-demand refueling.',

  STARTER_FAQ_4_QUESTION: 'What are the applicable scenarios for mobile hydrogen refueling stations?',
  STARTER_FAQ_4_ANSWER:
    'Mobile hydrogen refueling stations are suitable for various scenarios: drone logistics delivery, urban air traffic, agricultural pest control, topographic surveying, emergency rescue, power inspection, and more, providing flexible hydrogen supply solutions.',

  // 团队成员区块
  STARTER_TEAM_ENABLE: true, // 团队成员区块开关
  STARTER_TEAM_TITLE: 'Team Members',
  STARTER_TEAM_TEXT_1: 'Paisotech Team provide the best hydrogen boosting and refueling solutions.',
  STARTER_TEAM_TEXT_2:
    'Team members come from renowned institutions and Fortune 500 companies such as Chinese Academy of Sciences, Linde. <br /> Stay true. Stay right. Stay long.',
  //'团队成员来自中科院大化所、林德等知名机构和世界500强企业,有专业技术和管理经验,感谢每一位<a className="underline" href="https://github.com/tangly1024/NotionNext/graphs/contributors">贡献者</a>',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TEAM_ITEMS: [
    {
      STARTER_TEAM_ITEM_AVATAR:'/images/starter/team/team-00.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Leo Liu',
      STARTER_TEAM_ITEM_DESCRIPTION: 'CEO'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-01.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Sia Sun',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Marketing Director'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-02.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Quinn Wang',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Design Director'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-03.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Euan Liu',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Product Manager'
    }
  ],

  // 博客文章区块
  STARTER_BLOG_ENABLE: true, // 首页博文区块开关
  STARTER_BLOG_TITLE: 'Our blog',
  STARTER_BLOG_COUNT: 3, // 首页博文区块默认展示前3篇文章
  STARTER_BLOG_TEXT_1: 'Recent news',
  STARTER_BLOG_TEXT_2:
    'Here we will publish the latest updates about Pasion, including new developments, future plans, and new feature introductions.',

  // 联系模块
  STARTER_CONTACT_ENABLE: true, // 联系模块开关
  STARTER_CONTACT_TITLE: 'Contact us',
  STARTER_CONTACT_TEXT: 'Tell us about the problems you are encountering',
  STARTER_CONTACT_LOCATION_TITLE: 'Our location',
  STARTER_CONTACT_LOCATION_TEXT: 'China',
  STARTER_CONTACT_EMAIL_TITLE: 'How can we help you?',
  STARTER_CONTACT_EMAIL_TEXT: 'paisotech@139.com',

  // 嵌入外部表单
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
      URL: 'https://graygrids.com/',
      TITLE: 'graygrids'
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

  STARTER_FOOTER_SLOGAN: 'We create value for brands and companies through technology.',

  // 页脚三列菜单组
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: 'Hydrogen Compressor',
      LINK_GROUP: [
        //{ TITLE: '官方主页', URL: '/#home' },
        { TITLE: 'Product Series', URL: 'https://docs.tangly1024.com/about' },
        {
          TITLE: 'Technical Support',
          URL: 'https://docs.tangly1024.com/article/how-to-question'
        },
        {
          TITLE: 'Cooperation Opportunities',
          URL: 'https://docs.tangly1024.com/article/my-service'
        }
      ]
    },
    {
      TITLE: 'Helium Compressor',
      LINK_GROUP: [
        {
          TITLE: 'Product Series',
          URL: 'https://docs.tangly1024.com/article/vercel-deploy-notion-next'
        },
        {
          TITLE: 'Technical Support',
          URL: 'https://docs.tangly1024.com/article/how-to-update-notionnext'
        },
        { TITLE: 'Cooperation Opportunities', URL: 'https://docs.tangly1024.com/article/latest' }
      ]
    },
    {
      TITLE: 'Customized Deployment',
      LINK_GROUP: [
        {
          TITLE: 'Scenario Research and Customization of Requirements',
          URL: 'https://docs.tangly1024.com/article/start-to-write'
        },
        {
          TITLE: 'Plans and Quotes',
          URL: 'https://docs.tangly1024.com/article/notion-short-key'
        },
        {
          TITLE: 'Application Cases',
          URL: 'https://docs.tangly1024.com/article/notion-faster'
        }
      ]
    }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: 'Latest Articles',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: 'Privacy Policy',
  STARTER_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: 'Legal Notice',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: 'Terms of Service',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

  // 404页面的提示语
  STARTER_404_TITLE: 'We can’t seem to find the page you’re looking for.',
  STARTER_404_TEXT: 'Sorry! The page you are looking for does not exist. It may have been moved or deleted.',
  STARTER_404_BACK: 'Go back to homepage',

  // 页面底部的行动呼吁模块
  STARTER_CTA_ENABLE: true,
  STARTER_CTA_TITLE: 'Still waiting?',
  STARTER_CTA_TITLE_2: 'Contact us now',
  STARTER_CTA_DESCRIPTION:
    'Visit the technology section, where we provide detailed application cases to help you understand immediately.',
  STARTER_CTA_BUTTON: true, // 是否显示按钮
  STARTER_CTA_BUTTON_URL:
    'https://www.paisotech.com/about',
  STARTER_CTA_BUTTON_TEXT: 'Contact Information',

  STARTER_POST_REDIRECT_ENABLE: false, // 默認開啟重定向
  STARTER_POST_REDIRECT_URL: 'https://blog.tangly1024.com', // 重定向域名
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
