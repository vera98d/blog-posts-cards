import postCard from "./src/components/PostCard.js";
import fetchPostsContent from "./src/services/PostCardService.js";

const createBlogCards = async () => {
    const cardContainer = document.querySelector(".page-container");

    try {
        const posts = await fetchPostsContent();

        const gridRow = document.createElement("div");
        gridRow.className = "row";

        posts.forEach(post => {
            const card = postCard(post);
            gridRow.appendChild(card);
        });

        cardContainer.appendChild(gridRow);
    }
    catch (error) {
        console.error("Error fetching data:", error);

        const errorMessage = document.createElement("h2");

        errorMessage.className = "p-heading--1 u-align--center";
        errorMessage.textContent = "An error occurred while fetching data.";

        cardContainer.appendChild(errorMessage);
    }

}

document.addEventListener("DOMContentLoaded", createBlogCards);