"use client"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/ui/button"
import { Shield, Zap, Heart, Star, Check } from "lucide-react"
import { useState } from "react"
import "./vip-styles.css"

const vipTiers = [
  {
    name: "SVIP",
    price: 527000000000000,
    features: ["收购腾讯为所欲为", "永不封号", "随意封别人号", "专属SVIP徽章"],
    color: "from-yellow-400 via-red-500 to-pink-500",
    neonColor: "rgba(255, 0, 128, 0.5)",
    coolnessLevel: 5,
  },
  {
    name: "钻石VIP",
    originalPrice: 360,
    discountedPrice: 180,
    features: ["极高优先级技术支持", "大部分高级功能无限制访问", "专属钻石徽章", "每月8小时定制开发"],
    color: "from-blue-400 to-blue-600",
    neonColor: "rgba(0, 128, 255, 0.5)",
    coolnessLevel: 4,
  },
  {
    name: "铂金VIP",
    originalPrice: 320,
    discountedPrice: 160,
    features: ["高优先级技术支持", "多数高级功能访问", "专属铂金徽章", "每月6小时定制开发"],
    color: "from-gray-300 to-gray-500",
    neonColor: "rgba(192, 192, 192, 0.5)",
    coolnessLevel: 3,
  },
  {
    name: "黄金VIP",
    originalPrice: 280,
    discountedPrice: 140,
    features: ["优先技术支持", "部分高级功能访问", "专属黄金徽章", "每月4小时定制开发"],
    color: "from-yellow-300 to-yellow-500",
    neonColor: "rgba(255, 215, 0, 0.5)",
    coolnessLevel: 2,
  },
  {
    name: "白银VIP",
    originalPrice: 240,
    discountedPrice: 120,
    features: ["快速技术支持", "少量高级功能访问", "专属白银徽章", "每月2小时定制开发"],
    color: "from-gray-300 to-gray-400",
    neonColor: "rgba(192, 192, 192, 0.5)",
    coolnessLevel: 1,
  },
  {
    name: "青铜VIP",
    originalPrice: 200,
    discountedPrice: 100,
    features: ["标准技术支持", "基础功能访问", "专属青铜徽章", "每月1小时定制开发"],
    color: "from-yellow-700 to-yellow-800",
    neonColor: "rgba(205, 127, 50, 0.5)",
    coolnessLevel: 0,
  },
  {
    name: "HTTP协议VIP",
    originalPrice: 300,
    discountedPrice: 150,
    features: ["HTTP协议专属优化", "高级HTTP接口访问", "HTTP性能调优支持", "每月3小时HTTP相关定制开发"],
    color: "from-green-400 to-green-600",
    neonColor: "rgba(0, 255, 0, 0.5)",
    coolnessLevel: 3,
  },
  {
    name: "WebSocket协议VIP",
    originalPrice: 320,
    discountedPrice: 160,
    features: [
      "WebSocket协议专属优化",
      "高级WebSocket接口访问",
      "WebSocket性能调优支持",
      "每月3小时WebSocket相关定制开发",
    ],
    color: "from-purple-400 to-purple-600",
    neonColor: "rgba(128, 0, 255, 0.5)",
    coolnessLevel: 4,
  },
  {
    name: "反向HTTP协议VIP",
    originalPrice: 340,
    discountedPrice: 170,
    features: ["反向HTTP协议专属优化", "高级反向HTTP接口访问", "反向HTTP性能调优支持", "每月3小时反向HTTP相关定制开发"],
    color: "from-red-400 to-red-600",
    neonColor: "rgba(255, 0, 0, 0.5)",
    coolnessLevel: 4,
  },
  {
    name: "GUI会员",
    originalPrice: 360,
    discountedPrice: 180,
    features: ["NoneBot GUI 完整访问权限", "图形化界面配置", "可视化插件管理", "GUI专属技术支持"],
    color: "from-teal-400 to-teal-600",
    neonColor: "rgba(20, 184, 166, 0.5)",
    coolnessLevel: 4,
  },
  {
    name: "WebUI会员",
    originalPrice: 380,
    discountedPrice: 190,
    features: ["NoneBot WebUI 完整访问权限", "在线可视化管理", "远程控制功能", "WebUI专属技术支持"],
    color: "from-cyan-400 to-cyan-600",
    neonColor: "rgba(6, 182, 212, 0.5)",
    coolnessLevel: 4,
  },
  {
    name: "OT会员",
    originalPrice: 299,
    discountedPrice: 149,
    features: ["一键自我禁言功能", "自定义禁言时长", "首次购买一年送一年", "第二次购买送飞机票一张"],
    color: "from-slate-400 to-slate-600",
    neonColor: "rgba(100, 116, 139, 0.5)",
    coolnessLevel: 3,
    specialOffer: "买一年送一年，第二次购买送飞机票",
  },
]

const durations = [
  { months: 3, discount: 0 },
  { months: 6, discount: 0.05 },
  { months: 9, discount: 0.1 },
  { months: 12, discount: 0.15 },
]

export default function VIPPage() {
  const [selectedDuration, setSelectedDuration] = useState(durations[0])

  const calculatePrice = (basePrice: number, months: number, discount: number) => {
    return Math.round(basePrice * months * (1 - discount))
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">NoneBot 大会员</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              NoneBot 可能会被封号，但永远不会删库跑路。加入我们的大会员计划，共同打造更强大的 NoneBot 生态！
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {durations.map((duration) => (
                <Button
                  key={duration.months}
                  onClick={() => setSelectedDuration(duration)}
                  variant={selectedDuration.months === duration.months ? "default" : "outline"}
                  className="bg-white text-purple-600 hover:bg-purple-50 h-10 px-4"
                >
                  {duration.months}个月
                </Button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">会员等级与特权</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
              {vipTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`
                    relative overflow-hidden rounded-lg p-6 shadow-lg
                    bg-gradient-to-br ${tier.color}
                    transform hover:scale-105 transition-all duration-300
                    neon-border-${tier.coolnessLevel}
                  `}
                  style={
                    {
                      "--neon-color": tier.neonColor,
                    } as React.CSSProperties
                  }
                >
                  <div className="flex flex-col h-full">
                    <h3 className="text-2xl font-bold mb-4 text-white">{tier.name}</h3>
                    <div className="mb-4">
                      <p className="text-3xl font-bold text-white">
                        {tier.name === "SVIP" ? (
                          <>$527万亿</>
                        ) : (
                          <>
                            <span className="line-through text-gray-300 mr-2">¥{tier.originalPrice}</span>¥
                            {tier.discountedPrice}
                          </>
                        )}
                      </p>
                      <p className="text-sm mt-2 text-white">
                        {tier.name === "SVIP" ? "周四V我50封你做企鹅老板" : "加客服微信领取专属优惠"}
                      </p>
                      {tier.specialOffer && (
                        <p className="text-sm mt-2 text-yellow-300 font-semibold">{tier.specialOffer}</p>
                      )}
                    </div>
                    <ul className="space-y-2 text-white mb-6 flex-grow">
                      {tier.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center">
                          <Check className="w-5 h-5 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-white text-purple-600 hover:bg-purple-100 h-12">
                      选择{tier.name}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-800 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">我们的承诺</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
              无论遇到什么困难，NoneBot 团队都将坚持开源精神，持续为社区提供支持和更新。
              我们可能会被封号，但绝不会放弃我们的使命和对用户的承诺。
            </p>
            <Button size="lg" className="bg-purple-600 text-white hover:bg-purple-700 h-12 px-8">
              了解更多
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

