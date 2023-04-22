export default function Home() {
  const callAPI = async () => {
    try {
      const res = await fetch(
        `https://api.themeparks.wiki/v1/entity/2aedc657-1ee2-4545-a1ce-14753f28cc66/live`
      );
      let data = await res.json();
      console.log(data);
      let waitTime = data["liveData"][0]["queue"].STANDBY.waitTime;
      data = data["liveData"][0]["status"];
      
      let status = "";
      if (data == "OPERATING") {
        status = "NO";
      }
      else {
        status = "YES";
      }
      document.getElementById('OnLoad').innerHTML = status;
      document.getElementById('WaitTime').innerHTML = `(Current wait time is: ${waitTime} minutes)`;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div onLoad={callAPI()} className="main">
      <div className="grid h-screen place-items-center">
        <div id="OnLoad"></div>
        <div id="WaitTime"></div>
      </div>   
      <div className="circles">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
    </div>
    
  );
}