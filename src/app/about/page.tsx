import React from 'react';
import AboutLayout from '../../components/layout/AboutLayout';

const About: React.FC = () => (
  <div className="flex flex-col min-h-screen bg-gray-100">
    <AboutLayout>
    <main className="flex-grow container mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-4xl mb-4 font-semibold text-gray-800">关于我</h2>
        <p className="text-gray-600">
          这是关于页面，介绍了我的个人信息和背景。
        </p>
      </div>
    </main>
    </AboutLayout>
  </div>
);

export default About;