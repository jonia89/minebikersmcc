export const deleteUser = async (userId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/vieraskirja/user/${userId}`,
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
      console.log(result.message);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };