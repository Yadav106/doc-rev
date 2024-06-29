"use client";

import React, { useEffect, useState } from 'react'
import Modal from '@/app/components/Modal'
import Button from '@/app/components/Button';
import Input from '@/app/components/Input';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import axios from "axios"
import toast from "react-hot-toast"
import { Star } from 'lucide-react';

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    editTitle:string;
    editBody:string;
    editRating:number;
    editId:string;
}

const EditRevewModal:React.FC<ModalProps> = ({
    isOpen, onClose, editBody, editId, editRating, editTitle
}) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [hoverRating, setHoverRating] = useState(0)
    const [fixedRating, setFixedRating] = useState(editRating)

    const {
        register,
        handleSubmit,
        formState : {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            title: editTitle,
            body: editBody,
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)
        axios.post(
            "/api/reviews/edit",
            {
                ...data,
                "rating": fixedRating,
                "reviewId": editId
            }
        )
        .then(() => toast.success("Review Posted"))
        .catch((e) => {
            console.log(e)
            toast.error("Some error occured")
        })
        .finally(() => {
            setIsLoading(false)
            location.reload()
        })
    }

    const fillStars = (index:number) => {
        if (index <= hoverRating || index <= fixedRating) {
            return "#000"
        }

        return "#fff"
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
                    <Input id="title" label="Title" register={register} errors={errors}/>
                    <Input id="body" label="Body" register={register} errors={errors}/>

                    <label className='block text-sm font-medium leading-6 text-gray-900'>
                        Rating
                    </label>
                    <div className='flex gap-2'>
                        {
                            [1, 2, 3, 4, 5].map(item => {
                                return (
                                    <Star key={item} onMouseEnter={() => setHoverRating(item)} onMouseLeave={() => setHoverRating(0)} fill={fillStars(item)} onClick={() => setFixedRating(item)}/>
                                )
                            })
                        }
                    </div>
                    <div>
                        <Button disabled={isLoading} fullWidth type='submit'>
                            Edit Review
                        </Button>
                    </div>
            </form>
        </Modal>
    )
}

export default EditRevewModal