import NavBar from "../NavBar"

const NavBarLayout = ({children}) => {
    return(
        <div className="flex">
            <NavBar></NavBar>
            {/* <Header /> */}
            <main>
                {children}
            </main>
        </div>
    )
}

export default NavBarLayout