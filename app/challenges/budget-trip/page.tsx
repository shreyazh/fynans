import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function BudgetTrip() {
  return (
    <div className="container mx-auto p-4 bg-yellow-100 min-h-screen font-mono">
      <h1 className="text-3xl font-bold mb-6 text-purple-800 text-center py-4 bg-green-200 border-4 border-purple-800">Budget a Trip Challenge</h1>
      <div className="space-y-4 bg-blue-200 p-4 rounded-lg border-2 border-purple-800">
        <h2 className="text-2xl font-bold text-purple-800">Challenge: Plan a $500 Vacation</h2>
        <p className="text-purple-600">Here's how to tackle this budgeting challenge:</p>
        <ol className="list-decimal list-inside space-y-2 text-purple-800">
          <li>Choose a destination (consider nearby locations to save on travel)</li>
          <li>Research transportation costs (bus, train, or carpool options)</li>
          <li>Find affordable accommodation (hostels, camping, or budget hotels)</li>
          <li>Plan your meals (mix of eating out and self-catering)</li>
          <li>List free or low-cost activities at your destination</li>
          <li>Set aside some money for souvenirs or unexpected expenses</li>
        </ol>
        <p className="text-purple-600 mt-4">Remember to track every expense in your budget. Happy planning!</p>
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

