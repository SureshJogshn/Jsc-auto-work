import React, { useState, useEffect } from "react";
import { db, auth } from "../firebase";
import { collection, addDoc, onSnapshot, updateDoc, doc, arrayUnion, arrayRemove } from "firebase/firestore";
import { FaStar, FaRegUser, FaThumbsUp, FaReply } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function RatingComponent() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [averageRating, setAverageRating] = useState(0);
    const [reviews, setReviews] = useState([]);
    const [reviewText, setReviewText] = useState("");
    const user = auth.currentUser;  // Get logged-in user
    const ratingsCollectionRef = collection(db, "ratings");

    // **Login with Google**
    const loginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error("Google Sign-In Error: ", error);
        }
    };

    // **Submit Rating**
    const submitRating = async () => {
        if (rating === 0 || reviewText.trim() === "") {
            alert("Please select a rating and write a review!");
            return;
        }
        try {
            await addDoc(ratingsCollectionRef, {
                rating,
                text: reviewText,
                userName: user?.displayName || "Anonymous",
                userPhoto: user?.photoURL || "",
                userId: user?.uid || "guest",
                likes: [],
                replies: [],
                timestamp: new Date()
            });
            setReviewText(""); // Clear text box after submission
            setRating(0);
            alert("Thank you for your review!");
        } catch (error) {
            console.error("Error adding rating: ", error);
        }
    };

    // **Fetch Reviews & Calculate Average Rating**
    useEffect(() => {
        const unsubscribe = onSnapshot(ratingsCollectionRef, (snapshot) => {
            const ratingsArray = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setReviews(ratingsArray);
            const total = ratingsArray.reduce((acc, review) => acc + review.rating, 0);
            const avg = ratingsArray.length ? total / ratingsArray.length : 0;
            setAverageRating(avg.toFixed(1));
        });

        return () => unsubscribe();
    }, [ratingsCollectionRef]);

    // **Like / Unlike Review**
    const likeReview = async (reviewId, likes) => {
        if (!user) {
            alert("Please login to like!");
            return;
        }
        const reviewRef = doc(db, "ratings", reviewId);
        const updatedLikes = likes.includes(user.uid)
            ? arrayRemove(user.uid)  // Remove like if already liked
            : arrayUnion(user.uid);  // Add like if not liked
        await updateDoc(reviewRef, { likes: updatedLikes });
    };

    // **Reply to Review**
    const replyToReview = async (reviewId, replyText) => {
        if (!user) {
            alert("Please login to reply!");
            return;
        }
        const reviewRef = doc(db, "ratings", reviewId);
        await updateDoc(reviewRef, {
            replies: arrayUnion({
                text: replyText,
                userName: user.displayName || "Anonymous",
                userPhoto: user.photoURL || "",
                userId: user.uid || "guest",
                timestamp: new Date()
            })
        });
    };

    return (
        <div className="max-w-lg mx-auto p-4 bg-[#0f0f0f] text-white rounded-md">
            {/* Login Section */}
            {!user && (
                <button onClick={loginWithGoogle} className="mb-4 px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">
                    Login with Google
                </button>
            )}

            {/* Rating Section */}
            <h2 className="text-lg font-bold mb-2">Rate Our Service</h2>
            <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                        key={star}
                        className={`text-3xl cursor-pointer ${star <= (hover || rating) ? "text-yellow-400" : "text-gray-500"}`}
                        onMouseEnter={() => setHover(star)}
                        onMouseLeave={() => setHover(0)}
                        onClick={() => setRating(star)}
                    />
                ))}
            </div>

            {/* Review Textbox */}
            <textarea
                className="mt-3 p-2 w-full bg-gray-800 rounded border border-gray-600"
                rows="2"
                placeholder="Write a review..."
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
            />

            {/* Submit Button */}
            <button onClick={submitRating} className="mt-3 px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">
                Submit Review
            </button>

            {/* Display Average Rating */}
            <p className="mt-3 text-lg font-semibold">Average Rating: ⭐ {averageRating}</p>

            {/* Reviews Section */}
            <div className="mt-5">
                <h3 className="text-lg font-bold mb-2">Reviews</h3>
                {reviews.map((review) => (
                    <div key={review.id} className="p-3 bg-[#181818] rounded-md mb-3">
                        {/* User Info */}
                        <div className="flex items-center mb-2">
                            {review.userPhoto ? (
                                <img src={review.userPhoto} alt="User" className="w-8 h-8 rounded-full mr-2" />
                            ) : (
                                <FaRegUser className="text-xl mr-2" />
                            )}
                            <span className="font-semibold">{review.userName}</span>
                        </div>

                        {/* Rating & Review Text */}
                        <p className="mb-2">⭐ {review.rating} - {review.text}</p>

                        {/* Like Button */}
                        <button
                            onClick={() => likeReview(review.id, review.likes || [])}
                            className={`mr-2 px-3 py-1 rounded ${review.likes?.includes(user?.uid) ? "bg-red-500" : "bg-blue-500"}`}
                        >
                            <FaThumbsUp className="inline mr-1" /> {review.likes?.includes(user?.uid) ? "Unlike" : "Like"} ({review.likes?.length || 0})
                        </button>

                        {/* Reply Input */}
                        {user && (
                            <div className="mt-2 flex items-center">
                                <input
                                    type="text"
                                    className="p-1 flex-grow bg-gray-700 rounded border border-gray-600"
                                    placeholder="Reply..."
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") replyToReview(review.id, e.target.value);
                                    }}
                                />
                                <FaReply className="ml-2 cursor-pointer text-lg" onClick={() => replyToReview(review.id, reviewText)} />
                            </div>
                        )}

                        {/* Replies */}
                        {review.replies?.map((reply, index) => (
                            <div key={index} className="ml-4 mt-2 p-2 bg-gray-700 rounded">
                                <span className="font-semibold">{reply.userName}:</span> {reply.text}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
