// 方案分类
export const categories = [
  "计算机视觉方案",
  "自然语言处理方案",
  "推荐系统方案",
  "数据科学方案",
  "算法竞赛方案",
  "机器学习方案",
  "深度学习方案",
];

// 共享的解决方案数据
export interface Solution {
  name: string;
  description: string;
  category: (typeof categories)[number];
  size: string;
  format: string;
  year: string;
  downloadUrl: string;
  paperUrl?: string;
  imageUrl?: string;
  license?: string;
  featured: boolean; // 是否在首页展示
}

export const solutions: Solution[] = [
  {
    name: "图像分类竞赛优胜方案",
    description:
      "基于ResNet和Transformer的混合架构，在2024年全国大学生机器学习竞赛中获得一等奖的完整解决方案。",
    category: "计算机视觉方案",
    size: "25MB",
    format: "PPT/视频",
    year: "2024",
    downloadUrl:
      "https://drive.google.com/file/d/1abc123/presentation-image-classification.pptx",
    paperUrl: "https://www.bilibili.com/video/BV1abc123456/",
    license: "开源",
    featured: true,
  },
  {
    name: "推荐系统算法优胜方案",
    description:
      "结合协同过滤和深度学习的推荐系统，在2023年字节跳动算法大赛中获得优秀奖的技术方案。",
    category: "推荐系统方案",
    size: "18MB",
    format: "PPT/视频",
    year: "2023",
    downloadUrl:
      "https://drive.google.com/file/d/1def456/presentation-recommendation-system.pptx",
    paperUrl: "https://www.bilibili.com/video/BV1def456789/",
    license: "MIT",
    featured: true,
  },
  {
    name: "自然语言处理竞赛方案",
    description:
      "基于BERT和GPT的文本分类与情感分析模型，在2023年全国大学生NLP竞赛中获得三等奖的解决方案。",
    category: "自然语言处理方案",
    size: "32MB",
    format: "PPT/视频",
    year: "2023",
    downloadUrl:
      "https://drive.google.com/file/d/1ghi789/presentation-nlp-contest.pptx",
    paperUrl: "https://www.bilibili.com/video/BV1ghi789012/",
    license: "Apache 2.0",
    featured: true,
  },
  {
    name: "数据挖掘竞赛优胜方案",
    description:
      "基于XGBoost和神经网络的集成学习方法，在2024年天池数据挖掘大赛中获得亚军的技术方案。",
    category: "数据科学方案",
    size: "28MB",
    format: "PPT/视频",
    year: "2024",
    downloadUrl:
      "https://drive.google.com/file/d/1jkl012/presentation-data-mining.pptx",
    paperUrl: "https://www.bilibili.com/video/BV1jkl012345/",
    license: "MIT",
    featured: false,
  },
  {
    name: "ACM编程竞赛优胜方案",
    description:
      "经典算法题目的高效解决方案集合，在2024年ACM编程竞赛中获得区域赛银牌的代码实现。",
    category: "算法竞赛方案",
    size: "15MB",
    format: "PPT/视频",
    year: "2024",
    downloadUrl:
      "https://drive.google.com/file/d/1mno345/presentation-acm-solutions.pptx",
    paperUrl: "https://www.bilibili.com/video/BV1mno345678/",
    license: "开源",
    featured: false,
  },
  {
    name: "机器学习优化方案",
    description:
      "基于梯度提升和深度学习的混合模型，在2024年华为杯数学建模竞赛中获得全国一等奖的算法实现。",
    category: "机器学习方案",
    size: "35MB",
    format: "PPT/视频",
    year: "2024",
    downloadUrl:
      "https://drive.google.com/file/d/1pqr678/presentation-ml-optimization.pptx",
    paperUrl: "https://www.bilibili.com/video/BV1pqr678901/",
    license: "学术使用",
    featured: false,
  },
  {
    name: "深度学习创新方案",
    description:
      "基于注意力机制和残差网络的创新架构，在2024年CCF BDCI大数据竞赛中获得季军的模型设计。",
    category: "深度学习方案",
    size: "42MB",
    format: "PPT/视频",
    year: "2024",
    downloadUrl:
      "https://drive.google.com/file/d/1stu901/presentation-dl-innovation.pptx",
    paperUrl: "https://www.bilibili.com/video/BV1stu901234/",
    license: "MIT",
    featured: false,
  },
  {
    name: "计算机视觉竞赛方案",
    description:
      "基于YOLO和Transformer的目标检测算法，在2023年全国大学生计算机视觉竞赛中获得二等奖的完整方案。",
    category: "计算机视觉方案",
    size: "38MB",
    format: "PPT/视频",
    year: "2023",
    downloadUrl:
      "https://drive.google.com/file/d/1vwx234/presentation-cv-detection.pptx",
    paperUrl: "https://www.bilibili.com/video/BV1vwx234567/",
    license: "CC BY 4.0",
    featured: false,
  },
  {
    name: "算法竞赛优胜方案集",
    description:
      "涵盖动态规划、图论、数学等多个领域的算法竞赛解决方案，在2023年字节跳动算法大赛中获得优秀奖的完整代码。",
    category: "算法竞赛方案",
    size: "22MB",
    format: "PPT/视频",
    year: "2023",
    downloadUrl:
      "https://drive.google.com/file/d/1yza567/presentation-algorithm-contest.pptx",
    paperUrl: "https://www.bilibili.com/video/BV1yza567890/",
    license: "开源",
    featured: false,
  },
  {
    name: "NLP情感分析优胜方案",
    description:
      "基于预训练模型和多任务学习的文本情感分析方案，在2023年全国大学生NLP竞赛中表现优异的技术实现。",
    category: "自然语言处理方案",
    size: "29MB",
    format: "PPT/视频",
    year: "2023",
    downloadUrl:
      "https://drive.google.com/file/d/1bcd890/presentation-nlp-sentiment.pptx",
    paperUrl: "https://www.bilibili.com/video/BV1bcd890123/",
    license: "学术使用",
    featured: false,
  },
];

// 过滤出在首页展示的解决方案
export const featuredSolutions = solutions.filter(
  (solution) => solution.featured
);
