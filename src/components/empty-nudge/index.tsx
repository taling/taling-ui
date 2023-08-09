"use client";

import Link from "next/link";

export default function EmptyNudgeComponent({
  title,
  nudge,
}: {
  title: React.ReactNode;
  nudge?: {
    title: React.ReactNode;
    href: string;
  };
}) {
  return (
    <div className="bg-taling-gray-50 rounded-md text-xs md:text-sm text-taling-gray-700 p-8 text-center flex flex-col gap-2">
      <p>{title}</p>
      {nudge && (
        <Link
          className="text-taling-pink-400 underline cursor-pointer"
          href={nudge.href ?? `/`}
        >
          {nudge.title}
        </Link>
      )}
    </div>
  );
}
