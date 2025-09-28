"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAppContext } from '../contexts/AppContext';

export default function ParentalIntegration() {
  const { allowances, addAllowance } = useAppContext();
  const [allowance, setAllowance] = useState({ amount: '', frequency: 'weekly' })

  const handleSetAllowance = () => {
    if (allowance.amount) {
      addAllowance({
        id: Date.now(),
        amount: parseFloat(allowance.amount),
        frequency: allowance.frequency,
        date: new Date(),
      });
      setAllowance({ amount: '', frequency: 'weekly' });
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-purple-800 bg-green-200 p-2 rounded border-2 border-purple-800">Parental Integration</h2>
      <Card className="bg-blue-200 border-2 border-purple-800">
        <CardHeader>
          <CardTitle className="text-purple-800">Set Allowance</CardTitle>
          <CardDescription className="text-purple-600">Manage your teen's allowance</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="allowance-amount" className="text-purple-800">Allowance Amount</Label>
              <Input 
                id="allowance-amount" 
                type="number" 
                value={allowance.amount}
                onChange={(e) => setAllowance({...allowance, amount: e.target.value})}
                placeholder="0.00" 
                className="bg-white border-purple-800"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="allowance-frequency" className="text-purple-800">Frequency</Label>
              <Select onValueChange={(value) => setAllowance({...allowance, frequency: value})}>
                <SelectTrigger id="allowance-frequency" className="bg-white border-purple-800">
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="biweekly">Bi-weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="button" onClick={handleSetAllowance} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-full">
              Set Allowance
            </Button>
          </form>
        </CardContent>
      </Card>
      <Card className="bg-green-200 border-2 border-purple-800">
        <CardHeader>
          <CardTitle className="text-purple-800">Allowance History</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {allowances.map((item) => (
              <li key={item.id} className="flex justify-between items-center bg-white p-2 rounded">
                <span className="text-purple-800">${item.amount.toFixed(2)} {item.frequency}</span>
                <span className="text-green-500">Set on {item.date.toLocaleDateString()}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

