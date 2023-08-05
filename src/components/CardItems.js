/** @format */

import React from "react";
import {
  ChatBubbleLeftEllipsisIcon,
  PaperAirplaneIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

function CardItems(props) {
  return (
    <div className="bg-white p-1 rounded-md shadow-md mt-3 flex flex-col">
      <label className="bg-gradient-to-r from-blue-500 to-blue-200 px-2 py-1 rounded text-white text-sm">
        Low Priority
      </label>
      <h5 className="tex-md my-3 leading-4">Tindakan Operasi Laparatomie</h5>
      <div className="flex justify-between">
        <div className="flex space-x-4 items-center">
          <span className="flex space-x-2 items-center">
            <ChatBubbleLeftEllipsisIcon className="w-5 h-5 text-gray-500 mr-2" />
            <span>2</span>
          </span>
          <span className="flex space-x-2 items-center">
            <PaperAirplaneIcon className="w-5 h-5 text-gray-500 mr-2" />
            <span>1</span>
          </span>
        </div>
        <ul className="flex flex-row-reverse space-x-1 items-center">
          <button className="border border-dashed flex items-center  w-5 h-5 border-gray-500 rounded-full">
            <PlusIcon className="w-5 h-5 text-gray-500 items-center justify-center" />
          </button>
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
        </ul>
      </div>
    </div>
  );
}

export default CardItems;
