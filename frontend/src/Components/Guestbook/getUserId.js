export const getUserId = async (nickname) => {
  try {
    const response = await fetch(
      `https://vnfmu6bxo9.execute-api.eu-north-1.amazonaws.com/prod/vieraskirja/nimi/${nickname}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Käyttäjä ID:n haku epäonnistui");
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
