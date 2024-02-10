import Post from '../page'
import {Suspense} from 'react'

async function loadPost(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data
}

async function Page({params}) {

    const post = await loadPost(params.postId)

    return (
        <div>
            <h1>{post.id}. {post.title}</h1>
            <p>{post.body}</p>
            <hr />

            <h2>Other Posts</h2>
            <Suspense fallback={<div>Loading Posts ...</div>}>
                <Post/>
            </Suspense>
        </div>
  )
}

export default Page