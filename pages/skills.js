import Navbar from "../components/Navbar";
import Head from "next/head";
import { SiHtml5, SiCss3, SiJavascript, SiPython, SiNextdotjs, SiTailwindcss } from "react-icons/si";

function About() {
  return (
    <>
      <Head>
        <title>Skills</title>
        <link rel="icon" href="/head.ico" />
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <section>
            <div class="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
              <div class="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
                <div class="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
                  <h2 class="text-3xl font-bold sm:text-4xl">Skills</h2>

                  <p class="mt-4 text-gray-600">
                    프로젝트 내에서 주로 백엔드 프로그래밍을 맡고있으며 현재 프론트엔드 공부를 병행중입니다.
                    <br />
                    저의 목표는 풀스택 개발자가 되는것입니다.
                  </p>
                </div>

                <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  <a
                    class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                    href="#"
                  >
                    <span class="inline-block rounded-lg bg-gray-50 p-3">
                      <SiHtml5></SiHtml5>
                    </span>
                    <h2 class="mt-2 font-bold">Html5</h2>
                    <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">월드 와이드 웹 의 핵심 마크업 언어.</p>
                  </a>

                  <a
                    class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                    href="#"
                  >
                    <span class="inline-block rounded-lg bg-gray-50 p-3">
                      <SiCss3></SiCss3>
                    </span>

                    <h2 class="mt-2 font-bold">Css3</h2>

                    <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">마크업 언어가 실제 표시되는 방법을 기술하는 스타일 언어.</p>
                  </a>

                  <a
                    class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                    href="#"
                  >
                    <span class="inline-block rounded-lg bg-gray-50 p-3">
                      <SiJavascript></SiJavascript>
                    </span>

                    <h2 class="mt-2 font-bold">Javascript</h2>

                    <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">객체 기반의 스크립트 프로그래밍 언어.</p>
                  </a>

                  <a
                    class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                    href="#"
                  >
                    <span class="inline-block rounded-lg bg-gray-50 p-3">
                      <SiPython></SiPython>
                    </span>

                    <h2 class="mt-2 font-bold">Python</h2>

                    <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">플랫폼에 독립적이며 객체지향적 언어.</p>
                  </a>

                  <a
                    class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                    href="#"
                  >
                    <span class="inline-block rounded-lg bg-gray-50 p-3">
                      <SiNextdotjs></SiNextdotjs>
                    </span>

                    <h2 class="mt-2 font-bold">Next.js</h2>

                    <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">리액트 기반 오픈 소스 웹 개발 프레임워크.</p>
                  </a>

                  <a
                    class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                    href="#"
                  >
                    <span class="inline-block rounded-lg bg-gray-50 p-3">
                      <SiTailwindcss></SiTailwindcss>
                    </span>

                    <h2 class="mt-2 font-bold">Tailwindcss</h2>

                    <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">Tailwind CSS는 오픈 소스 CSS 프레임워크.</p>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default About;
