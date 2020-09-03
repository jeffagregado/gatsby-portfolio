import styled from "styled-components"

export default styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem 1rem;
  max-width: 75rem;

  @media (min-width: 992px) {
    padding: 5rem 3rem;
    margin-left: calc(17em);
  }

  @media (min-width: 768px) {
    min-height: 100vh;
  }
`
