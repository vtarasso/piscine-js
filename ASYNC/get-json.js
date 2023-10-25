async function getJSON(path, params) {
    let url = path + "?";
    for (let entries of Object.entries(params)) {
      url += entries[0] + "=";
      if (typeof entries[1] == "string") {
        entries[1].split(" ").forEach((element) => (url += element + "+"));
        url = url.substring(0, url.length - 1) + "&";
      } else {
        url += entries[1] + "&";
      }
    }
    try {
      let result = await fetch(url.substring(0, url.length - 1));
      let json = await result.json();
  
      if (!result.ok) {
        throw Error(result.statusText);
      }
      if (json.error) {
        throw Error(json.error);
      }
  
      return json.data;
    } catch (err) {
      throw err;
    }
  }