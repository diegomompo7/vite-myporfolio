import { LanguageSelector } from "../../App";
import { useContext } from "react";
import { FormattedMessage } from "react-intl";

export const Nav = () => {
    const { setLanguage } = useContext(LanguageSelector);

    return (
        <div className="nav">
            <div className="nav__lang">
                <button onClick={() => setLanguage("es-ES")} className="nav__lang-btn">
                    ES
                </button>
                |
                <button onClick={() => setLanguage("en-EN")} className="nav__lang-btn">
                    EN
                </button>
            </div>
            <ul className="nav__menu">
                <li><a href="#about"> <FormattedMessage id="nav:about"></FormattedMessage></a></li>
                <li><a href="#habilities"><FormattedMessage id="nav:habilities"></FormattedMessage></a></li>
                <li><a href="#projects"><FormattedMessage id="nav:projects"></FormattedMessage></a></li>
                <li><a href="#contact"><FormattedMessage id="nav:contact"></FormattedMessage></a></li>
            </ul>
        </div>
    )
}