import image from "./assets/react-card-image.jpg"
import "./Header.css"

function Header(){
    return (
        <div className="header-container">
            <img src={image} alt="Profil Picture" />
        </div>
    )
}

export default Header