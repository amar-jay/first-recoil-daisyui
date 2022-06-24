// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type Quote = {
  id: number;
  text: string;
  author: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Quote[]>
) {
  let datas: Quote[] = await fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));

  if (!datas) {
    res.status(404);
  }

  let id = 0;
  datas = datas!.map((data) => {
    id = id + 1;
    return {
      id: id,
      text: data.text,
      author: data.author,
    };
  });
  const quote = datas[Math.floor(Math.random() * datas.length)];
  res.status(200).json(datas);
}
