import {get} from "./utils/http.ts";
import {BlogPost} from "./components/BlogPosts.tsx";
import {useEffect, useState} from "react";
import {Post} from "./components/BlogPosts.tsx";

function App() {
    const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();
    useEffect(() => {
        async function fetchPosts() {
            const data = (await get('https://jsonplaceholder.typicode.com/posts')) as Post[];
            const blogPosts: BlogPost[] = data.map(post => {
                return ({
                    id: post.id,
                    title: post.title,
                    text: post.body,
                })
        });
            setFetchedPosts(blogPosts);
        fetchPosts();
    }, []);
    return <h1>
        {
            fetchedPosts? fetchedPosts.map((post: ) => (            <li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.text}</p>
            </li>
            )) : <div>Loading...</div>
    }
    </h1>;
}

export default App;
