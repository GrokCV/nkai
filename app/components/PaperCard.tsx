import Link from "next/link";
import Image from "next/image";

interface PaperCardProps {
  title: string;
  teamMembers: string;
  year: string;
  category: string;
  imageUrl?: string;
  href: string;
  description?: string;
}

export default function PaperCard({
  title,
  teamMembers,
  year,
  category,
  imageUrl,
  href,
  description,
}: PaperCardProps) {
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

          {/* 分类标签 */}
          <div className="mb-3">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
              {category}
            </span>
          </div>

          {/* 标题 */}
          <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors line-clamp-2">
            {title}
          </h3>

          {/* 团队成员信息 */}
          <div className="text-sm text-gray-600 mb-2">
            <span className="font-medium">团队成员：</span>
            {teamMembers}
          </div>

          {/* 年份 */}
          <div className="text-sm text-gray-500 mb-3">
            <span className="font-medium">时间：</span>
            {year}
          </div>

          {/* 描述 */}
          {description && (
            <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
          )}
        </div>
      </Link>
    </div>
  );
}
