import { Header } from '../../components/Header'
import { Pricing } from '../../components/Pricing'
import { Footer } from '../../components/Footer'

export default function SubscribePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">选择您的 Noishi 订阅计划</h1>
            <p className="text-xl mb-8">
              无论您是个人开发者还是大型企业，我们都有适合您需求的计划
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 py-12">
          <Pricing />
        </div>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">常见问题</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">如何选择适合我的计划？</h3>
                <p className="text-gray-600">根据您的使用需求和预算来选择。如果您是个人开发者或小型项目，基础版可能足够。对于需要更多功能和支持的用户，推荐专业版。大型企业或需要定制解决方案的用户可以考虑企业版。</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">我可以随时更改我的订阅计划吗？</h3>
                <p className="text-gray-600">是的，您可以随时升级或降级您的订阅计划。升级将立即生效，而降级将在当前计费周期结束后生效。</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">付费计划有哪些支付方式？</h3>
                <p className="text-gray-600">我们支持信用卡、支付宝和微信支付。对于企业版，我们也接受银行转账。</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">如果我遇到问题，如何获得支持？</h3>
                <p className="text-gray-600">基础版用户可以通过社区论坛获得支持。专业版和企业版用户可以享受优先的技术支持，包括电子邮件和在线聊天支持。</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

