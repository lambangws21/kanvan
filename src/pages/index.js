import Layout from "@/components/Layout";
import { Inter } from "next/font/google";
import { ChevronDownIcon, PlusIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

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
                  src="https://randomuser.me/api/portraits/men/21.jpg"
                  width="36"
                  height="36"
                  objectFit="cover "
                  alt="user-team"
                  className="rounded-full"
                />
              </li>
              <button className="border border-dashed flex items-center  w-9 border-gray-500 rounded-full">
                <PlusIcon className="w-9 h-9 text-gray-500"/>
              </button>
            </ul>
          </div>
        </div>
        {/* Board Columns */}
        <div className="grid grid-cols-4 gap-5 bg-gray-300 ">
          <div>
            <h4>Backlog</h4>
          </div>

        </div>
      </div>
    </Layout>
  );
}
