"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'
import { Input } from "@/components/ui/input"

export default function GamifiedChallenges() {
  const [challenges, setChallenges] = useState([
    { id: 1, title: "Save for a Bike", description: "Save $200 in 2 months", completed: false, link: "/challenges/save-for-bike" },
    { id: 2, title: "Budget a Trip", description: "Plan a $500 vacation", completed: false, link: "/challenges/budget-trip" },
    { id: 3, title: "Invest Wisely", description: "Learn about stocks and bonds", completed: false, link: "/challenges/invest-wisely" },
  ])

  const [newChallenge, setNewChallenge] = useState({ title: '', description: '' })

  const handleComplete = (id: number) => {
    setChallenges(challenges.map(challenge => 
      challenge.id === id ? { ...challenge, completed: true } : challenge
    ))
  }

  const handleAddChallenge = () => {
    if (newChallenge.title && newChallenge.description) {
      setChallenges([...challenges, { 
        id: challenges.length + 1, 
        ...newChallenge, 
        completed: false, 
        link: `/challenges/custom-${challenges.length + 1}` 
      }])
      setNewChallenge({ title: '', description: '' })
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-purple-800 bg-green-200 p-2 rounded border-2 border-purple-800">Gamified Challenges</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {challenges.map((challenge) => (
          <Card key={challenge.id} className="bg-blue-200 border-2 border-purple-800">
            <CardHeader>
              <CardTitle className="text-purple-800">{challenge.title}</CardTitle>
              <CardDescription className="text-purple-600">{challenge.description}</CardDescription>
            </CardHeader>
            <CardContent>
              {challenge.completed ? (
                <Badge variant="secondary" className="bg-green-500 text-white">Completed</Badge>
              ) : (
                <div className="space-y-2">
                  <Link href={challenge.link}>
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-full">
                      Start Challenge
                    </Button>
                  </Link>
                  <Button onClick={() => handleComplete(challenge.id)} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full">
                    Mark as Completed
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="bg-yellow-200 border-2 border-purple-800">
        <CardHeader>
          <CardTitle className="text-purple-800">Add New Challenge</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Input 
              placeholder="Challenge Title" 
              value={newChallenge.title} 
              onChange={(e) => setNewChallenge({...newChallenge, title: e.target.value})}
              className="bg-white border-purple-800"
            />
            <Input 
              placeholder="Challenge Description" 
              value={newChallenge.description} 
              onChange={(e) => setNewChallenge({...newChallenge, description: e.target.value})}
              className="bg-white border-purple-800"
            />
            <Button onClick={handleAddChallenge} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-full">
              Add Challenge
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

