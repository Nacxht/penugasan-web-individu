async function getFriendsBiodata() {
  const data = fetch("../assets/data/data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error happened:  " + response.statusText);
      }

      return response.json(); // Mengonversi respons menjadi JSON
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });

  return await data;
}

async function friendsBiodata() {
  const friendsBiodata = document.getElementById("biodata-list");
  const data = await getFriendsBiodata();
  console.log(data);
  const biodatas = `
    ${data
      .map(
        (i) => `
        <div class="biodata">
            <img src="${i.fotoselfie}" alt="${i.nama}" class="avatar">

            <table>
                <tr>
                    <td>Nama</td>
                    <td>:</td>
                    <td>${i.nama}</td>
                </tr>
                <tr>
                    <td>NIM</td>
                    <td>:</td>
                    <td>${parseInt(i.nim)}</td>
                </tr>
                <tr>
                    <td>TTL</td>
                    <td>:</td>
                    <td>${i.ttl}</td>
                </tr>
                <tr>
                    <td>Alamat</td>
                    <td>:</td>
                    <td>${i.alamat}</td>
                </tr>
                <tr>
                    <td>No. HP</td>
                    <td>:</td>
                    <td>${i.no}</td>
                </tr>
            </table>
        </div>
        `
      )
      .join("")}
    `;

  return (friendsBiodata.innerHTML = biodatas);
}

friendsBiodata();
