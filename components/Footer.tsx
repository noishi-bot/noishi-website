import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Noishi</h3>
            <p className="text-gray-400 mb-4">
              强大而灵活的跨平台&跨语言聊天机器人框架，为您打造出色的机器人。
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li><Link href="https://koishi.chat/zh-CN/" className="text-gray-400 hover:text-white transition-colors">文档</Link></li>
              <li><Link href="https://github.com/koishijs/koishi" className="text-gray-400 hover:text-white transition-colors">GitHub</Link></li>
              <li><Link href="https://koishi.chat/zh-CN/market/" className="text-gray-400 hover:text-white transition-colors">插件商店</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">社区</h4>
            <ul className="space-y-2">
              <li><Link href="https://github.com/koishijs/koishi/discussions" className="text-gray-400 hover:text-white transition-colors">GitHub 讨论</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Noishi. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  )
}

