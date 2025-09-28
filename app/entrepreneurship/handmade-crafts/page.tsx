import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function HandmadeCrafts() {
  return (
    <div className="container mx-auto p-4 bg-yellow-100 min-h-screen font-mono">
      <h1 className="text-3xl font-bold mb-6 text-purple-800 text-center py-4 bg-green-200 border-4 border-purple-800">Handmade Crafts Business</h1>
      <div className="space-y-4 bg-blue-200 p-4 rounded-lg border-2 border-purple-800">
        <h2 className="text-2xl font-bold text-purple-800">Getting Started with Your Handmade Crafts Business</h2>
        <p className="text-purple-600">Starting a handmade crafts business is a great way to turn your hobby into a profitable venture. Here are some steps to get you started:</p>
        <ol className="list-decimal list-inside space-y-2 text-purple-800">
          <li>Identify your niche (e.g., jewelry, pottery, knitted items)</li>
          <li>Develop your skills and create a portfolio</li>
          <li>Set up an online store (e.g., Etsy, Shopify)</li>
          <li>Price your items competitively</li>
          <li>Market your products on social media</li>
          <li>Manage your inventory and finances</li>
        </ol>
        <p className="text-purple-600 mt-4">Remember to track your expenses and income to ensure your business is profitable!</p>
      </div>
      <div className="mt-6 text-center">
        <Link href="/">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Back to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  )
}

