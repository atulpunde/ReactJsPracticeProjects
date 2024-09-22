import React from "react";
import styled from "styled-components";
import { BASE_URL, Button, Container } from "../../App";

const SearchResult = ({ data: foodCard }) => {
  return (
    <FoodCardsContainer>
      <Container>
        <FoodCards>
          {foodCard?.map(({ name, image, text, price }) => (
            <FoodCard key={name}>
              <div className="food-image">
                <img src={BASE_URL + image} alt="food" />
              </div>
              <div className="food-info">
                <div className="info">
                  <h3> {name} </h3>
                  <p>{text}</p>
                </div>
                <Button>₹{price.toFixed(2)}</Button>
              </div>
            </FoodCard>
          ))}
        </FoodCards>
      </Container>
    </FoodCardsContainer>
  );
};

export default SearchResult;

const FoodCardsContainer = styled.section`
  background-image: url("/bg.png");
  background-size: cover;
  min-height: calc(100vh - 210px);
`;

const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
  padding-top: 60px;

  @media (0 < width < 1080px) {
    padding: 30px 0;
  }
`;

const FoodCard = styled.div`
  width: 340px;
  height: 167px;
  border: 1px solid;
  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 00) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% 12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.05) 77%
    );
  background-blend-mode: overlay normal;
  backdrop-filter: blur(13.1842px);
  border-radius: 20px;
  display: flex;
  padding: 8px;

  .food-info {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: end;

    h3 {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 500;
    }
    p {
      margin-top: 4px;
      font-size: 12px;
    }
  }
`;
