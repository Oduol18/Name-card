import './App.css'

export default function Main() {
    return (
        <div class='main-page'>
            <div class='profile'>
                <img src={require('./images/prof.jpg')} class='prof-pic' />
            
            </div>
            <div class='main-body'>
                <section class='name'>Thomas Oduol</section>
                <section class='job-title'>Frontend Developer</section>
                <section class='website'>thomas.website</section>
                <div class='contact'>
                <a  target='_blank' href='thomas.oduol12@gmail.com'><img src={require('./images/Button3.png')} class='' alt =''/></a>
                <a target='_blank' href='https://www.linkedin.com/in/thomas-oduol-0500b165/'><img src={require('./images/Button2.png')} class='' alt =''/></a>
            
                <div class='aritcle'>
                        <p class='article-title'>About</p>
                        <p class='article-body'>I am a frontend developer with a particular interest in
                            making things simple and automating daily tasks. I try to keep up with security
                            and best practices, and am always looking for new things to learn.</p>
                        <p class='article-title'>Interests</p>
                        <p class='article-body'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>

                    </div>
</div>
            </div>
            <div class='footer'>
            <a  target='_blank' href='https://twitter.com/ThomasOduol'><img src={require('./images/Twitter.png')} class='icons' alt ='Twitter'/></a>
                <a  target='_blank' href='https://www.facebook.com/thomas.oduol/'><img src={require('./images/facebook.png')} class='icons' alt ='Facebook'/></a>
                <a  target='_blank' href=''><img src={require('./images/Ig.png')} class='icons' alt ='Instagram'/></a>
                <a  target='_blank' href='https://github.com/Oduol18'><img src={require('./images/Git.png')} class='icons' alt ='Github'/></a>
            </div>
            
        </div>

    )
}