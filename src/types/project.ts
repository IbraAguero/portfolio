export type Tag = {
  name: string;
  class: string;
  icon: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
};

export type SubProject = {
  title: string;
  icon: string; // emoji
  description: string;
  images?: GalleryImage[];
};

export type Project = {
  title: string;
  description: string;
  longDescription: string;
  link: string;
  image: string;
  github?: string;
  tags: Tag[];
  features?: string[];
  challenges?: string[];
  learnings?: string[];
  subProjects?: SubProject[];
  gallery?: GalleryImage[];
};
