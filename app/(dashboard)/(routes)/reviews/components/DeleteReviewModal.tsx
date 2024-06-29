"use client";

import React, { useState } from 'react'
import Modal from '@/app/components/Modal'
import { Button } from '@/components/ui/button';
import axios from 'axios';

interface DeleteReviewModalProps {
    isOpen?: boolean;
    onClose: () => void;
    id: string
}

const DeleteReviewModal: React.FC<DeleteReviewModalProps> = ({
    isOpen, onClose, id
}) => {

  const [disabled, setDisabled] = useState<boolean>(false)

  const deleteReview = async (reviewId:string) => {
    setDisabled(true)
    await axios.post(
      "/api/reviews/delete",
      {
        reviewId: reviewId
      }
    )
    setDisabled(false)
    location.reload()
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className='flex flex-col'>
        Are you sure you want to delete the review?
        <div className='flex gap-5 mt-4 self-end'>
          <Button variant="outline" onClick={() => onClose()}>Cancel</Button>
          <Button variant="destructive" disabled={disabled} onClick={() => deleteReview(id)}>Delete</Button>
        </div>
      </div>
    </Modal>
  )
}

export default DeleteReviewModal