import Layout from "../../components/Layout";
import Link from "next/link";

export default function PaperLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <div className="bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
          {/* 返回链接 */}
          <div className="mb-8">
            <Link
              href="/awards"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              返回历届获奖
            </Link>
          </div>

          {/* 论文内容 */}
          <article className="prose prose-lg prose-blue max-w-none">
            {children}
          </article>
        </div>
      </div>
    </Layout>
  );
}
