import Layout from "../components/Layout";
import ConferenceCard from "../components/ConferenceCard";

// 示例会议数据
const conferences = [
  {
    title: "CSIG青年科学家会议 2025 | 图像复原与增强",
    date: "2025-09-18 ~ 2025-09-21",
    description:
      "2025青年科学家会议聚焦于图象图形领域前沿和热点，涵盖重要的研究领域和研究方向，群英荟萃，嘉宾云集！多位大会报告嘉宾将为我们带来关于图象图形学的最新洞见，并已确定30个学术前沿论坛，包括论坛26：图像复原与增强，论坛28：图像质量评估等。",
    href: "/conferences/csig-2025",
    type: "conference" as const,
    deadline: "2025-07-15",
  },
  {
    title: "CSIG青年科学家会议 2025 | 图像质量评估",
    date: "2025-09-18 ~ 2025-09-21",
    description:
      "2025青年科学家会议聚焦于图象图形领域前沿和热点，涵盖重要的研究领域和研究方向，群英荟萃，嘉宾云集！多位大会报告嘉宾将为我们带来关于图象图形学的最新洞见，并已确定30个学术前沿论坛，包括论坛26：图像复原与增强，论坛28：图像质量评估等。",
    href: "/conferences/csig-2025-quality",
    type: "conference" as const,
    deadline: "2025-07-15",
  },
  {
    title: "VALSE 2025 | 面向移动终端的AI图像增强",
    date: "2025-06-06 ~ 2025-06-08",
    description:
      '"面向移动终端的AI图像增强2025"是计算机视觉与移动计算领域的前沿研究方向，聚焦于利用人工智能技术提升移动设备图像质量。随着移动终端性能的不断提升，AI驱动的图像增强技术在智能手机拍照等场景中的应用日益广泛。',
    href: "/conferences/valse-2025",
    type: "workshop" as const,
    deadline: "2025-04-15",
  },
  {
    title: "CCIG 2025 | 智能影像增强与可控内容生成论坛",
    date: "2025-05-08 ~ 2025-05-11",
    description:
      "当前以Stable Diffusion、Sora为代表的生成式大模型在高质量图像视频生成方面取得了显著进展，成为推动人工智能领域发展的核心关键技术之一。这些模型不仅在艺术创作、虚拟现实等领域展现出巨大潜力，也为突破现有影像增强技术的发展瓶颈提供了可能。",
    href: "/conferences/ccig-2025",
    type: "symposium" as const,
    deadline: "2025-03-20",
  },
];

export default function ConferencesPage() {
  return (
    <Layout>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          {/* 页面标题 */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">学术会议</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              及时更新的AI与机器学习会议信息，助您把握学术前沿动态
            </p>
          </div>

          {/* 会议列表 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {conferences.map((conference, index) => (
              <ConferenceCard key={index} {...conference} />
            ))}
          </div>

          {/* 提交须知 */}
          <div className="mt-16 bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">投稿须知</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  📝 投稿准备
                </h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• 检查会议主题是否匹配</li>
                  <li>• 准备完整的研究论文</li>
                  <li>• 遵循会议格式要求</li>
                  <li>• 确认投稿截止日期</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  ⏰ 时间规划
                </h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• 提前2-3个月准备论文</li>
                  <li>• 预留充足的修改时间</li>
                  <li>• 关注审稿结果通知时间</li>
                  <li>• 安排参会行程</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
