'use client'
import { MagnifyingGlass } from '@phosphor-icons/react'

export function SearchForm() {
    return (
        <form className="join w-full gap-4">
            <label className="input flex-1">
                <input type="search" required placeholder="Search" />
            </label>
            <button className="btn btn-outline">
                <MagnifyingGlass />
                Search
            </button>
        </form>
    )
}
