import Link from "next/link";

const navigation = {
  main: [
    { name: "首页", href: "/" },
    { name: "历届获奖", href: "/awards" },
    { name: "优胜方案", href: "/solutions" },
    { name: "技术竞赛", href: "/competitions" },
    { name: "团队成员", href: "/members" },
    { name: "联系我们", href: "/contact" },
  ],
  social: [
    {
      name: "GitHub",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "微信公众号",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.298c-.019.065-.044.134-.044.134-.013.069-.009.138.016.2.074.207.23.338.422.338.496 0 .72-.382.72-.382l1.702-1.24a.588.588 0 0 1 .566-.096c.721.23 1.482.344 2.24.344.748 0 1.491-.118 2.195-.344.468-.15.945-.346 1.388-.595.044-.024.089-.047.134-.072.902-.507 1.693-1.188 2.276-1.993.716-.989 1.097-2.094 1.097-3.25 0-4.054-3.891-7.342-8.691-7.342zm-.6 3.056c.462 0 .838.32.838.714 0 .394-.376.714-.838.714-.463 0-.839-.32-.839-.714 0-.394.376-.714.839-.714zm4.78 0c.463 0 .838.32.838.714 0 .394-.375.714-.838.714-.462 0-.838-.32-.838-.714 0-.394.376-.714.838-.714z" />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link
                href={item.href}
                className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>

        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>

        <div className="mt-16 border-t border-gray-800 pt-8">
          <div className="text-center">
            <p className="text-sm leading-5 text-gray-400">
              南开AI竞赛社 - 专注AI学术竞赛与技术交流
            </p>
            <div className="mt-4 space-y-2">
              <p className="text-sm text-gray-500">地址：XXXXXX</p>
              <p className="text-sm text-gray-500">电话：XXXXXX</p>
              <p className="text-sm text-gray-500">邮箱：xxx@xxx.com</p>
            </div>
            <p className="mt-6 text-xs leading-5 text-gray-400">
              &copy; 2025 南开AI竞赛社. 保留所有权利.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
