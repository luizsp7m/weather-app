import styled from 'styled-components';
import bgImage from '../../assets/Cloud-background.png';

export const Container = styled.div`
  width: 100%;
  background: var(--primary-color);
  position: relative;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 3rem 0;

  > button {
    background: var(--button-color);
    color: var(--text-primary);
    box-shadow: 0 3px 5px rgba(0, 0, 0, .5);
    cursor: pointer;
  }

  > button.search-places {
    padding: 1rem 2rem;
    font-size: 1.6rem;
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
  padding: 6rem 0;
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
    max-width: 20rem;
    height: auto;
  }
`

export const WeatherInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div.temperature {
    color: var(--text-secondary);
    font-size: 5rem;
    
    > span {
      font-size: 16rem;
      font-weight: 500;
      color: var(--text-primary);
    }
  }

  > div.weather {
    color: var(--text-secondary);
    font-size: 3.6rem;
    margin: 8rem 0;
    font-weight: 600;
  }

  > div.footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--text-secondary);
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 3rem;

    > div.today {
      margin-bottom: 1rem;

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
  background: red;
`