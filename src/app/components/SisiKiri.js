"use client";
import React from "react";
import gambarkanan from "../../../public/IMG/363815310_9666831353387427_1604163039826260738_n.jpg";
import Image from "next/image";

function SisiKiri() {
  return (
    <div className="hidden lg:block lg:p-4 lg:from-zinc-900 lg:to-transparent lg:border-zinc-800 border-0 lg:border border-b-0 rounded-lg lg:bg-gradient-to-br bg-zinc-900/50">
      <div className="relative flex justify-center mx-4 my-2">
        <Image
          src={gambarkanan}
          alt="Mohamad Hasyim Ridwan - Full Stack Developer"
          width={300}
          height={400}
          className="rounded-3xl"
          priority={true}
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            width: "auto",
            height: "auto",
            maxWidth: "100%",
          }}
        />
      </div>
      <div className="my-4 text-center">
        <h1 className="text-2xl font-bold tracking-wider text-center text-white hover:text-teal-300">
          <span className="text-teal-300 hover:text-white">Hi!</span> I'm
          Mohamad Hasyim Ridwan
        </h1>
        <p className="font-light text-teal-300 animate-typing f ">
          Full Stack Developer
        </p>
      </div>
      <div className="my-2 space-y-2 text-sm text-center lg:my-10 font-poppins text-zinc-400">
        <p className="inline-block border-b border-zinc-400">
          <a
            href="mailto:mh.ridwan7b@gmail.com"
            className="hover:text-teal-300 transition-colors"
          >
            mh.ridwan7b@gmail.com
          </a>
        </p>
        <p className="inline-block border-b border-zinc-400">
          <a
            href="tel:+6281221871961"
            className="hover:text-teal-300 transition-colors"
          >
            +62 (812) 21871961
          </a>
        </p>
      </div>
      <div className="mt-8 lg:mt-20 ">
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://www.instagram.com/mhridwan14/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
            aria-label="Follow on Instagram"
          >
            <svg
              className="w-5 h-5 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 28.87 28.87"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="-1.84"
                  x2="32.16"
                  y1="30.47"
                  y2="-3.03"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fed576"></stop>
                  <stop offset=".26" stopColor="#f47133"></stop>
                  <stop offset=".61" stopColor="#bc3081"></stop>
                  <stop offset="1" stopColor="#4c63d2"></stop>
                </linearGradient>
              </defs>
              <g data-name="Layer 2">
                <g data-name="Layer 1">
                  <rect
                    width="28.87"
                    height="28.87"
                    fill="url(#a)"
                    rx="6.48"
                    ry="6.48"
                  ></rect>
                  <g data-name="<Group>">
                    <path
                      fill="#fff"
                      d="M10 5h9c.2.1.5.1.7.2a4.78 4.78 0 0 1 3.8 3.3 8 8 0 0 1 .3 1.5v8.8a6.94 6.94 0 0 1-1.2 3.1 5.51 5.51 0 0 1-4.5 1.9h-7.5a5.49 5.49 0 0 1-3.7-1.2A5.51 5.51 0 0 1 5 18.14v-7a7.57 7.57 0 0 1 .1-1.5 4.9 4.9 0 0 1 3.8-4.3zm-3.1 9.5v3.9a3.42 3.42 0 0 0 3.7 3.7q3.9.15 7.8 0c2.3 0 3.6-1.4 3.7-3.7q.15-3.9 0-7.8a3.52 3.52 0 0 0-3.7-3.7q-3.9-.15-7.8 0a3.42 3.42 0 0 0-3.7 3.7z"
                      data-name="<Compound Path>"
                    ></path>
                    <path
                      fill="#fff"
                      d="M9.64 14.54a4.91 4.91 0 0 1 4.9-4.9 5 5 0 0 1 4.9 4.9 4.91 4.91 0 0 1-4.9 4.9 5 5 0 0 1-4.9-4.9zm4.9-3.1a3.05 3.05 0 1 0 3 3 3 3 0 0 0-3-3z"
                      data-name="<Compound Path>"
                    ></path>
                    <path
                      fill="#fff"
                      d="M18.34 9.44a1.16 1.16 0 0 1 1.2-1.2 1.29 1.29 0 0 1 1.2 1.2 1.2 1.2 0 0 1-2.4 0z"
                      data-name="<Path>"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </a>
          <a
            href="https://github.com/mhrdwan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
            aria-label="View GitHub Profile"
          >
            <svg
              className="w-8 h-8 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="30" fill="#4e6e91"></circle>
              <path
                fill="#6693c1"
                d="M50,83c-18.196,0-33-14.804-33-33s14.804-33,33-33s33,14.804,33,33S68.196,83,50,83z M50,22 c-15.439,0-28,12.561-28,28s12.561,28,28,28s28-12.561,28-28S65.439,22,50,22z"
              ></path>
              <path
                fill="#eeecd9"
                d="M69.457,49.039c0-3.321-1.305-6.334-3.419-8.573c0.396-2.203,0.351-5.301-0.538-7.966 c-4.475,0-8.114,3.447-8.702,4H43.994c-0.589-0.552-4.019-4-8.494-4c-0.8,2.401-1.087,5.233-0.846,7.295 c-2.518,2.286-4.108,5.575-4.108,9.245c0,6.908,5.599,12.459,12.507,12.459H45.5c-2.003,0.917-3.635,2.756-4,5 c-2,0-4.864-0.182-6.181-2.158c-2.46-3.69-3.59-3.69-4.819-3.69c-1.23,0-1.33,1.23-0.1,2.46s1.23,1.23,2.46,3.69 C33.872,68.828,36.5,70.5,41.5,70.5v6.6c0,0,6.346,1.4,8.5,1.4s8.5-1.4,8.5-1.4l0-9.445c0-2.718-1.681-5.092-4-6.155h2.449 C63.858,61.5,69.457,55.947,69.457,49.039z"
              ></path>
              <path
                fill="#1f212b"
                d="M50,85c-19.299,0-35-15.701-35-35s15.701-35,35-35s35,15.701,35,35S69.299,85,50,85z M50,17 c-18.196,0-33,14.804-33,33s14.804,33,33,33s33-14.804,33-33S68.196,17,50,17z"
              ></path>
              <path
                fill="#1f212b"
                d="M50,79c-15.99,0-29-13.009-29-29s13.01-29,29-29s29,13.009,29,29c0,2.925-0.435,5.812-1.291,8.582 c-0.082,0.263-0.364,0.411-0.625,0.33c-0.264-0.082-0.412-0.361-0.33-0.625C77.581,55.612,78,52.825,78,50 c0-15.439-12.561-28-28-28S22,34.561,22,50s12.561,28,28,28c5.856,0,11.464-1.788,16.217-5.171c0.225-0.16,0.536-0.107,0.697,0.117 c0.16,0.225,0.107,0.537-0.117,0.697C61.873,77.147,56.065,79,50,79z"
              ></path>
              <path
                fill="#1f212b"
                d="M68.631,72.068c-0.14,0-0.279-0.059-0.378-0.173c-0.181-0.209-0.158-0.525,0.051-0.706 c0.739-0.638,1.452-1.324,2.122-2.037c0.188-0.202,0.505-0.21,0.706-0.023c0.201,0.189,0.212,0.505,0.023,0.707 c-0.693,0.739-1.433,1.449-2.197,2.11C68.863,72.028,68.747,72.068,68.631,72.068z"
              ></path>
              <path
                fill="#1f212b"
                d="M72.494,68.002c-0.107,0-0.216-0.035-0.308-0.105c-0.218-0.17-0.257-0.484-0.087-0.702 c1.649-2.118,2.982-4.452,3.963-6.938c0.101-0.258,0.392-0.382,0.648-0.282c0.257,0.102,0.383,0.392,0.281,0.648 c-1.015,2.575-2.396,4.993-4.104,7.186C72.79,67.936,72.643,68.002,72.494,68.002z"
              ></path>
              <path
                fill="#1f212b"
                d="M41.457,58.914c-0.028,0-0.057-0.002-0.085-0.007c-3.442-0.585-6.372-2.975-7.646-6.238 c-0.101-0.257,0.026-0.547,0.284-0.647c0.256-0.101,0.547,0.027,0.647,0.284c1.146,2.938,3.783,5.089,6.882,5.615 c0.271,0.046,0.455,0.305,0.409,0.577C41.907,58.741,41.696,58.914,41.457,58.914z"
              ></path>
            </svg>
          </a>
          <a
            href="mailto:mh.ridwan7b@gmail.com"
            className="hover:scale-110 transition-transform duration-200"
            aria-label="Send Email"
          >
            <svg
              className="w-5 h-5 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 48 48"
            >
              {" "}
              <path
                fill="#4caf50"
                d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
              ></path>
              <path
                fill="#1e88e5"
                d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
              ></path>
              <polygon
                fill="#e53935"
                points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
              ></polygon>
              <path
                fill="#c62828"
                d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
              ></path>
              <path
                fill="#fbc02d"
                d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
              ></path>{" "}
            </svg>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100006806847774"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
            aria-label="Follow on Facebook"
          >
            <svg
              className="w-5 h-5 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="#1877f2"
                d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200C681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"
              ></path>
              <path
                fill="#fff"
                d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="mt-8 space-y-2 text-center flex flex-col">
        <a
          href="https://wa.me/6281221871961"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-2 justify-center flex font-semibold transition-all duration-75 bg-teal-400 rounded-full text-white hover:bg-teal-800 hover:text-white"
        >
          Hire Me!
        </a>
        <a
          href="/Mohamad_Hasyim_Ridwan_FullStack_Developer_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:cursor-pointer px-8 py-2 font-semibold text-white transition-all duration-75 rounded-full bg-zinc-700 hover:bg-teal-800 hover:text-white"
        >
          Download CV
        </a>
      </div>
    </div>
  );
}

export default SisiKiri;
