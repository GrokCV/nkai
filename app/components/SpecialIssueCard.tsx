interface SpecialIssueCardProps {
  title: string;
  description: string;
  journal: string;
  category: string;
  deadline: string;
  impactFactor?: string;
  topics: string[];
  submissionUrl: string;
  journalUrl?: string;
  status: "open" | "closing-soon" | "closed";
  guestEditors?: string[];
}

export default function SpecialIssueCard({
  title,
  description,
  journal,
  category,
  deadline,
  impactFactor,
  topics,
  submissionUrl,
  journalUrl,
  status,
  guestEditors,
}: SpecialIssueCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-green-100 text-green-800";
      case "closing-soon":
        return "bg-yellow-100 text-yellow-800";
      case "closed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "open":
        return "征稿中";
      case "closing-soon":
        return "即将截止";
      case "closed":
        return "已截止";
      default:
        return "未知";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        {/* 分类和状态标签 */}
        <div className="mb-3 flex items-center justify-between">
          <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full font-medium">
            {category}
          </span>
          <span
            className={`inline-block text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(
              status
            )}`}
          >
            {getStatusText(status)}
          </span>
        </div>

        {/* 专刊标题 */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors line-clamp-2">
          {title}
        </h3>

        {/* 期刊信息 */}
        <div className="space-y-2 mb-3">
          <div className="text-sm text-gray-600">
            <span className="font-medium">期刊：</span>
            <span className="text-blue-600 font-medium">{journal}</span>
            {impactFactor && (
              <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                IF: {impactFactor}
              </span>
            )}
          </div>

          <div className="text-sm text-gray-600">
            <span className="font-medium">截止日期：</span>
            <span className="text-red-600 font-medium">{deadline}</span>
          </div>

          {guestEditors && guestEditors.length > 0 && (
            <div className="text-sm text-gray-500">
              <span className="font-medium">客座编辑：</span>
              {guestEditors.slice(0, 2).join(", ")}
              {guestEditors.length > 2 && " 等"}
            </div>
          )}
        </div>

        {/* 描述 */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-3">{description}</p>

        {/* 主题标签 */}
        <div className="mb-4">
          <div className="text-xs text-gray-500 mb-2">征稿主题：</div>
          <div className="flex flex-wrap gap-1">
            {topics.slice(0, 3).map((topic, index) => (
              <span
                key={index}
                className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
              >
                {topic}
              </span>
            ))}
            {topics.length > 3 && (
              <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                +{topics.length - 3} 个
              </span>
            )}
          </div>
        </div>

        {/* 操作按钮 */}
        <div className="flex space-x-2">
          <a
            href={submissionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 text-center py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              status === "closed"
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {status === "closed" ? "已截止" : "投稿"}
          </a>
          {journalUrl && (
            <a
              href={journalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border border-gray-300 text-gray-700 text-center py-2 px-4 rounded-md hover:bg-gray-50 transition-colors text-sm font-medium"
            >
              期刊主页
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
