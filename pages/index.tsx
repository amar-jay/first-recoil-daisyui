import type { NextPage } from "next";
import Head from "next/head";
import { useRecoilState, useRecoilValue } from "recoil";
import { countState, powerCountState } from "./atom";
import NavBar from "../components/navbar";
import Heading from "../components/heading";
import Input from "../components/changecount";
const Home: NextPage = () => {
  const [count, setCount] = useRecoilState(countState);
  const powerCount = useRecoilValue(powerCountState);
  return (
    <div data-theme="light">
      <Head>
        <title>Saisy UI and RecoilApp</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="card-body w-full">
        <NavBar title={"Counter"} />
        <Heading>Recoil & Daisy ui Template ✔️</Heading>
        <h1 className=" text-center font-mono text-6xl">{count}</h1>
        <h4 className=" text-center font-serif text-md">Power: {powerCount}</h4>
        <div className="flex-row self-center justify-center items-center menu p-3 shadow bg-base-200 rounded-box w-1/3">
          <button
            className="btn btn-primary m-4 w-24"
            onClick={(_) => setCount((count) => count++)}
          >
            Increase
          </button>
          <button
            className="btn btn-success w-24 m-4"
            onClick={(_) => setCount((count) => count--)}
          >
            Decrease
          </button>
        </div>
        <h3 className="text-2xl">Change Input</h3>
        <Input />
      </main>
      {/* Learn to write Footers */}
    </div>
  );
};

export default Home;
