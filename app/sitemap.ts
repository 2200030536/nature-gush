import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nature-gush.vercel.app",
      lastModified: new Date(),
    },
  ];
}
