import styled from "styled-components"

export default styled.li`
  display: block;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  margin: 10px 0;

  > .nav-link {
    padding: 0.5rem 1rem;
    font-weight: 700;
    color: ${props => (props.active ? "white" : "rgba(255, 255, 255, 0.5)")};
    transition: 0.5s;

    &:hover {
      color: #dee2e6;
    }
  }
`
