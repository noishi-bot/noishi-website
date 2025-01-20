import { Zap, Rocket, Lock, RefreshCw } from 'lucide-react'

const services = [
  {
    icon: <Zap className="w-12 h-12 text-purple-600" />,
    titleCn: "一键安装",
    titleEn: "ONE CLICK INSTALLATION"
  },
  {
    icon: <Rocket className="w-12 h-12 text-purple-600" />,
    titleCn: "极速发货",
    titleEn: "FAST DELIVERY"
  },
  {
    icon: <Lock className="w-12 h-12 text-purple-600" />,
    titleCn: "永久激活",
    titleEn: "PERMANENT ACTIVATION"
  },
  {
    icon: <RefreshCw className="w-12 h-12 text-purple-600" />,
    titleCn: "免费更新",
    titleEn: "FREE UPDATES"
  }
]

export function Services() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-purple-800">完美服务 一触即发</h2>
          <p className="text-xl text-purple-600">一键安装，极速发货，永久激活，免费更新</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-purple-800">{service.titleCn}</h3>
              <p className="text-purple-600 text-sm uppercase tracking-wide">{service.titleEn}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

