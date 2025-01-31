export const addUser = async (nickname, ipAddress) => {
  try {
    const response = await fetch(
      "https://vnfmu6bxo9.execute-api.eu-north-1.amazonaws.com/prod/vieraskirja/user",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nimi: nickname,
          ip_osoite: ipAddress,
          ihminen: true,
        }),
      }
    );
    if (!response.ok) {
      throw new Error("Käyttäjän luominen epäonnistui");
    }
    const data = await response.json();
    return data.nimi_id;
  } catch (error) {
    console.error(error);
  }
};
