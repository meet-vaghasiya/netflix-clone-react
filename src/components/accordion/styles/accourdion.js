import styled from "styled-components";

export const Item = styled.div`
  background-color: #000;
  color: #fff;
`;

export const Container = styled.div``;

export const Frame = styled.div`
  max-width: 900px;
  width: 75%;
  margin: auto;
  list-style: none;
  padding-left: 0;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 50px;

  @media (max-width: 600px) {
    font-size: 30px;
  }

  text-align: center;
`;

export const List = styled.li`
  background-color: #303030;
  font-size: 20px;
  padding: 20px 30px;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const Head = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 26px;
  margin: 0;

  margin-bottom: 2px;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
    user-select: none;

    @media (max-width: 600px) {
      width: 16px;
    }
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Body = styled.p`
  padding-top: 20px;
  border-top: 2px solid #000;
`;
