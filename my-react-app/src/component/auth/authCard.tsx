import type { ReactNode } from "react";

export default function AuthCard({ children, title }: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-white/90 backdrop-blur-xl shadow-xl rounded-xl p-10">
      <h2 className="text-3xl font-semibold text-primary mb-8">{title}</h2>
      {children}
    </div>
  );
}
