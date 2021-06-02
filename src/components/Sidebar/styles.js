import styled from 'styled-components';
import bgImage from '../../assets/Cloud-background.png';

export const Container = styled.div`
  width: 40rem;
  height: 100%;
  background: var(--primary-color);
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  /* padding: 3rem 0; */

  > button {
    background: var(--button-color);
    color: var(--text-primary);
    box-shadow: 0 3px 5px rgba(0, 0, 0, .5);
    cursor: pointer;
  }

  > button.search-places {
    padding: 1rem 2rem;
    font-size: 1.35rem;
  }

  > button.geo-location {
    border-radius: 50%;
    height: 3.6rem;
    width: 3.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const WeatherImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0; 
  position: relative;

  &::after {
    background-image: url(${bgImage});
    background-position: center;
    background-size: cover;

    content:'';
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: .1;
  }

  > img.img-weather {
    width: 100%;
    max-width: 15rem;
    height: auto;
  }
`

export const WeatherInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div.temperature {
    color: var(--text-secondary);
    font-size: 3rem;
    
    > span {
      font-size: 9rem;
      font-weight: 500;
      color: var(--text-primary);
    }
  }

  > div.weather {
    color: var(--text-secondary);
    font-size: 2rem;
    margin: 2rem 0;
    font-weight: 600;
  }

  > div.footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--text-secondary);
    font-size: 1.45rem;
    font-weight: 500;
    /* margin-bottom: 3rem; */

    > div.today {
      /* margin-bottom: 1rem; */

      > span {
        margin: 0 1rem;
      }
    }

    > div.location {
      font-weight: 600;
      margin-top: 2rem;
    }
  }
`

export const Toggle = styled.div`
  z-index: 10;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: var(--primary-color);
  padding: 2rem;

  > div.close-sidebar {
    text-align: right;
    cursor: pointer;
  }

  > div.search {
    display: flex;
    margin: 2rem 0;
    gap: 1rem;

    > div.input-group {
      display: flex;
      align-items: center;
      border: 1px solid var(--text-primary);
      padding: 0 1rem;
      width: 100%;

      > input {
        height: 4rem;
        padding: 0 2rem 0 2rem;
        font-size: 1.35rem;
        width: 100%;
        color: var(--text-secondary);
      }
    }

    > button {
      color: var(--text-primary);
      background-color: #3C47E9;
      padding: 0 2rem;
      cursor: pointer;
    }
  }

  > div.cities {
    margin: 3rem 0;

    > h3 {
      color: var(--text-secondary);
    }

    > div.city {
      color: var(--text-primary);
      font-size: 1.35rem;
      opacity: .85;
      margin: 1rem 0;
      padding: 1.5rem 1rem;
      border: 1px solid rgba(0, 0, 0, 0);
      cursor: pointer;

      &:hover {
        border: 1px solid var(--text-secondary);
      }
    }
  }

`