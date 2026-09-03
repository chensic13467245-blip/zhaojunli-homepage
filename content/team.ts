export type TeamMember = {
  name: string;
  role: string;
  research?: string;
  profileUrl?: string;
};

// 信息来源：青岛大学计算机科学技术学院官网（教师主页与虚拟现实研究团队官方页面）。
export const teamMembers: TeamMember[] = [
  {
    name: "赵俊莉",
    role: "教授 · 博士生导师 · 团队负责人",
    research: "计算机图形学 · 计算机视觉 · 虚拟现实 · 颅面智能计算",
    profileUrl: "https://cst.qdu.edu.cn/info/1071/8553.htm",
  },
  {
    name: "曹巍",
    role: "讲师 · 硕士生导师",
    research: "计算机图形学 · 虚拟现实 · 物理仿真动画 · 虚拟手术",
    profileUrl: "https://cst.qdu.edu.cn/info/1071/9815.htm",
  },
  {
    name: "贾世宇",
    role: "副教授 · 硕士生导师",
    research: "虚拟手术仿真 · 软组织变形计算 · 碰撞检测与力反馈交互",
    profileUrl: "https://cst.qdu.edu.cn/info/1163/9227.htm",
  },
  {
    name: "李奕",
    role: "讲师 · 硕士生导师",
    research: "图像融合 · 图像增强 · 模式识别 · 计算机视觉",
    profileUrl: "https://cst.qdu.edu.cn/info/1163/8647.htm",
  },
  {
    name: "万志波",
    role: "副教授 · 硕士生导师",
    research: "大数据分析与应用 · 人工智能研究与应用 · 智能制造质量管理 · 工业软件研发",
    profileUrl: "https://cst.qdu.edu.cn/info/1144/8101.htm",
  },
];

export const teamSummary =
  "虚拟现实研究团队以虚拟现实内容生成与交互为核心，研究三维模型的表示、生成、渲染与交互，重点开展三维测量与重建、虚拟手术仿真、颅面智能计算、医学图像处理等研究，为医学、教育、影视等行业服务。";
