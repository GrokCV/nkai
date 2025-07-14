import React from "react";

interface ContentSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export default function ContentSection({
  title,
  subtitle,
  children,
  className = "",
}: ContentSectionProps) {
  return (
    <section className={`py-12 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 标题区域 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* 内容区域 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {children}
        </div>
      </div>
    </section>
  );
}
