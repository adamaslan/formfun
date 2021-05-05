import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useData } from "./DataContext";
import MainContainer from "./components/MainContainer";
import { PrimaryButton } from "./components/PrimaryButton";
import Typography from "@material-ui/core/Typography";


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

 <progress value= {99} max= {100} />
      <Typography component="h2" variant="h5">
        Form Completed
      </Typography>

      
        <PrimaryButton>Next</PrimaryButton>
      
    </MainContainer>
  );
};
