export type Award = {
  title: string;
  year?: string;
  category: "科研" | "个人" | "论文" | "教学" | "指导";
  detail?: string;
};

export const awards: Award[] = [
  {
    title: "陕西省计算机学会科学技术奖一等奖",
    year: "2025",
    category: "科研",
    detail: "颅面复原形态统计模型智能处理研究与应用",
  },
  { title: "山东省科技创新奖先进个人", category: "个人", detail: "山东省企业科技创新协会" },
  { title: "山东省计算机视觉优秀学术论文", category: "论文", detail: "MSL-Net: Sharp Feature Detection Network for 3D Point Clouds" },
  { title: "青岛大学青年教师教学大奖赛三等奖", category: "教学" },
  { title: "山东省高校青年教师多媒体教育软件竞赛二等奖", category: "教学" },
  { title: "指导学生获得国际虚拟现实技术及应用创新大赛等奖项20余项", category: "指导", detail: "包括亚太地区大学生数学建模竞赛、山东省科技创新大赛等" },
];

