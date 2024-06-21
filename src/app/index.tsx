import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home: React.FC = () => (
  <div className="flex flex-col min-h-screen bg-gray-100">
    <Header />
    <main className="flex-grow container mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-4xl mb-4 font-semibold text-gray-800">
          欢迎来到我的个人主页
        </h2>
        <p className="text-gray-600">
          这是一个示例主页，使用 Next.js 和 Tailwind CSS 构建。
        </p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200">
          了解更多
        </button>
      </div>
    </main>
    <Footer />
  </div>
)

export default Home
