'use client'
export default function Search({ onChange }: any) {
    return (
        <div className="p-6 grid gap-2 md:grid-cols-2">
            <div>
                <label htmlFor="default-input" className="block mb-2 text-m font-ultra text-gray-900 dark:text-white">Buscador</label>
            </div>
            <div>
                <input type="text" id="default-input" placeholder="Busca tu favorito" onChange={onChange} className="font-outfit bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
            </div>
        </div>
    )
}