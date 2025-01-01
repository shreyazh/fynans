import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function DogWalking() {
  return (
    <div className="container mx-auto p-4 bg-yellow-100 min-h-screen font-mono">
      <h1 className="text-3xl font-bold mb-6 text-purple-800 text-center py-4 bg-green-200 border-4 border-purple-800">Dog Walking Service</h1>
      <div className="space-y-4 bg-blue-200 p-4 rounded-lg border-2 border-purple-800">
        <h2 className="text-2xl font-bold text-purple-800">Launch Your Dog Walking Business</h2>
        <p className="text-purple-600">Dog walking is a fun and rewarding way to earn money while spending time with furry friends. Here's how to start:</p>
        <ol className="list-decimal list-inside space-y-2 text-purple-800">
          <li>Research local regulations for pet care businesses</li>
          <li>Get any necessary certifications (e.g., pet first aid)</li>
          <li>Set your service area and rates</li>
          <li>Create a schedule that works with your school commitments</li>
          <li>Advertise your services (e.g., local pet stores, veterinary offices)</li>
          <li>Consider using a dog walking app to find clients</li>
        </ol>
        <p className="text-purple-600 mt-4">Remember to keep detailed records of your walks and earnings, and always prioritize the safety and well-being of the dogs in your care!</p>
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

