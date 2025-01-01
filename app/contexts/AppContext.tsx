"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';

type AppContextType = {
  totalSavings: number;
  challengesCompleted: number;
  lessonsCompleted: number;
  businessProgress: number;
  expenses: Transaction[];
  incomes: Transaction[];
  businessTransactions: BusinessTransaction[];
  allowances: Allowance[];
  completedLessons: string[];
  updateTotalSavings: (amount: number) => void;
  updateChallengesCompleted: (count: number) => void;
  updateLessonsCompleted: (count: number) => void;
  updateBusinessProgress: (amount: number) => void;
  addExpense: (expense: Transaction) => void;
  addIncome: (income: Transaction) => void;
  addBusinessTransaction: (transaction: BusinessTransaction) => void;
  addAllowance: (allowance: Allowance) => void;
  completeLesson: (lessonId: string) => void;
};

type Transaction = {
  id: number;
  name: string;
  amount: number;
  date: Date;
};

type BusinessTransaction = Transaction & {
  category: string;
  type: 'income' | 'expense';
};

type Allowance = {
  id: number;
  amount: number;
  frequency: string;
  date: Date;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [totalSavings, setTotalSavings] = useState(250);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [lessonsCompleted, setLessonsCompleted] = useState(0);
  const [businessProgress, setBusinessProgress] = useState(50);
  const [expenses, setExpenses] = useState<Transaction[]>([]);
  const [incomes, setIncomes] = useState<Transaction[]>([]);
  const [businessTransactions, setBusinessTransactions] = useState<BusinessTransaction[]>([]);
  const [allowances, setAllowances] = useState<Allowance[]>([]);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  useEffect(() => {
    // Calculate total savings based on incomes, expenses, and allowances
    const totalIncome = incomes.reduce((sum, income) => sum + income.amount, 0);
    const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const totalAllowances = allowances.reduce((sum, allowance) => sum + allowance.amount, 0);
    setTotalSavings(totalIncome + totalAllowances - totalExpenses);
  }, [incomes, expenses, allowances]);

  useEffect(() => {
    // Calculate business progress based on business transactions
    const businessIncome = businessTransactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);
    const businessExpenses = businessTransactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);
    setBusinessProgress(businessIncome - businessExpenses);
  }, [businessTransactions]);

  const updateTotalSavings = (amount: number) => setTotalSavings(amount);
  const updateChallengesCompleted = (count: number) => setChallengesCompleted(count);
  const updateLessonsCompleted = (count: number) => setLessonsCompleted(count);
  const updateBusinessProgress = (amount: number) => setBusinessProgress(amount);
  const addExpense = (expense: Transaction) => setExpenses(prev => [...prev, expense]);
  const addIncome = (income: Transaction) => setIncomes(prev => [...prev, income]);
  const addBusinessTransaction = (transaction: BusinessTransaction) => setBusinessTransactions(prev => [...prev, transaction]);
  const addAllowance = (allowance: Allowance) => setAllowances(prev => [...prev, allowance]);
  const completeLesson = (lessonId: string) => {
    setCompletedLessons(prev => [...prev, lessonId]);
    setLessonsCompleted(prev => prev + 1);
  };

  return (
    <AppContext.Provider value={{
      totalSavings,
      challengesCompleted,
      lessonsCompleted,
      businessProgress,
      expenses,
      incomes,
      businessTransactions,
      allowances,
      completedLessons,
      updateTotalSavings,
      updateChallengesCompleted,
      updateLessonsCompleted,
      updateBusinessProgress,
      addExpense,
      addIncome,
      addBusinessTransaction,
      addAllowance,
      completeLesson,
    }}>
      {children}
    </AppContext.Provider>
  );
};

