import { Quote } from "../pages/api/quotes";

export const fetchData = async () => {
  let datas: Quote[] = await fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));

  let id = 0;
  datas = datas.slice(0, 1301);
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
