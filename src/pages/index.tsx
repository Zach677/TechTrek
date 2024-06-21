import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home: React.FC = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow container mx-auto p-4">
      <h2 className="text-4xl mb-4">欢迎来到我的个人主页</h2>
      <p>这是一个示例主页。</p>
    </main>
    <Footer />
  </div>
)

export default Home
