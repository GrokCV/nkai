interface CompetitionCardProps {
  title: string;
  description: string;
  category: string;
  deadline: string;
  prize: string;
  organizer: string;
  registrationUrl: string;
  status: "upcoming" | "ongoing" | "closed";
  websiteUrl?: string;
  participants?: string;
}

export default function CompetitionCard({
  title,
  description,
  category,
  deadline,
  prize,
  organizer,
  registrationUrl,
  status,
  websiteUrl,
  participants,
}: CompetitionCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-100 text-blue-800";
      case "ongoing":
        return "bg-green-100 text-green-800";
      case "closed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "upcoming":
        return "即将开始";
      case "ongoing":
        return "进行中";
      case "closed":
        return "已结束";
      default:
        return "未知";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        {/* 分类和状态标签 */}
        <div className="mb-3 flex items-center justify-between">
          <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full font-medium">
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

        {/* 竞赛标题 */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors line-clamp-2">
          {title}
        </h3>

        {/* 竞赛信息 */}
        <div className="space-y-2 mb-3">
          <div className="text-sm text-gray-600">
            <span className="font-medium">主办方：</span>
            {organizer}
          </div>

          <div className="text-sm text-gray-600">
            <span className="font-medium">截止日期：</span>
            <span className="text-red-600 font-medium">{deadline}</span>
          </div>

          <div className="text-sm text-gray-600">
            <span className="font-medium">奖励：</span>
            <span className="text-green-600 font-medium">{prize}</span>
          </div>

          {participants && (
            <div className="text-sm text-gray-500">
              <span className="font-medium">参与人数：</span>
              {participants}
            </div>
          )}
        </div>

        {/* 描述 */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{description}</p>

        {/* 操作按钮 */}
        <div className="flex space-x-2">
          <a
            href={registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 text-center py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              status === "closed"
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {status === "closed" ? "已结束" : "立即报名"}
          </a>
          {websiteUrl && (
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border border-gray-300 text-gray-700 text-center py-2 px-4 rounded-md hover:bg-gray-50 transition-colors text-sm font-medium"
            >
              查看详情
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
