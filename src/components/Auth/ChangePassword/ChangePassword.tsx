import {
  changePasswordApi,
  checkForgetPassApi,
} from "../../../api/requests/auth";
import { FC, useState, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import { Box, Button, Typography } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";

import { IChangePassword } from "../../../interfaces/Auth.interfaces";
import notification from "../../../services/notification";
import { validationSchemaChangePass } from "../../../validation/auth";
import ErrorMessage from "../../Common/ErrorMessage/ErrorMessage";
import routes from "../../../routes";
import Loading from "../../Common/Loading";

interface IUserInfo {
  isFulfilled: boolean;
  email: string | null;
  first_name: string | null;
  code: string | null;
  token: string | null;
}

const ChangePassword: FC = () => {
  const navigate = useNavigate();
  const { code } = useParams();
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    isFulfilled: false,
    email: null,
    first_name: null,
    code: code || null,
    token: null,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IChangePassword>({
    resolver: yupResolver(validationSchemaChangePass),
  });

  useEffect(() => {
    if (code) {
      checkForgetPassApi({ code })
        .then(({ info }) => {
          const data = info;
          setUserInfo({
            isFulfilled: true,
            email: data.email,
            first_name: data.first_name,
            code,
            token: data.token,
          });
        })
        .catch(() => {
          setUserInfo((prev) => ({ ...prev, isFulfilled: true }));
          navigate(routes.auth);
          window.location.reload()
        });
    } else {
      navigate(routes.auth);
    }
  }, [code, navigate]);

  const onSubmit: SubmitHandler<IChangePassword> = (data) => {
    changePasswordApi({
      password: data.password,
      token: userInfo.token!,
    })
      .then(() => {
        notification.success("All ok");
        setTimeout(() => { 
          navigate(routes.auth)
          window.location.reload()
          console.log("Time to change page")
        }, 4000)
      })
      .catch((e) => {
        console.error(e);
        notification.error("Error");
      });
    console.log(data);
  };

  if (!userInfo.isFulfilled) {
    return <Loading />;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography>
        Welcome, {userInfo.first_name}, to reset password!
      </Typography>
      <Typography>Please, write your new password.</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            marginTop: "50px",
            padding: "15px",
            display: "flex",
            flexDirection: "column",
            rowGap: "20px",
            border: "1px",
            borderStyle: "solid",
            borderColor: "#333",
          }}
        >
          <h3>Change password form</h3>
          <input
            type="password"
            placeholder="Write new password"
            {...register("password")}
          />
          {errors.password && (
            <ErrorMessage errorText={errors.password.message} />
          )}
          <input
            type="password"
            placeholder="Writer new password again"
            {...register("rePassword")}
          />
          {errors.rePassword && (
            <ErrorMessage errorText={errors.rePassword.message} />
          )}
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
            onClick={() => navigate("/")}
          >
            Move to auth
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ChangePassword;
