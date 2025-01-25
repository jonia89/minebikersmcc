 export const getUserName = async (userId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/vieraskirja/id/${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch user ID");
      }
      const user = await response.json();
      if (!user) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return user.nimi;
    } catch (error) {
      console.log(error);
      return null;
    }
  };