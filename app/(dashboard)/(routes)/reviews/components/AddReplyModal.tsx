"use client";

import Button from '@/app/components/Button';
import Input from '@/app/components/Input';
import Modal from '@/app/components/Modal'
import TextArea from '@/app/components/TextArea';
import axios from 'axios';
import React, { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    author: string,
    id: string
}

const AddReplyModal:React.FC<ModalProps> = ({
    isOpen, onClose, author, id
}) => {

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const {
        register,
        handleSubmit,
        formState : {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            replyBody: ""
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)
        axios.post(
            "/api/reply/add",
            {
                ...data,
                reviewId: id
            }
        )
        .then(() => toast.success("Reply Posted"))
        .catch((e) => {
            console.log(e)
            toast.error("Some error occured")
        })
        .finally(() => {
            setIsLoading(false)
            location.reload()
        })
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className='flex flex-col gap-4'>
                <span className='text-sm text-gray-600'>
                    Reply to 
                    <span className='font-bold ml-1'>{author}</span>
                </span>
                <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
                    <TextArea id="replyBody" label="Body" register={register} errors={errors}/>
                    <div>
                        <Button disabled={isLoading} fullWidth type='submit'>
                            Reply
                        </Button>
                    </div>
                </form>
            </div>
        </Modal>
    )
}

export default AddReplyModal