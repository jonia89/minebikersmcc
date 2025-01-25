export const addUser = async (nickname, ipAddress) => {
    try {
      const response = await fetch("http://localhost:8080/vieraskirja/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nimi: nickname,
          ip_osoite: ipAddress,
          ihminen: true,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to create user");
      }
      const data = await response.json();
      return data.nimi_id;
    } catch (error) {
      console.error(error);
    }
  };