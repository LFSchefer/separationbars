import * as React from "react"
import "./SeparationBars.css"
import MovingElements from "./MovingElements"

export default function SeparationBars(props) {

  const [scrollY, setScroolY] = React.useState(0)

  const handleScroll = () => {
   setScroolY(window.scrollY)
  }

  let overlap = scrollY / window.innerWidth

  React.useEffect(() => {
    function watchScroll() {
      document.addEventListener("scroll", handleScroll)
    }
    watchScroll();
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  },[])

  return (
    <div className="separation" >
      <MovingElements className={"line1"}
      speed={1}
      scrollY={scrollY}
      overlap={overlap}
      color={props.color}
      shadowColor={props.shadowColor}
      direction={props.direction}
      width={314}
      top={"0px"}/>
      <MovingElements className={"line11"}
      speed={0.2}
      scrollY={scrollY}
      overlap={overlap}
      color={props.color}
      shadowColor={props.shadowColor}
      direction={props.multiway ? props.direction === "right" ? "left" : "right" : props.direction}
      width={450}
      top={"0px"}/>
      <MovingElements className={"line2"}
      speed={2}
      scrollY={scrollY}
      overlap={overlap}
      color={props.color}
      shadowColor={props.shadowColor}
      direction={props.direction}
      width={214}
      top={"15px"}/>
      <MovingElements className={"line21"}
      speed={0.8}
      scrollY={scrollY}
      overlap={overlap}
      color={props.color}
      shadowColor={props.shadowColor}
      direction={props.multiway ? props.direction === "right" ? "left" : "right" : props.direction}
      width={356}
      top={"15px"}/>
      <MovingElements className={"line3"}
      speed={1.5}
      scrollY={scrollY}
      overlap={overlap}
      color={props.color}
      shadowColor={props.shadowColor}
      direction={props.direction}
      width={600}
      top={"30px"}/>
      <MovingElements className={"line31"}
      speed={4}
      scrollY={scrollY}
      overlap={overlap}
      color={props.color}
      shadowColor={props.shadowColor}
      direction={props.multiway ? props.direction === "right" ? "left" : "right" : props.direction}
      width={170}
      top={"30px"}/>
      <MovingElements className={"line4"}
      speed={3}
      scrollY={scrollY}
      overlap={overlap}
      color={props.color}
      shadowColor={props.shadowColor}
      direction={props.direction}
      width={145}
      top={"45px"}/>
      <MovingElements className={"line41"}
      speed={1}
      scrollY={scrollY}
      overlap={overlap}
      color={props.color}
      shadowColor={props.shadowColor}
      direction={props.multiway ? props.direction === "right" ? "left" : "right" : props.direction}
      width={427}
      top={"45px"}/>
    </div>
  )
}
