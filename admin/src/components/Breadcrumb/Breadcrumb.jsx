import React from "react";
import { ChevronRight } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white rounded-lg shadow p-4 md:p-6">
      <h1 className="text-2xl font-bold text-gray-900">
        College Damage Report Admin Panel
      </h1>
      <nav className="flex items-center space-x-2 mt-2 text-sm text-gray-500">
        <span>Department</span>
        <ChevronRight className="w-4 h-4" />
        <span>Floor</span>
        <ChevronRight className="w-4 h-4" />
        <span>Class</span>
      </nav>
    </header>
  );
}
