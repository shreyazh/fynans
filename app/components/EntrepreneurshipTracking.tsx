"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAppContext } from '../contexts/AppContext';

export default function EntrepreneurshipTracking() {
  const { businessTransactions, addBusinessTransaction } = useAppContext();
  const [newTransaction, setNewTransaction] = useState({ name: '', amount: '', type: 'income', category: '' })

  const handleAddTransaction = () => {
    if (newTransaction.name && newTransaction.amount && newTransaction.category) {
      addBusinessTransaction({
        id: Date.now(),
        name: newTransaction.name,
        amount: parseFloat(newTransaction.amount),
        type: newTransaction.type,
        category: newTransaction.category,
        date: new Date(),
      });
      setNewTransaction({ name: '', amount: '', type: 'income', category: '' });
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-purple-800 bg-green-200 p-2 rounded border-2 border-purple-800">Business Tracking</h2>
      <Card className="bg-blue-200 border-2 border-purple-800">
        <CardHeader>
          <CardTitle className="text-purple-800">Add Business Transaction</CardTitle>
          <CardDescription className="text-purple-600">Track your business income and expenses</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="transaction-name" className="text-purple-800">Transaction Name</Label>
              <Input 
                id="transaction-name" 
                value={newTransaction.name}
                onChange={(e) => setNewTransaction({...newTransaction, name: e.target.value})}
                placeholder="e.g., Product Sale" 
                className="bg-white border-purple-800"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="transaction-amount" className="text-purple-800">Amount</Label>
              <Input 
                id="transaction-amount" 
                type="number" 
                value={newTransaction.amount}
                onChange={(e) => setNewTransaction({...newTransaction, amount: e.target.value})}
                placeholder="0.00" 
                className="bg-white border-purple-800"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="transaction-type" className="text-purple-800">Type</Label>
              <Select onValueChange={(value) => setNewTransaction({...newTransaction, type: value})}>
                <SelectTrigger className="bg-white border-purple-800">
                  <SelectValue placeholder="Select transaction type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="income">Income</SelectItem>
                  <SelectItem value="expense">Expense</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="transaction-category" className="text-purple-800">Category</Label>
              <Input 
                id="transaction-category" 
                value={newTransaction.category}
                onChange={(e) => setNewTransaction({...newTransaction, category: e.target.value})}
                placeholder="e.g., Sales, Materials, Marketing" 
                className="bg-white border-purple-800"
              />
            </div>
            <Button type="button" onClick={handleAddTransaction} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-full">
              Add Business Transaction
            </Button>
          </form>
        </CardContent>
      </Card>
      <Card className="bg-green-200 border-2 border-purple-800">
        <CardHeader>
          <CardTitle className="text-purple-800">Business Transaction History</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {businessTransactions.sort((a, b) => b.date.getTime() - a.date.getTime()).map((transaction) => (
              <li key={transaction.id} className="flex justify-between items-center bg-white p-2 rounded">
                <span className="text-purple-800">{transaction.name} ({transaction.category})</span>
                <span className={transaction.type === 'expense' ? 'text-red-500' : 'text-green-500'}>
                  {transaction.type === 'expense' ? '-' : '+'}${transaction.amount.toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

