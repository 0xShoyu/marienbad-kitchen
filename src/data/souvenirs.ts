export interface ProductImage {
  id: number;
  src: string;
  title: string;
  label: string;
  description?: string;
}

export const PRODUCT_IMAGES: ProductImage[] = [
  {
    id: 1,
    src: "/images/souvenir-1.png",
    title: "經典鑽石系列",
    label: "熱銷",
    description: "鑲嵌捷克璀璨水晶，展現波西米亞純粹光芒。",
  },
  {
    id: 2,
    src: "/images/souvenir-2.png",
    title: "經典鑽石系列",
    label: "熱銷",
    description: "手工精研玻璃表面，配以優雅的漸變色調設計。",
  },
  {
    id: 3,
    src: "/images/souvenir-3.png",
    title: "經典花卉系列",
    label: "熱銷",
    description: "職人手繪捷克傳統花卉，每一件都是獨一無二的藝術品。",
  },
  {
    id: 4,
    src: "/images/souvenir-4.png",
    title: "經典套娃系列",
    label: "熱銷",
    description: "結合東歐傳統文化符號，趣味與工藝的完美融合。",
  },
  {
    id: 5,
    src: "/images/souvenir-6.png",
    title: "經典花卉系列",
    label: "熱銷",
    description:
      "捷克職人手繪百合花卉，鑲嵌璀璨水鑽。細膩的線條勾勒出波西米亞的田園風情，優雅而富有生命力。",
  },
  {
    id: 6,
    src: "/images/souvenir-5.png",
    title: "萌寵貓咪系列",
    label: "新款",
    description:
      "俏皮可愛的貓咪與愛心造型，點綴閃耀晶鑽。為高品質的玻璃工藝注入一份暖心童趣，是送禮的絕佳選擇。",
  },
  {
    id: 7,
    src: "/images/souvenir-7.png",
    title: "靈動蔓藤系列",
    label: "經典",
    description:
      "蜿蜒的蔓藤設計展現純粹的曲線之美。水鑽沿著枝蔓星點分佈，猶如清晨草葉上的露珠，簡約且高貴。",
  },
  {
    id: 8,
    src: "/images/souvenir-8.png",
    title: "夢幻水母系列",
    label: "人氣",
    description:
      "獨特的點畫技法呈現輕盈的水母姿態。搭配夢幻的漸變背景色，彷彿將深海的靈動美景封存在指尖。",
  },
];
