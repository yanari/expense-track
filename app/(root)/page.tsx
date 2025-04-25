import { SearchForm } from '@/components/(root)/SearchForm'
import { Summary } from '@/components/layout/Summary'

export default function Home() {
    return (
        <div className="max-w-4xl m-auto gap-6 my-10 grid items-center justify-items-center font-[family-name:var(--font-roboto)]">
            <Summary />
            <SearchForm />

            <div className="overflow-x-auto mt-10">
                <table className="table table-zebra w-4xl">
                    <tbody>
                        <tr>
                            <td>Desenvolvimento de site</td>
                            <td>R$ 12.000,00</td>
                            <td>Venda</td>
                            <td>24/04/2025</td>
                        </tr>
                        <tr>
                            <td>Compras</td>
                            <td>R$ 1.000,00</td>
                            <td>Alimentação</td>
                            <td>24/04/2025</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
