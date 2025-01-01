"use client"

import { useState, useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import GamifiedChallenges from "./components/GamifiedChallenges"
import ExpenseTracking from "./components/ExpenseTracking"
import MiniLessons from "./components/MiniLessons"
import EntrepreneurshipModule from "./components/EntrepreneurshipModule"
import ParentalIntegration from "./components/ParentalIntegration"
import EntrepreneurshipTracking from "./components/EntrepreneurshipTracking"
import { useAppContext } from './contexts/AppContext';

export default function Dashboard() {
  // const [overviewData, setOverviewData] = useState({
  //   totalSavings: 250,
  //   challengesCompleted: 0,
  //   lessonsCompleted: 7,
  //   businessProgress: 50
  // })

  const {
    totalSavings,
    challengesCompleted,
    lessonsCompleted,
    businessProgress,
  } = useAppContext();

  // useEffect(() => {
  //   // In a real app, you'd fetch this data from an API or database
  //   // For now, we'll just use the initial state
  // }, [])

  // const updateOverview = (newData) => {
  //   setOverviewData(prevData => ({
  //     ...prevData,
  //     ...newData
  //   }))
  // }

  return (
    <div className="container mx-auto p-4 bg-yellow-100 min-h-screen font-mono">
      <h1 className="text-3xl font-bold mb-6 text-purple-800 text-center py-4 bg-green-200 border-4 border-purple-800">Fynans: Financial Planning for Teens </h1>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="bg-orange-200 p-2 rounded-md">
          <TabsTrigger value="overview" className="px-4 py-2 text-purple-800 hover:bg-orange-300 rounded">Overview</TabsTrigger>
          <TabsTrigger value="challenges" className="px-4 py-2 text-purple-800 hover:bg-orange-300 rounded">Challenges</TabsTrigger>
          <TabsTrigger value="expenses" className="px-4 py-2 text-purple-800 hover:bg-orange-300 rounded">Expenses</TabsTrigger>
          <TabsTrigger value="lessons" className="px-4 py-2 text-purple-800 hover:bg-orange-300 rounded">Lessons</TabsTrigger>
          <TabsTrigger value="entrepreneurship" className="px-4 py-2 text-purple-800 hover:bg-orange-300 rounded">Entrepreneurship</TabsTrigger>
          <TabsTrigger value="parental" className="px-4 py-2 text-purple-800 hover:bg-orange-300 rounded">Parental</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-blue-200 border-2 border-purple-800">
              <CardHeader>
                <CardTitle className="text-purple-800">Total Savings</CardTitle>
                <CardDescription className="text-purple-600">Your current savings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-800">${totalSavings.toFixed(2)}</div>
                <div className="w-full bg-blue-300 rounded-full h-2.5 dark:bg-blue-300 mt-2">
                  <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: `${(totalSavings / 1000) * 100}%` }}></div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-green-200 border-2 border-purple-800">
              <CardHeader>
                <CardTitle className="text-purple-800">Challenges Completed</CardTitle>
                <CardDescription className="text-purple-600">Your progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-800">{challengesCompleted}/5</div>
                <div className="w-full bg-green-300 rounded-full h-2.5 dark:bg-green-300 mt-2">
                  <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: `${(challengesCompleted / 5) * 100}%` }}></div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-red-200 border-2 border-purple-800">
              <CardHeader>
                <CardTitle className="text-purple-800">Lessons Completed</CardTitle>
                <CardDescription className="text-purple-600">Your learning progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-800">{lessonsCompleted}/10</div>
                <div className="w-full bg-red-300 rounded-full h-2.5 dark:bg-red-300 mt-2">
                  <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: `${(lessonsCompleted / 10) * 100}%` }}></div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-yellow-200 border-2 border-purple-800">
              <CardHeader>
                <CardTitle className="text-purple-800">Entrepreneurship</CardTitle>
                <CardDescription className="text-purple-600">Your business progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-800">${businessProgress.toFixed(2)}</div>
                <div className="w-full bg-yellow-300 rounded-full h-2.5 dark:bg-yellow-300 mt-2">
                  <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: `${(businessProgress / 200) * 100}%` }}></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="challenges">
          <GamifiedChallenges />
        </TabsContent>
        <TabsContent value="expenses">
          <ExpenseTracking />
        </TabsContent>
        <TabsContent value="lessons">
          <MiniLessons />
        </TabsContent>
        <TabsContent value="entrepreneurship">
          <EntrepreneurshipModule />
          <EntrepreneurshipTracking />
        </TabsContent>
        <TabsContent value="parental">
          <ParentalIntegration />
        </TabsContent>
      </Tabs>
    </div>
  )
}

