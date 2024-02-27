import hotelMiranda from "../../assets/img/HotelMiranda.png"
import dashboardHotelMiranda from "../../assets/img/dashboardHotelMiranda.png"
import appFotos from "../../assets/img/appFotos.png"
import OxygenShop from "../../assets/img/oxygenShop.png"
import { FormattedMessage } from "react-intl"

export const Projects = () => {
    return (
        <div id="projects" className="projects">
            <h1 className="projects__title"><FormattedMessage id="nav:projects"></FormattedMessage></h1>
            <div className="projects__list">
                <div className="projects__list--card">
                    <h1 className="projects__list--card--title">Hotel Miranda</h1>
                    <img className="projects__list--card--img" src={hotelMiranda}/>
                    <h3>LANGUAGES: </h3>
                    <p>Html, SCSS, Python, Django</p>
                    <h3>LINK WEBSITE: </h3>
                    <a href="http://35.180.69.117">LINK</a>
                    <h3>LINK CODE: </h3>
                    <a href="https://github.com/diegomompo7/django_HotelMiranda">LINK</a>
                </div>
                <div className="projects__list--card">
                    <h1 className="projects__list--card--title">Dashboard Hotel Miranda</h1>
                    <img className="projects__list--card--img" src={dashboardHotelMiranda}/>
                    <h3>LANGUAGES: </h3>
                    <p>React, SCSS, TypeScript, NodeJS, Redux</p>
                    <h3>LINK WEBSITE: </h3>
                    <a href="http://dashboard-hotelmiranda.s3-website.eu-south-2.amazonaws.com/">LINK</a>
                    <h3>LINK CODE: </h3>
                    <a href="https://github.com/diegomompo7/django_HotelMiranda">LINK</a>
                </div>
                <div className="projects__list--card">
                    <h1 className="projects__list--card--title">App Photos</h1>
                    <img className="projects__list--card--img" src={appFotos}/>
                    <h3>LANGUAGES: </h3>
                    <p>ReactJS, SCSS, JavaScript</p>
                    <h3>LINK WEBSITE: </h3>
                    <a href="http://project3-photos-oxygen.s3-website.eu-north-1.amazonaws.com/">LINK</a>
                    <h3>LINK CODE: </h3>
                    <a href="https://github.com/diegomompo7/project3-photos-oxygen">LINK</a>
                </div>
                <div className="projects__list--card">
                    <h1 className="projects__list--card--title">Oxygen Shop</h1>
                    <img className="projects__list--card--img" src={OxygenShop}/>
                    <h3>LANGUAGES: </h3>
                    <p>Html, SCSS, JavaScript</p>
                    <h3>LINK WEBSITE: </h3>
                    <a href="https://diegomompo7.github.io/Proyecto2_OxygenShop/">LINK</a>
                    <h3>LINK CODE: </h3>
                    <a href="https://github.com/diegomompo7/Proyecto2_OxygenShop">LINK</a>
                </div>
            </div>
        </div>
    )
} 