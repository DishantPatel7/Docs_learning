import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      desc: "Lorem ipsum dll olor sit amet consectetur adipisicing elit",
      filesize: "0.9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      filesize: "0.9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      filesize: "0.9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
  ];
  return (
    <>
      <div ref={ref} className="fixed top-0 left-0 z-[3] p-5 w-full h-full flex gap-10 flex-wrap">
        {data.map((item, index) => (
          <Card data={item}  reference={ref}/>
        ))}
      </div>
    </>
  );
}

export default Foreground;
