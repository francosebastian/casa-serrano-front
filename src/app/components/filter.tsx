'use client'
export default function Filter({ onChange, categories }: any) {
    console.log(`categorias ${categories}`);
    return (
        <div className="p-6 grid gap-2 md:grid-cols-2">

            <label htmlFor="countries" className="block mb-2 text-sm font-ultra text-gray-900 dark:text-white">Filtrar por tipo</label>
            <div>
                <select onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" aria-label="Filter Countries By Countries">
                    <option value="All">Filtrar por Tipo</option>
                    {
                        categories.map((registro: any) =>
                            <>
                                <option value={registro}>{registro}</option>
                            </>
                        )
                    }
                </select>
            </div>
        </div>
    )
}

