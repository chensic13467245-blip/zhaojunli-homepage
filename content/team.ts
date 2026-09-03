export type TeamMember = {
  name: string;
  role: string;
  research?: string;
  profileUrl?: string;
};

export const teamMembers: TeamMember[] = [
  { name: "赵俊莉", role: "教授 · 博士生导师 · 团队负责人", research: "计算机图形学、计算机视觉、虚拟现实", profileUrl: "https://cst.qdu.edu.cn/info/1071/8553.htm" },
  { name: "贾世宇", role: "博士 · 副教授" },
  { name: "李奕", role: "副教授 · 硕士生导师" },
  { name: "万志波", role: "博士 · 讲师 · 硕士生导师" },
  { name: "曹巍", role: "博士 · 讲师 · 硕士生导师", research: "计算机图形学、虚拟现实、物理仿真动画、虚拟手术", profileUrl: "https://cst.qdu.edu.cn/info/1071/9815.htm" },
];

export const teamSummary =
  "虚拟现实研究团队以虚拟现实内容生成与交互为核心，围绕三维测量与重建、虚拟手术仿真、颅面智能计算、医学图像处理等方向开展研究。";
