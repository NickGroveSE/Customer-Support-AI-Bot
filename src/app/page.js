'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react"

export default function Home() {

  const [typing, setTyping] = useState(false)

  return (
    <div id="wrapper" onClick={function(e){ e.target.tagName == 'TEXTAREA' ? setTyping(true) : setTyping(false)}}>
      <div id="content">
        <img className={"glow eye"} id="left-eye" src="eye.svg"/>
        <img className={typing ? "pupil" : "pupil animated"} id="left-pupil" src="pupil.svg" style={{ transform: typing ? 'translate(13px, 20px)' : 'translate(0, 0)'}}/>
        <img className={"glow eye"} id="right-eye" src="eye.svg"/>
        <img className={typing ? "pupil" : "pupil animated"} id="right-pupil" src="pupil.svg" style={{transform: typing ? 'translate(13px, 20px)' : 'translate(0, 0)'}}/>
        <form>
          <textarea id="chat" placeholder="How Can Help?" ></textarea>
        </form>
      </div>
    </div>
  );
}
