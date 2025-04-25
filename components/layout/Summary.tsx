'use client'

import {
    ArrowCircleDown,
    ArrowCircleUp,
    CurrencyDollarSimple,
} from '@phosphor-icons/react'

export function Summary() {
    return (
        <div className="stats shadow max-w-4xl mb-10">
            <div className="stat">
                <div className="stat-figure text-primary">
                    <ArrowCircleUp className="inline-block h-8 w-8 stroke-current" />
                </div>
                <div className="stat-title">Entradas</div>
                <div className="stat-value text-primary">R$ 13.000</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
                    <ArrowCircleDown className="inline-block h-8 w-8 stroke-current" />
                </div>
                <div className="stat-title">Saídas</div>
                <div className="stat-value text-secondary">R$ 12.000</div>
            </div>

            <div className="stat bg-secondary px-10">
                <div className="stat-figure">
                    <CurrencyDollarSimple className="inline-block h-8 w-8 stroke-current" />
                </div>
                <div className="stat-title">Total</div>
                <div className="stat-value">R$ 45.000</div>
            </div>
        </div>
    )
}
