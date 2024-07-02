"use client"

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import AddReviewModal from "./components/AddReviewModal";
import axios from "axios";
import ReviewBox from "../../_components/reviewBox";
import { useSession } from "next-auth/react";
import DeleteReviewModal from "./components/DeleteReviewModal";
import EditRevewModal from "./components/EditReviewModal";
import AddReplyModal from "./components/AddReplyModal";
import { Reply } from "@prisma/client";
import DeleteReplyModal from "./components/DeleteReplyModal";

interface ReviewProps {
    id: string,
    authorId: string,
    authorImage: string,
    authorName: string,
    title: string,
    body: string,
    rating: number,
    authorEmail: string,
    replies: Reply[]
}

const Reviews = () => {
    const {data:session} = useSession();
    const [isLoading, setIsLoading] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [deleteModalId, setDeleteModalId] = useState<string>("")

    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [editTitle, setEditTitle] = useState("")
    const [editBody, setEditBody] = useState("")
    const [editRating, setEditRating] = useState(0)
    const [editId, setEditId] = useState("")

    const [isReplyModalOpen, setIsReplyModalOpen] = useState(false)
    const [replyId, setReplyId] = useState("")
    const [replyName, setReplyName] = useState("")

    const [isReplyDeleteModalOpen, setIsReplyDeleteModalOpen] = useState(false)
    const [replyDeleteId, setReplyDeleteId] = useState("")

    const [reviews, setReviews] = useState<ReviewProps[]>([])

    useEffect(() => {
        async function getReviews() {
            const reviewResponse = await axios.get('/api/reviews')
            const reviewData = reviewResponse?.data?.reviews
            const newReviewData = reviewData.map((item:any) => {
                return {
                    ...item,
                    authorEmail: item.author.email
                }
            })
            setReviews(newReviewData)
            setIsLoading(false)
        }

        getReviews();
    }, [])

    return (
        <div className="pb-[20px]">
            <AddReviewModal isOpen={isOpen} onClose={() => setIsOpen(false)}/>
            <DeleteReviewModal onClose={() => setIsDeleteModalOpen(false)} isOpen={isDeleteModalOpen} id={deleteModalId} />
            {
                isReplyDeleteModalOpen && (
                    <DeleteReplyModal 
                        isOpen={isReplyDeleteModalOpen}
                        onClose={() => setIsReplyDeleteModalOpen(false)}
                        id={replyDeleteId}
                    />
                )
            }
            {
                isReplyModalOpen && (
                    <AddReplyModal 
                        onClose={() => setIsReplyModalOpen(false)}
                        isOpen={isReplyModalOpen}
                        author={replyName}
                        id={replyId}
                    />
                )
            }
            {
                isEditModalOpen && (
                    <EditRevewModal 
                        onClose={() => setIsEditModalOpen(false)}
                        isOpen={isEditModalOpen} 
                        editTitle={editTitle}
                        editBody={editBody}
                        editRating={editRating}
                        editId={editId}
                    />
                )
            }
            
            <div className="mx-[30px] pt-4">
                <Button onClick={() => setIsOpen(true)}>
                    Add Review
                </Button>
            </div>

            {
                isLoading ?
                (
                    <div className="flex flex-col gap-3 mt-[20px] px-[30px] mb-10">
                        Loading...
                    </div>
                ) :
                (
                    <div className='flex flex-col gap-3 mt-[20px] px-[30px] mb-10'>
                    {
                        reviews.length > 0 
                        ?
                        reviews.map(review => {
                            return <ReviewBox 
                                key={review.id} 
                                id={review.id}
                                author={review.authorName} 
                                authorImage={review.authorImage}
                                title={review.title}
                                body={review.body}
                                rating={review.rating}
                                userEmail={session?.user?.email}
                                authorEmail={review.authorEmail}
                                replies={review.replies}

                                setIsDeleteModalOpen={setIsDeleteModalOpen}
                                setDeleteModalId={setDeleteModalId}

                                setIsEditModalOpen={setIsEditModalOpen}
                                setEditId={setEditId}
                                editTitle={editTitle}
                                setEditTitle={setEditTitle}
                                editBody={editBody}
                                setEditBody={setEditBody}
                                editRating={editRating}
                                setEditRating={setEditRating}

                                setReplyModalOpen={setIsReplyModalOpen}
                                setReplyId={setReplyId}
                                setReplyName={setReplyName}

                                setReplyDeleteModelOpen={setIsReplyDeleteModalOpen}
                                setDeleteReplyId={setReplyDeleteId}
                            />
                        })
                        :
                        <div>No reviews found</div>
                    }
            </div>
                )
            }
        </div>
    )
}
 
export default Reviews;