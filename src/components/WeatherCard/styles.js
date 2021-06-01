import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--primary-color);
  padding: 2rem 1rem;
  color: #E7E7EB;
  font-size: 1.55rem;
  font-weight: 500;

  > div.day {

  }

  > img {
    height: 100%;
    max-height: 6rem;
    width: auto;
    margin: 1rem 0 2.5rem 0;
  }

  > div.temperatures {
    display: flex;
    gap: 3rem;
    font-size: 1.65rem;

    > span.min {
      color: var(--text-secondary);
    }
  }
`;
