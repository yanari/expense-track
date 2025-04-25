'use client'

import { TransactionsProvider } from '@/contexts/Transactions'
import { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
    return <TransactionsProvider>{children}</TransactionsProvider>
}
