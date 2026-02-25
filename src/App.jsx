import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='text-gray-700 border-b border-gray-200'>
        <div className='container flex mx-auto p-5 flex-col md:flex-row items-center'>
          <a href="#" className='font-medim text-gray-900 mb-4 md:mb-0'>
            <span className='text-xl ml-3'>NisshoCode</span>
          </a>
          <nav className='md:ml-auto text-base'>
            <a href="#home" className='mr-5 hover:text-blue-400 duration-300'>Home</a>
            <a href="#about" className='mr-5 hover:text-blue-400 duration-300'>About</a>
            <a href="skills" className='mr-5 hover:text-blue-400 duration-300'>skills</a>
            <a href="#blog" className='mr-5 hover:text-blue-400 duration-300'>Blog</a>
          </nav>
        </div>
      </header>
      <section className='text-gray-700' id="home">
        <div className='flex container mx-auto p-20 px-5 flex-col md:flex-row items-center'>
          <div className='md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left'>
            <h1 className='text-3xl sm:text-6xl text-gray-900 font-medium mb-4'>NisshoCode<br />
              My Portfolio WebSite</h1>
            <p className='mb-8 leading-relaxed'>現在、Webエンジニアとしてデビューしたてのほやほやです。得意な言語はHTML, CSS, JavaScript, TypeScript,
            php, SQL, ReactなどWeb全般とPythonです。自身が作ったものを公開しておりますので、ぜひ見ていってください。</p>
            <button className='text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300'>Contact Me</button>
          </div>
          <div className='md:w-1/2 1g:max-w-lg w-5/6'>
            <img src="./img/myPicture.png" alt="" />
          </div>
        </div>
      </section>
      <section className='text-gray-700 border-t border-gray-200'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='text-center mb-20'>
            <h1 className='text-2xl sm:text-3xl font-medium mb-2 text-gray-900'>About Me</h1>
            <p className='pb-10'>これまで、マーケティング業界に数年財務分析を行っていました。現在はIT業界でシステム構築に従事しながら副業としてWeb
            サイトやWebAppを個人として受注しています。また投資やコンサルティングも積極的に行っており、ご相談されたい方はコンタクトをお待ちしています。
            </p>
            <p>以下に個人としての成果物を公開しています。主にSNSなどのChatアプリの構築をReactの3SやTSで実施しています。また、Pythonを使ってAIによる
            株価の予測サイトを構築しました。また数件の事業所のWebサイトの構築など多岐にわたります。</p>
          </div>
          {/* カードのdivタグ */}
          <div className='flex flex-wrap'>
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-100 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 3H11V11H3V3Z" fill="currentColor" />
                      <path d="M3 13H11V21H3V13Z" fill="currentColor" />
                      <path d="M13 3H21V11H13V3Z" fill="currentColor" />
                      <path d="M13 13H21V21H13V13Z" fill="currentColor" />
                    </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium'>SNS Chat</h2>
                </div>
                <p>ReactとJavaScriptで投稿機能付きのChatアプリ。使用はReact, JavaScript, html, firebase, AWS。ログイン・ログアウト認証
                  昨日、メッセージ投稿機能、検索機能、お気に入り登録機能を実施しています。</p>
                  <a href="#" className='mt-3 text-green-500 items-center'>もっとみる</a>
              </div>
            </div>
            
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-100 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 3H11V11H3V3Z" fill="currentColor" />
                      <path d="M3 13H11V21H3V13Z" fill="currentColor" />
                      <path d="M13 3H21V11H13V3Z" fill="currentColor" />
                      <path d="M13 13H21V21H13V13Z" fill="currentColor" />
                    </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium'>AI Finance</h2>
                </div>
                <p>AIを使ったビットコインのデータの取得、分析、一か月後の予想アプリです。AIはsckit learnの会期で実施しています。主にPythonでコーディングを
                  行い、フレームワークはStreamlitを使用しています。株や暗号通貨の売買にぜひお役立てください。</p>
                <a href="#" className='mt-3 text-green-500 items-center'>もっとみる</a>
              </div>
            </div>

            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-100 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 3H11V11H3V3Z" fill="currentColor" />
                      <path d="M3 13H11V21H3V13Z" fill="currentColor" />
                      <path d="M13 3H21V11H13V3Z" fill="currentColor" />
                      <path d="M13 13H21V21H13V13Z" fill="currentColor" />
                    </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium'>Web Site Dev</h2>
                </div>
                <p>中小企業のWebサイト構築を数件受注しています。商社や税理士事務所、業界団体など多岐にわたります。それぞれの案件は、綿密にヒアリングを行い、クライアント
                  が納得するまで修正を繰り返します。自社サーバーを使用することで安価に抑えています。</p>
                <a href="#" className='mt-3 text-green-500 items-center'>もっとみる</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className='text-gray-700 border-t border-gray-200'>
        <div className='container px-5 py-24 mx-auto flex flex-wrap'>
          {/* left side */}
          <div className='mb-10 lg:mb-0 w-full lg:w-1/2 flex justify-center'>
            <img src="./img/pc.jpg" alt="" className='rounded'/>
          </div>
          {/* right side */}
          <div className='1g:p1-12 lg:py-6 w-full lg:w-1/2'>
            <h1 className='text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left'>MySkill</h1>
            <div>
              <h2>HTML/CSS</h2>
              <div className='shadow bg-green-100 mt-2 w-full'>
                <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{width:"85%"}}>85%</div>
              </div>
              <h2>JavaScript</h2>
              <div className='shadow bg-green-100 mt-2 w-full'>
                <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{ width: "75%" }}>75%</div>
              </div>
              <h2>React</h2>
              <div className='shadow bg-green-100 mt-2 w-full'>
                <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{ width: "60%" }}>60%</div>
              </div>
              <h2>Python</h2>
              <div className='shadow bg-green-100 mt-2 w-full'>
                <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{ width: "80%" }}>80%</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App
