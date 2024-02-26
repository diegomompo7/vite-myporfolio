export const Contact = () => {
    return (
        <div className="contact">
            <h1 className="contact__title">CONTACT ME</h1>
            <div className="contact__info">
                <a href=""><button className="contact__info--button">GITHUB</button></a>
                <a href=""><button className="contact__info--button">LINKEDIN</button></a>
                <div className="contact__info--email">
                    <p className="contact__info--email--title">EMAIL</p>
                    <p className="contact__info--email--subtitle">diego@diegomompo.com</p>
                </div>
            </div>
        </div>
    )
}