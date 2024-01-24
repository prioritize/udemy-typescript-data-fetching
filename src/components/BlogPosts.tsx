export type BlogPost = {
  id: number;
  title: string;
  text: string;
};
export interface Post {
    id: number,
    title: string,
    body: string,
    userId: number,
}

type BlogPostsProps = {
  posts: BlogPost[];
};

export default function BlogPosts({ posts }: BlogPostsProps) {
  return (
    <div id="blog-posts">
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
