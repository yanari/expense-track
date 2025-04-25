'use client'

import { Database } from '@/database.types'
import { createClient } from '@/utils/supabase/client'
import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react'

type Transaction = Database['public']['Tables']['transactions']['Row']

interface TransactionContextType {
    transactions: Transaction[]
    total: number
    income: number
    outcome: number
}

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: { children: ReactNode }) {
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const [total, setTotal] = useState<number>(0)
    const [income, setIncome] = useState<number>(0)
    const [outcome, setOutcome] = useState<number>(0)

    const fetchTransactions = async () => {
        const supabase = createClient()
        const { data } = await supabase.from('transactions').select()
        setTransactions(data as Transaction[])
    }

    const getTotal = async () => {
        const supabase = createClient()
        const { data } = await supabase.rpc('get_total_price')
        setTotal(data)
    }

    const getIncome = async () => {
        const supabase = createClient()
        const { data } = await supabase.rpc('get_income')
        setIncome(data)
    }

    const getOutcome = async () => {
        const supabase = createClient()
        const { data } = await supabase.rpc('get_outcome')
        setOutcome(data)
    }

    useEffect(() => {
        fetchTransactions()
        getTotal()
        getIncome()
        getOutcome()
    }, [])

    return (
        <TransactionContext.Provider
            value={{ transactions, total, income, outcome }}
        >
            {children}
        </TransactionContext.Provider>
    )
}

export function useTransactions() {
    return useContext(TransactionContext)
}
