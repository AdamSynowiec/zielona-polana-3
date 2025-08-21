import React, { useState } from "react";

const Test = () => {
  const [hoveredArea, setHoveredArea] = useState(null);

  const areas = [
    {
      name: "Kuchnia",
    //   points: "150,100 250,100 250,200 150,200",
      points: "0,10 10,10 10,20 0,20",
    },
    {
      name: "Salon",
      points: "260,100 360,100 360,200 260,200",
    },
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <img
        src="https://images.unsplash.com/photo-1706164971298-7d210902ec42?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // ← zamień na ścieżkę do zdjęcia budynku
        alt="Budynek"
        className="w-full"
      />
      <svg
        viewBox="0 0 500 300"
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      >
        {areas.map((area, index) => (
          <polygon
            key={index}
            points={area.points}
            fill="rgba(0, 123, 255, 0.3)"
            stroke="#007bff"
            strokeWidth="2"
            className="pointer-events-auto cursor-pointer"
            onMouseEnter={() => setHoveredArea(area.name)}
            onMouseLeave={() => setHoveredArea(null)}
          />
        ))}
      </svg>
      {hoveredArea && (
        <div className="absolute top-2 left-2 bg-white px-4 py-2 rounded shadow text-sm font-semibold">
          {hoveredArea}
        </div>
      )}
    </div>
  );
};

export default Test;
