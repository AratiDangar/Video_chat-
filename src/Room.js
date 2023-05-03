

import { useNavigate, useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';



function Room (){


const nevigate=useNavigate();
    const {roomID}=useParams();
    
    
const meeting=async(element)=>{

    const appID= 106095338;
    const serverSecret='709a459cffec6f16f6c301014974561a'
    const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(),"Arati");
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
        container:element,
        scenario:{
            mode:ZegoUIKitPrebuilt.GroupCall,
        },
    })
    
}

return(<>

 <div style={{background: "linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)",position:"fixed"}  }className=""  >


    <div 
      className="myCallContainer md:w-32 max-md:bg-red md:flex flex-col"
      ref={meeting}
      style={{ width: '100vw', height: '100vh' }}
    ></div>

</div>


</>)

};

export default Room;