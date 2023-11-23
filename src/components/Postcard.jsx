import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

function Postcard({$id, title, featuredImage}) {
  return (
    <div>
      <Link to={`/post/${$id}`}>
        <div className=' w-full bg-gray-600 rounded-xl p-4'>
            <div className='w-full flex justify-center mb-4'>
              <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
              className='rounded-xl w-full' />
            </div>
            <h2
            className='text-2xl font-bold'
            >{title}</h2>
        </div>

      </Link>

    </div>
  )
}

export default Postcard
