import React from 'react'
import notFound from '../../assets/NotFound.png'
import logo from '../../assets/logo1.png'

import { Link } from 'react-router-dom'
// import Nav from '../Navbar/Nav'

import {AiFillCaretLeft} from "react-icons/ai"

const style = {

  pageNF: {
    width:"100%",
    height:"auto",
    position:"absolute",
    top:"0",
    textAlign:"center",
    color:"#28877f",
    fontSize:"1rem",
    paddingTop:"1rem",
    zIndex:999999,
    backgroundColor:"white",
  },
  imgStyle : {
    width:"100%",
    maxHeight:'100%'
  },
  ButtonStyle :{
    position:"absolute",
    zIndex:"4",
    top:"2%",
    left:"3%",
    textDecoration:"none",
    color:"#28877f",
    border:"2px solid #28877f",
    borderRadius:"35px",
    padding:"1rem 3rem",
    display:"flex",
    alignItems:"center",
  
  }
  
}


export const NotFound = () => {
  return (
    <div style={style.pageNF}>
    <h1>Page Not Found</h1>
      <img src={notFound} alt="" srcset="" style={style.imgStyle}/>
      <Link to="/" style={style.ButtonStyle} className="NFButton"> <AiFillCaretLeft></AiFillCaretLeft> Go Back Home</Link>
    </div>
  )
}

export  default NotFound;