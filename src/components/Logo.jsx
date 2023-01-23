import logo from "../assets/logo-ProFlight.png";

const Logo = ({active}) => {
    return (
        <div className={`container-logo ${active && "active"}`} >
            <img src={logo} alt="logo ProFlight" />
        </div>
    )
}

export default Logo;