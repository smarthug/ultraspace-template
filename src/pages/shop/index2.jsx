// src/App.js
import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import ItemCard from "./ItemCard";


const items = [
  {
    id: 1,
    name: "The Crown",
    description: "A crown that grants the wearer unlimited power",
    price: 1000000,
    image: "/imgs/crown.png",
  },

];

const App = () => {

  const [purchasedItems, setPurchasedItems] = useState([]);


  const handlePurchase = (item) => {

  };

  return (
    <Container
      maxWidth="xs"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid item xs={12} sm={12} md={12} key={item.id}>
            <ItemCard item={item} onPurchase={handlePurchase} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default App;
