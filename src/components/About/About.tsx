import { FormattedMessage } from "react-intl";

export const About = () => {

    return (
        <div id="about" className="about">
            <h1 className="about__title"><FormattedMessage id="nav:about"></FormattedMessage></h1>
            <p className="about__description">
                <FormattedMessage
                    id="about:description"
                    values={{
                        strong: (chunks) => <strong>{chunks}</strong>
                    }}></FormattedMessage>
            </p>
        </div>
    )
}