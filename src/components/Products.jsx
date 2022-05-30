
import React from "react";

import Pagination from "./Pagination";
import AddProduct from "./AddProduct"
import Product from "./Product"
import {Flex,Grid} from "@chakra-ui/react"
const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;

  return (
    <div>
      <Flex>
      <AddProduct />

      <Grid><Product /></Grid>
      <Pagination />
      </Flex>
    </div>
  );
};

export default Products;
