import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--primary-color);
  padding: 2rem 1rem;
  color: var(--text-primary);
  font-size: 1.55rem;
  font-weight: 500;

  > div.day {

  }

  > img {
    width: 100%;
    max-width: 5rem;
    height: auto;
    margin: 1rem 0;
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
