"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAppContext } from '../contexts/AppContext';

export default function ExpenseTracking() {
  // const [transactions, setTransactions] = useState([])
  const { expenses, incomes, addExpense, addIncome } = useAppContext();
  const [newTransaction, setNewTransaction] = useState({ name: '', amount: '', type: 'expense' })

  const handleAddTransaction = () => {
    if (newTransaction.name && newTransaction.amount) {
      const transaction = {
        id: Date.now(),
        name: newTransaction.name,
        amount: parseFloat(newTransaction.amount),
        date: new Date(),
      };
      if (newTransaction.type === 'expense') {
        addExpense(transaction);
      } else {
        addIncome(transaction);
      }
      setNewTransaction({ name: '', amount: '', type: 'expense' });
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-purple-800 bg-green-200 p-2 rounded border-2 border-purple-800">Expense Tracking</h2>
      <Card className="bg-blue-200 border-2 border-purple-800">
        <CardHeader>
          <CardTitle className="text-purple-800">Add New Transaction</CardTitle>
          <CardDescription className="text-purple-600">Keep track of your income and expenses</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="transaction-name" className="text-purple-800">Transaction Name</Label>
              <Input 
                id="transaction-name" 
                value={newTransaction.name}
                onChange={(e) => setNewTransaction({...newTransaction, name: e.target.value})}
                placeholder="e.g., Movie Ticket" 
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
                  <SelectItem value="expense">Expense</SelectItem>
                  <SelectItem value="income">Income</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="button" onClick={handleAddTransaction} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-full">
              Add Transaction
            </Button>
          </form>
        </CardContent>
      </Card>
      <Card className="bg-green-200 border-2 border-purple-800">
        <CardHeader>
          <CardTitle className="text-purple-800">Transaction History</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {[...expenses, ...incomes].sort((a, b) => b.date.getTime() - a.date.getTime()).map((transaction) => (
              <li key={transaction.id} className="flex justify-between items-center bg-white p-2 rounded">
                <span className="text-purple-800">{transaction.name}</span>
                <span className={transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}>
                  {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

