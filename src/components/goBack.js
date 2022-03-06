
import * as React from "react"
import styled from "styled-components"

import { BiLeftArrow } from "react-icons/bi"
import { navigate } from "gatsby";

const CustomBox = styled.div`

.themed{margin-top:20px;}
=

`

   
const GoBack = () => (
<CustomBox style={{}}>





<button className="actionJackson " onClick={() => { navigate(-1) }} style={{display:'flex', justifyContent:'center', width:'30vw', alignContent:'center', margin:'2rem auto', fontSize:'1rem'}}><span className="icon -left" style={{paddingRight:'1rem'}}><BiLeftArrow /></span> {" "}Go Back</button>




</CustomBox>
  
)

export default GoBack