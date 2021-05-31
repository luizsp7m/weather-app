import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
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
    height: 4.2rem;
    width: 4.2rem;
    background: var(--primary-color);
    color: var(--text-primary);
    font-size: 1.5rem;
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

export const StatusCard = styled.div`
  background: var(--primary-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  color: var(--text-primary);

  > div.title {
    font-size: 1.45rem;
  }

  > div.status {
    margin: 1rem 0;
    font-size: 2rem;

    > span {
      font-weight: 700;
      font-size: 5rem;
    }
  }

  > div.wind {
    font-size: 1.35rem;
  }

  > div.bar-container {
    width: 100%;

    > div.percentages {
      display: flex;
      justify-content: space-between;
      font-size: 1.35rem;
      color: var(--text-secondary);
      font-weight: 700;
    }

    > div.progress-bar {
      background: rgba(0, 0, 0, .5);
      height: 1rem;
      border-radius: 5rem;
      margin: 1rem 0;

      > div.progress {
        height: 1rem;
        border-radius: 5rem;
        background: var(--progress-color);
      }
    }

    > div.percentage {
      font-size: 1.10rem;
      color: var(--text-secondary);
      font-weight: 700;
      text-align: right;
    }
  }
`