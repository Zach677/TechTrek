import React from 'react';

const Header: React.FC = () => (
  <header className="bg-blue-600 p-4 text-white shadow-md">
    <div className="container mx-auto flex items-center justify-between">
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
);

export default Header;
