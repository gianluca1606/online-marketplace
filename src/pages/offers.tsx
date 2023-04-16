import { useUser } from "@clerk/nextjs";
import { Listing } from "@prisma/client";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";

const Offers: NextPage = () => {
  const messages = api.listings.getMessage.useQuery();

  return (
    <>
      <Head>
        <title>Offers</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto flex min-h-screen flex-col gap-12">
        <div className="container mx-auto">
          <h1 className="mt-12 pl-4 text-4xl">Your offers</h1>
          <div className="container gap-4">
            <div className="relative overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      From
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Message
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {messages?.data?.map((message) => (
                    <tr
                      key={message.id}
                      className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <th
                        scope="row"
                        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                      >
                        {message.fromUserName}
                      </th>
                      <td className="px-6 py-4"> {message.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Offers;
