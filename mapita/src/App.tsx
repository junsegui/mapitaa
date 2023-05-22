import './App.css'
import svg from "./assets/BRC_1stFloor_meetingRooms_clean-plain.svg";
import svg2 from "./assets/BRC_1stFloor_meetingRooms_clean.svg";
import React,{useRef,useState} from "react";



function App() {
const rectReft = useRef<SVGAElement | null > (null)
const [selectedRoomPosition,setSelectedRoomPosition] = useState({x:0,y:0})

function handleRoomClick(event: React.MouseEvent<SVGSVGElement>) {
  const svgElement = event.currentTarget;
  const { left, top, width, height } = svgElement.getBoundingClientRect();
  const clickX = event.clientX - left;
  const clickY = event.clientY - top;

  
  const roomPosition = {
    x: (clickX / width) * 100,  
    y: (clickY / height) * 100  
  };

  setSelectedRoomPosition(roomPosition);
}


  console.log()
  return (
    <>
      <img src={svg2}/>
    </>
  )
}

export default App
