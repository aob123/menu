import Link from "next/link";

export default function Home() {
  return (
    // <main className=" bg-[url('../public/alex-haney-CAhjZmVk5H4-unsplash.jpg')]  w-full bg-cover bg-no-repeat bg-[top_right_-16rem] h-screen text-white flex flex-col justify-evenly items-center">
    <main className="bg-[url('../public/pablo-merchan-montes-wYOPqmtDD0w-unsplash.jpg')] w-full h-full bg-cover bg-center bg-fixed flex flex-col justify-evenly items-center text-white">
      <div className=" bg-black/90 h-screen w-full flex flex-col justify-evenly items-center ">
        <div className="flex flex-col  items-center">
          <h1 className=" text-8xl pb-3 ">
            me<span className="text-yellow-400">nü</span>
          </h1>
          <h2 className="text-xl">Låt din smak bestämma</h2>
        </div>
        <button className=" bg-gray-800 border-yellow-500 border-2 text-white py-4 px-8 rounded text-xl hover:bg-gray-900 hover:border-yellow-700">
          <Link href="/browse">
            Visa menyer i <span className="text-yellow-500">Härnösand</span>
          </Link>
        </button>
      </div>
    </main>
  );
}
