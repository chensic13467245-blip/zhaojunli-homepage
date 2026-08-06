export type NewsItem = {
  date: string;
  title: string;
  summary: string;
  category: string;
};

export const newsItems: NewsItem[] = [
  {
    date: "2025.07.18",
    title: "相关成果获陕西省计算机学会科学技术奖一等奖",
    summary: "“颅面复原形态统计模型智能处理研究与应用”项目获奖。",
    category: "荣誉",
  },
  {
    date: "2025.01",
    title: "山东省自然科学基金面上项目启动",
    summary: "主持“结合扩散模型与最优传输的4D人脸生成研究”项目。",
    category: "项目",
  },
  {
    date: "2025",
    title: "多项颅面计算与三维视觉成果发表",
    summary: "相关成果发表于 IEEE TVCG、Pattern Recognition、AAAI、ICASSP 与 ICME 等期刊和会议。",
    category: "论文",
  },
  {
    date: "2024",
    title: "MSL-Net 获山东省计算机视觉优秀学术论文",
    summary: "论文聚焦大规模点云的尖锐特征检测，发表于 IEEE Transactions on Visualization and Computer Graphics。",
    category: "论文",
  },
];

