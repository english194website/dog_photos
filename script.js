 async function displayImage() {
        try {
          const api = await fetch("https://dog.ceo/api/breeds/image/random");
          const data = await api.json();
          console.log(data);

          const container = document.createElement("div");
          const img = document.createElement("img");
          img.setAttribute("src", data.message);
          img.setAttribute("class", "image");
          img.style.width = "300px";
          container.append(img);
          document.body.append(container);
        } catch {
          const container = document.append("image not found");
        }
      }
