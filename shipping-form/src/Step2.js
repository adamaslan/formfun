
import React from "react";
import { useHistory } from "react-router-dom";
import { useData } from "./DataContext";
import Typography from "@material-ui/core/Typography";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { PrimaryButton } from "./components/PrimaryButton";
import { MainContainer } from "./components/MainContainer";
import { Form } from "./components/Form";
import { Input } from "./components/Input";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches("First name should not contain numbers")
    .required("First name is a required field"),
  streetName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
    .required("Last name is a required field"),
    cityName: yup
    .string()
    .matches(/^([^0-9]*)$/, "")
    .required("Address is a required field"),
    state: yup
    .string()
    .matches(/^([^0-9]*)$/, "")
    .required("State is a required field"),
    zipcode: yup
    .string()
    .matches(/^([^a-z]*)$/, "Zipcode cannot contain letters")
    .required("Address is a required field"),
});

export const Step2 = () => {
  const { setValues, data } = useData();
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    defaultValues: { firstName: data.firstName, streetName: data.streetName, cityName: data.cityName, state: data.state, zipcode: data.zipcode },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    history.push("./step3");
    setValues(data);
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Receiver's Address
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          id="firstName"
          type="text"
          label="Name"
          name="firstName"
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
        />
        <Input
          ref={register}
          id="streetName"
          type="text"
          label="Street"
          name="streetName"
          error={!!errors.streetName}
          helperText={errors?.streetName?.message}
        />
         <Input
          ref={register}
          id="cityName"
          type="text"
          label="City"
          name="cityName"
          error={!!errors.cityName}
          helperText={errors?.cityName?.message}
        />
         <Input
          ref={register}
          id="state"
          type="text"
          label="State"
          name="state"
          error={!!errors.state}
          helperText={errors?.state?.message}
        />
          <Input
          ref={register}
          id="zipcode"
          type="number"
          label="Zipcode"
          name="zipcode"
          error={!!errors.zipcode}
          helperText={errors?.zipcode?.message}
        />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
