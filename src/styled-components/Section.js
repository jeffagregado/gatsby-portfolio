import styled from "styled-components"

export default styled.section`
  display: flex;
  flex-direction: column;

  max-width: 75rem;

  @media (min-width: 992px) {
    padding: 10rem 0 calc(10rem);
    margin-left: calc(17em);
  }

  @media (min-width: 768px) {
    min-height: 80vh;
  }
`
