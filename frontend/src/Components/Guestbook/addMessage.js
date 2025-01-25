export const addMessage = async (userId, message) => {
    try {
      await fetch("http://localhost:8080/vieraskirja/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nimi_id: userId,
          viesti: message,
          aika: new Date().toISOString().slice(0, 19).replace("T", " "),
        }),
      });
    } catch (error) {
      console.error(error);
    }
  };