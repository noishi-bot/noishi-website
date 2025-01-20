import Link from 'next/link'
import { Github, Menu } from 'lucide-react'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 max-w-7xl">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-xl sm:text-2xl font-bold text-purple-600 hover:text-purple-700 transition-colors">
            NoneBot
          </Link>
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <Link href="/#features" className="text-gray-600 hover:text-purple-600 transition-colors">特性</Link>
            <Link href="/download" className="text-gray-600 hover:text-purple-600 transition-colors">下载</Link>
            <Link href="/subscribe" className="text-gray-600 hover:text-purple-600 transition-colors">订阅</Link>
            <Link href="/vip" className="text-gray-600 hover:text-purple-600 transition-colors">大会员</Link>
            <Link href="https://v2.nonebot.dev/" className="text-gray-600 hover:text-purple-600 transition-colors">文档</Link>
            <Button variant="outline" size="sm" asChild>
              <Link href="https://github.com/nonebot/nonebot2">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Link>
            </Button>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/#features">特性</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/download">下载</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/subscribe">订阅</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/vip">大会员</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="https://v2.nonebot.dev/">文档</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="https://github.com/nonebot/nonebot2">GitHub</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  )
}

