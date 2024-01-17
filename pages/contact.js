import Navbar from "../components/Navbar";
import Head from "next/head";

function Contact() {
  return (
    <>
      <Head>
        <link rel="icon" href="/head.ico" />
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Contact</h1>
            <div class="space-y-4">
              {/* <details class="group border-l-4 border-gray-500 bg-gray-50 p-6" open>
                <summary class="flex cursor-pointer items-center justify-between">
                  <h2 class="text-lg font-medium text-gray-900">개발자에게 연락이 하고싶습니다. 어떻게 해야하나요?</h2>

                  <span class="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p class="mt-4 leading-relaxed text-gray-700">연락을 하고싶으시다면 아래에 기재되어있는 링크들을 통해 DM이나 Email을 보내주세요.</p>
              </details> */}

              <details class="group border-l-4 border-gray-500 bg-gray-50 p-6">
                <summary class="flex cursor-pointer items-center justify-between">
                  <h2 class="text-lg font-medium text-gray-900">연락처</h2>

                  <span class="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <div class="mt-4 leading-relaxed text-gray-700">
                  <br />
                  <table class="w-full h-full divide-y-2 divide-gray-200 text-sm break-normal">
                    <tbody class="divide-y divide-gray-200">
                      <tr>
                        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Email</td>
                        <td class=" px-4 py-2 text-gray-700">hyuk6589@gmail.com</td>
                      </tr>

                      <tr>
                        <td class=" px-4 py-2 font-medium text-gray-900">전화번호</td>
                        <td class=" px-4 py-2 text-gray-700">010-2940-6317</td>
                      </tr>

                      {/* <tr>
                        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Facebook</td>
                        <td class=" px-4 py-2 text-gray-700">
                          <a href="https://www.facebook.com/profile.php?id=100014684207095">
                            https://www.facebook.com/profile.php?id=100014684207095
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Instagram</td>
                        <td class=" px-4 py-2 text-gray-700">
                          <a href="https://www.instagram.com/kim.d.bung/">https://www.instagram.com/kim.d.bung/</a>
                        </td>
                      </tr> */}

                      <tr>
                        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">KaKaoTalk ID</td>
                        <td class=" px-4 py-2 text-gray-700">
                          <a>watermelon6589</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
