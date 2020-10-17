import styled from 'styled-components';

const PlaylistsContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0px 0.9rem;

  @media (max-width: 800px) {
    justify-content: center;
  }
  h2 {
    color: #fa2d3b;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 3rem;
`;

const PlaylistCard = styled.div`
  position: relative;
  display: flex;
  margin: 15px;
  width: 20rem;
  height: 25rem;
  border-radius: 10px;
  box-shadow: 7px 8px 24px -13px rgba(20, 20, 20, 1);

  :hover {
    transform: scale(1.1);
    transition: 0.3s;
  }
`;

const PlaylistImg = styled.img`
  border-radius: 10px;
  width: 100%;
`;

const PlaylistTextArea = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 95%;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  padding: 0.2rem 0.5rem;
  border-radius: 10px;
  color: white;

  span:first-child {
    font-weight: 500;
    font-size: 1rem;
    padding: 0.7rem 0;
  }

  :hover {
    padding-top: 1rem;
    align-items: center;
    top: 0;

    span:first-child {
      font-weight: 600;
      font-size: 1.3rem;
    }

    span:last-child {
      margin-top: 1rem;
      display: inline;
    }
  }

  span:last-child {
    display: none;
  }
`;

export {
  PlaylistsContainer,
  PlaylistCard,
  PlaylistImg,
  PlaylistTextArea,
  Title,
};
