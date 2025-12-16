import type { ReactNode } from "react";

export default function AuthActions({ children }: { children: ReactNode }) {
  return <div className="text-right text-primary text-sm mb-3">{children}</div>;
}
