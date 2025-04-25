'use client'

import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'

export function NewTransactionModal() {
    return (
        <Dialog.Portal>
            <Dialog.Overlay className="fixed w-dvw h-dvh inset-0 bg-black/75" />

            <Dialog.Content className="fixed min-w-lg rounded-md p-12 bg-base-100 -translate-1/2 top-1/2 left-1/2">
                <Dialog.Title>New Transaction</Dialog.Title>

                <Dialog.Close className="btn btn-ghost absolute top-6 right-6 p-0 leading-0 size-auto">
                    <X size={24} />
                </Dialog.Close>

                <form className="grid gap-4 mt-8">
                    <input
                        type="text"
                        placeholder="Description"
                        className="input w-full"
                    />
                    <input
                        type="number"
                        placeholder="Price"
                        className="input w-full"
                    />
                    <input
                        type="text"
                        placeholder="Category"
                        className="input w-full"
                    />

                    <button className="btn btn-primary">Submit</button>
                </form>
            </Dialog.Content>
        </Dialog.Portal>
    )
}
