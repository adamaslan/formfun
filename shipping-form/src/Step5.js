import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useData } from "./DataContext";
import { MainContainer } from "./components/MainContainer";
import { FileInput } from "./components/FileInput";
import { PrimaryButton } from "./components/PrimaryButton";
import Typography from "@material-ui/core/Typography";
import { Form } from "./components/Form";

export const Step5 = () => {
  const history = useHistory();
  const { data, setValues } = useData();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      files: data.files,
    },
  });

  const onSubmit = (data) => {
    history.push("./result");
    setValues(data);
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Complete Form
      </Typography>
      
        <PrimaryButton>Next</PrimaryButton>
      
    </MainContainer>
  );
};
