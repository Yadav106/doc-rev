"use client"

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import AddReviewModal from "./components/AddReviewModal";
import axios from "axios";
import ReviewBox from "../../_components/reviewBox";

interface ReviewProps {
    id: string,
    authorId: string,
    authorImage: string,
    authorName: string,
    title: string,
    body: string,
    rating: number
}

const Reviews = () => {
    const [isOpen, setIsOpen] = useState(false)

    const [reviews, setReviews] = useState<ReviewProps[]>([])

    useEffect(() => {
        async function getReviews() {
            const reviewResponse = await axios.get('/api/reviews')
            const reviewData = reviewResponse?.data?.reviews
            console.log(reviewData)
            setReviews(reviewData)
        }

        getReviews();
    }, [])

    return (
        <>
            <AddReviewModal isOpen={isOpen} onClose={() => setIsOpen(false)}/>
            <div className="mx-[30px] pt-4">
                <Button onClick={() => setIsOpen(true)}>
                    Add Review
                </Button>
            </div>

            <div className='flex flex-col gap-3 mt-[20px] px-[30px]'>
                    {
                        reviews.length > 0 
                        ?
                        reviews.map(review => {
                            return <ReviewBox 
                                key={review.id} 
                                author={review.authorName} 
                                authorImage={review.authorImage}
                                title={review.title}
                                body={review.body}
                                rating={review.rating}
                            />
                        })
                        :
                        <div>Loading...</div>
                    }
            </div>
        </>
    )
}
 
export default Reviews;