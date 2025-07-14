"use client";

import { useState } from "react";
import Layout from "../components/Layout";
import CategoryFilter from "../components/CategoryFilter";
import PaperCard from "../components/PaperCard";

// 获奖分类
const categories = [
  "机器学习",
  "深度学习",
  "计算机视觉",
  "自然语言处理",
  "数据科学",
  "算法竞赛",
  "编程竞赛",
  "数学建模",
];

// 示例获奖数据
const awards = [
  {
    title: "2024年度全国大学生机器学习竞赛一等奖",
    authors: "张三, 李四, 王五",
    year: "2024",
    conference: "全国大学生机器学习竞赛",
    category: "机器学习",
    href: "/awards/ml-award-2024",
    description:
      "基于深度学习的图像分类算法在竞赛中取得优异成绩，准确率达到95.6%。",
  },
  {
    title: "2023年Kaggle数据科学竞赛银奖",
    authors: "赵六, 孙七, 周八",
    year: "2023",
    conference: "Kaggle Competition",
    category: "数据科学",
    href: "/awards/kaggle-award-2023",
    description: "在房价预测竞赛中运用创新的特征工程和集成学习方法，获得银奖。",
  },
  {
    title: "2023年ICPC国际大学生程序设计竞赛区域赛金奖",
    authors: "陈九, 林十, 黄十一",
    year: "2023",
    conference: "ICPC Regional Contest",
    category: "算法竞赛",
    href: "/awards/icpc-award-2023",
    description: "在ICPC亚洲区域赛中表现优异，解决了多个高难度算法问题。",
  },
  {
    title: "2024年华为杯数学建模竞赛全国一等奖",
    authors: "刘一, 钱二, 孙三",
    year: "2024",
    conference: "华为杯数学建模竞赛",
    category: "数学建模",
    href: "/awards/huawei-modeling-2024",
    description: "运用深度学习方法解决复杂的优化问题，获得全国一等奖。",
  },
  {
    title: "2024年CCF BDCI大数据与计算智能大赛季军",
    authors: "李四, 王五, 张六",
    year: "2024",
    conference: "CCF BDCI大赛",
    category: "深度学习",
    href: "/awards/ccf-bdci-2024",
    description: "基于Transformer的时序预测模型在大数据竞赛中获得优异成绩。",
  },
  {
    title: "2023年全国大学生计算机视觉竞赛二等奖",
    authors: "陈七, 林八, 黄九",
    year: "2023",
    conference: "全国大学生计算机视觉竞赛",
    category: "计算机视觉",
    href: "/awards/cv-contest-2023",
    description: "开发的目标检测算法在多个数据集上表现优异，获得二等奖。",
  },
  {
    title: "2023年字节跳动算法大赛优秀奖",
    authors: "赵十, 钱十一, 孙十二",
    year: "2023",
    conference: "字节跳动算法大赛",
    category: "算法竞赛",
    href: "/awards/bytedance-algo-2023",
    description: "在推荐系统算法竞赛中表现优异，提出了创新的深度学习推荐模型。",
  },
  {
    title: "2024年天池数据挖掘大赛亚军",
    authors: "李十三, 王十四, 张十五",
    year: "2024",
    conference: "天池数据挖掘大赛",
    category: "数据科学",
    href: "/awards/tianchi-dm-2024",
    description: "运用先进的特征工程和模型融合技术，在数据挖掘竞赛中获得亚军。",
  },
  {
    title: "2023年全国大学生自然语言处理竞赛三等奖",
    authors: "陈十六, 林十七, 黄十八",
    year: "2023",
    conference: "全国大学生NLP竞赛",
    category: "自然语言处理",
    href: "/awards/nlp-contest-2023",
    description: "开发的文本分类和情感分析模型在NLP竞赛中表现出色。",
  },
  {
    title: "2024年ACM编程竞赛区域赛银牌",
    authors: "刘十九, 钱二十, 孙二十一",
    year: "2024",
    conference: "ACM编程竞赛",
    category: "编程竞赛",
    href: "/awards/acm-programming-2024",
    description: "在限时编程竞赛中表现优异，解决了多个复杂的算法问题。",
  },
];

export default function PapersPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredAwards =
    selectedCategory === "all"
      ? awards
      : awards.filter((award) => award.category === selectedCategory);

  return (
    <Layout>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          {/* 页面标题 */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">历届获奖</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              南开AI竞赛社成员在各类竞赛中的优秀获奖成果，展示我们的技术实力
            </p>
          </div>

          {/* 分类过滤器 */}
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          {/* 获奖列表 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAwards.map((award, index) => (
              <PaperCard key={index} {...award} />
            ))}
          </div>

          {/* 如果没有找到获奖 */}
          {filteredAwards.length === 0 && (
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
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                暂无获奖
              </h3>
              <p className="mt-2 text-gray-500">
                该分类下暂时没有获奖记录，请选择其他分类。
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
