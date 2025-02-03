"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Coffee, Home, ChefHat, Twitter, Linkedin } from "lucide-react"

export default function SiZhaiCafe() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed w-full bg-white/95 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Coffee className="h-6 w-6 text-[#8B4513]" />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-gray-600 hover:text-[#8B4513]">
              關於我們
            </Link>
            <Link href="#services" className="text-gray-600 hover:text-[#8B4513]">
              特色服務
            </Link>
            <Link href="#menu" className="text-gray-600 hover:text-[#8B4513]">
              菜單精選
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#join" className="text-gray-600 hover:text-[#8B4513]">
              Join us
            </Link>
            <Button className="bg-[#CD853F] hover:bg-[#8B4513] text-white">Contact us</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <Image
          src="https://sjc.microlink.io/4mtGtY3h_4S8TtzAdnHBuPkUrRKOxaBGmpyZ5_mk67gTlWJHxyUQ0ds4bvXb9k4a6rr4Dk2M_lqS697tE1BCTQ.jpeg"
          alt="私宅咖啡背景"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#8B4513]/70"></div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">歡迎來到私宅咖啡</h1>
          <p className="text-xl mb-8">在這裡，您將體驗到獨特的DIY活動和我們精心調製的特色飲品。</p>
          <div className="flex gap-4">
            <Link href="https://twitter.com">
              <Twitter className="h-6 w-6 text-white hover:text-[#CD853F]" />
            </Link>
            <Link href="https://linkedin.com">
              <Linkedin className="h-6 w-6 text-white hover:text-[#CD853F]" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-[#FDF5E6] hover:shadow-lg transition-shadow">
              <Home className="h-8 w-8 text-[#8B4513] mb-4" />
              <h3 className="text-xl font-semibold mb-2">溫馨環境</h3>
              <p className="text-gray-600">享受如家般的舒適與溫暖。</p>
            </div>
            <div className="p-6 rounded-lg bg-[#FDF5E6] hover:shadow-lg transition-shadow">
              <Coffee className="h-8 w-8 text-[#8B4513] mb-4" />
              <h3 className="text-xl font-semibold mb-2">精特飲品</h3>
              <p className="text-gray-600">品嚐我們的精選特調，感受味蕾的驚喜。</p>
            </div>
            <div className="p-6 rounded-lg bg-[#FDF5E6] hover:shadow-lg transition-shadow">
              <ChefHat className="h-8 w-8 text-[#8B4513] mb-4" />
              <h3 className="text-xl font-semibold mb-2">DIY體驗</h3>
              <p className="text-gray-600">親手製作甜點，收穫滿滿的成就感。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-[#FDF5E6]">
        <div className="container mx-auto px-4">
          <h2 className="text-[#CD853F] text-lg mb-4">探索我們的起源</h2>
          <h3 className="text-4xl font-bold mb-8">從心出發的咖啡旅程</h3>
          <div className="max-w-2xl">
            <p className="text-gray-700 mb-6">私宅咖啡誕生於嘉義縣番路鄉，這裡的每一杯咖啡都承載著我們對生活的熱愛。</p>
            <p className="text-gray-700 mb-6">我們的創辦人堅信，咖啡不僅僅是一種飲品，更是一種生活方式。</p>
            <p className="text-gray-700 mb-6">讓我們帶您走進這段充滿溫暖與創意的旅程，品味生活的真諦。</p>
            <div className="flex items-center gap-2 text-[#CD853F]">
              <Home className="h-5 w-5" />
              <span>家一般的氛圍</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

