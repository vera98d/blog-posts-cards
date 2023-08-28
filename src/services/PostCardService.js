export default async function fetchPostsContent() {
    const apiUrl = "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json";
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        return data;
    }
    catch (error) {
        return error;
    }
}