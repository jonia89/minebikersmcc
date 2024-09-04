function importAll(r) {
    let images = {};
    r.keys().forEach((item) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  }
  
  export const flags = importAll(require.context('./Images/flags/3x2', false, /\.(svg)$/));
  