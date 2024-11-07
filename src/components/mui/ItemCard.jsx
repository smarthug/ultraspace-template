// src/components/ItemCard.js
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";


const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0, // 소수점을 원하지 않으면 이 줄을 추가하세요.
  }).format(amount);
};

const ItemCard = ({ item, onPurchase, index, price, uri }) => {
  console.log(index, uri);
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={item.image}
        alt={item.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="h6" color="text.primary">
          {/* ${item.price} */}
          {formatCurrency(price)}
        </Typography>


      </CardContent>
    </Card>
  );
};

export default ItemCard;
