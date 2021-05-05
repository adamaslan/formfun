import React from "react";
import { useHistory } from "react-router-dom";
import { useData } from "./DataContext";
import Typography from "@material-ui/core/Typography";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { PrimaryButton } from "./components/PrimaryButton";
import  MainContainer from "./components/MainContainer";
import { Form } from "./components/Form";
import { Input } from "./components/Input";
import * as yup from "yup";

const schema = yup.object().shape({
Name: yup
.string()
.matches()
.required("Enter your full name please"),
Street: yup
.string()
.matches(/\d+\w+\s\w+\s\w+/)
.required("Street needs a name and address number"),
City: yup
.string()
.matches(/^([^0-9]*)$/, "")
.required("Address is a required field"),
State: yup
.string()
.matches(/^([^0-9]*)$/, /^ ([A-Z]{2})$/)
.required("Enter Correct State Abbreviation"),
ZipCode: yup
.string()
.matches(/^([^a-z]*)$/)
.required("Zip Code cannot contain letters"),
}); 

export const Step1 = () => {
  const { setValues, data } = useData();
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    defaultValues: { firstName: data.firstName, lastName: data.lastName, homeAddress: data.homeAddress },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    history.push("./step2");
    setValues(data);
  };

  return (
    <MainContainer>
 <progress value= {0} max= {100} />
      <Typography component="h2" variant="h5">
        Sender's Address 
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
          ref={register}
          id="Name"
          type="text"
          label="Name"
          name="Name"
          error={!!errors.Name}
          helperText={errors?.Name?.message}
        />
        <Input
          ref={register}
          id="Street"
          type="text"
          label="Street"
          name="Street"
          error={!!errors.Street}
          helperText={errors?.Street?.message}
        />
         <Input
          ref={register}
          id="City"
          type="text"
          label="City"
          name="City"
          error={!!errors.City}
          helperText={errors?.City?.message}
        />
         <Input
          ref={register}
          id="State"
          type="text"
          label="State"
          name="State"
          error={!!errors.State}
          helperText={errors?.State?.message}
        />
          <Input
          ref={register}
          id="ZipCode"
          type="number"
          label="Zip Code"
          name="ZipCode"
          error={!!errors.ZipCode}
          helperText={errors?.ZipCode?.message}
        />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
