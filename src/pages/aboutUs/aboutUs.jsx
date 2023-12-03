import React from 'react'
import "./aboutUs.css"
import { GrFacebookOption } from "react-icons/gr";
import { GrInstagram } from 'react-icons/gr';
import { GrLinkedin } from 'react-icons/gr';
import { GrGithub } from 'react-icons/gr';
import { SlCalender } from "react-icons/sl";
import { IoIosArrowUp } from "react-icons/io";

function aboutUs() {
    return (
        <div>
            {/* <div className="textAbout">
                <h2><strong>Origin: Geometric Measure</strong></h2>
                <p>Welcome to our thrilling universe, the Adventurers of Forbidden Shapes, or rather Geometric Measure! The project you are exploring didn't just emerge from curiosity but from an irresistible invitation to dive into the depths of programming logic, where mathematics and creativity intertwine in surprising ways.</p>
                <p>This is not merely a website; it is the outcome of a challenge presented by our esteemed teacher, a mentor who inspired us to transcend the boundaries of the ordinary. By inviting us on this mathematical journey, he sparked the flame of curiosity and challenged us to create something extraordinary using the fundamental web development tools: HTML, CSS, and JavaScript.</p>
                <p>We embarked on this adventure with enthusiasm, blending coding skills with the power of imagination. Every line of code, every design choice, is an expression of our commitment to transforming mathematical challenges into an engaging and accessible experience for everyone.</p>
                <p>Throughout this process, we not only refined our technical skills but also explored forbidden shapes, unraveling the mysteries behind complex geometric figures. This website is more than a project; it is a celebration of learning, overcoming challenges, and a passion for exploring the unknown.</p>
                <p>Now, as you navigate through this virtual environment, you become a part of this exciting journey. Feel free to explore, learn, and challenge yourself. The Adventurers of Forbidden Shapes invite you to join us in this quest for knowledge and discovery.</p>
                <p>May this mathematical adventure inspire and challenge you, just as it inspired and challenged every line of code we crafted.</p>
                <p>With gratitude and enthusiasm,</p>
                <p>The Team of the Adventurers of Forbidden Shapes</p>
            </div> */}
            <div className="teamCard">
                <h2><strong>Team: The Dynamic Duo of Geometric Innovation</strong></h2>
                <p>Behind the scenes of this geometric marvel, you'll find a dynamic duo dedicated to pushing the boundaries of web development—Camile Santana and Vitor Moutim. United by a shared passion for mathematics and a love for coding, this talented team embarked on a thrilling journey to create a platform that seamlessly blends creativity with technical prowess.</p>
                <p>Camile Santana, with a keen eye for design and a knack for turning concepts into code, brings a unique perspective to the project. Her commitment to user experience and a flair for innovative solutions shine through every pixel and line of code.</p>
                <p>Vitor Moutim, the coding virtuoso, adds the magic touch of technical expertise to the mix. His intricate understanding of programming languages, particularly HTML, CSS, and JavaScript, played a pivotal role in bringing the intricate features of this website to life.</p>
                <p>Together, Camile Santana and Vitor form a synergy that goes beyond the screen, turning mathematical challenges into engaging experiences. Their collaboration is not just about coding; it's about transforming ideas into a virtual reality that invites users to explore, learn, and appreciate the beauty of geometric shapes.</p>
                <p>Join us on this adventure crafted by the hands and minds of Camile Santana and Vitor Moutim—a team that believes in the power of code to unlock the wonders of mathematics for everyone.</p>

            </div>
            <div className="contactUS">
                <h2 className='title'>Where you can find us</h2>

                <div className="cards">
                    <div className="cardPhoto">
                        <img src='https://media.licdn.com/dms/image/D4D03AQE78ZAuB8rkUw/profile-displayphoto-shrink_400_400/0/1694717478295?e=1707350400&v=beta&t=CXIwmm5CzCFpPlR1LdKwWPYc3AphfwMHdFFX3PU-8Iw' />
                        <div className="infos">
                            <h3>Camile Santana</h3>
                            <p>Front-End Developer</p>

                            <div className="linkIcons">
                                <a   href="https://www.linkedin.com/in/camilepsantana/" className="backgroundIcon" target="_blank"><GrLinkedin /></a>
                                <a href="https://github.com/ichcamile" className="backgroundIcon" target="_blank"><GrGithub /></a>
                            </div>
                        </div>


                    </div> <div className="cardPhoto">
                        <img src='https://avatars.githubusercontent.com/u/88093439?v=4' />
                        <div className="infos">
                            <h3>Vitor Moutim</h3>
                            <p>FullStack Developer</p>
                            <div className="linkIcons">
                                <a href="https://www.linkedin.com/in/vitormoutim/" className="backgroundIcon" target="_blank"><GrLinkedin /></a>
                                <a href="https://github.com/moutim" className="backgroundIcon" target="_blank"><GrGithub /></a>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default aboutUs