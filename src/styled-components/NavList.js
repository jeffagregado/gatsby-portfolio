import styled from "styled-components"

export default styled.ul`
  display: none;
  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
    list-style: none;
    text-align: center;

    > .is-current {
      color: rgba(255, 255, 255, 1);
    }
  }
`
