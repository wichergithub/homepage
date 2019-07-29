import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const StyledHero = ({ img, className, children, home, temp }) => {
  return (
    <BackgroundImage className={className} fluid={img} home={home}>
      {children}
    </BackgroundImage>
  )
}

export default styled(StyledHero)`
  min-height: ${props => (props.home ? "calc(100vh - 62px)" : "50vh")};
  background: ${props =>
      props.home
        ? "linear-gradient(rgba(36, 6, 6, 0.7), rgba(0, 0, 0, 0))"
        : "none"},
    ${props =>
      props.temp
        ? "linear-gradient(rgba(255, 255, 255, 0.7), rgba(0, 0, 0, 0))"
        : "none"};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 1);
`
