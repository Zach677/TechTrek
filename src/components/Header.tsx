import React from 'react'
import { HomeIcon } from '@heroicons/react/solid'

const Header: React.FC = () => (
  <header className="bg-blue-600 text-white p-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-3xl font-bold">我的个人主页</h1>
      <nav>
        <a href="/" className="mx-2 text-lg hover:text-gray-200">
          首页
        </a>
        <a href="/about" className="mx-2 text-lg hover:text-gray-200">
          关于我
        </a>
      </nav>
    </div>
  </header>
)

export default Header
