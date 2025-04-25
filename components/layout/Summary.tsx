'use client'

import { useTransactions } from '@/contexts/Transactions'
import {
    ArrowCircleDown,
    ArrowCircleUp,
    CurrencyDollarSimple,
} from '@phosphor-icons/react'

export function Summary() {
    const { total, income, outcome } = useTransactions()
    return (
        <div className="stats shadow max-w-4xl mb-10">
            <div className="stat">
                <div className="stat-figure text-primary">
                    <ArrowCircleUp className="inline-block h-8 w-8 stroke-current" />
                </div>
                <div className="stat-title">Entradas</div>
                <div className="stat-value text-primary">R$ {income}</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
                    <ArrowCircleDown className="inline-block h-8 w-8 stroke-current" />
                </div>
                <div className="stat-title">Saídas</div>
                <div className="stat-value text-secondary">R$ {outcome}</div>
            </div>

            <div className="stat bg-secondary px-10">
                <div className="stat-figure">
                    <CurrencyDollarSimple className="inline-block h-8 w-8 stroke-current" />
                </div>
                <div className="stat-title">Total</div>
                <div className="stat-value">R$ {total}</div>
            </div>
        </div>
    )
}
