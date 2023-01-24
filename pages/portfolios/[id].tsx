import BaseLayout from "../../components/layouts/BaseLayout";
import {useRouter} from "next/router";
import {NextPage} from "next";
import axios from "axios";

interface IPost {
    id: string;
    title: string;
    body: string;
}

class Post implements IPost{
    id: string = ''
    title: string = ''
    body: string = ''
}


const Portfolio: NextPage<IPost> = (post) => {
    const router = useRouter()

    return (
        <BaseLayout>
            <h1>I am Portfolio Page</h1>
            <h2>{router.query.id}</h2>
            <p>BODY: {post.body}</p>
            <p>ID: {post.id}</p>
        </BaseLayout>
    )
}



Portfolio.getInitialProps = async ({query}) => {
    let post = new Post();
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
        post = res.data
    } catch (e) {
        console.error(e)
    }
    return post
}

export default Portfolio
