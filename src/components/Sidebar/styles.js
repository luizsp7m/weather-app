import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: var(--primary-color);
  position: relative;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;

  > button {
    background: var(--button-color);
    color: var(--text-primary);
    box-shadow: 0 1px 5px rgba(0, 0, 0, .5);
    cursor: pointer;
  }

  > button.search-places {
    padding: 1rem 2rem;
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
  padding: 6rem 0;
  position: relative;
  overflow: hidden;

  > img.img-weather {
    width: 100%;
    max-width: 12rem;
    height: auto;
  }

  > img.img-background {
    position: absolute;
    object-fit: contain;
    width: 100%;
    height: auto;
    opacity: .4;
    top: 10%;
    bottom: 0;
    left: 0;
    right: 0;
  }
`

export const WeatherInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div.temperature {
    color: var(--text-primary);
    font-size: 3rem;
    
    > span {
      font-size: 7rem;
      font-weight: 500;
    }
  }

  > div.weather {
    color: var(--text-secondary);
    font-size: 3rem;
    margin: 5rem 0;
    font-weight: 500;
  }

  > div.footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--text-secondary);
    font-size: 1.35rem;

    > div.today {
      margin-bottom: 1rem;

      > span {
        margin: 0 1rem;
      }
    }

    > div.location {
      
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