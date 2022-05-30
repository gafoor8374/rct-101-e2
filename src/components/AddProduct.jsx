import React, { useState } from "react";
import Product from "./Product"
import {
  Button,
  Input,
  Modal,
  ModalBody,
  Select,
  RadioGroup,
  Radio,
  useDisclosure,
} from "@chakra-ui/react";

const AddProduct = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalOpen, setModalOpen] = useState(false);
  const [todo, setTodo] = useState([]);
  const [newtodo,setNewtodo] = useState({
    title:"",
    category:"",
    gender:"",
    price:"",
  })
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;
  const handlechange = (e) => {
    // console.log(e.target.value);
    let { type, name, value } = e.target;
    console.log(type, name, value);
    setTodo({
      ...todo,
      [name]: value,
    });
  };
  const handleSubmit =()=>{
    fetch("http://localhost:8080/products",{
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
       newtodo
      })
    })
    .then((r)=>r.json())
    .then((data)=>{
      setTodo([...todo,data])
      setNewtodo("")
      
    })
    
  }
  console.log(todo)

  return (
    <>
      <Button data-cy="add-product-button" onClick={() => setModalOpen(true)}>
        Add New Product
      </Button>

      <Modal isOpen={modalOpen}>
        <ModalBody pb={6}>
          <Input
            onChange={handlechange}
            type="text"
            data-cy="add-product-title"
            placeholder="Enter product name"
            name="product"
          />
          <Select
            onChange={handlechange}
            value="category"
            data-cy="add-product-category"
            name="category"
          >
            <option value="shirt" data-cy="add-product-category-shirt">
              shirt
            </option>
            <option value="pant" data-cy="add-product-category-pant">
              pant
            </option>
            <option value="jeans" data-cy="add-product-category-jeans">
              jeans
            </option>
          </Select>
          <RadioGroup
            onChange={handlechange}
            name="gender"
            value="gender"
            data-cy="add-product-gender"
          >
            <Radio
              value="male"
              type="radio"
              name="gender"
              data-cy="add-product-gender-male"
            >
              male
            </Radio>
            <Radio
              value="female"
              type="radio"
              name="gender"
              data-cy="add-product-gender-female"
            >
              female
            </Radio>
            <Radio
              value="unisex"
              type="radio"
              name="gender"
              data-cy="add-product-gender-unisex"
            >
              unisex
            </Radio>
          </RadioGroup>
          <Input
            type="number"
            // value="price"
            name="price"
            onChange={handlechange}
            data-cy="add-product-price"
            placeholder="Product price"
          />
          <Button onSubmit={handleSubmit} data-cy="add-product-submit-button">
            Submit
          </Button>
        </ModalBody>
      </Modal>
      <Product list={todo}/>
    </>
  );
};

export default AddProduct;
