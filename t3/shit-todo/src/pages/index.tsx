import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>todo app lol</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto my-12 max-w-3x1">
        <div className="flex justify-between">
        <h2 className="text-2xl font-semibold">fucking todo</h2>        
        <button type="button" className="bg-violet-500 transition hover:bg-violet-600 rounded-md text-sm p-2">Add a task</button>
        </div>
      </main>
    </>
  );
};

export default Home;
