import { Quote } from "./api/quotes";
import NextLink from 'next/link'
function Blog({ posts }: { posts: Quote[] }) {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <table className="table w-1/2 shadow-2xl">
        <thead>
          <tr>
            <th></th>
            <th>Quote</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post: Quote) => (
            <NextLink href={`/quotes/${post.id - 1 }`} key={post.id}>
            <tr className="cursor-pointer">
              <th>{post.id}</th>
              <td className="whitespace-pre-wrap">{post.text}</td>
              <td>{post.author}</td>
            </tr>
            </NextLink>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/quotes");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 5, // In seconds
  };
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/quotes");
  const posts: Quote[] = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: "blocking" };
}

export default Blog;
