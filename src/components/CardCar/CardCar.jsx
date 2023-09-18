import React, { useState } from "react";

export default function CardCar({ car }) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="car-card">
      {!imageError ? (
        <img
          src={car.img}
          alt={`${car.make} ${car.model}`}
          onError={handleImageError}
          width={400}
        />
      ) : (
        <img
          src="https://funart.top/uploads/posts/2019-10/thumbs/1570459049_mashiny-buduschego-3.jpg"
          alt={`${car.make} ${car.model}`}
          width={400}
          className="placeholder-image"
        />
      )}
      <div className="car-details">
        <h2>
          {car.make} {car.model}
        </h2>
        {/* Решта властивостей і умови залишаються незмінними */}
        {car.year && <p>Year: {car.year}</p>}
        {car.rentalPrice && <p>Rental Price: {car.rentalPrice}</p>}
        {car.address && (
          <div>
            <p>Address: {car.address}</p>
            {car.city && <p>City: {car.city}</p>}
            {car.country && <p>Country: {car.country}</p>}
          </div>
        )}
        {car.rentalCompany && <p>Rental Company: {car.rentalCompany}</p>}
        {car.type && <p>Type: {car.type}</p>}
        {car.id && <p>ID: {car.id}</p>}
        {car.accessories && car.accessories.length > 0 && (
          <p>Accessories: {car.accessories.join(", ")}</p>
        )}
      </div>
    </div>
  );
}
