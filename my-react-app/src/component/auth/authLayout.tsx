import type { ReactNode } from "react";
import ParticlesBg from "./particlesBg";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen w-screen flex relative bg-background overflow-hidden">
      <ParticlesBg/>
      {/* 左侧 */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-gradient-to-br from-primary to-primaryDark relative z-10">
        <h1 className="text-5xl font-bold text-white mb-6">文件管理系统</h1>
        <p className="text-white/80 text-lg">File Manger</p>
      </div>

      {/* 右侧 */}
      <div className="w-1/2 flex justify-center items-center p-12 relative z-10">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
