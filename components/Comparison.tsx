import { Check, X } from 'lucide-react'

const comparisonData = [
  {
    feature: '语言生态',
    Noishi: 'Python与TypeScript,跨语言架构,兼容114514%以上的包',
    Nonebot: '没用过',
    summary: '跨语言生态兼容更多包'
  },
  {
    feature: '性能',
    Noishi: '异步架构，高并发',
    Nonebot: '没用过',
    summary: '更高效，适合高并发'
  },
  {
    feature: '插件生态',
    Noishi: '丰富,易集成Python和TypeScript包',
    Nonebot: '质量和数量较少',
    summary: '跨语言更丰富，开发灵活'
  },
  {
    feature: '跨平台',
    Noishi: '多平台支持，适配强',
    Nonebot: '只适配QQ',
    summary: '跨平台支持更好'
  },
  {
    feature: '社区与文档',
    Noishi: '活跃，文档丰富',
    Nonebot: '没看过',
    summary: '社区更活跃，文档完善'
  },
  {
    feature: '开发体验',
    Noishi: 'Python与TypeScript跨语言,想怎么写就怎么写',
    Nonebot: '没写过',
    summary: '开发更流畅，迭代快'
  },
  {
    feature: '开放性',
    Noishi: '高度开放，支持自定义开发',
    Nonebot: '申请才可使用',
    summary: '更灵活，可深度定制'
  }
]

export function Comparison() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Noishi vs 友商</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <thead className="bg-purple-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">特性</th>
                <th className="py-3 px-4 text-center font-bold">Noishi</th>
                <th className="py-3 px-4 text-center">友商</th>
                <th className="py-3 px-4 text-left">Noishi优势</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="py-3 px-4 font-medium">{item.feature}</td>
                  <td className="py-3 px-4 text-center">
                    <span className="text-green-500 font-bold mr-2">✔️</span>
                    {item.Noishi}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="text-red-500 font-bold mr-2">❌</span>
                    {item.Nonebot}
                  </td>
                  <td className="py-3 px-4">{item.summary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

