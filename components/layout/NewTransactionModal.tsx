'use client'

import { ArrowCircleDown, ArrowCircleUp, X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export function NewTransactionModal() {
    return (
        <Dialog.Portal>
            <Dialog.Overlay className="fixed w-dvw h-dvh inset-0 bg-black/75" />

            <Dialog.Content className="fixed min-w-lg rounded-md p-12 bg-base-100 -translate-1/2 top-1/2 left-1/2">
                <Dialog.Title>New Transaction</Dialog.Title>

                <Dialog.Close className="btn btn-ghost absolute top-6 right-6 p-0 leading-0 size-auto">
                    <X size={24} />
                </Dialog.Close>

                <Dialog.Description hidden>
                    Form to create new transaction.
                </Dialog.Description>

                <form className="grid gap-6 mt-8">
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
                    <RadioGroup.Root className="join gap-4">
                        <RadioGroup.Item
                            value="income"
                            className="btn-soft group btn btn-ghost join-item flex-1 data-checked:bg-green-700"
                        >
                            <ArrowCircleUp
                                className="text-green-700 group-data-checked:text-current"
                                size={24}
                            />
                            Entrada
                        </RadioGroup.Item>
                        <RadioGroup.Item
                            value="outcome"
                            className="btn-soft group btn btn-ghost join-item flex-1 data-checked:bg-red-700"
                        >
                            Saída
                            <ArrowCircleDown
                                className="text-red-700 group-data-checked:text-current"
                                size={24}
                            />
                        </RadioGroup.Item>
                    </RadioGroup.Root>

                    <button className="btn btn-primary">Submit</button>
                </form>
            </Dialog.Content>
        </Dialog.Portal>
    )
}
