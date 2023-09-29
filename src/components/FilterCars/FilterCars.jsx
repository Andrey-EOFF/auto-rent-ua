import React, { useState } from "react";
import { Button, FilterBlock, FilterBlockMil, FilterContainer, Input, Select } from "./FilterCars.styled";

const makes = [
  "Buick",
  "Volvo",
  "HUMMER",
  "Subaru",
  "Mitsubishi",
  "Nissan",
  "Lincoln",
  "GMC",
  "Hyundai",
  "MINI",
  "Bentley",
  "Mercedes-Benz",
  "Aston Martin",
  "Pontiac",
  "Lamborghini",
  "Audi",
  "BMW",
  "Chevrolet",
  "Mercedes-Benz",
  "Chrysler",
  "Kia",
  "Land",
];

const priceOptions = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

export default function FilterCars({ onFilter }) {
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [selectedMileage, setSelectedMileage] = useState({
    min: 0,
    max: 100000,
  });

  const handleFilter = () => {
    const filters = {
      make: selectedMake,
      price: selectedPrice,
      mileage: selectedMileage,
    };
    onFilter(filters);
  };

  const resetFilter = () => {
    setSelectedMake("");
    setSelectedPrice(0);
    setSelectedMileage({ min: 0, max: 100000 });
    const filters = {
      make: "",
      price: 0,
      mileage: { min: 0, max: 100000 },
    };
    onFilter(filters);
  };

  return (
    <FilterContainer>
      <FilterBlock>
        <label htmlFor="make">Car brand</label>
        <Select
          id="make"
          onChange={(e) => setSelectedMake(e.target.value)}
          value={selectedMake}
        >
          <option value="">Enter the text:</option>
          {makes.map((make, index) => (
            <option key={index} value={make}>
              {make}
            </option>
          ))}
        </Select>
      </FilterBlock>
      <FilterBlock>
        <label htmlFor="price">Price/ 1 hour</label>
        <Select
          id="price"
          onChange={(e) => setSelectedPrice(Number(e.target.value))}
          value={selectedPrice}
        >
          {priceOptions.map((price, index) => (
            <option key={index} value={price}>
              {price}
            </option>
          ))}
        </Select>
      </FilterBlock>
      <FilterBlockMil>
        <label>Сar mileage / km</label>
        <div>
        <Input
          type="number"
          min="0"
          value={selectedMileage.min}
          placeholder="From"
          onChange={(e) =>
            setSelectedMileage({
              ...selectedMileage,
              min: Number(e.target.value),
            })
          }
        />
        <Input
          type="number"
          min="0"
          value={selectedMileage.max}
          onChange={(e) =>
            setSelectedMileage({
              ...selectedMileage,
              max: Number(e.target.value),
            })
          }
        />
       </div>
      </FilterBlockMil>
      <Button onClick={handleFilter}>Search</Button>
      <Button onClick={resetFilter}>Reset</Button>
    </FilterContainer>
  );
}
