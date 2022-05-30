import React,{useState,useEffect} from "react";
import {
  Tag,
  TagLabel,
  Text,
  Image,
  Box,
  Heading,
  Stack,
} from "@chakra-ui/react";

const Product = () => {
  const [todo,setTodo]= useState([])
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  
  useEffect(()=>{
   fetch("http://localhost:8080/products")
   .then((r)=>r.json()).then((d)=>{
    setTodo(d)
   })
   
  },[])
console.log("todo",todo)
  return (
    
    <Stack data-cy="product">
      {todo.map((e,index)=>{
        return (
          <div>
            <Image key={index}
              style={{
                border: "1px solid red",
                width: "200px",
                height: "200px",
              }}
              data-cy="product-image"
              src={todo.imageSrc}
            />
            <Text
              style={{ border: "1px solid red" }}
              data-cy="product-category"
            >
              {todo.category}
            </Text>
            <Tag>
              <TagLabel data-cy="product-gender">{todo.gender}</TagLabel>{" "}
            </Tag>
            <Heading data-cy="product-title">{todo.title}</Heading>
            <Box data-cy="product-price">{todo.price}</Box>
          </div>
        );
      })}
      
    </Stack>
  );
};

export default Product;
