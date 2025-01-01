import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function UnderstandingCredit() {
  return (
    <div className="container mx-auto p-4 bg-yellow-100 min-h-screen font-mono">
      <h1 className="text-3xl font-bold mb-6 text-purple-800 text-center py-4 bg-green-200 border-4 border-purple-800">Understanding Credit</h1>
      <div className="space-y-4 bg-blue-200 p-4 rounded-lg border-2 border-purple-800">
        <h2 className="text-2xl font-bold text-purple-800">Credit Basics for Teens</h2>
        <p className="text-purple-600">Understanding credit is important for your financial future. Here's what you need to know:</p>
        <ul className="list-disc list-inside space-y-2 text-purple-800">
          <li>Credit is borrowed money that you promise to repay</li>
          <li>A credit score is a number that represents your creditworthiness</li>
          <li>Factors affecting credit scores: payment history, credit utilization, length of credit history</li>
          <li>Good credit can help you get loans, apartments, and even jobs in the future</li>
          <li>Always pay your bills on time to maintain good credit</li>
          <li>Be cautious with credit cards and understand the terms before using them</li>
        </ul>
        <p className="text-purple-600 mt-4">Building good credit habits now will benefit you in the long run!</p>
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

