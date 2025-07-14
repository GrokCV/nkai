import Image from "next/image";

interface DatasetCardProps {
  name: string;
  description: string;
  category: string;
  size: string;
  format: string;
  year: string;
  downloadUrl: string;
  paperUrl?: string;
  imageUrl?: string;
  license?: string;
}

export default function DatasetCard({
  name,
  description,
  category,
  size,
  format,
  year,
  downloadUrl,
  paperUrl,
  imageUrl,
  license = "开源",
}: DatasetCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        {/* 图片区域 */}
        {imageUrl && (
          <div className="mb-4">
            <Image
              src={imageUrl}
              alt={name}
              width={400}
              height={200}
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
        )}

        {/* 分类标签 */}
        <div className="mb-3 flex items-center justify-between">
          <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
            {category}
          </span>
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
            {license}
          </span>
        </div>

        {/* 数据集名称 */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors line-clamp-2">
          {name}
        </h3>

        {/* 数据集信息 */}
        <div className="space-y-2 mb-3">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>
              <span className="font-medium">大小：</span>
              {size}
            </span>
            <span>
              <span className="font-medium">格式：</span>
              {format}
            </span>
          </div>

          <div className="text-sm text-gray-500">
            <span className="font-medium">发布年份：</span>
            {year}
          </div>
        </div>

        {/* 描述 */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{description}</p>

        {/* 操作按钮 */}
        <div className="flex space-x-2">
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            下载PPT
          </a>
          {paperUrl && (
            <a
              href={paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border border-gray-300 text-gray-700 text-center py-2 px-4 rounded-md hover:bg-gray-50 transition-colors text-sm font-medium"
            >
              观看视频
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
