export const getUserName = async (userId) => {
  try {
    const response = await fetch(
      `https://vnfmu6bxo9.execute-api.eu-north-1.amazonaws.com/prod/vieraskirja/id/${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Käyttäjänimen haku epäonnistui");
    }
    const user = await response.json();
    if (!user) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};
