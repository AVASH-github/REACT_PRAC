import React from "react";


function ButtonClick({count,onClick}){

 
return(
<>
<button onClick={onClick}>
Click {count}Me
</button>

</>
);
}
export default ButtonClick;