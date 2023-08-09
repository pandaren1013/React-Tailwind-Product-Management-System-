import logo from "./logo.svg";
import "./App.css";

export default function App() {
  return (
    <>
      <div className="m-20 md:columns-2">
        <h1 className="text-3xl font-bold underline text-red-600">
          Hello world!
        </h1>

        <img
          className="float-right hover:float-left"
          src="./logo512.png"
          alt="noImg"
        />
        {/* <img className="w-full aspect-video" src="./logo512.png" alt="noImg" /> */}
        <div class="isolate hover:isolation-auto">
          While using the property{" "}
          <span class="inline-block">display: inline-block</span>
          will wrap its parent. Lastly, using the property{" "}
          <span class="block">display: block</span>
          will put the element on its own line and fill its parent.
        </div>

        <p>
          Today I spent most of the day researching ways to ...
          <span class="inline-flex items-baseline">
            <img
              src="mobile mockup.png"
              alt=""
              class="self-center w-5 h-5 rounded-full mx-1"
            />
            <span>Kramer</span>
          </span>
          keeps telling me there is no way to make it work, that ...
        </p>

        <span class="inline-grid grid-cols-3 gap-4">
          <span>01</span>
          <span>02</span>
          <span>03</span>
          <span>04</span>
          <span>05</span>
          <span>06</span>
        </span>

        <div class="flex ...">
          <div class="flex-1 ...">01</div>
          <div class="contents">
            <div class="flex-1 ...">02</div>
            <div class="flex-1 ...">03</div>
          </div>
          <div class="flex-1 ...">04</div>
        </div>

        <div class="table w-full ...">
          <div class="table-header-group ...">
            <div class="table-row">
              <div class="table-cell text-left ...">Song</div>
              <div class="table-cell text-left ...">Artist</div>
              <div class="table-cell text-left ...">Year</div>
            </div>
          </div>
          <div class="table-row-group">
            <div class="table-row">
              <div class="table-cell ...">
                The Sliding Mr. Bones (Next Stop, Pottersville)
              </div>
              <div class="table-cell ...">Malcolm Lockyer</div>
              <div class="table-cell ...">1961</div>
            </div>
          </div>
        </div>

        <div>
          <div class="flex hover:inline-flex">
            <div>a</div>
            <div>b</div>
          </div>
          <span class="box-content h-32 w-32 p-4 border-4">
            Hello
            <br />
            World
          </span>
        </div>

        <br />

        <span class="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
          Hello
          <br />
          World
        </span>
        <div class="bg-indigo-700 ... flex justify-center">
          <img
            src="mobile mockup.png"
            alt=""
            class="object-center hover:object-top"
          />
        </div>

        {/* relative and absolute */}
        <div class="relative p-10 ">
          <div class="absolute top-4 left-14">
            <img src="./img/apple.svg" alt="noImg" />
          </div>
          {/* 
          <div class="inline-block ...">
            <p>Static sibling</p>
          </div> */}
        </div>

        {/* fixed */}
        <div>
          <div class="fixed top-10 left-10 text-red-500 text-5xl font-bold">
            Contacts
          </div>
        </div>

        {/* sticky, border, font, overflow */}
        <div class="box-content h-32 w-52 p-4 border-4 overflow-auto bg-fixed rounded-e-lg">
          <div style={{ background: "src(./img/apple.svg)" }} />
          <div>
            <div class="sticky top-0 text-yellow-500 text-2xl font-bold">A</div>
            <div className="divide-y-4 divide-slate-400/25">
              <div class="flex items-center gap-3">
                <img src="./img/apple.svg" alt="noImg" />
                <strong>Andrew Alfred</strong>
              </div>
              <div>
                <img src="./img/apple.svg" alt="noImg" />
                <strong>Aisha Houston</strong>
              </div>
              <div>
                <img src="./img/apple.svg" alt="noImg" />
                <strong>Andrew Alfred</strong>
              </div>
              <div>
                <img src="./img/apple.svg" alt="noImg" />
                <strong>Aisha Houston</strong>
              </div>
            </div>
          </div>
          <div>
            <div class="sticky top-0 text-green-500 text-2xl font-bold ">B</div>
            <div>
              <div>
                <img src="./img/apple.svg" alt="noImg" />
                <strong>Bob Alfred</strong>
              </div>
              <div>
                <img src="./img/apple.svg" alt="noImg" />
                <strong>Bob Alfred</strong>
              </div>
              <div>
                <img src="./img/apple.svg" alt="noImg" />
                <strong>Bob Alfred</strong>
              </div>
            </div>
          </div>
        </div>

        <div dir="rtl">
          <div class="relative h-32 w-32 box-content border-4">
            <div class="absolute h-14 w-14 top-0 start-0 ...">
              <img src="./img/apple.svg" alt="noImg" />
            </div>
          </div>
        </div>

        {/* Questions z-0, basis-2 */}
        <div>
          <div class="z-10 ...">
            <img src="./img/apple.svg" alt="noImg" />
          </div>
          <div class="z-0 ...">
            <img src="./img/apple.svg" alt="noImg" />
          </div>
        </div>

        <div class="hover:w-20 border-2 border-rose-500 rounded-md max-w-lg text-5xl ">
          Button
        </div>
        <p>
          Higher resolution means more than just a better-quality image. With a
          Retina 6K display,{" "}
          <a
            class="text-sky-400 after:content-['_↗'] ..."
            href="https://www.apple.com/pro-display-xdr/"
          >
            Pro Display XDR
          </a>{" "}
          gives you nearly 40 percent more screen real estate than a 5K display.
        </p>
        <p class="diagonal-fractions ...">1/2 3/4 5/6</p>
        <p class="text-blue-600 underline decoration-sky-500/[.9]">
          The quick brown fox...
        </p>
        <div class="flex flex-row">
          <div class="basis-1/4 md:basis-1/3 box-content border-2 border-rose-500">
            01
          </div>
          <div class="basis-1/4 md:basis-1/3 box-content border-2 border-rose-500">
            02
          </div>
          <div class="basis-1/2 md:basis-1/3 box-content border-2 border-rose-500">
            03
          </div>
        </div>

        <div class="flex justify-between ...">
          <div class="order-0 hover:order-3">01</div>
          <div class="order-2">02</div>
          <div class="order-4">03</div>
        </div>

        <div class="grid grid-cols-6 gap-4 ">
          <div class="col-start-2 col-span-4 box-content border-2 border-rose-500">
            01
          </div>
          <div class="col-start-1 col-end-3 box-content border-2 border-rose-500">
            02
          </div>
          <div class="col-end-7 col-span-2 box-content border-2 border-rose-500">
            03
          </div>
          <div class="col-start-1 col-end-7 box-content border-2 border-rose-500">
            04
          </div>
        </div>
        <div class="grid grid-rows-3 grid-flow-col gap-4">
          <div class="row-span-3 box-content border-2 border-rose-500">01</div>
          <div class="col-start-2 col-span-2 box-content border-2 border-rose-500">
            02
          </div>
          <div class="col-start-3 row-span-2 col-span-2 box-content border-2 border-rose-500">
            03
          </div>
        </div>
        <div class="grid justify-items-center ...">
          <div>01</div>
          <div>02</div>
        </div>
        <button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-x-2 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
          Save Changes
        </button>
        <button class="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-all ...">
          Hover me
        </button>
        <span class="relative flex h-8 w-8">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75">
            ok
          </span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
        <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
          <div class="animate-pulse flex space-x-4">
            <div class="rounded-full bg-slate-700 h-10 w-10"></div>
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 bg-slate-700 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div class="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        <svg class="animate-bounce w-6 h-6 ...">awd</svg>
        <input
          type="checkbox"
          class="accent-pink-300 focus:accent-pink-500"
          checked
        />
        <div class="relative ...">
          <div class="absolute pointer-events-auto ...">
            <svg
              class="absolute text-slate-400 h-8 w-8"
              viewBox="-2 -2 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <input type="text" placeholder="Search" class="font-sans block text-sm w-full pl-10 py-2 px-3 ring-1 ring-slate-900/10 text-slate-500 rounded-lg dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-400" />
        </div>
      </div>
    </>
  );
}
