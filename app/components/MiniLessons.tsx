import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { useAppContext } from '../contexts/AppContext';
import { Badge } from "@/components/ui/badge";

export default function MiniLessons() {
  const { completedLessons, completeLesson } = useAppContext();
  const lessons = [
    { id: 'budgeting-basics', title: "Budgeting Basics", description: "Learn how to create and stick to a budget", link: "/lessons/budgeting-basics" },
    { id: 'saving-strategies', title: "Saving Strategies", description: "Discover effective ways to save money", link: "/lessons/saving-strategies" },
    { id: 'understanding-credit', title: "Understanding Credit", description: "Learn about credit scores and responsible borrowing", link: "/lessons/understanding-credit" },
    { id: 'investing-101', title: "Investing 101", description: "Introduction to basic investment concepts", link: "/lessons/investing-101" },
    { id: 'money-mindset', title: "Money Mindset", description: "Develop a healthy relationship with money", link: "/lessons/money-mindset" },
    { id: 'entrepreneurship-basics', title: "Entrepreneurship Basics", description: "Learn the fundamentals of starting a business", link: "/lessons/entrepreneurship-basics" },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-purple-800 bg-green-200 p-2 rounded border-2 border-purple-800">Mini-Lessons</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {lessons.map((lesson) => (
          <Card key={lesson.id} className="bg-blue-200 border-2 border-purple-800">
            <CardHeader>
              <CardTitle className="text-purple-800">{lesson.title}</CardTitle>
              <CardDescription className="text-purple-600">{lesson.description}</CardDescription>
            </CardHeader>
            <CardContent>
              {completedLessons.includes(lesson.id) ? (
                <Badge variant="secondary" className="bg-green-500 text-white">Completed</Badge>
              ) : (
                <Link href={lesson.link}>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                    Learn More
                  </Button>
                </Link>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

