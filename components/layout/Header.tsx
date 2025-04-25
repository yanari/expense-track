export function Header() {
    return (
        <div className="bg-base-100 shadow-sm">
            <div className="navbar max-w-4xl m-auto">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Expense Track</a>
                </div>
                <div className="flex-none">
                    <button className="btn btn-ghost">New Transaction</button>
                </div>
            </div>
        </div>
    )
}
