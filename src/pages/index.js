/** @format */

import Layout from "@/components/Layout";
import { Inter } from "next/font/google";
import {
  ChatBubbleLeftEllipsisIcon,
  ChevronDownIcon,
  EllipsisVerticalIcon,
  PaperAirplaneIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import CardItems from "@/components/CardItems";
import "../data/borad-data.json";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <div className="p-10 ">
        {/* Board Header */}
        <div className="flex justify-between">
          <div className="flex items-center">
            <h4 className="text-4xl font-bold text-gray-600">Studio Board</h4>
            <ChevronDownIcon className="h-7 w-7 text-gray-500 rounded-full bg-white p-2 ml-5 shadow-xl" />
          </div>
          <div>
            <ul className="flex space-x-3">
              <li>
                {" "}
                <Image
                  src="https://randomuser.me/api/portraits/men/27.jpg"
                  width="36"
                  height="36"
                  objectFit="cover "
                  alt="user-team"
                  className="rounded-full"
                />
              </li>
              <li>
                {" "}
                <Image
                  src="https://randomuser.me/api/portraits/men/22.jpg"
                  width="36"
                  height="36"
                  objectFit="cover "
                  alt="user-team"
                  className="rounded-full"
                />
              </li>
              <li>
                {" "}
                <Image
                  src="https://randomuser.me/api/portraits/men/91.jpg"
                  width="36"
                  height="36"
                  objectFit="cover "
                  alt="user-team"
                  className="rounded-full"
                />
              </li>
              <button className="border border-dashed flex items-center  w-9 border-gray-500 rounded-full">
                <PlusIcon className="w-9 h-9 text-gray-500" />
              </button>
            </ul>
          </div>
        </div>
        {/* Board Columns */}
        <div className="grid grid-cols-4 gap-5 my-5 ">
          <div className="bg-gray-100 rounded-md shadow-md p-2 flex flex-col relative overflow-hidden">
            <span className="w-full h-1 bg-gradient-to-r bg-pink-700 to-red-400 rounded-md absolute inset-x-0 top-0"></span>
            <h4 className="flex justify-between items-center mb-2">
              <span className="text-2xl text-gray-600 ">Backlog</span>
              <EllipsisVerticalIcon className="h-5 w-5 text-gray-700" />
            </h4>
            <CardItems />
            <CardItems />
            <CardItems />
          </div>
        </div>
      </div>
    </Layout>
  );
}
