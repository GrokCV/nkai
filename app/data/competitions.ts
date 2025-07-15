// 共享的竞赛数据
export interface Competition {
  title: string;
  description: string;
  category: string;
  deadline: string;
  prize: string;
  organizer: string;
  registrationUrl: string;
  status: "upcoming" | "ongoing" | "closed";
  websiteUrl: string;
  participants: string;
  featured: boolean; // 是否在首页展示
}

export const competitions: Competition[] = [
  {
    title: "Kaggle机器学习全球挑战赛",
    description:
      "面向全球的机器学习竞赛平台，提供各种实际问题的数据集和挑战。参赛者需要运用机器学习技术解决复杂的实际问题，评估指标包括准确率、F1分数和AUC值。",
    category: "算法竞赛",
    deadline: "2025-05-15",
    prize: "总奖金 $100,000",
    organizer: "Kaggle",
    registrationUrl: "https://kaggle.com/competitions",
    status: "upcoming",
    websiteUrl: "https://kaggle.com/competitions",
    participants: "预计10000+",
    featured: true,
  },
  {
    title: "ICPC国际大学生程序设计竞赛",
    description:
      "国际大学生程序设计竞赛，是全球最具影响力的大学生计算机竞赛。参赛者需要在限定时间内解决算法和数据结构问题。",
    category: "编程竞赛",
    deadline: "2025-03-01",
    prize: "世界冠军奖杯",
    organizer: "ICPC Foundation",
    registrationUrl: "https://icpc.global/regionals",
    status: "ongoing",
    websiteUrl: "https://icpc.global",
    participants: "50000+",
    featured: true,
  },
  {
    title: "全国大学生数学建模竞赛",
    description:
      "面向全国在校大学生的数学建模竞赛，鼓励学生运用数学方法和计算机技术解决实际问题，培养创新思维和团队合作能力。",
    category: "学生竞赛",
    deadline: "2025-04-30",
    prize: "一等奖 1万元",
    organizer: "全国大学生数学建模竞赛组委会",
    registrationUrl: "https://mcm.edu.cn/html_cn/node/node_576.html",
    status: "upcoming",
    websiteUrl: "https://mcm.edu.cn",
    participants: "预计40000+",
    featured: true,
  },
  {
    title: "天池计算机视觉算法竞赛",
    description:
      "阿里云天池平台举办的计算机视觉算法竞赛，提供大规模标注数据集，要求参赛者训练高精度的目标识别模型。",
    category: "数据竞赛",
    deadline: "2025-02-28",
    prize: "冠军 10万元",
    organizer: "阿里云天池",
    registrationUrl: "https://tianchi.aliyun.com/competition/example",
    status: "ongoing",
    websiteUrl: "https://tianchi.aliyun.com/competition/example",
    participants: "1200+",
    featured: false,
  },
  {
    title: "IEEE ICIP 2025 图像超分辨率挑战赛",
    description:
      "IEEE国际图像处理会议举办的图像超分辨率挑战赛，评估不同算法在图像超分辨率任务上的性能。",
    category: "学术竞赛",
    deadline: "2025-06-15",
    prize: "$8,000 USD",
    organizer: "IEEE ICIP",
    registrationUrl: "https://example.com/register/icip2025",
    status: "upcoming",
    websiteUrl: "https://example.com/icip2025-sr",
    participants: "预计300+",
    featured: false,
  },
  {
    title: "华为昇腾AI智能检测创新赛",
    description:
      "华为昇腾AI举办的智能检测创新竞赛，要求参赛者使用昇腾AI平台开发AI目标检测解决方案。",
    category: "产业竞赛",
    deadline: "2024-12-31",
    prize: "总奖金 30万元",
    organizer: "华为技术有限公司",
    registrationUrl: "https://example.com/register/huawei2024",
    status: "closed",
    websiteUrl: "https://example.com/huawei2024",
    participants: "600+",
    featured: false,
  },
  {
    title: "AI智能检测技术创新应用大赛",
    description:
      "面向AI智能检测技术的创新应用竞赛，鼓励将最新算法应用于实际场景，如智慧城市、自动驾驶等。",
    category: "创新竞赛",
    deadline: "2025-03-20",
    prize: "特等奖 20万元",
    organizer: "中国人工智能学会",
    registrationUrl: "https://example.com/register/innovation2025",
    status: "ongoing",
    websiteUrl: "https://example.com/innovation2025",
    participants: "400+",
    featured: false,
  },
  {
    title: "ICCV 2025 多模态目标检测竞赛",
    description:
      "国际计算机视觉大会举办的多模态目标检测竞赛，结合多种模态数据进行目标检测任务。",
    category: "国际竞赛",
    deadline: "2025-07-01",
    prize: "$12,000 USD",
    organizer: "ICCV 2025",
    registrationUrl: "https://example.com/register/iccv2025",
    status: "upcoming",
    websiteUrl: "https://example.com/iccv2025-multimodal",
    participants: "预计600+",
    featured: false,
  },
  {
    title: "百度飞桨计算机视觉挑战赛",
    description:
      "百度飞桨平台举办的计算机视觉挑战赛，涵盖图像分割、目标检测、场景分类等多个任务。",
    category: "数据竞赛",
    deadline: "2025-01-31",
    prize: "冠军 8万元",
    organizer: "百度飞桨",
    registrationUrl: "https://aistudio.baidu.com/competition/example",
    status: "ongoing",
    websiteUrl: "https://aistudio.baidu.com/competition/example",
    participants: "900+",
    featured: false,
  },
  {
    title: "研究生AI算法设计大赛",
    description:
      "面向全国研究生的AI算法设计大赛，重点关注算法的原创性和实用性。",
    category: "学生竞赛",
    deadline: "2025-05-31",
    prize: "一等奖 3万元",
    organizer: "中国研究生创新实践系列大赛组委会",
    registrationUrl: "https://example.com/register/graduate2025",
    status: "upcoming",
    websiteUrl: "https://example.com/graduate2025",
    participants: "预计700+",
    featured: false,
  },
];

// 过滤出在首页展示的竞赛项目
export const featuredCompetitions = competitions.filter(
  (competition) => competition.featured
);
