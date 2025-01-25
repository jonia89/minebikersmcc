export const updateUser = async (userId, nickname) => {
    try {
      const response = await fetch(
        `http://localhost:8080/vieraskirja/user/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nimi: nickname,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update user");
      }
      const result = await response.json();
      console.log(result.message);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };