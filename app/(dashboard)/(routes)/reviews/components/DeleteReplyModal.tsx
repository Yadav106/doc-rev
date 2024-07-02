"use client";

import Modal from '@/app/components/Modal'
import { Button } from '@/components/ui/button';
import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    id: string
}

const DeleteReplyModal:React.FC<ModalProps> = ({
    isOpen, onClose, id
}) => {
    const deleteReply = (replyId:string) => {
        axios.post(
          "api/reply/delete",
          {
            replyId: replyId
          }
        )
        .then(() => toast.success("Reply Deleted"))
            .catch((e) => {
                console.log(e)
                toast.error("Some error occured")
            })
            .finally(() => {
                location.reload()
          })
      }
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className='flex flex-col gap-2'>
                <span className='text-sm font-bold underline'>Delete Reply</span>
                Do you wanna delete the reply?
                <Button onClick={() => deleteReply(id)}>
                    Delete Reply
                </Button>
            </div>
        </Modal>
    )
}

export default DeleteReplyModal