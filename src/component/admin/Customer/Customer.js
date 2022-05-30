import React from 'react'
import styled from 'styled-components'
export default function Customer() {
    const Main=styled.div`
    background-color:rgba(245, 234, 221, 0.906);
    padding:5px;
    height:100px;
    margin:5px 25px;
    border-radius:10px;
    div{ 
        div{
            background-color:white;
            height:70px;
            width:80px;
            border-radius:50px;
        }
    }
    `;
  return (
    <Main>
<div>
    <div>
{/* image s  */}
    </div>
   <span> <span style={{marginRight:'10px'}}>email:</span><span>simiongitau99@gmail.com</span> </span>
</div>
    </Main>
  )
}
