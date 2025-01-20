import { Check, X } from 'lucide-react'

const comparisonData = [
  {
    feature: '语言生态',
    nonebot: 'Python，AI和数据处理强',
    koishi: '没用过',
    summary: 'Python生态更适合AI应用'
  },
  {
    feature: '性能',
    nonebot: '异步架构，高并发',
    koishi: '没用过',
    summary: '更高效，适合高并发'
  },
  {
    feature: '插件生态',
    nonebot: '丰富，易集成Python库',
    koishi: '质量和数量较少',
    summary: '插件更丰富，开发灵活'
  },
  {
    feature: '跨平台',
    nonebot: '多平台支持，适配强',
    koishi: '只适配QQ',
    summary: '跨平台支持更好'
  },
  {
    feature: '社区与文档',
    nonebot: '活跃，文档丰富',
    koishi: '没看过',
    summary: '社区更活跃，文档完善'
  },
  {
    feature: '开发体验',
    nonebot: 'Python简洁，调试方便',
    koishi: '没写过',
    summary: '开发更流畅，迭代快'
  },
  {
    feature: '开放性',
    nonebot: '高度开放，支持自定义开发',
    koishi: '申请才可使用',
    summary: '更灵活，可深度定制'
  }
]

export function Comparison() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">NoneBot vs 友商</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <thead className="bg-purple-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">特性</th>
                <th className="py-3 px-4 text-center font-bold">NoneBot</th>
                <th className="py-3 px-4 text-center">友商</th>
                <th className="py-3 px-4 text-left">NoneBot优势</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="py-3 px-4 font-medium">{item.feature}</td>
                  <td className="py-3 px-4 text-center">
                    <span className="text-green-500 font-bold mr-2">✔️</span>
                    {item.nonebot}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="text-red-500 font-bold mr-2">❌</span>
                    {item.koishi}
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

