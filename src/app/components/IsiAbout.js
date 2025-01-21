import React from "react";
// import gambarkiri from "../assets/IMG/292817461_7649943481742901_6633087870742063213_n.jpg"
import gambarkiri2 from "../../../public/IMG/292363140_7641600222577227_6588402848332977786_n.jpg";
import Image from "next/image";
// import SisiKiri from './SisiKiri'
function IsiAbout() {
  return (
    <div className="text-white flex justify-center gap-4 ">
      {/* <div className='w-2/12 hidden md:block'>
                <SisiKiri />
            </div> */}
      <div className="lg:w-5/7 w-full ">
        <div className="  lg:p-4 lg:from-zinc-100 lg:to-transparent lg:border-zinc-300 border-0 lg:border border-b-0 rounded-lg lg:bg-gradient-to-br lg:dark:from-zinc-900 lg:dark:to-transparent dark:border-zinc-800 ">
          <div className="flex flex-col justify-center gap-2 lg:flex-row items-center">
            <div className=" h-52 bg-red-100  lg:w-1/2 lg:h-96 rounded-3xl relative justify-center overflow-hidden  w-full">
              <Image
                src={gambarkiri2}
                layout="fill"
                objectFit="cover"
                className="rounded-3xl "
                alt="Gambar Kiri"
              />
            </div>
            <div className="w-full px-4 py-4 lg:py-12 lg:w-1/2 font-poppins">
              <div className="relative flex items-center gap-2 text-xl md:justify-start justify-center z-1 font-bold">
                <p className="font-bold dark:hover:text-teal-300 text-black dark:text-teal-300 hover:text-teal-300">
                  Tentang saya
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-black text-sm dark:text-zinc-400 mt-4">
                  Saya{" "}
                  <span className="dark:text-white hover:text-teal-300 dark:hover:text-teal-300 font-bold">
                    Mohamad Hasyim Ridwan
                  </span>
                  , seorang Pengembang Full Stack yang memadukan keahlian teknis
                  dengan kreativitas inovatif. Dengan latar belakang pendidikan
                  di bidang Manajemen Transportasi Udara, saya telah membuktikan
                  bahwa passion dan dedikasi dapat melampaui batas-batas latar
                  belakang akademis tradisional.
                </p>
                <p className="text-black text-sm dark:text-zinc-400">
                  Meskipun berasal dari jurusan non-teknis, saya telah
                  mengembangkan diri menjadi seorang{" "}
                  <span className="dark:text-white hover:text-teal-300 dark:hover:text-teal-300 font-bold">
                    Full Stack Developer yang kompeten
                  </span>
                  . Keberanian saya untuk keluar dari zona nyaman dan keinginan
                  konstan untuk belajar telah mengantarkan saya pada pencapaian
                  dalam pengembangan web dan aplikasi mobile, dengan fokus
                  khusus pada backend development.
                </p>
                <p className="text-black text-sm dark:text-zinc-400">
                  Saat ini, saya tengah menempuh gelar Sarjana Komputer dengan
                  IPK 3.70, yang mencerminkan komitmen saya terhadap keunggulan
                  akademis. Keahlian saya meliputi{" "}
                  <span className="dark:text-white hover:text-teal-300 dark:hover:text-teal-300 font-bold">
                    React.js, Next.js,React Native dan desain API
                  </span>
                  , dengan pengalaman yang kuat dalam mengimplementasikan solusi
                  teknologi yang inovatif dan efisien.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" gap-8 lg:mt-2 mt-10">
          <div className=" font-poppins  lg:p-4 lg:from-zinc-100 lg:to-transparent lg:border-zinc-300 border-0 lg:border border-b-0 rounded-lg lg:bg-gradient-to-br lg:dark:from-zinc-900 lg:dark:to-transparent dark:border-zinc-800 ">
            <h1 className="text-lg font-bold justify-center md:justify-center flex   hover:text-teal-300 dark:hover:text-teal-300 text-black dark:text-teal-300">
              My Skills
            </h1>
            <h1 className="text-lg mt-4 font-bold justify-center md:justify-start flex hover:text-teal-300 dark:hover:text-teal-300 text-black dark:text-white mb-3">
              Tech
            </h1>
            <div className="flex flex-wrap  gap-4 ">
              <button className="text-xs px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-teal-700 dark:hover:bg-teal-400 hover:bg-teal-400 ">
                React JS
              </button>
              <button className="text-xs px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-teal-700 dark:hover:bg-teal-400 hover:bg-teal-400 ">
                React Vite
              </button>
              <button className="text-xs px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-teal-700 dark:hover:bg-teal-400 hover:bg-teal-400 ">
                Next JS
              </button>
              <button className="text-xs px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-teal-700 dark:hover:bg-teal-400 hover:bg-teal-400 ">
                Express JS
              </button>
              <button className="text-xs px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-teal-700 dark:hover:bg-teal-400 hover:bg-teal-400 ">
                Typescript
              </button>
              <button className="text-xs px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-teal-700 dark:hover:bg-teal-400 hover:bg-teal-400 ">
                Flutter
              </button>
              <button className="text-xs px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-teal-700 dark:hover:bg-teal-400 hover:bg-teal-400 ">
                Node JS
              </button>
              <button className="text-xs px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-teal-700 dark:hover:bg-teal-400 hover:bg-teal-400 ">
                Fire Base
              </button>
              <button className="text-xs px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-teal-700 dark:hover:bg-teal-400 hover:bg-teal-400 ">
                Sequelize
              </button>
              <button className="text-xs px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-teal-700 dark:hover:bg-teal-400 hover:bg-teal-400 ">
                MySql
              </button>
            </div>

            <h1 className="text-lg mt-4 font-bold justify-center md:justify-start flex hover:text-teal-300 dark:hover:text-teal-300 text-black dark:text-white mb-3">
              Cloud
            </h1>
            <div className="flex flex-wrap  gap-4 ">
              <button className="text-xs px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-teal-700 dark:hover:bg-teal-400 hover:bg-teal-400 ">
                Azure Cloud
              </button>
              <button className="text-xs px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-teal-700 dark:hover:bg-teal-400 hover:bg-teal-400 ">
                Google Cloud
              </button>
              <button className="text-xs px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-teal-700 dark:hover:bg-teal-400 hover:bg-teal-400 ">
                Digital Ocean
              </button>
              <button className="text-xs px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-teal-700 dark:hover:bg-teal-400 hover:bg-teal-400 ">
                Amazon
              </button>
            </div>

            {/* <h1 className="text-lg mt-4 font-bold justify-center md:justify-start flex hover:text-teal-300 dark:hover:text-teal-300 text-black dark:text-white mb-3">
              Style
            </h1>
            <div className="flex flex-wrap  gap-4 ">
              <button className="text-xs px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-teal-700 dark:hover:bg-teal-400 hover:bg-teal-400 ">
                TailWind
              </button>
              <button className="text-xs px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-teal-700 dark:hover:bg-teal-400 hover:bg-teal-400 ">
                Bootstrap{" "}
              </button>
              <button className="text-xs px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-teal-700 dark:hover:bg-teal-400 hover:bg-teal-400 ">
                Ant Design{" "}
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IsiAbout;
