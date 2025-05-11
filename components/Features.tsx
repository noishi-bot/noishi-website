import { Zap, Puzzle, Globe, Cpu, Users, Github } from 'lucide-react'

const neonBoxClass = `
  relative overflow-hidden rounded-lg
  before:content-[''] before:absolute before:inset-0
  before:bg-gradient-to-r before:from-purple-600 before:via-pink-500 before:to-blue-600
  before:animate-neon-flow before:opacity-75
  after:content-[''] after:absolute after:inset-0.5
  after:bg-gray-900 after:rounded-lg
`;

const neonContentClass = "relative z-10";

const features = [
  {
    icon: <Zap className="w-12 h-12 text-purple-400" />,
    title: '跨语言架构',
    description: 'Python与TypeScript,跨语言架构,兼容114514%以上的包'
  },
  {
    icon: <Puzzle className="w-12 h-12 text-pink-400" />,
    title: '插件系统',
    description: '可逆的插件系统，轻松扩展和维护机器人功能，支持插件热重载'
  },
  {
    icon: <Globe className="w-12 h-12 text-blue-400" />,
    title: '多平台支持',
    description: '一次编写，多平台部署，支持 QQ、微信、Telegram 等多种平台。'
  },
  {
    icon: <Cpu className="w-12 h-12 text-green-400" />,
    title: '事件驱动',
    description: '基于事件驱动模型，高效处理各种机器人事件。'
  },
  {
    icon: <Users className="w-12 h-12 text-yellow-400" />,
    title: '活跃社区',
    description: '受益于活跃的社区和全面的文档支持。'
  },
  {
    icon: <Github className="w-12 h-12 text-indigo-400" />,
    title: '开源项目',
    description: '代码托管在 GitHub，遵循MIT许可证可自由使用和修改。'
  }
]

export function Features() {
  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white animate-pulse">核心特性</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
          {features.map((feature, index) => (
            <div key={index} className={`${neonBoxClass} shadow-xl transition duration-300 transform hover:-translate-y-1 hover:shadow-2xl animate-neon-breathe`} style={{ '--animation-delay': `${index * 0.2}s` } as React.CSSProperties}>
              <div className={`${neonContentClass} p-6`}>
                <div className="flex justify-center mb-4 animate-neon-pulse">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-center text-white">{feature.title}</h3>
                <p className="text-gray-400 text-center">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

