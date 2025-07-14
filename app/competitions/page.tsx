"use client";

import { useState } from "react";
import Layout from "../components/Layout";
import CategoryFilter from "../components/CategoryFilter";
import CompetitionCard from "../components/CompetitionCard";

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

// 示例竞赛数据
const competitions = [
  {
    title: "Kaggle机器学习全球挑战赛",
    description:
      "面向全球的机器学习竞赛平台，提供各种实际问题的数据集和挑战。参赛者需要运用机器学习技术解决复杂的实际问题，评估指标包括准确率、F1分数和AUC值。",
    category: "算法竞赛",
    deadline: "2025-05-15",
    prize: "总奖金 $100,000",
    organizer: "Kaggle",
    registrationUrl: "https://kaggle.com/competitions",
    status: "upcoming" as const,
    websiteUrl: "https://kaggle.com/competitions",
    participants: "预计10000+",
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
    status: "ongoing" as const,
    websiteUrl: "https://icpc.global",
    participants: "50000+",
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
    status: "upcoming" as const,
    websiteUrl: "https://mcm.edu.cn",
    participants: "预计40000+",
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
    status: "ongoing" as const,
    websiteUrl: "https://tianchi.aliyun.com/competition/example",
    participants: "1200+",
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
    status: "upcoming" as const,
    websiteUrl: "https://example.com/icip2025-sr",
    participants: "预计300+",
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
    status: "closed" as const,
    websiteUrl: "https://example.com/huawei2024",
    participants: "600+",
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
    status: "ongoing" as const,
    websiteUrl: "https://example.com/innovation2025",
    participants: "400+",
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
    status: "upcoming" as const,
    websiteUrl: "https://example.com/iccv2025-multimodal",
    participants: "预计600+",
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
    status: "ongoing" as const,
    websiteUrl: "https://aistudio.baidu.com/competition/example",
    participants: "900+",
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
    status: "upcoming" as const,
    websiteUrl: "https://example.com/graduate2025",
    participants: "预计700+",
  },
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
