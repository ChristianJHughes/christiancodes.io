import { meta as buildingABlogWithNextJsAndTailwindMeta } from "../pages/blog/building-a-blog-with-nextjs-tailwind-mdx.mdx";

const posts = [buildingABlogWithNextJsAndTailwindMeta];

function getAllPosts(limit = 5) {
  return posts.slice(0, limit - 1);
}

export { getAllPosts };
