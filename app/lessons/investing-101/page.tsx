"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { useAppContext } from '../../contexts/AppContext';

export default function Investing101() {
  const { completeLesson } = useAppContext();

  return (
    <div className="container mx-auto p-4 bg-yellow-100 min-h-screen font-mono">
      <h1 className="text-3xl font-bold mb-6 text-purple-800 text-center py-4 bg-green-200 border-4 border-purple-800">Investing 101</h1>
      <div className="space-y-4 bg-blue-200 p-4 rounded-lg border-2 border-purple-800">
        <h2 className="text-2xl font-bold text-purple-800">Introduction to Basic Investment Concepts</h2>
        <p className="text-purple-600">Investing is a crucial skill for building long-term wealth. Here are some key concepts:</p>
        <ul className="list-disc list-inside space-y-2 text-purple-800">
          <li>Stocks: Ownership shares in a company</li>
          <li>Bonds: Loans to companies or governments</li>
          <li>Mutual Funds: Professionally managed investment portfolios</li>
          <li>ETFs: Exchange-Traded Funds that track indexes or sectors</li>
          <li>Diversification: Spreading investments to manage risk</li>
          <li>Compound Interest: Earning interest on your interest</li>
        </ul>
        <p className="text-purple-600 mt-4">Remember, all investments carry some risk. Always do thorough research before investing!</p>
      </div>
      <div className="mt-6 text-center">
        <Button 
          onClick={() => completeLesson('investing-101')} 
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

