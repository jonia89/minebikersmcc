export const addMessage = async (userId, message, linkitysId = null) => {
  try {
    await fetch(
      "https://vnfmu6bxo9.execute-api.eu-north-1.amazonaws.com/prod/vieraskirja/post",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nimi_id: userId,
          viesti: message,
          linkitys_id: linkitysId
        }),
      }
    );
  } catch (error) {
    console.error(error);
  }
};
