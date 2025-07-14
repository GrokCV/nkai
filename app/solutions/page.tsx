"use client";

import { useState } from "react";
import Layout from "../components/Layout";
import CategoryFilter from "../components/CategoryFilter";
import DatasetCard from "../components/DatasetCard";

// 方案分类
const categories = [
  "计算机视觉方案",
  "自然语言处理方案",
  "推荐系统方案",
  "数据科学方案",
  "算法竞赛方案",
  "机器学习方案",
  "深度学习方案",
];

// 示例方案数据
const solutions = [
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
  },
];

export default function DatasetsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredSolutions =
    selectedCategory === "all"
      ? solutions
      : solutions.filter((solution) => solution.category === selectedCategory);

  return (
    <Layout>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          {/* 页面标题 */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">优胜方案</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              南开AI竞赛社成员在各类竞赛中的优胜技术方案和代码实现
            </p>
          </div>

          {/* 分类过滤器 */}
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          {/* 方案列表 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((solution, index) => (
              <DatasetCard key={index} {...solution} />
            ))}
          </div>

          {/* 如果没有找到方案 */}
          {filteredSolutions.length === 0 && (
            <div className="text-center py-12">
              <svg
                className="mx-auto h-24 w-24 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                暂无方案
              </h3>
              <p className="mt-2 text-gray-500">
                该分类下暂时没有优胜方案，请选择其他分类。
              </p>
            </div>
          )}

          {/* 使用须知 */}
          <div className="mt-16 bg-yellow-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">使用须知</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  📋 学习资源
                </h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• PPT资源包含完整的技术方案介绍</li>
                  <li>• 视频资源提供详细的实现讲解</li>
                  <li>• 建议结合PPT和视频一起学习</li>
                  <li>• 资源仅供学习交流使用</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  ⚖️ 使用规范
                </h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• 资源仅用于学术研究和学习交流</li>
                  <li>• 请勿用于商业用途</li>
                  <li>• 引用时请注明来源和作者</li>
                  <li>• 尊重知识产权，合理使用</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 贡献资源 */}
          <div className="mt-8 bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              分享您的优胜方案
            </h2>
            <p className="text-gray-600 mb-6">
              如果您有优秀的竞赛方案PPT或讲解视频愿意分享，欢迎联系我们
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              联系我们
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
