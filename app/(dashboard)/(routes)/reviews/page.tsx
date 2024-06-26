"use client"

import { Button } from "@/components/ui/button";
import { useState } from "react";
import AddReviewModal from "./components/AddReviewModal";

const Reviews = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <AddReviewModal isOpen={isOpen} onClose={() => setIsOpen(false)}/>
            <div>
                <Button onClick={() => setIsOpen(true)}>
                    Add Review
                </Button>
            </div>
        </>
    )
}
 
export default Reviews;