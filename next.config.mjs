import path from 'path'
import { fileURLToPath } from 'url'

import pkg from './package.json' assert { type: 'json' }

const isProd = process.env.NODE_ENV === 'production'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // 启用 React 严格模式
  env: {
    APP_VERSION: pkg.version, // 应用版本
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  webpack: (config) => {
    // 自定义 Webpack 配置
    config.resolve.alias['@'] = path.resolve(__dirname, 'src') // 设置路径别名
    return config
  },
}

export default nextConfig
