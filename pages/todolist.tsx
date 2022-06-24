import Head from "next/head";
import ButtonGroup from "../components/buttonGroup";
import Heading from "../components/heading";
import NavBar from "../components/navbar";
import TodoTable from "../components/todoTable";
const todoList: React.FC = () => {
  return (
    <div data-theme="business" className="">
      <Head>
        <title>To do List</title>
      </Head>
      <main className="min-h-screen flex flex-col">
        <NavBar title={"todoList"} />
        <Heading>TO DO LIST 📰</Heading>

        <ButtonGroup />
        <TodoTable />
      </main>
    </div>
  );
};

export default todoList;
