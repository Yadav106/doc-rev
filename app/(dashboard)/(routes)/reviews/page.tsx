"use client"

import { Button } from "@/components/ui/button";
import axios from "axios";

const Reviews = () => {
    async function addReview() {
        const response = await axios.post(
            "/api/addReview",
            {
                title: "Nice",
                body: "Test review with rating 3",
                rating: 3
            }
        )

        console.log(response)
    }

    return (
        <div>
            <Button onClick={() => addReview()}>
                Add Review
            </Button>
        </div>
    )
}
 
export default Reviews;