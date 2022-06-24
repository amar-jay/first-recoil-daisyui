import Image from "next/image";
import NextLink from "next/link";
import { Quote } from "../api/quotes";

function Blog({ post }: { post: Quote }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="card w-96 glass pt-5">
        <figure>
          <img
            src="https://picsum.photos/300/200"
            alt="Image"
            className="rounded-xl shadow-lg"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{post.author}</h2>
          <p>{post.text}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <NextLink href={"/quotes"} passHref>
                See Other Quotes
              </NextLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ params: { id } }) {
  const res = await fetch("http://localhost:3000/api/quotes");
  const posts: Quote[] = await res.json();
  //   posts[0] = { ...posts[0], ctx };
  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts,
      post: posts[id],
    },
    //ISG in secs
    // revalidate: 15,
  };
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/quotes");
  let posts: Quote[] = await res.json();
  posts = posts.slice(0, 5);
  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: String(post.id) },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: "blocking" };
}

export default Blog;
