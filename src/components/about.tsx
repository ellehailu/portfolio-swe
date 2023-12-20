// Add bio page 
import Header from "./Header"

const About = () => {
    return (
        <div>
            <>
            <h2>Hello! I am glad you are here!</h2>
                <p>
                    My name is Elshadai but most people call me “Elle.” When I am not at my desk writing, you can find me outdoors hiking, paddleboarding, running or curled up on my couch with a cup of tea and a good book. 

                </p>
            </>
            <>
                <image>
                    <img src="https://www.theodysseyonline.com/media-library/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8xMDQ0MDA5MS9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTcyMTEzMjIyNX0.Et1pzAOJH9RgmQgFHxEQkPoqliT6myZBt98kAkQK33w/image.jpg?width=210" alt="Elshadai standing in a grass field looking at the camera" />
                </image>
            </>
            <>
                <h2>
                    Experience
                </h2>
                <ul>
                    <h3>Fullstack Software Engineer Intern</h3>
                    All Star Directories | October 2023 - December 2023
                    <h3>Technical Content Writer</h3>
                    The Odigo Group | August 2021 - April 2023
                    <h3>Research and Remediation Associate</h3>
                    Wells Fargo Bank | September 2020 - August 2021
                    <h3>Americorps VISTA Summer Associate</h3>
                    Good Cheer Food Bank | June 2020 - September 2020
                </ul>
            </>
            <>
            <h2>
                Education
            </h2>
                <ul>
                Epicodus, Portland OR <br />
                <span>Web and Mobile Development, 2023</span><br />
                
                <br />George Fox University, Newberg OR <br />
                <span>Bachelor of Science Cognitive Science: Human and Artificial Intelligence, 2016 - 2020</span>
                </ul>
            </>
        </div>
    )
}

export default About