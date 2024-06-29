import Image from 'next/image'
import React, { useState } from 'react'
import bella from "@/public/bella.png"
import { Star, EditIcon, Trash2 } from 'lucide-react'
import defpic from '@/public/default.png'
import toast from 'react-hot-toast'

interface ReviewBoxProps {
    id: string,
    author: string,
    authorImage: string,
    title: string,
    body: string,
    rating: number,
    userEmail?: string|null|undefined,
    authorEmail?: string,
    setIsDeleteModalOpen?: (type:boolean) => void
    setDeleteModalId?: (type:string) => void
    setIsEditModalOpen?: (type:boolean) => void
    setEditTitle?: (type:string) => void
    setEditBody?: (type:string) => void
    setEditRating?: (type:number) => void
    setEditId?: (type:string) => void
    editTitle?: string
    editBody?: string
    editRating?: number
}

const ReviewBox: React.FC<ReviewBoxProps> = ({
    id, author, authorImage, title, body, rating, userEmail, authorEmail, setIsDeleteModalOpen, setDeleteModalId, setIsEditModalOpen, editTitle, editBody, editRating,
    setEditTitle, setEditBody, setEditRating, setEditId
}) => {
  const remainingStars = 5 - rating;

  const prepareDeleteModal = (reviewId: string) => {
    if (!setDeleteModalId || !setIsDeleteModalOpen) {
      toast.error("Something went wrong!")
      return
    }
    setDeleteModalId(reviewId)
    setIsDeleteModalOpen(true)
  }

  const prepareEditModal = () => {
    if (!setIsEditModalOpen || !setEditTitle || !setEditBody || !setEditRating || !setEditId) {
      toast.error("Something went wrong!")
      return
    }

    setEditTitle(title)
    setEditBody(body)
    setEditRating(rating)
    setEditId(id)
    setIsEditModalOpen(true)
  }
  return (
    <div className='bg-white rounded-xl shadow-sm shadow-black/40 px-5 py-4 flex justify-between'>
      <div className='flex flex-col'>
        <div className='flex gap-3 items-center'>
          <Image src={authorImage || defpic} alt='profile pic' width={50} height={50} className='rounded-full border-black/70 border-[3px]'/>
          <div className='flex flex-col'>
            <span className='font-semibold text-sm text-gray-900'>
              {author}
            </span>
            <div className='flex'>
              {
                new Array(rating).fill('').map((_, index) => {
                  return <Star fill='#000' className='text-sm' size={20} key={index}/>
                })
              }
              {
                new Array(remainingStars).fill('').map((_, index) => {
                  return <Star fill='#fff' className='text-sm' size={20} key={index}/>
                })
              }
            </div>
          </div>
        </div>

        <span className='font-bold text-xl mt-2 underline'>
          {title}
        </span>

        <span className=''>
          {body}
        </span>
      </div>
      {
        userEmail && authorEmail && (userEmail === authorEmail) && (
          <div className='flex gap-5'>
            <EditIcon className='cursor-pointer hover:fill-gray-400' onClick={() => prepareEditModal()}/>
            <Trash2 className='cursor-pointer hover:fill-red-400' onClick={() => prepareDeleteModal(id)}/>
          </div>
        )
      }
    </div>
  )
}

export default ReviewBox