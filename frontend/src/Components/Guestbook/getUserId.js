export const getUserId = async (nickname) => {
    try {
      const response = await fetch(
        `http://localhost:8080/vieraskirja/nimi/${nickname}`,
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
      return user.nimi_id;
    } catch (error) {
      console.error(error);
      return null;
    }
  };