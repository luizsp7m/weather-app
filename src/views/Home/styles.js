import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  min-height: 100vh;
`;

export const Content = styled.div`

`

export const Wrapper = styled.div`
  width: 75%;
  height: 100%;
  margin: 0 auto;
`

export const Select = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 3rem 0;
  gap: 1rem;

  > button {
    border-radius: 50%;
    height: 3.6rem;
    width: 3.6rem;
    background: var(--primary-color);
    color: var(--text-primary);
    font-weight: 700;
    cursor: pointer;
  }

  > button.selected {
    background: var(--text-primary);
    color: var(--primary-color);
  }
`

export const Forecast = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 2rem;
`

export const Today = styled.div`
  padding: 4rem 0;

  > div.title {
    color: var(--text-primary);
    font-weight: 500;
    font-size: 1.8rem;
    margin-bottom: 3rem;
  }
`

export const Status = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
`