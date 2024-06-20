import React from 'react'

interface ReviewBoxProps {
    author: string,
    authorImage: string,
    title: string,
    body: string,
    rating: number
}

const ReviewBox: React.FC<ReviewBoxProps> = ({
    author, authorImage, title, body, rating
}) => {
  return (
    <div>
        {body} - {author}
    </div>
  )
}

export default ReviewBox