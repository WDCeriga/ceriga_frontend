import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Box, Button } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { IForgotPassword, IFormComponent } from "@interfaces/Auth.interfaces";
import { validationSchemaForgotPass } from "@validation/auth";
import { forgotPassApi } from "@api/requests/auth";
import notification from "@services/notification";
import routes from "@routes/index";

import ErrorMessage from "../../Common/ErrorMessage/ErrorMessage";

const ForgotPassword: FC<IFormComponent> = ({ handleChangeForm }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForgotPassword>({
    resolver: yupResolver(validationSchemaForgotPass),
  });
  const onSubmit: SubmitHandler<IForgotPassword> = async (data) => {
    try {
      await forgotPassApi(data);

      notification.success("All ok");
      setTimeout(() => {
        navigate(routes.auth);
        window.location.reload();
      }, 3000);
    } catch (e) {
      notification.error("Something error");
    }
  };
  return (
    <Box
      sx={{
        marginX: "auto",
        width: "250px",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "20px",
          }}
        >
          <h3>Forgot Password</h3>
          <input
            type="email"
            placeholder="Write your email"
            {...register("email")}
          />
          {errors.email && <ErrorMessage errorText={errors.email.message} />}
          <Button variant="outlined" type="submit">
            Send form
          </Button>
          <Button
            sx={{
              background: "#333",
              color: "#FFF",
              "&:hover": {
                background: "none",
                border: "1px",
                borderStyle: "solid",
                borderColor: "#333",
                color: "#333",
              },
            }}
            onClick={() => handleChangeForm("signIn")}
          >
            Move back
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ForgotPassword;
