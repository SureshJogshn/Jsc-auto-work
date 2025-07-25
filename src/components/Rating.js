import React, { useState, useEffect } from "react";
import { db, auth } from "../firebase";
import {
    collection,
    addDoc,
    onSnapshot,
    updateDoc,
    doc,
    arrayUnion,
    arrayRemove
} from "firebase/firestore";
import { FaStar, FaRegUser, FaThumbsUp, FaReply } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function RatingComponent() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [averageRating, setAverageRating] = useState(0);
    const [reviews, setReviews] = useState([]);
    const [reviewText, setReviewText] = useState("");
    const user = auth.currentUser;
    const ratingsCollectionRef = collection(db, "ratings");

    const loginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error("Google Sign-In Error: ", error);
        }
    };

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
            setReviewText("");
            setRating(0);
            alert("Thank you for your review!");
        } catch (error) {
            console.error("Error adding rating: ", error);
        }
    };

    useEffect(() => {
        const unsubscribe = onSnapshot(ratingsCollectionRef, (snapshot) => {
            const ratingsArray = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setReviews(ratingsArray);
            const total = ratingsArray.reduce((acc, review) => acc + review.rating, 0);
            const avg = ratingsArray.length ? total / ratingsArray.length : 0;
            setAverageRating(avg.toFixed(1));
        });

        return () => unsubscribe();
    }, []);

    const likeReview = async (reviewId, likes) => {
        if (!user) {
            alert("Please login to like!");
            return;
        }
        const reviewRef = doc(db, "ratings", reviewId);
        const updatedLikes = likes.includes(user.uid)
            ? arrayRemove(user.uid)
            : arrayUnion(user.uid);
        await updateDoc(reviewRef, { likes: updatedLikes });
    };

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
        <div className="max-w-[95%] md:max-w-3xl mx-auto p-4 sm:p-6 md:p-8 bg-[#0f0f0f] text-white rounded-md">
            {!user && (
                <button onClick={loginWithGoogle} className="mb-4 px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">
                    Login with Google
                </button>
            )}

            <h2 className="text-base sm:text-lg md:text-xl font-bold mb-2">Rate Our Service</h2>
            <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                        key={star}
                        className={`text-2xl cursor-pointer ${star <= (hover || rating) ? "text-yellow-400" : "text-gray-500"}`}
                        onMouseEnter={() => setHover(star)}
                        onMouseLeave={() => setHover(0)}
                        onClick={() => setRating(star)}
                    />
                ))}
            </div>

            <textarea
                className="mt-3 text-sm sm:text-base p-2 w-full bg-gray-800 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="2"
                placeholder="Write a review..."
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
            />

            <button
                onClick={submitRating}
                className="mt-3 text-sm px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
            >
                Submit Review
            </button>

            <p className="mt-3 text-sm font-semibold">Average Rating: ⭐ {averageRating}</p>

            <div className="mt-5 overflow-y-scroll h-[400px] sm:h-[450px] md:h-[500px]">
                <h3 className="text-sm sm:text-base font-bold mb-2">Reviews</h3>
                {reviews.map((review) => (
                    <div key={review.id} className="p-3 bg-[#181818] rounded-md mb-3">
                        <div className="flex items-center mb-2">
                            {review.userPhoto ? (
                                <img src={review.userPhoto} alt="User" className="w-8 h-8 rounded-full mr-2" />
                            ) : (
                                <FaRegUser className="text-xl mr-2" />
                            )}
                            <span className="font-semibold">{review.userName}</span>
                        </div>

                        <p className="mb-3">⭐ {review.rating} - {review.text}</p>

                        <button
                            onClick={() => likeReview(review.id, review.likes || [])}
                            className={`text-sm px-3 py-1 rounded ${review.likes?.includes(user?.uid) ? "bg-red-500" : "bg-blue-500"}`}
                        >
                            <FaThumbsUp className="text-sm inline mr-1 mt-2" /> {review.likes?.includes(user?.uid) ? "Unlike" : "Like"} ({review.likes?.length || 0})
                        </button>

                        {user && (
                            <div className="mt-2 flex items-center">
                                <input
                                    type="text"
                                    className="text-sm p-1 flex-grow bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Reply..."
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") replyToReview(review.id, e.target.value);
                                    }}
                                />
                                <FaReply className="text-sm ml-2 cursor-pointer text-lg" onClick={() => replyToReview(review.id, reviewText)} />
                            </div>
                        )}

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
