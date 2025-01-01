import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function SavingStrategies() {
  return (
    <div className="container mx-auto p-4 bg-yellow-100 min-h-screen font-mono">
      <h1 className="text-3xl font-bold mb-6 text-purple-800 text-center py-4 bg-green-200 border-4 border-purple-800">Saving Strategies</h1>
      <div className="space-y-4 bg-blue-200 p-4 rounded-lg border-2 border-purple-800">
        <h2 className="text-2xl font-bold text-purple-800">Smart Ways to Save Money</h2>
        <p className="text-purple-600">Saving money is a crucial skill. Here are some strategies to help you save:</p>
        <ul className="list-disc list-inside space-y-2 text-purple-800">
          <li>Set clear savings goals</li>
          <li>Use the 50/30/20 rule: 50% needs, 30% wants, 20% savings</li>
          <li>Start an emergency fund</li>
          <li>Use a piggy bank or savings app</li>
          <li>Avoid impulse purchases</li>
          <li>Look for student discounts</li>
        </ul>
        <p className="text-purple-600 mt-4">Remember, small savings add up over time!</p>
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

