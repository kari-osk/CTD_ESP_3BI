import Api from "@/service/api"
import { useEffect, useState } from "react"

type BlogPostType ={
    id: number, 
    title: string,
    body: string,
}


const Post = () => {

    const [blogPost, setBlogPost] = useState<BlogPostType | []>([])

    useEffect(() => {
        Api
            .get("/posts")
            .then((res)=> setBlogPost(res.data))
            .catch((err) => alert(err))
    }, [])
    
    return(
        <section>
            {blogPost?.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </section>
    )

}

export default Post