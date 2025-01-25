export const deletePost = async (id) => {
  try {
    const response = await fetch(
      `http://localhost:8080/vieraskirja/post/${id}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to delete message");
    }
    const result = await response.json();
    console.log(result.message);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
