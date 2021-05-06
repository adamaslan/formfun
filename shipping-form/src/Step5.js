import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useData } from "./DataContext";
import {MainContainer} from "./components/MainContainer";
import { PrimaryButton } from "./components/PrimaryButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
    fontFamily: "Permanent Marker",
    textAlign: "center",
    fontSize: "32 px",
    color: "deeppink",
    textShadow: "1px 1px darkmagenta",
  },
}));


export const Step5 = () => {

const styles = useStyles();
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
      <Typography className={styles.root} component="h2" variant="h5">
        Form Completed
      </Typography>

      
        <PrimaryButton>Next</PrimaryButton>
      
    </MainContainer>
  );
};
