'use client'

import { SearchForm } from '@/components/(root)/SearchForm'
import { Summary } from '@/components/layout/Summary'
import { useTransactions } from '@/contexts/Transactions'

export default function Home() {
    const { transactions } = useTransactions()

    return (
        <div className="max-w-4xl m-auto gap-6 my-10 grid items-center justify-items-center font-[family-name:var(--font-roboto)]">
            <Summary />
            <SearchForm />

            <div className="overflow-x-auto">
                <table className="table table-zebra w-4xl">
                    <tbody>
                        {transactions?.map((transaction) => {
                            const priceClassname =
                                transaction.type === 'outcome'
                                    ? 'text-red-600'
                                    : 'text-green-700'
                            return (
                                <tr key={transaction.id}>
                                    <td>{transaction.description}</td>
                                    <td className={priceClassname}>
                                        R$ {transaction.price}
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>{transaction.created_at}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
