"use client";

import { useState } from "react";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-8">
      {/* 桌面端分类过滤器 */}
      <div className="hidden md:flex flex-wrap gap-2">
        <button
          onClick={() => onCategoryChange("all")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === "all"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          全部
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* 移动端下拉菜单 */}
      <div className="md:hidden">
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <span>
              {selectedCategory === "all" ? "全部" : selectedCategory}
            </span>
            <svg
              className={`ml-2 -mr-1 h-5 w-5 float-right transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
              <div className="py-1">
                <button
                  onClick={() => {
                    onCategoryChange("all");
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                    selectedCategory === "all"
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700"
                  }`}
                >
                  全部
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      onCategoryChange(category);
                      setIsOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                      selectedCategory === category
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-700"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
