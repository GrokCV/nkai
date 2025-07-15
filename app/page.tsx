import Layout from "./components/Layout";
import ContentSection from "./components/ContentSection";
import PaperCard from "./components/PaperCard";
import DatasetCard from "./components/DatasetCard";
import CompetitionCard from "./components/CompetitionCard";
import Link from "next/link";
import { featuredAwards } from "./data/awards";
import { featuredSolutions } from "./data/solutions";
import { featuredCompetitions } from "./data/competitions";

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
