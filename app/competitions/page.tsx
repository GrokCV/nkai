"use client";

import { useState } from "react";
import Layout from "../components/Layout";
import CategoryFilter from "../components/CategoryFilter";
import CompetitionCard from "../components/CompetitionCard";
import { competitions } from "../data/competitions";

// 竞赛分类
const categories = [
  "算法竞赛",
  "数据竞赛",
  "创新竞赛",
  "学术竞赛",
  "产业竞赛",
  "国际竞赛",
  "学生竞赛",
  "编程竞赛",
];

export default function CompetitionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCompetitions =
    selectedCategory === "all"
      ? competitions
      : competitions.filter(
          (competition) => competition.category === selectedCategory
        );

  return (
    <Layout>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          {/* 页面标题 */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">技术竞赛</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              人工智能与机器学习相关的技术竞赛和挑战赛，提升技术水平，展示创新成果
            </p>
          </div>

          {/* 分类过滤器 */}
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          {/* 竞赛列表 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCompetitions.map((competition, index) => (
              <CompetitionCard key={index} {...competition} />
            ))}
          </div>

          {/* 如果没有找到竞赛 */}
          {filteredCompetitions.length === 0 && (
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
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                暂无竞赛
              </h3>
              <p className="mt-2 text-gray-500">
                该分类下暂时没有竞赛，请选择其他分类。
              </p>
            </div>
          )}

          {/* 参与须知 */}
          <div className="mt-16 bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">参与须知</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  🏆 参赛准备
                </h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• 仔细阅读竞赛规则和评估标准</li>
                  <li>• 准备必要的开发环境和工具</li>
                  <li>• 了解数据集格式和评估指标</li>
                  <li>• 关注提交截止日期和要求</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  📋 参赛规范
                </h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• 确保代码和模型的原创性</li>
                  <li>• 遵守竞赛的公平竞争原则</li>
                  <li>• 按时提交完整的技术报告</li>
                  <li>• 配合主办方的技术验证</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 奖项展示 */}
          <div className="mt-8 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              🏅 往届获奖情况
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">
                  156
                </div>
                <div className="text-gray-600">总参赛队伍</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  ¥280万
                </div>
                <div className="text-gray-600">累计奖金</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">85%</div>
                <div className="text-gray-600">产业转化率</div>
              </div>
            </div>
          </div>

          {/* 举办竞赛 */}
          <div className="mt-8 bg-purple-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              举办您的竞赛
            </h2>
            <p className="text-gray-600 mb-6">
              如果您的机构或组织希望举办AI和机器学习相关的技术竞赛，我们很乐意提供支持
            </p>
            <a
              href="/contact"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              联系我们
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
