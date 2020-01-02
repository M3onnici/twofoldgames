import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  color: white;
  width: 100%;

  .icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    a {
      filter: invert(100%) sepia(0%) saturate(2%) hue-rotate(100deg)
        brightness(108%) contrast(101%);
      flex: 1 1;
      padding: 1rem;
    }
  }
`;
