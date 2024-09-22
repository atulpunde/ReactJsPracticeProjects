import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResults/SearchResult";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const foodDataResponse = await fetch(BASE_URL);
        const foodData = await foodDataResponse.json();
        setData(foodData);
        setFilteredData(foodData);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch the data from server.");
        setLoading(false);
      }
    };
    fetchFoodData();
  }, []);

  const filterFood = (type) => {
    if (type === "all") {
      setFilteredData(data);
      setSelectedBtn("all");
      return;
    }

    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter);
    setSelectedBtn(type);
  };

  const searchFood = (e) => {
    const searchValue = e.target.value;

    if (searchValue === "") {
      setFilteredData(null);
    }

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredData(filter);
  };

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading data...</div>;

  const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];

  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/logo.svg" alt="logo" />
          </div>
          <div className="search">
            <input placeholder="Search Food.." onChange={searchFood} />
          </div>
        </TopContainer>

        <FilterComponent>
          {filterBtns.map((btn) => (
            <Button
              isSelected={selectedBtn === btn.type}
              onClick={() => filterFood(btn.type)}
            >
              {btn.name}
            </Button>
          ))}
        </FilterComponent>
      </Container>
      <SearchResult data={filteredData} />
    </>
  );
};

export default App;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TopContainer = styled.section`
  height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
      &::placeholder {
        color: white;
      }
    }
  }

  @media (0 < width < 600px) {
    flex-direction: column;
    height: 120px;
  }
`;

const FilterComponent = styled.section`
  display: flex;
  justify-content: center;
  gap: 8px;
  padding-bottom: 40px;
`;

export const Button = styled.button`
  background-color: ${({ isSelected }) => (isSelected ? "#e11414" : "#ff4343")};
  outline: 1px solid ${({ isSelected }) => (isSelected ? "white" : "#ff4343")};
  padding: 6px 12px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #e11414;
  }
`;
