/** @format */

import Layout from "@/components/Layout";
import { Inter } from "next/font/google";
import {
  ChevronDownIcon,
  EllipsisVerticalIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import CardItems from "@/components/CardItems";
import BoardData from "../data/borad-data.json";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

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
      <Draggable>
      <div className="grid grid-cols-4 gap-5 my-5 ">
          { 
          BoardData.map((board, index) => {
            return (
                <div
                  key={index}
                  className="bg-gray-100 rounded-md shadow-md p-2 flex flex-col relative overflow-hidden"
                >
                  <span className="w-full h-1 bg-gradient-to-r bg-pink-700 to-red-400 rounded-md absolute inset-x-0 top-0"></span>
                  <h4 className="flex justify-between items-center mb-2">
                    <span className="text-2xl text-gray-600 ">{board.name}</span>
                    <EllipsisVerticalIcon className="h-5 w-5 text-gray-700" />
                  </h4>
                  {board.items.length > 0 && (
                    board.items.map((item, iIndex) => {
                      return <CardItems key={iIndex} data={item} />
                    })
                  )}
                  <button className="flex justify-center items-center mt-6 space-x-2 mb-3 border p-1 rounded-md bg-slate-50 shadow-lg">
                    <span className="font-semibold">Add Scedule</span>
                    <PlusIcon className="w-5 h-5 text-gray-50 shadow-md bg-green-400 rounded-full" />

                  </button>
                </div>
            );
          })}
        </div>
      </Draggable>
      </div>
    </Layout>
  );
}
