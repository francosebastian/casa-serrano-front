'use client'
import Image from 'next/image'
export default function NavBar() {
    return (
        <nav className="sticky bg-black dark:bg-black-900 w-full z-20 top-0 start-0 border-b border-black-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image  id={"casa-serrano-logo"} src="/casa-serrano.png" width={120} height={120} alt={'CASA-SERRANO'} />
                </a>
            </div>
        </nav>
    )
}