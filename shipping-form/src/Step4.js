import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { useData } from "./DataContext";
import Typography from "@material-ui/core/Typography";
import { PrimaryButton } from "./components/PrimaryButton";
import MainContainer from "./components/MainContainer";
import { Form } from "./components/Form";
import { Input } from "./components/Input";
import * as yup from "yup";


const schema = yup.object().shape({
  shipping: yup
    .string()
    //.shipping("Shipping must be ground or priority")
    .required("Shipping is a required field"),
});




export const Step4 = () => {
  const { setValues, data } = useData();
  const history = useHistory();
  debugger;
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      shipping: data.shipping
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
 
  const onSubmit = (data) => {
    history.push("./result");
    setValues(data);
  };

  return (
    <MainContainer>

 <progress value= {75} max= {100} />
      <Typography component="h2" variant="h5">
       
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          id="shipping"
          type="shipping"
          label="shipping"
          name="shipping"
          error={!!errors.shipping}
          helperText={errors?.shipping?.message}
          required
        />

        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
