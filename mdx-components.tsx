import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-medium mb-2 text-gray-700 dark:text-gray-300">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="mb-4 text-gray-600 dark:text-gray-400 leading-relaxed">
        {children}
      </p>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="mb-4 pl-6 list-disc text-gray-600 dark:text-gray-400">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-4 pl-6 list-decimal text-gray-600 dark:text-gray-400">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="mb-1">{children}</li>,
    code: ({ children }) => (
      <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono text-red-600 dark:text-red-400">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4 text-sm">
        {children}
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4 text-gray-700 dark:text-gray-300">
        {children}
      </blockquote>
    ),
    ...components,
  };
}
