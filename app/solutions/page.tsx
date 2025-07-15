"use client";

import { useState } from "react";
import Layout from "../components/Layout";
import CategoryFilter from "../components/CategoryFilter";
import DatasetCard from "../components/DatasetCard";
import { solutions } from "../data/solutions";

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
