import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "赵俊莉教授 · 青岛大学",
    template: "%s · 赵俊莉教授",
  },
  description: "青岛大学计算机科学技术学院赵俊莉教授个人学术主页，展示研究方向、科研项目、学术论文和团队动态。",
  keywords: ["赵俊莉", "青岛大学", "计算机图形学", "计算机视觉", "虚拟现实", "颅面复原", "4D人脸"],
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    title: "赵俊莉教授 · 青岛大学",
    description: "计算机图形学、计算机视觉、虚拟现实与三维颅面计算研究。",
    images: [{ url: "/og.png", width: 1730, height: 909, alt: "赵俊莉教授学术主页" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "赵俊莉教授 · 青岛大学",
    description: "计算机图形学、视觉、虚拟现实与颅面重建研究。",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
