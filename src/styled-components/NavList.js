import styled from "styled-components"

export default styled.ul`
  display: none;
  @media (min-width: 992px) {
    display: flex;
    flex-direction: ${props => (props.primary ? "column" : "row")};
    list-style: none;
    text-align: center;
  }
`
