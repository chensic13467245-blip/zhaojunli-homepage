export type ResearchArea = {
  id: string;
  title: string;
  englishTitle: string;
  description: string;
  keywords: string[];
};

export const researchAreas: ResearchArea[] = [
  {
    id: "4d-face",
    title: "4D 人脸生成与分析",
    englishTitle: "4D Facial Generation & Analysis",
    description: "研究动态人脸序列的采集、表示、分析与时空生成模型。",
    keywords: ["4D 点云", "动态人脸", "扩散模型"],
  },
  {
    id: "craniofacial",
    title: "三维颅面复原",
    englishTitle: "3D Craniofacial Reconstruction",
    description: "融合解剖结构、内蕴几何与生成模型，研究颅面复原、配准与身份鉴定。",
    keywords: ["颅面复原", "颅骨配准", "身份鉴定"],
  },
  {
    id: "geometry",
    title: "三维几何与点云处理",
    englishTitle: "3D Geometry & Point Clouds",
    description: "研究数字几何处理、形状分析、点云重采样与三维建模方法。",
    keywords: ["数字几何", "点云处理", "形状分析"],
  },
  {
    id: "vr-vision",
    title: "虚拟现实与计算机视觉",
    englishTitle: "Virtual Reality & Computer Vision",
    description: "面向虚实融合、图像理解和智能交互，研究三维视觉内容构建与应用。",
    keywords: ["虚拟现实", "计算机视觉", "智能交互"],
  },
];
