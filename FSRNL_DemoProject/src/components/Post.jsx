import axios from "axios";
import { useEffect, useState } from "react";
import useFetchData from "../custom_hook/useFetchData";
const Post = () => {
    const API = "https://jsonplaceholder.typicode.com/posts";
    const postData = useFetchData(API);
    // Commenting below code to use above Custom hook
    // const [postData, setPostData] = useState([]);
    // useEffect(() => {
    //     axios.get(API)
    //         .then(res => {
    //             console.log(res.data)
    //             setPostData(res.data)
    //         })
    //         .catch(err => console.log(err))
    // },[])
    return (
        <>
            <h2> Latest Posts </h2>
            {postData.map(post =>
                <div key={post.id}>
                <h4>{post.title}</h4>
                 <p>{post.body}</p>
                 <hr/>
                 </div>
            )}
        </>


    )

}
export default Post;