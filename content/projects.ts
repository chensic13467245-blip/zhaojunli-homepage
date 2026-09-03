export type Project = {
  title: string;
  type: string;
  code?: string;
  period: string;
  role: "主持" | "参与";
};

export const projects: Project[] = [
  { title: "航天轨道数据库与数字轨道模型开发", type: "横向课题", code: "2025370202001999", period: "2025.07—2026.06", role: "主持" },
  { title: "结合扩散模型与最优传输的4D人脸生成研究", type: "山东省自然科学基金面上项目", code: "ZR2024MF087", period: "2025.01—2027.12", role: "主持" },
  { title: "基于共形结构与最优传输的颅骨身份认证", type: "国家自然科学基金面上项目", code: "62172247", period: "2022.01—2025.12", role: "主持" },
  { title: "儿童智能化建模软件", type: "横向课题", code: "2023370203004281", period: "2023.11—2024.11", role: "主持" },
  { title: "面向航天应用的可视化增强现实软件技术开发", type: "横向课题", code: "20213702021579", period: "2021.10—2022.01", role: "主持" },
  { title: "基于稀疏统计模型的高维数据分析及其应用研究", type: "国家统计局项目", code: "2020LY100", period: "2020.09—2022.09", role: "主持" },
  { title: "基于内蕴几何结构的颅面相似度计算与复原", type: "国家自然科学基金青年项目", code: "61702293", period: "2018.01—2020.12", role: "主持" },
  { title: "形状空间下基于测地线的三维人脸分析与超分辨率重建", type: "中国博士后科学基金面上项目", code: "2017M622137", period: "2017.11—2019.11", role: "主持" },
  { title: "计算机辅助颅面复原与评价研究", type: "虚拟现实应用教育部工程研究中心项目", code: "MEOBNUEVRA201601", period: "2016.09—2019.10", role: "主持" },
];
