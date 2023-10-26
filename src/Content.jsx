import "./Content.css"

function Content() {
    return (
        <div className="content-container">
            <div className="content-top">
                <h2>Serkan KOCAMAN</h2>
                <h4>Frontend Developer</h4>
                <p>wwww.serkankcn.com.tr</p>
            </div>
            <div className="content-buttons">
                <a href="mailto:serkankocaman1@gmail.com" className="email">
                    <i class="fa-solid fa-envelope"></i>Email
                </a>
                <a href="https://www.linkedin.com/in/serkan-kcn/" className="linkedin">
                    <i class="fa-brands fa-linkedin-in"></i>LinkedIn
                </a>
            </div>
            <div className="content-main">
                <div className="main-item main-item-1">
                    <h3>About</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eligendi reprehenderit facere, repellat labore, fugiat, nobis debitis exercitationem in ducimus maxime neque assumenda pariatur molestiae tempore illum ad nulla velit?</p>
                </div>
                <div className="main-item main-item-2">
                    <h3>Interests</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere vel aut tempora modi aliquid animi quo at ullam ipsa maxime eum, deleniti, voluptate totam non, dicta velit dolore similique architecto?</p>
                </div>
            </div>
        </div>
    )
}

export default Content