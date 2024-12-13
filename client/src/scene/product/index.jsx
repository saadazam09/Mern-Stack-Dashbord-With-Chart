import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useGetProductsQuery } from "../../state/api";
import Header from '../../component/Header.jsx'

function Product({
    _id,
    name,
    description,
    price,
    rating,
    category,
    supply,
    stat,
}) {
    const theme = useTheme();

    return (
      <Card
        sx={{
          backgroundImage: "none",
          backgroundColor: theme.palette.background.alt,
          borderRadius: "0.55rem",
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color={theme.palette.secondary[700]} gutterBottom>
            {category}
          </Typography>
          </CardContent>
       
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
          ${Number(price).toFixed(2)}
          </Typography>
          <Rating
            value={rating}
            readOnly
            size="small"
            sx={{ color: theme.palette.secondary[500] }}
          />
      </Card>
    );
}

export default Product;
