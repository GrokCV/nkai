// 成员分类
export const categories = [
  "指导老师",
  "核心成员",
  "技术骨干",
  "算法专家",
  "竞赛达人",
  "优秀学员",
];

// 共享的团队成员数据
export interface TeamMember {
  name: string;
  role: string;
  category: (typeof categories)[number];
  department: string;
  research: string;
  email: string;
  avatar: string;
  achievements: string[];
  introduction: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "张教授",
    role: "指导老师",
    category: "指导老师",
    department: "计算机学院",
    research: "机器学习、深度学习、人工智能",
    email: "zhang@nankai.edu.cn",
    avatar: "/avatars/zhang-prof.jpg",
    achievements: [
      "IEEE Fellow",
      "国家杰出青年基金获得者",
      "发表顶级期刊论文200余篇",
      "指导学生获得多项国际竞赛奖项",
    ],
    introduction:
      "南开大学计算机学院教授，博士生导师，长期从事机器学习和人工智能研究，在顶级期刊发表论文200余篇，指导学生在各类AI竞赛中屡获佳绩。",
  },
  {
    name: "李教授",
    role: "指导老师",
    category: "指导老师",
    department: "数学科学学院",
    research: "数学建模、统计学习、优化算法",
    email: "li@nankai.edu.cn",
    avatar: "/avatars/li-prof.jpg",
    achievements: [
      "国家优秀青年基金获得者",
      "天津市杰出青年",
      "ACM竞赛优秀指导教师",
      "数学建模竞赛金牌教练",
    ],
    introduction:
      "南开大学数学科学学院教授，专注于数学建模和统计学习研究，多次指导学生在全国大学生数学建模竞赛中获得一等奖。",
  },
  {
    name: "王明",
    role: "社长",
    category: "核心成员",
    department: "计算机学院·2022级",
    research: "深度学习、计算机视觉、自然语言处理",
    email: "wangming@mail.nankai.edu.cn",
    avatar: "/avatars/wangming.jpg",
    achievements: [
      "2024年全国大学生机器学习竞赛一等奖",
      "Kaggle竞赛Expert称号",
      "ICPC区域赛金牌",
      "发表SCI论文2篇",
    ],
    introduction:
      "南开AI竞赛社创始人兼社长，在机器学习和计算机视觉领域有深厚造诣，带领团队在多项国际竞赛中取得优异成绩。",
  },
  {
    name: "李小红",
    role: "副社长",
    category: "核心成员",
    department: "软件学院·2022级",
    research: "数据挖掘、推荐系统、机器学习",
    email: "lixiaohong@mail.nankai.edu.cn",
    avatar: "/avatars/lixiaohong.jpg",
    achievements: [
      "2023年天池数据挖掘大赛亚军",
      "字节跳动算法大赛优秀奖",
      "发表CCF-A类论文1篇",
      "Kaggle竞赛Master称号",
    ],
    introduction:
      "副社长，负责竞赛组织和团队管理，在数据挖掘和推荐系统领域表现突出，多次在知名算法竞赛中获奖。",
  },
  {
    name: "赵强",
    role: "技术总监",
    category: "技术骨干",
    department: "人工智能学院·2021级",
    research: "深度学习、神经网络、模型优化",
    email: "zhaoqiang@mail.nankai.edu.cn",
    avatar: "/avatars/zhaoqiang.jpg",
    achievements: [
      "2023年华为杯数学建模竞赛全国一等奖",
      "CCF BDCI大数据竞赛季军",
      "多项深度学习专利",
      "Google Summer of Code参与者",
    ],
    introduction:
      "技术总监，负责团队技术培训和项目指导，在深度学习模型设计和优化方面有丰富经验，多次指导团队成员获奖。",
  },
  {
    name: "陈佳",
    role: "算法专家",
    category: "算法专家",
    department: "数学科学学院·2021级",
    research: "算法设计、数学建模、组合优化",
    email: "chenjia@mail.nankai.edu.cn",
    avatar: "/avatars/chenjia.jpg",
    achievements: [
      "ACM-ICPC世界总决赛银牌",
      "全国大学生数学建模竞赛一等奖",
      "LeetCode全球排名前100",
      "Google Code Jam决赛选手",
    ],
    introduction:
      "算法专家，擅长算法设计和数学建模，在ACM竞赛和数学建模竞赛中表现卓越，多次获得国际级奖项。",
  },
  {
    name: "孙雨",
    role: "NLP专家",
    category: "技术骨干",
    department: "计算机学院·2023级",
    research: "自然语言处理、大语言模型、知识图谱",
    email: "sunyu@mail.nankai.edu.cn",
    avatar: "/avatars/sunyu.jpg",
    achievements: [
      "2023年全国大学生NLP竞赛一等奖",
      "CCL竞赛多项第一名",
      "发表NLP顶会论文2篇",
      "开源NLP工具包贡献者",
    ],
    introduction:
      "NLP技术专家，在自然语言处理和大语言模型方面有深入研究，多次在NLP相关竞赛中获得优异成绩。",
  },
  {
    name: "刘涛",
    role: "CV专家",
    category: "技术骨干",
    department: "软件学院·2023级",
    research: "计算机视觉、目标检测、图像分析",
    email: "liutao@mail.nankai.edu.cn",
    avatar: "/avatars/liutao.jpg",
    achievements: [
      "2024年全国大学生计算机视觉竞赛二等奖",
      "CVPR竞赛track第三名",
      "开源CV模型10k+ stars",
      "实习于知名AI公司",
    ],
    introduction:
      "计算机视觉专家，在目标检测和图像分析领域有丰富经验，开源项目深受社区欢迎，多次参与国际竞赛。",
  },
  {
    name: "黄磊",
    role: "数据科学专家",
    category: "竞赛达人",
    department: "统计与数据科学学院·2022级",
    research: "数据科学、统计学习、特征工程",
    email: "huanglei@mail.nankai.edu.cn",
    avatar: "/avatars/huanglei.jpg",
    achievements: [
      "Kaggle竞赛Grandmaster",
      "天池大数据竞赛冠军",
      "数据科学竞赛获奖20+",
      "阿里云天池专家",
    ],
    introduction:
      "数据科学专家，在特征工程和统计学习方面有独特见解，Kaggle竞赛Grandmaster，多次在数据科学竞赛中夺冠。",
  },
  {
    name: "周芳",
    role: "优秀学员",
    category: "优秀学员",
    department: "计算机学院·2024级",
    research: "机器学习基础、Python编程、数据分析",
    email: "zhoufang@mail.nankai.edu.cn",
    avatar: "/avatars/zhoufang.jpg",
    achievements: [
      "新生程序设计竞赛一等奖",
      "完成多个机器学习项目",
      "积极参与社团活动",
      "优秀新成员",
    ],
    introduction:
      "优秀新成员，虽然刚加入但学习能力强，在机器学习基础和编程技能方面进步迅速，积极参与各种竞赛和活动。",
  },
];
