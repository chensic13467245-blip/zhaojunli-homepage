export type TimelineItem = {
  period: string;
  title: string;
  detail: string;
};

export type TimelineSection = {
  eyebrow: string;
  title: string;
  groups: Array<{
    title: string;
    items: TimelineItem[];
  }>;
};

export const profile = {
  name: "赵俊莉",
  englishName: "Junli Zhao",
  title: "教授 · 博士生导师",
  affiliation: "青岛大学计算机科学技术学院",
  intro:
    "赵俊莉，青岛大学计算机科学技术学院教授、博士生导师。主要从事虚拟现实、计算机图形学、计算机视觉与人工智能研究，聚焦三维颅面复原、数字几何处理与 4D 人脸生成。",
  highlights: [
    "青岛大学青年卓越人才",
    "美国纽约州立大学石溪分校访问学者",
    "青岛大学计算机视觉研究所副所长",
    "山东省数字经济创新平台虚拟现实创新实验室副主任",
    "元宇宙产业应用与创新山东省高等学校未来产业实验室副主任",
  ],
  contact: {
    email: "zhaojl@yeah.net",
    office: "青岛大学计算机科学技术学院",
  },
};

export const contactItems = [
  { label: "Email", value: profile.contact.email, href: `mailto:${profile.contact.email}` },
  { label: "Affiliation", value: profile.contact.office },
];

export const timelineSections: TimelineSection[] = [];

export const academicAppointments = [
  "中国计算机学会计算机辅助设计与图形学专业委员会执行委员",
  "中国计算机学会多媒体技术专业委员会执行委员",
  "中国图象图形学学会虚拟现实专业委员会委员",
  "中国图象图形学学会智能图形专业委员会委员",
  "中国图象图形学学会数字文化遗产专业委员会委员",
  "中国虚拟现实技术与产业创新平台专家委员会委员",
  "中国虚拟现实与可视化产业技术创新战略联盟会员",
];

export const teaching = {
  undergraduate: ["虚拟现实", "科学计算与数学建模", "C语言程序设计"],
  postgraduate: ["数字几何处理", "数字图像处理"],
};
