// 获奖分类
export const categories = [
  "机器学习",
  "深度学习",
  "计算机视觉",
  "自然语言处理",
  "数据科学",
  "算法竞赛",
  "编程竞赛",
  "数学建模",
];

// 共享的获奖数据
export interface Award {
  title: string;
  teamMembers: string;
  year: string;
  category: (typeof categories)[number];
  href: string;
  description: string;
  featured: boolean; // 是否在首页展示
}

export const awards: Award[] = [
  {
    title: "2024年度全国大学生机器学习竞赛一等奖",
    teamMembers: "李明轩, 王思雨, 陈浩然",
    year: "2024",
    category: "机器学习",
    href: "/awards/ml-award-2024",
    description:
      "基于深度学习的图像分类算法在竞赛中取得优异成绩，准确率达到95.6%。",
    featured: true,
  },
  {
    title: "2023年Kaggle数据科学竞赛银奖",
    teamMembers: "张宇航, 刘嘉怡, 赵子轩",
    year: "2023",
    category: "数据科学",
    href: "/awards/kaggle-award-2023",
    description: "在房价预测竞赛中运用创新的特征工程和集成学习方法，获得银奖。",
    featured: true,
  },
  {
    title: "2023年ICPC国际大学生程序设计竞赛区域赛金奖",
    teamMembers: "何俊杰, 林雨萱, 黄子涵",
    year: "2023",
    category: "算法竞赛",
    href: "/awards/icpc-award-2023",
    description: "在ICPC亚洲区域赛中表现优异，解决了多个高难度算法问题。",
    featured: true,
  },
  {
    title: "2024年华为杯数学建模竞赛全国一等奖",
    teamMembers: "吴梓豪, 钱雨桐, 孙逸飞",
    year: "2024",
    category: "数学建模",
    href: "/awards/huawei-modeling-2024",
    description: "运用深度学习方法解决复杂的优化问题，获得全国一等奖。",
    featured: false,
  },
  {
    title: "2024年CCF BDCI大数据与计算智能大赛季军",
    teamMembers: "李子涵, 王雨泽, 张欣然",
    year: "2024",
    category: "深度学习",
    href: "/awards/ccf-bdci-2024",
    description: "基于Transformer的时序预测模型在大数据竞赛中获得优异成绩。",
    featured: false,
  },
  {
    title: "2023年全国大学生计算机视觉竞赛二等奖",
    teamMembers: "陈奕帆, 林思琪, 黄雨辰",
    year: "2023",
    category: "计算机视觉",
    href: "/awards/cv-contest-2023",
    description: "开发的目标检测算法在多个数据集上表现优异，获得二等奖。",
    featured: false,
  },
  {
    title: "2023年字节跳动算法大赛优秀奖",
    teamMembers: "赵梓轩, 钱雨琪, 孙嘉慧",
    year: "2023",
    category: "算法竞赛",
    href: "/awards/bytedance-algo-2023",
    description: "在推荐系统算法竞赛中表现优异，提出了创新的深度学习推荐模型。",
    featured: false,
  },
  {
    title: "2024年天池数据挖掘大赛亚军",
    teamMembers: "李雨桐, 王子航, 张嘉怡",
    year: "2024",
    category: "数据科学",
    href: "/awards/tianchi-dm-2024",
    description: "运用先进的特征工程和模型融合技术，在数据挖掘竞赛中获得亚军。",
    featured: false,
  },
  {
    title: "2023年全国大学生自然语言处理竞赛三等奖",
    teamMembers: "陈思雨, 林梓豪, 黄雨萱",
    year: "2023",
    category: "自然语言处理",
    href: "/awards/nlp-contest-2023",
    description: "开发的文本分类和情感分析模型在NLP竞赛中表现出色。",
    featured: false,
  },
  {
    title: "2024年ACM编程竞赛区域赛银牌",
    teamMembers: "刘子轩, 钱思琪, 孙雨辰",
    year: "2024",
    category: "编程竞赛",
    href: "/awards/acm-programming-2024",
    description: "在限时编程竞赛中表现优异，解决了多个复杂的算法问题。",
    featured: false,
  },
];

// 过滤出在首页展示的获奖项目
export const featuredAwards = awards.filter((award) => award.featured);
