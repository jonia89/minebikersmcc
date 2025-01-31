export const deleteUser = async (userId) => {
  try {
    const response = await fetch(
      `https://vnfmu6bxo9.execute-api.eu-north-1.amazonaws.com/prod/vieraskirja/user/${userId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to delete user");
    }
    const result = await response.json();
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
