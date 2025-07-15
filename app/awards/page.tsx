"use client";

import { useState } from "react";
import Layout from "../components/Layout";
import CategoryFilter from "../components/CategoryFilter";
import PaperCard from "../components/PaperCard";
import { awards } from "../data/awards";

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
