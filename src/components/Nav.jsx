const Nav = () => {
  return (
    <header className="w-screen flex justify-between mt-[20px]">
        <div className="w-1/2 text-[30px] font-bold text-white ml-10">
            Captionalisto
        </div>
        <ul className="w-1/2 flex justify-around items-center">
            <li className="li-style">Main Menu</li>
            <li className="li-style">About</li>
            <li className="li-style">Our Projects</li>
            <li className="li-style">Contacts</li>
        </ul>
    </header>
  )
}

export default Nav