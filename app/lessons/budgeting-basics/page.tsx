"use client"
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { useAppContext } from '../../contexts/AppContext';

export default function BudgetingBasics() {
  const { completeLesson } = useAppContext();
  return (
    <div className="container mx-auto p-4 bg-yellow-100 min-h-screen font-mono">
      <h1 className="text-3xl font-bold mb-6 text-purple-800 text-center py-4 bg-green-200 border-4 border-purple-800">Budgeting Basics</h1>
      <div className="space-y-4 bg-blue-200 p-4 rounded-lg border-2 border-purple-800">
        <h2 className="text-2xl font-bold text-purple-800">Creating Your First Budget</h2>
        <p className="text-purple-600">A budget is a plan for your money. Here's how to create one:</p>
        <ol className="list-decimal list-inside space-y-2 text-purple-800">
          <li>Track your income (allowance, part-time job, etc.)</li>
          <li>List your expenses (snacks, entertainment, savings, etc.)</li>
          <li>Set financial goals (saving for a new game, phone, etc.)</li>
          <li>Create spending categories</li>
          <li>Allocate your income to these categories</li>
          <li>Track your spending and adjust as needed</li>
        </ol>
        <p className="text-purple-600 mt-4">Remember, a budget is a living document. Review and adjust it regularly!</p>
      </div>
      <div className="mt-6 text-center">
        <Button 
          onClick={() => completeLesson('budgeting-basics')} 
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

