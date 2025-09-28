"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { useAppContext } from '../../contexts/AppContext';

export default function MoneyMindset() {
  const { completeLesson } = useAppContext();

  return (
    <div className="container mx-auto p-4 bg-yellow-100 min-h-screen font-mono">
      <h1 className="text-3xl font-bold mb-6 text-purple-800 text-center py-4 bg-green-200 border-4 border-purple-800">Money Mindset</h1>
      <div className="space-y-4 bg-blue-200 p-4 rounded-lg border-2 border-purple-800">
        <h2 className="text-2xl font-bold text-purple-800">Developing a Healthy Relationship with Money</h2>
        <p className="text-purple-600">Your mindset about money can greatly impact your financial success. Here are some key principles:</p>
        <ul className="list-disc list-inside space-y-2 text-purple-800">
          <li>Abundance vs. Scarcity: Focus on opportunities, not limitations</li>
          <li>Money as a Tool: See money as a means to achieve goals, not an end in itself</li>
          <li>Financial Education: Continuously learn about personal finance</li>
          <li>Delayed Gratification: Understand the value of saving for the future</li>
          <li>Giving: Recognize the joy and importance of charitable giving</li>
          <li>Value-Based Spending: Align your spending with your personal values</li>
        </ul>
        <p className="text-purple-600 mt-4">Remember, a positive money mindset is key to long-term financial well-being!</p>
      </div>
      <div className="mt-6 text-center">
        <Button 
          onClick={() => completeLesson('money-mindset')} 
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Mark as Completed
        </Button>
        <Link href="/">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Back to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  )
}

