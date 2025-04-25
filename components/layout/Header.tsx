import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from './NewTransactionModal'

export function Header() {
    return (
        <div className="bg-base-100 shadow-sm">
            <div className="navbar max-w-4xl m-auto">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Expense Track</a>
                </div>
                <div className="flex-none">
                    <Dialog.Root>
                        <Dialog.Trigger asChild>
                            <button className="btn btn-primary">
                                New Transaction
                            </button>
                        </Dialog.Trigger>

                        <NewTransactionModal />
                    </Dialog.Root>
                </div>
            </div>
        </div>
    )
}
