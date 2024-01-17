import Navbar from "../components/Navbar";
import Head from "next/head";
import Animation from "../components/Animation";
import { SiGithub } from "react-icons/si";
import Link from "next/link";

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/head.ico" />
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text_wrapper">
            <h1 className="font-semibold text-5xl mt-0 mb-3">About</h1>
            <p className="description">
              단순히 게임을 즐기던 학생이었지만, 그 과정에서 프로그래밍에 관심을 가지게 되었습니다.
              <br />
              점차 여러 프로그래밍 언어를 스스로 학습하게 되었고, 이를 통해 무한한 가능성을 가진 이 분야에 더 깊게 빠져들게 되었습니다.
              <br />
              처음은 작은 일을 하게 될지 모르지만 제가 담당하게 되는 작은 일이 큰 역할을 할 수 있도록 즐겁게 일하는 중요한 직원이 되겠습니다.
              <br />
              제가 담당한 일을 잘 하는 성실한 일꾼이 되고싶습니다.
              <br />
            </p>

            <Link
              class="mt-8 group relative inline-flex items-center overflow-hidden border-current
              rounded border border-gray-600 bg-gray-600 px-8 py-3 text-white hover:bg-transparent hover:text-gray-600 focus:outline-none focus:ring active:text-gray-500"
              href="/project"
            >
              <span class="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>

              <span class="text-sm font-medium transition-all group-hover:mr-4">Project</span>
            </Link>

            <Link
              class="mt-8 ml-3 group relative inline-flex items-center
                overflow-hidden border-current rounded border border-gray-600
                bg-gray-600 px-8 py-3 text-white hover:bg-transparent
                hover:text-gray-600 focus:outline-none focus:ring
                active:text-gray-500"
              href="https://github.com/JBUkim"
            >
              <span class="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
                <SiGithub></SiGithub>
              </span>
              <span class="text-sm font-medium transition-all group-hover:mr-4">GitHub</span>
            </Link>
          </div>

          <div className="image-wrapper">
            <Animation />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
