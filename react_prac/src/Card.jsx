import {useState} from 'react';


function Card({title,content,image}){


return(

<>
    <div style={{border: '1px solid #ccc', padding: '20px', borderRadius: '8px', width: '300px' }}>

        {image&&<img src={image} alt={title} style={{width: '100%', borderRadius: '8px' }}/>}
        <h1>{title}</h1>
        <p>{content}</p>
</div>
</>


);

}

export default Card;