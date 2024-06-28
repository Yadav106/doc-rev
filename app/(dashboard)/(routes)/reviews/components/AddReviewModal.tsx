"use client";

import React, { useState } from 'react'
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
}

const AddReviewModal:React.FC<ModalProps> = ({
    isOpen, onClose
}) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [hoverRating, setHoverRating] = useState(0)
    const [fixedRating, setFixedRating] = useState(0)

    const {
        register,
        handleSubmit,
        formState : {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            title: '',
            body: '',
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)
        axios.post(
            "/api/addReview",
            {
                ...data,
                "rating": fixedRating
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
        console.log(hoverRating)
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
                    {/* <Input id="rating" label="Rating" register={register} errors={errors} type='number'/> */}
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
                            Add Review
                        </Button>
                    </div>
            </form>
        </Modal>
    )
}

export default AddReviewModal