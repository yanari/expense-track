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
}

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: { children: ReactNode }) {
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const fetchTransactions = async () => {
        const supabase = createClient()
        const { data } = await supabase.from('transactions').select()
        setTransactions(data as Transaction[])
    }

    useEffect(() => {
        fetchTransactions()
    }, [])

    return (
        <TransactionContext.Provider value={{ transactions }}>
            {children}
        </TransactionContext.Provider>
    )
}

export function useTransactions() {
    return useContext(TransactionContext)
}
