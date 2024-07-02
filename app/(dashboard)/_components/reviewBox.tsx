"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import bella from "@/public/bella.png"
import { Star, EditIcon, Trash2 } from 'lucide-react'
import defpic from '@/public/default.png'
import toast from 'react-hot-toast'
import { Reply } from '@prisma/client'
import { Delete } from 'lucide-react';
import { useSession } from 'next-auth/react'

interface ReviewBoxProps {
    id: string,
    author: string,
    authorImage: string,
    title: string,
    body: string,
    rating: number,
    userEmail?: string|null|undefined,
    authorEmail?: string,
    replies?: Reply[]
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
    setReplyModalOpen?: (type:boolean) => void
    setReplyId?: (type:string) => void
    setReplyName?: (type:string) => void
    setReplyDeleteModelOpen?: (type:boolean) => void
    setDeleteReplyId?: (type:string) => void
}

const ReviewBox: React.FC<ReviewBoxProps> = ({
    id, author, authorImage, title, body, rating, userEmail, authorEmail, setIsDeleteModalOpen, setDeleteModalId, setIsEditModalOpen, editTitle, editBody, editRating,
    setEditTitle, setEditBody, setEditRating, setEditId, setReplyModalOpen, setReplyId, setReplyName, replies, setReplyDeleteModelOpen, setDeleteReplyId
}) => {
  const session = useSession()
  const user = session.data?.user;
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

  const prepareReplyModal = () => {
    if (!setReplyModalOpen || !setReplyId || !setReplyName) {
      toast.error("Something went wrong!")
      return
    }
    setReplyId(id)
    setReplyName(author)
    setReplyModalOpen(true)
  }

  const prepareDeleteReply = (replyId:string) => {
    if (!setReplyDeleteModelOpen || !setDeleteReplyId) {
      toast.error("Something went wrong!")
      return
    }

    setDeleteReplyId(replyId)
    setReplyDeleteModelOpen(true)
  }

  return (
    <div className='bg-[#f7dddd] rounded-xl shadow-black/40 shadow-sm'>
      <div className='bg-white rounded-xl shadow-sm shadow-black/40 py-4 px-5 flex flex-col'>
        <div className='flex justify-between'>
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
        {
          user?.email === "bella@gmail.com" && (
            <span className='text-sm font-medium hover:underline self-end cursor-pointer text-gray-600 hover:font-semibold' onClick={() => prepareReplyModal()}>
              Reply
            </span>
          )
        }
      </div>
      {
        replies && replies?.length > 0 && (
          <div className='text-sm flex flex-col gap-2 px-5 py-4'>
            {
              replies && replies.map(item => (
                <div key={item.id} className='flex justify-between relative'>
                  <div className='absolute inset-0 mt-[10px] z-10'>
                    <div className='w-full border-t border-gray-900 z-10' />
                  </div>
                  <div className='flex flex-col w-[90%] z-50'>
                    <span>
                      <span className='bg-[#f7dddd] px-2'>
                        <i>    
                            {item.body}
                        </i>
                      </span>
                    </span>
                    <span className='ml-5 mb-1 flex'><i>
                      {`—Bella`}
                    </i></span>
                  </div>
                  {
                    user?.email === "bella@gmail.com" && (
                      <Delete 
                        className='cursor-pointer bg-[#f7dddd] z-50' 
                        width={30} 
                        onClick={() => prepareDeleteReply(item.id)}
                      />
                    )
                  }
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default ReviewBox