import './Header.css'
function Header() {
    return (
        <header className="">

            <section className="max-w-4xl ms-4 p-4 flex justify-between items-center">
                <div className="flex sm:m-10 justify-center w-full sm:justify-start">
                    <img className='w-[250px] mt-10 sm:pt-0' src="/images/logo_full.png" alt="Logo" />
                </div>
                
            </section>
        </header>
    )
}

export default Header