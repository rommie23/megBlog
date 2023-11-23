import React,{useState, useEffect} from 'react'
import appwriteService from '../appwrite/config'
import { Postcard, Container } from '../components'

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(()=>{},[])
    appwriteService.getPosts([]).then((posts)=> {
        if (posts) {
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full py-8'>
        All the posts
        <Container>
            <div className='flex flex-wrap'>
            {
                posts.map((post)=>(
                    <div key={post.$id} className='p-2 sm:w-1/4 w-full'>
                        <Postcard {...post}/>
                    </div>
                    )
                )
            } 
                
            </div>   
        </Container>      
    </div>
  )
}

export default AllPosts
