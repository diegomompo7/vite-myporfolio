import { FormattedMessage } from "react-intl"
import pdf from '../../assets/CV Diego Mompó Redoli.pdf';

export const Contact = () => {
    return (
        <div id="contact" className="contact">
            <h1 className="contact__title"><FormattedMessage id="nav:contact"></FormattedMessage></h1>
            <div className="contact__info">
                <a href="https://github.com/diegomompo7"><button className="contact__info--button">GITHUB</button></a>
                <a href="https://www.linkedin.com/in/diegomompo/"><button className="contact__info--button">LINKEDIN</button></a>
                <div className="contact__info--email">
                    <p className="contact__info--email--title">EMAIL</p>
                    <p className="contact__info--email--subtitle">diego@diegomompo.com</p>
                </div>
                <a href={pdf} target="_blank" rel="noopener noreferrer" download="CV Diego Mompó.pdf"><button className="contact__info--button"><FormattedMessage id="contact:download"></FormattedMessage> CV</button></a>
            </div>
        </div>
    )
}