// type Props = {
//     title: string
// }

function Header() {
    return (
        <div className="flex w-full justify-between items-center pl-4 dark:bg-veryDarkBlueBG ">  
            <p className="text-sm font-bold text-white">Where in the world?</p>
            <div className="flex justify-center items-center w-36 h-16">
                <svg
                    className="dark:text-white size-6"
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    >
                    <path 
                        fill="currentColor"
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
                <p className="pl-2 dark:text-white text-sm">Dark Mode</p>
            </div>
        </div>
    )
}

export default Header