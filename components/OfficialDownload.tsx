import { Button } from './ui/button'
import { Download, Shield, Award } from 'lucide-react'

export function OfficialDownload() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">官方授权 立即下载</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          获得 Noishi 官方认证，享受安全可靠的机器人框架。立即下载，开启您的 AI 之旅！
        </p>
        <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-100 mb-8">
          <Download className="mr-2 h-5 w-5" /> 立即下载 Noishi
        </Button>
        <div className="flex justify-center space-x-8">
          <div className="flex items-center">
            <Shield className="text-purple-300 mr-2" />
            <span>官方认证</span>
          </div>
          <div className="flex items-center">
            <Award className="text-purple-300 mr-2" />
            <span>安全可靠</span>
          </div>
        </div>
      </div>
    </section>
  )
}

