import React from "react";
//oncopy event= user copies the text .we can responed copied text.
const Copy = () => {
  const copy = () => {
    console.log("this message is coped");
  };
  return (
    <div onCopy={copy} onClick={copy}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
      consectetur voluptatum minus dolore aliquam corrupti exercitationem cum
      facere explicabo sed, dolorum odio nostrum, minima quasi asperiores
      accusantium dolores, velit suscipit!
    </div>
  );
};

export default Copy;
