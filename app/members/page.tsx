"use client";

import { useState } from "react";
import Layout from "../components/Layout";
import CategoryFilter from "../components/CategoryFilter";
import { teamMembers, TeamMember, categories } from "../data/members";

// 成员卡片组件
function MemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        {/* 头像和基本信息 */}
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
            <span className="text-2xl font-bold text-blue-600">
              {member.name.slice(0, 1)}
            </span>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              {member.name}
            </h3>
            <p className="text-blue-600 font-medium">{member.role}</p>
            <p className="text-sm text-gray-600">{member.department}</p>
          </div>
        </div>

        {/* 分类标签 */}
        <div className="mb-3">
          <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
            {member.category}
          </span>
        </div>

        {/* 研究方向 */}
        <div className="mb-3">
          <h4 className="text-sm font-semibold text-gray-800 mb-1">研究方向</h4>
          <p className="text-sm text-gray-600">{member.research}</p>
        </div>

        {/* 简介 */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {member.introduction}
        </p>

        {/* 主要成就 */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-800 mb-2">主要成就</h4>
          <ul className="text-xs text-gray-600 space-y-1">
            {member.achievements
              .slice(0, 3)
              .map((achievement: string, idx: number) => (
                <li key={idx}>• {achievement}</li>
              ))}
          </ul>
        </div>

        {/* 联系方式 */}
        <div className="flex items-center justify-between">
          <a
            href={`mailto:${member.email}`}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            联系
          </a>
          <span className="text-xs text-gray-500">
            {member.department.split("·")[0]}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function TeamMembersPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredMembers =
    selectedCategory === "all"
      ? teamMembers
      : teamMembers.filter((member) => member.category === selectedCategory);

  return (
    <Layout>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          {/* 页面标题 */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">团队成员</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              南开AI竞赛社的核心团队成员，各专业领域的优秀人才
            </p>
          </div>

          {/* 分类过滤器 */}
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          {/* 成员列表 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>

          {/* 如果没有找到成员 */}
          {filteredMembers.length === 0 && (
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
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                />
              </svg>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                暂无成员
              </h3>
              <p className="mt-2 text-gray-500">
                该分类下暂时没有成员，请选择其他分类。
              </p>
            </div>
          )}

          {/* 团队介绍 */}
          <div className="mt-16 bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">关于我们</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  🎯 团队愿景
                </h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• 培养AI领域的优秀人才</li>
                  <li>• 在各类AI竞赛中取得优异成绩</li>
                  <li>• 推动AI技术的学术研究和应用</li>
                  <li>• 建设活跃的AI学术交流社区</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  🚀 发展历程
                </h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• 2022年：南开AI竞赛社正式成立</li>
                  <li>• 2023年：首次参加国际竞赛获奖</li>
                  <li>• 2024年：团队规模扩大至50+人</li>
                  <li>• 现在：成为南开大学顶尖学术社团</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 加入我们 */}
          <div className="mt-8 bg-green-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">加入我们</h2>
            <p className="text-gray-600 mb-6">
              如果您对AI竞赛感兴趣，欢迎加入南开AI竞赛社，与优秀的同学一起学习成长
            </p>
            <a
              href="/contact"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              联系我们
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
