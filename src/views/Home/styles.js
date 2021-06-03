import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;

  @media(max-width: 700px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const Content = styled.div`
  width: calc(100% - 40rem);
  margin-left: 40rem;

  > div.loading {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
  }

  @media(max-width: 700px) {
    width: 100%;
    margin: 0;
  }
`

export const Wrapper = styled.div`
  width: 80%;
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
    font-size: 1.35rem;
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
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  grid-gap: 2rem;
`

export const Today = styled.div`
  padding: 5rem 0;

  > div.title {
    color: var(--text-primary);
    font-weight: 600;
    letter-spacing: .1rem;
    font-size: 1.8rem;
    margin-bottom: 3rem;
  }
`

export const Status = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;

  @media(max-width: 998px) {
    grid-template-columns: 1fr;
  }
`

export const StatusCard = styled.div`
  background: var(--primary-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 2rem;
  color: var(--text-primary);

  > div.title {
    font-size: 1.9rem;
  }

  > div.status {
    margin: 1rem 0;
    font-size: 3rem;

    > span {
      font-weight: 700;
      font-size: 6rem;
    }
  }

  > div.wind {
    font-size: 1.55rem;

    display: flex;
    align-items: center;
    gap: 1rem;

    text-transform: lowercase;

    > div.direction {
      height: 3rem;
      width: 3rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(255, 255, 255, 0.3);
    }
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

export const Footer = styled.div`
  padding: 2rem 0;

  > h1 {
    text-align: center;
    color: var(--text-secondary);
    font-size: 1.35rem;
    font-weight: 600;

    > a {
      color: var(--text-secondary);
      font-weight: 700;
    }
  }
`