export const deletePost = async (id) => {
  try {
    const response = await fetch(
      `https://vnfmu6bxo9.execute-api.eu-north-1.amazonaws.com/prod/vieraskirja/post/${id}`,

      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to delete message");
    }
    const result = await response.json();
    console.log(result);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
