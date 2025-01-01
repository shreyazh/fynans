import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function InvestWisely() {
  return (
    <div className="container mx-auto p-4 bg-yellow-100 min-h-screen font-mono">
      <h1 className="text-3xl font-bold mb-6 text-purple-800 text-center py-4 bg-green-200 border-4 border-purple-800">Invest Wisely Challenge</h1>
      <div className="space-y-4 bg-blue-200 p-4 rounded-lg border-2 border-purple-800">
        <h2 className="text-2xl font-bold text-purple-800">Challenge: Learn About Stocks and Bonds</h2>
        <p className="text-purple-600">Complete these tasks to understand the basics of investing:</p>
        <ol className="list-decimal list-inside space-y-2 text-purple-800">
          <li>Research what stocks and bonds are</li>
          <li>Learn about the stock market and how it works</li>
          <li>Understand the concept of diversification</li>
          <li>Compare the risks and potential returns of stocks vs. bonds</li>
          <li>Research at least three publicly traded companies you're interested in</li>
          <li>Create a mock investment portfolio with a virtual $1000</li>
        </ol>
        <p className="text-purple-600 mt-4">Remember, investing involves risks. Always do thorough research before making real investments!</p>
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

