export type ResearchArea = {
  id: string;
  title: string;
  englishTitle: string;
  description: string;
  keywords: string[];
};

export const researchAreas: ResearchArea[] = [
  {
    id: "graphics",
    title: "计算机图形学",
    englishTitle: "Computer Graphics",
    description: "研究数字几何处理、形状分析、三维建模与生成方法。",
    keywords: ["数字几何", "形状分析", "三维建模"],
  },
  {
    id: "vision",
    title: "计算机视觉",
    englishTitle: "Computer Vision",
    description: "面向人脸、颅面与医学图像的表示、识别、配准与理解。",
    keywords: ["图像理解", "模式识别", "图像融合"],
  },
  {
    id: "vr",
    title: "虚拟现实",
    englishTitle: "Virtual Reality",
    description: "聚焦三维视觉内容构建、数字人与虚实融合应用。",
    keywords: ["虚实融合", "数字人", "增强现实"],
  },
  {
    id: "ai",
    title: "人工智能",
    englishTitle: "Artificial Intelligence",
    description: "将深度学习、生成模型与几何先验结合，解决复杂视觉计算问题。",
    keywords: ["深度学习", "生成模型", "几何学习"],
  },
  {
    id: "face-reconstruction",
    title: "三维人脸重建",
    englishTitle: "3D Face Reconstruction",
    description: "研究人脸几何与外观的数字化建模、补全、编辑与相似性度量。",
    keywords: ["人脸建模", "点云", "网格"],
  },
  {
    id: "craniofacial",
    title: "颅面复原",
    englishTitle: "Craniofacial Reconstruction",
    description: "融合颅骨解剖结构、内蕴几何与智能模型，研究颅面复原与评价。",
    keywords: ["颅骨配准", "形态统计", "身份鉴定"],
  },
  {
    id: "4d-face",
    title: "4D 人脸生成",
    englishTitle: "4D Facial Generation",
    description: "研究动态人脸序列的表示、采集、分析与时空生成模型。",
    keywords: ["4D 点云", "扩散模型", "时空生成"],
  },
];

