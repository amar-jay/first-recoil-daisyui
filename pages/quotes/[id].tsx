import Image from "../../components/image";
import NextLink from "next/link";
import { Quote } from "../api/quotes";

function Card({ post }: { post: Quote }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="card w-96 glass pt-5">
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

export async function getStaticProps({ params }: { params: { id: number } }) {
  const posts = await fetchData();
  if (!posts) {
    return {
      notFound: true,
    };
  }
  const id = params.id;

  return {
    props: {
      posts,
      post: posts[id],
    },
    //ISG in secs
    // revalidate: 100,
  };
}

export async function getStaticPaths() {
  const posts = await fetchData();
  const paths = posts.map((post: Quote) => ({
    params: { id: String(post.id) },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: "blocking" };
}

const fetchData = async () => {
  let datas: Quote[] = await fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));

  let id = 0;
  const indexedData = datas!.map((data) => {
    id = id + 1;
    return {
      id: id,
      text: data.text,
      author: data.author,
    };
  });

  return indexedData;
};
export default Card;
