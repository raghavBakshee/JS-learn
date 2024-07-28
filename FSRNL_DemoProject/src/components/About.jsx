/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const About = ({ myObj, title }) => {
    return (
        <>
            <h1> {title} </h1>
            <p> {myObj.name} is {myObj.age} year old</p>
        </>
    )
}
export default About;