"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "../../components/ui/button";

export default function PaymentPage() {
  const router = useRouter();
  const tierInfo = typeof window !== "undefined" ? window.selectedTier : null;
  const [timeLeft, setTimeLeft] = useState(664.514); // 初始时间为 11 分钟 4.514 秒

  useEffect(() => {
    if (!tierInfo) {
      router.push("/");
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 0.001; // 每 100 毫秒减少 0.1 秒
      });
    }, 1);

    return () => clearInterval(timer);
  }, [tierInfo, router]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = (timeLeft % 60).toFixed(3);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">支付页面</h1>
      {tierInfo && (
        <p className="text-lg mb-4">
          您选择的商品：{tierInfo.name}，需要支付：¥{tierInfo.price}
        </p>
      )}
      <p className="text-lg mb-4">
        支付剩余时间：{minutes} 分 {seconds} 秒
      </p>
      <p className="text-lg mb-8">请扫描下方二维码完成支付：</p>
      <div className="mb-8">
        <Image
          src="/koishi_chat_url_qrcode.png"
          alt="支付二维码"
          width={300}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>
      <p className="text-lg mb-8">本二维码支持某信快付、支付好、云快付</p>
      <Button onClick={() => router.push(tierInfo?.return_path ?? "/")} className="bg-purple-600 hover:bg-purple-700">
        {tierInfo?.return_text ?? "返回主页面"}
      </Button>
    </div>
  );
}
