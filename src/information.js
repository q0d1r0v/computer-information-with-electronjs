let inf = require("systeminformation");

let getInfo = async () => {
  let diskSSD = (await inf.diskLayout())[1];
  localStorage.setItem("cpu", JSON.stringify(await inf.cpu()));
  localStorage.setItem("ram", JSON.stringify(await inf.mem()));
  localStorage.setItem("disk", JSON.stringify((await inf.diskLayout())[0]));
  localStorage.setItem("os", JSON.stringify(await inf.osInfo()));
  if (diskSSD) {
    localStorage.setItem(
      "diskSSD",
      JSON.stringify((await inf.diskLayout())[1])
    );
  }
  // localStorage.setItem("versions", JSON.stringify(await inf.versions()));
  // localStorage.setItem("audio", JSON.stringify(await inf.audio()));
  // localStorage.setItem("graphics", JSON.stringify(await inf.graphics()));
  //   localStorage.setItem("ram", JSON.stringify(await inf.mem()));
};

getInfo();
