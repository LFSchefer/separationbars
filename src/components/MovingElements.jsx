import * as React from "react"

export default function MovingElements(props) {
  return(
    <>
    {props.direction === "right" ?
        <div className={props.className}
        style={{right: props.scrollY * props.speed < window.innerWidth ?
          props.scrollY * props.speed :
          props.scrollY * props.speed - ((Math.floor(props.speed * props.overlap) * window.innerWidth) + props.width),
          backgroundColor: props.color,
          boxShadow: props.shadowColor,
          borderRadius: "8px",
          position: "absolute",
          height: "10px",
          width: props.width,
          top: props.top }}>
        </div> :
        <div className={props.className}
        style={{left: props.scrollY * props.speed < window.innerWidth ?
          props.scrollY * props.speed :
          props.scrollY * props.speed - ((Math.floor(props.speed * props.overlap) * window.innerWidth) + props.width),
          backgroundColor: props.color,
          boxShadow: props.shadowColor,
          borderRadius: "8px",
          position: "absolute",
          height: "10px",
          width: props.width,
          top: props.top }}>
        </div>}
    </>
  )
}
