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
  weight: yup
    .string()
    //.weight("Weight should have correct format")
    .required("weight is a required field"),
});




export const Step3 = () => {
  const { setValues, data } = useData();
  const history = useHistory();
  debugger;
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      weight: data.weight
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
 
  const onSubmit = (data) => {
    history.push("./step4");
    setValues(data);
  };

  return (
    <MainContainer>
      
 <progress value= {50} max= {100} />
      <Typography component="h2" variant="h5">
       
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          id="weight"
          type="weight"
          label="weight"
          name="weight"
          error={!!errors.weight}
          helperText={errors?.weight?.message}
          required
        />

        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
