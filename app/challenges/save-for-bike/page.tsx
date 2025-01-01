import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function SaveForBike() {
  return (
    <div className="container mx-auto p-4 bg-yellow-100 min-h-screen font-mono">
      <h1 className="text-3xl font-bold mb-6 text-purple-800 text-center py-4 bg-green-200 border-4 border-purple-800">Save for a Bike Challenge</h1>
      <div className="space-y-4 bg-blue-200 p-4 rounded-lg border-2 border-purple-800">
        <h2 className="text-2xl font-bold text-purple-800">Challenge: Save $200 in 2 Months</h2>
        <p className="text-purple-600">Here's your game plan to complete this challenge:</p>
        <ol className="list-decimal list-inside space-y-2 text-purple-800">
          <li>Set a clear goal: $200 for a bike</li>
          <li>Break it down: Save $25 per week for 8 weeks</li>
          <li>Find ways to earn extra money (e.g., do chores, sell unused items)</li>
          <li>Cut unnecessary expenses (e.g., skip buying snacks, use free entertainment)</li>
          <li>Track your progress weekly</li>
          <li>Celebrate milestones (e.g., when you reach $100)</li>
        </ol>
        <p className="text-purple-600 mt-4">Remember, consistency is key! Good luck with your challenge!</p>
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

