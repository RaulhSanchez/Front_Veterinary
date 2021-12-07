import LoginUser from "../../Components/LoginUser/LoginUser";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "../../Components/LoginUser/LoginUser.scss"

const LoginPage = () => {
    return(
        <>
            <Header/>
            <LoginUser />
            <img className="image" src="https://www.portalveterinaria.com/upload/20210409091032pexels-tima-miroshnichenko-6235231.jpg"></img>
            <Footer />
        </>
    )
}

export default LoginPage