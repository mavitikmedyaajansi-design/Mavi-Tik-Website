export type Nav = {
  label: string;
  subNavs?: Nav[];
  title?: string;
  href?: string;
};

export type PageContent = {
  meta_title: string;
  meta_description: string;
  title: string;
  description: string;
  image?: {
    src: string;
    alt: string;
    className: string;
    position: "top" | "inner";
  };
};

export interface PageData {
  id: number;
  type: string;
  slug: string;
  title: string;
  description: string;
  meta_title: string;
  meta_description: string;
  create_date: string;
  update_date: string;
  status: number;
  site: string;
  container: ContainerData[];
  subPages: PageData[];
}

export interface ContainerData {
  id: number;
  page: number;
  type: string;
  title: string;
  description: string;
  content: string | null;
  status: number;
  image: string;
}
