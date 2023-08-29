import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export interface Product {
  title: string;
  description: string;
  sourceCode?: string;
  liveSite?: string | null;
  tags: string[];
  imageUrl: string;
}
