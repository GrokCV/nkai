import Link from "next/link";
import Image from "next/image";

interface ConferenceCardProps {
  title: string;
  date: string;
  location?: string;
  description: string;
  imageUrl?: string;
  href: string;
  deadline?: string;
  type?: "conference" | "workshop" | "symposium";
}

export default function ConferenceCard({
  title,
  date,
  location,
  description,
  imageUrl,
  href,
  deadline,
  type = "conference",
}: ConferenceCardProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "workshop":
        return "bg-green-100 text-green-800";
      case "symposium":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-orange-100 text-orange-800";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "workshop":
        return "研讨会";
      case "symposium":
        return "论坛";
      default:
        return "会议";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <Link href={href}>
        <div className="p-6">
          {/* 图片区域 */}
          {imageUrl && (
            <div className="mb-4">
              <Image
                src={imageUrl}
                alt={title}
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-md"
              />
            </div>
          )}

          {/* 类型标签 */}
          <div className="mb-3">
            <span
              className={`inline-block text-xs px-2 py-1 rounded-full font-medium ${getTypeColor(
                type
              )}`}
            >
              {getTypeLabel(type)}
            </span>
          </div>

          {/* 标题 */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors line-clamp-2">
            {title}
          </h3>

          {/* 时间和地点 */}
          <div className="space-y-2 mb-3">
            <div className="flex items-center text-sm text-gray-600">
              <svg
                className="w-4 h-4 mr-2 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="font-medium">时间：</span>
              <span className="ml-1">{date}</span>
            </div>

            {location && (
              <div className="flex items-center text-sm text-gray-600">
                <svg
                  className="w-4 h-4 mr-2 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="font-medium">地点：</span>
                <span className="ml-1">{location}</span>
              </div>
            )}

            {deadline && (
              <div className="flex items-center text-sm text-red-600">
                <svg
                  className="w-4 h-4 mr-2 text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="font-medium">截止：</span>
                <span className="ml-1">{deadline}</span>
              </div>
            )}
          </div>

          {/* 描述 */}
          <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
        </div>
      </Link>
    </div>
  );
}
