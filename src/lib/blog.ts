import fm from 'front-matter';

export type BlogPostFrontmatter = {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  imageUrl: string;
  published?: boolean;
  draft?: boolean;
};

export type BlogPost = BlogPostFrontmatter & {
  id: string;
  body: string;
};

export function getBlogPosts(): BlogPost[] {
  // Vite specific feature to import multiple files
  const files = import.meta.glob('../content/blog/*.md', { query: '?raw', eager: true });
  
  const posts: BlogPost[] = [];
  
  for (const path in files) {
    // files[path] resolves to { default: string } when using ?raw with eager: true in Vite 5+
    // wait, actually in Vite 4/5, query: '?raw' with eager: true returns { default: 'file content' }
    const rawContent = (files[path] as any).default as string;
    const match = path.match(/\/([^\/]+)\.md$/);
    const id = match ? match[1] : path;
    
    try {
      const parsed = fm<BlogPostFrontmatter>(rawContent);
      
      // Filter out drafts or unpublished posts
      if (parsed.attributes.published !== false && parsed.attributes.draft !== true) {
         posts.push({
           id,
           body: parsed.body,
           ...parsed.attributes,
         });
      }
    } catch (e) {
      console.error('Error parsing frontmatter for', path, e);
    }
  }
  
  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
