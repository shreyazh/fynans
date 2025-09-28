import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function TutoringService() {
  return (
    <div className="container mx-auto p-4 bg-yellow-100 min-h-screen font-mono">
      <h1 className="text-3xl font-bold mb-6 text-purple-800 text-center py-4 bg-green-200 border-4 border-purple-800">Tutoring Service</h1>
      <div className="space-y-4 bg-blue-200 p-4 rounded-lg border-2 border-purple-800">
        <h2 className="text-2xl font-bold text-purple-800">Starting Your Tutoring Service</h2>
        <p className="text-purple-600">Tutoring is a great way to earn money while helping others and reinforcing your own knowledge. Here's how to get started:</p>
        <ol className="list-decimal list-inside space-y-2 text-purple-800">
          <li>Identify subjects you excel in and enjoy teaching</li>
          <li>Determine your target audience (e.g., elementary, high school, college students)</li>
          <li>Set your rates based on your experience and local market</li>
          <li>Create a schedule that works with your school commitments</li>
          <li>Advertise your services (e.g., school bulletin boards, local community centers)</li>
          <li>Consider online tutoring platforms to reach more students</li>
        </ol>
        <p className="text-purple-600 mt-4">Keep track of your hours and earnings, and don't forget to set aside money for taxes!</p>
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

