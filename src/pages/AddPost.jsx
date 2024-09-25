import React from 'react'
import { PostForm, Container } from '../components';

function AddPost() {
  return (
    <div className="py-8">
        <Container>
            <PostForm post={null} />
        </Container>
    </div>
  )
}

export default AddPost