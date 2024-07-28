const Home = () => {
    const title = "My Home Page";
    let courses = ["a", "b", "c","d"]
    return (
        <>
            <h2> {title}</h2>
            {courses.length > 0 ?
            //Conditional Rendering
                <>
                    <h5>Courses</h5>
                    <ul>
                        {courses.map((val, index) =>
                            <li key={index}>{val}</li>)}
                    </ul>

                </> : <p> No Courses</p>
            }

        </>
    )
}
export default Home;