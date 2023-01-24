import BaseLayout from "../../components/layouts/BaseLayout";
import {NextPage} from 'next'
import Link from "next/link"
import axios from "axios";

interface Post {
    id: string;
    title: string;
}

interface Props {
    posts: Post[]
}


const Portfolios: NextPage<Props> = ({posts}) => {
    const renderPosts = () => {
        return posts?.map(post =>
            <Link href={`/portfolios/${post.id}`}>
                <li key={post?.id}>
                    {post?.id}
                </li>
            </Link>
           )
    }


    return (
        <BaseLayout>
            <h1>I am Portfolio page</h1>
            <ul>{renderPosts()}</ul>
        </BaseLayout>
    )
}


Portfolios.getInitialProps = async () => {
    let posts: Post[] = [];
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
        posts = res.data
    } catch (e) {
        console.error(e)
    }
    return {posts: posts.slice(0, 10)}
}
export default Portfolios
