
import Image from "next/image";
export default function Skills() {
  return (
    <>
      <div className="skills-container">
        <h2 className="skills-title">My Skills</h2>
        <div className="skills-list">
          <Image
            src={"/images/html.jpeg"}
            width={70}
            height={70}
            alt="#"
          ></Image>
          <Image
            src={"/images/css-icon.png"}
            width={70}
            height={70}
            alt="#"
          ></Image>

          <Image src={"/images/js.jpeg"} 
          width={80}
           height={60}
            alt="#">
            </Image>


          <Image
            src={"/images/typescript.jpeg"}
            width={70}
            height={70}
            alt="#"
          ></Image>

          <Image
            src={"/images/node.js.jpeg"}
            width={80}
            height={70}
            alt="#"
          ></Image>

          <Image
            src={"/images/next.js.jpeg"}
            width={80}
            height={70}
            alt="#"
          ></Image>

          <Image
            src={"/images/react.jpeg"}
            width={70}
            height={70}
            alt="#"
          ></Image>
          
          <Image
            src={"/images/phython.jpeg"}
            width={70}
            height={70}
            alt="#"
          ></Image>
        </div>
      </div>
    </>
  );
}
