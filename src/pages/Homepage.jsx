
import NavBar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import HomepageBody from '../components/HomepageBody/HomepageBody';
import InfoForShop from '../components/HomepageBody/InfoForShop';
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';

function Homepage() {
    const {auth} = useContext(AuthContext);
    console.log("auth: ", auth);

    const accessToken = localStorage.getItem("accessToken");
    console.log("accessToken: ", accessToken);
    return (
        <div>
            <div>
                <NavBar/>
            </div>
            <HomepageBody/>
            <InfoForShop/>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Homepage;
