"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { useAppContext } from '../../contexts/AppContext';

export default function EntrepreneurshipBasics() {
  const { completeLesson } = useAppContext();

  return (
    <div className="container mx-auto p-4 bg-yellow-100 min-h-screen font-mono">
      <h1 className="text-3xl font-bold mb-6 text-purple-800 text-center py-4 bg-green-200 border-4 border-purple-800">Entrepreneurship Basics</h1>
      <div className="space-y-4 bg-blue-200 p-4 rounded-lg border-2 border-purple-800">
        <h2 className="text-2xl font-bold text-purple-800">Fundamentals of Starting a Business</h2>
        <p className="text-purple-600">Entrepreneurship can be an exciting and rewarding journey. Here are some key concepts to get you started:</p>
        <ul className="list-disc list-inside space-y-2 text-purple-800">
          <li>Idea Generation: Identify problems and create solutions</li>
          <li>Market Research: Understand your target audience and competition</li>
          <li>Business Plan: Create a roadmap for your business</li>
          <li>Funding: Explore options like savings, loans, or investors</li>
          <li>Legal Considerations: Understand business structures and regulations</li>
          <li>Marketing: Learn how to promote your product or service</li>
        </ul>
        <p className="text-purple-600 mt-4">Remember, successful entrepreneurs are always learning and adapting!</p>
      </div>
      <div className="mt-6 text-center">
        <Button 
          onClick={() => completeLesson('entrepreneurship-basics')} 
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

