
import Image from "next/image";
export default function home() {
  return (
    <div className="homecontainer">
      <div className="childcontainer">
        Hey, <br></br> My Name is <span className="BlueColour">Osama</span> <br></br>
        i am developer
        <br></br>This is my short Introduction with profile Picture <br></br>
        </div>
      <div className="childcontainer">
        <Image className="profilePicture" src = "/image.png" alt = "profilePicture" width={200} height={200}/>
        </div>

    </div>
  )
} 

