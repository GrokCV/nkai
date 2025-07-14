import Layout from "./components/Layout";
import ContentSection from "./components/ContentSection";
import PaperCard from "./components/PaperCard";
import DatasetCard from "./components/DatasetCard";
import CompetitionCard from "./components/CompetitionCard";
import Link from "next/link";

// 示例数据
const featuredAwards = [
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
];

const featuredSolutions = [
  {
    name: "图像分类竞赛优胜方案",
    description:
      "基于ResNet和Transformer的混合架构，在2024年全国大学生机器学习竞赛中获得一等奖的完整解决方案。",
    category: "计算机视觉方案",
    size: "项目代码",
    format: "Python/PyTorch",
    year: "2024",
    downloadUrl: "https://github.com/nkai/image-classification-winner",
    paperUrl: "https://arxiv.org/abs/2024.imageclass",
    license: "开源",
  },
  {
    name: "推荐系统算法优胜方案",
    description:
      "结合协同过滤和深度学习的推荐系统，在2023年字节跳动算法大赛中获得优秀奖的技术方案。",
    category: "推荐系统方案",
    size: "项目代码",
    format: "Python/TensorFlow",
    year: "2023",
    downloadUrl: "https://github.com/nkai/recommendation-system-winner",
    paperUrl: "https://arxiv.org/abs/2023.recsys",
    license: "MIT",
  },
  {
    name: "自然语言处理竞赛方案",
    description:
      "基于BERT和GPT的文本分类与情感分析模型，在2023年全国大学生NLP竞赛中获得三等奖的解决方案。",
    category: "自然语言处理方案",
    size: "项目代码",
    format: "Python/Transformers",
    year: "2023",
    downloadUrl: "https://github.com/nkai/nlp-contest-solution",
    paperUrl: "https://arxiv.org/abs/2023.nlpcontest",
    license: "Apache 2.0",
  },
];

const featuredCompetitions = [
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
    category: "算法竞赛",
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
];

export default function Home() {
  return (
    <Layout>
      {/* 英雄区域 */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              南开AI竞赛社
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              专注AI学术竞赛与技术交流
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/awards"
                className="border-2 border-white bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                查看获奖
              </Link>
              <Link
                href="/solutions"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                优胜方案
              </Link>
              <Link
                href="/competitions"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                技术竞赛
              </Link>
              <Link
                href="/members"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                团队成员
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 精选论文 */}
      <ContentSection
        title="历届获奖"
        subtitle="南开AI竞赛社成员的优秀获奖成果"
      >
        {featuredAwards.map((award, index) => (
          <PaperCard key={index} {...award} />
        ))}
      </ContentSection>

      {/* 优胜方案 */}
      <ContentSection
        title="优胜方案"
        subtitle="竞赛获奖的技术解决方案和代码实现"
      >
        {featuredSolutions.map((solution, index) => (
          <DatasetCard key={index} {...solution} />
        ))}
      </ContentSection>

      {/* 热门竞赛 */}
      <ContentSection
        title="热门竞赛"
        subtitle="参与AI和机器学习技术竞赛，提升技术水平，展示创新成果"
        className="bg-gray-50"
      >
        {featuredCompetitions.map((competition, index) => (
          <CompetitionCard key={index} {...competition} />
        ))}
      </ContentSection>

      {/* 功能特色 */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">平台特色</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              为研究者提供全面的学术资源和信息服务
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
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
              </div>
              <h3 className="text-xl font-semibold mb-2">历届获奖</h3>
              <p className="text-gray-600">
                展示AI竞赛社成员在各类竞赛中的优异成绩和获奖情况
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
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
              </div>
              <h3 className="text-xl font-semibold mb-2">优胜方案</h3>
              <p className="text-gray-600">
                分享竞赛优胜方案的PPT和技术视频，学习成功经验
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-red-600"
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
              </div>
              <h3 className="text-xl font-semibold mb-2">技术竞赛</h3>
              <p className="text-gray-600">
                参与技术竞赛，提升技术水平，展示创新成果
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">团队成员</h3>
              <p className="text-gray-600">
                了解南开AI竞赛社的核心团队成员，各专业领域的优秀人才
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
