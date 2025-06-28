"use client";

import { useRouter } from "next/navigation";
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function DownloadPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-blue-600 py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative w-full aspect-[4/3] max-w-lg mx-auto">
                <Image
                  src="/koishi_logo.png"
                  alt="Koishi Logo,图片来源:Koishi,基于 CC BY-SA 4.0 许可"
                  width={500}
                  height={375}
                  className="rounded-lg shadow-2xl bg-white p-8"
                />
                <span className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg text-xs">
                  此图片素材来源
                  <a href="https://koishi.chat/logo.png" className="underline mx-1" target="_blank" rel="noopener noreferrer">Koishi</a>
                  ,遵循
                  <a href="https://creativecommons.org/licenses/by-sa/4.0/" className="underline mx-1" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
                  协议。详见
                  <a href="/koishi_logo.png-LICENSE" className="underline mx-1" target="_blank" rel="noopener noreferrer">许可说明</a>
                  。
                </span>
              </div>
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Noishi 官方正版激活
                </h1>
                <p className="text-xl mb-6">安全·稳定·高效·可靠</p>
                <div className="flex flex-wrap gap-4 mb-8">
                  {['Win7', 'Win10', 'Win11'].map((os) => (
                    <span
                      key={os}
                      className="px-4 py-2 bg-orange-500 rounded-full text-sm font-medium"
                    >
                      支持{os}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-xl shadow-xl p-8">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-purple-600">NS</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Noishi</h2>
                    <p className="text-gray-500">官方正版授权</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-red-500">¥48.3</span>
                    <span className="text-gray-400 line-through">原价: ¥298</span>
                  </div>
                  <span className="text-sm text-red-500">限时活动价</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-gray-600">
                  软件安装包已准备就绪，付款后即可立即安装，感谢您的支持！
                </p>
                <p className="text-gray-600">
                  安装前请确保先购买会员以激活软件(激活后可在Windows系统运行)
                </p>
                <p className="text-gray-600">
                  购买后即可永久使用，不限电脑，不限安装次数，并且可以永久免费更新
                </p>
                <p className="text-gray-600">
                  如遇我们提供免费技术支持，协助您解决安装时可能遇到的各种问题
                </p>
              </div>

              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-lg h-12"
                  onClick={() => {
                        window.selectedTier = { 
                          name: "Noishi 官方正版激活码", 
                          price: 48.3,
                          return_text: "返回下载页面",
                          return_path: "/download"
                        };
                        router.push(`/pay`);
                      }}
                >
                  立即购买
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 text-lg h-12"
                >
                  继续安装
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

