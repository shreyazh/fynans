import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function EntrepreneurshipModule() {
  const ventures = [
    { id: 1, title: "Handmade Crafts", description: "Start selling your handmade items online", link: "/entrepreneurship/handmade-crafts" },
    { id: 2, title: "Tutoring Service", description: "Offer tutoring services in subjects you excel at", link: "/entrepreneurship/tutoring-service" },
    { id: 3, title: "Dog Walking", description: "Start a local dog walking service", link: "/entrepreneurship/dog-walking" },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-purple-800 bg-green-200 p-2 rounded border-2 border-purple-800">Entrepreneurship Module</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {ventures.map((venture) => (
          <Card key={venture.id} className="bg-blue-200 border-2 border-purple-800">
            <CardHeader>
              <CardTitle className="text-purple-800">{venture.title}</CardTitle>
              <CardDescription className="text-purple-600">{venture.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={venture.link}>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                  Learn More
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

