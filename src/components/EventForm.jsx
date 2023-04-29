import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  FormHelperText,
} from "@chakra-ui/react";

export const EventForm = ({ onSubmit, initialValues }) => {
  const [values, setValues] = useState(initialValues || {});
  const [isChecked, setIsChecked] = useState(() => {
    // Set default isChecked values based on initialValues
    const defaultIsChecked = {};
    initialValues?.categoryIds?.forEach((id) => {
      defaultIsChecked[id] = true;
    });
    return defaultIsChecked;
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(values);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "categoryIds") {
      setValues((prevValues) => ({
        ...prevValues,
        [name]: Array.from(event.target.selectedOptions, (option) =>
          parseInt(option.value)
        ),
      }));
    } else {
      setValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };

  // const handleCheckboxChange = (event) => {
  //   const { name, value, isChecked } = event.target;
  //   setIsChecked((prevChecked) => ({
  //     ...prevChecked,
  //     // [value]: event.target.checked,
  //     [value]: !prevChecked[value],
  //   }));
  //   setValues((prevValues) => {
  //     let updatedValues = { ...prevValues };
  //     if (Array.isArray(prevValues[name])) {
  //       if (isChecked[value] !== undefined && isChecked[value]) {
  //         updatedValues[name] = [...prevValues[name], Number(value)];
  //       } else {
  //         updatedValues[name] = prevValues[name].filter(
  //           (val) => val !== Number(value)
  //         );
  //       }
  //     } else {
  //       updatedValues[name] = [Number(value)];
  //     }
  //     console.log("updatedValues", updatedValues);
  //     return updatedValues;
  //   });
  // };
  // const handleCheckboxChange = (event) => {
  //   const { name, value } = event.target;
  //   setIsChecked((prevChecked) => ({
  //     ...prevChecked,
  //     [value]: !event.target.checked,
  //   }));
  //   setValues((prevValues) => {
  //     let updatedValues = { ...prevValues };
  //     if (Array.isArray(prevValues[name])) {
  //       if (event.target.checked) {
  //         updatedValues[name] = [...prevValues[name], Number(value)];
  //       } else {
  //         updatedValues[name] = prevValues[name].filter(
  //           (val) => val !== Number(value)
  //         );
  //       }
  //     } else {
  //       updatedValues[name] = [Number(value)];
  //     }
  //     console.log("updatedValues", updatedValues);
  //     return updatedValues;
  //   });
  // };

  const handleCheckboxChange = (event) => {
    const { name, value, checked } = event.target;
    setIsChecked((prevChecked) => ({
      ...prevChecked,
      [value]: checked,
    }));
    setValues((prevValues) => {
      let updatedValues = { ...prevValues };
      if (Array.isArray(prevValues[name])) {
        if (checked) {
          updatedValues[name] = [...prevValues[name], Number(value)];
        } else {
          updatedValues[name] = prevValues[name].filter(
            (val) => val !== Number(value)
          );
        }
      } else {
        updatedValues[name] = [Number(value)];
      }
      return updatedValues;
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl isRequired>
        <FormLabel>Title</FormLabel>
        <Input
          name="title"
          value={values.title || ""}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Description</FormLabel>
        <Input
          name="description"
          value={values.description || ""}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Image URL</FormLabel>
        <Input
          name="image"
          value={values.image || ""}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Start Time</FormLabel>
        <Input
          name="startTime"
          type="datetime-local"
          value={values.startTime || ""}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl>
        <FormLabel>End Time</FormLabel>
        <Input
          name="endTime"
          type="datetime-local"
          value={values.endTime || ""}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Location</FormLabel>
        <Input
          name="location"
          placeholder="location"
          value={values.location || ""}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Category</FormLabel>
        <Checkbox
          // checked={values.categoryIds && values.categoryIds.includes(1)}
          isChecked={isChecked[1]}
          onChange={handleCheckboxChange}
          // onChange={(event) => handleCheckboxChange(event, isChecked)}
          name="categoryIds"
          value={1}
          mr=".5rem"
        >
          Sports
        </Checkbox>
        <Checkbox
          isChecked={isChecked[2]}
          onChange={handleCheckboxChange}
          name="categoryIds"
          value={2}
        >
          Games
        </Checkbox>
        <FormHelperText>Please select one or more categories.</FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel>Created By :</FormLabel>
        <Select
          placeholder="-- Created By --"
          name="createdBy"
          value={parseInt(values.createdBy) || ""}
          onChange={handleChange}
        >
          <option value="1">Ignacio Doe</option>
          <option value={2}>Jane Bennett</option>
        </Select>
      </FormControl>

      <Button mt={4} colorScheme="blue" type="submit">
        Save
      </Button>
    </form>
  );
};
