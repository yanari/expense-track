import { SearchForm } from '@/components/(root)/SearchForm'
import { Summary } from '@/components/layout/Summary'
import { createClient } from '@/utils/supabase/server'

export default async function Home() {
    const supabase = await createClient()
    const { data: transactions } = await supabase.from('transactions').select()

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
