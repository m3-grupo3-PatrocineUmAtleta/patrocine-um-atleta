import { useContext } from "react";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import Stack from "@mui/material/Stack";
import { UserContext } from "../../providers/User";
import { Header } from "../../components/Header";

export const Login = () => {
  const { isLoading, setIsLoading } = useContext(UserContext);

  const handleClick = () => {
    setIsLoading(!isLoading);
  };

  return (
    <>
      <h1>Login</h1>
      {!isLoading ? (
        <Button onClick={handleClick} variant="contained">
          add
        </Button>
      ) : (
        <>
          {" "}
          <LoadingButton onClick={handleClick} loading variant="contained">
            Submit
          </LoadingButton>
        </>
      )}

      {/* <Button variant="outlined">add</Button>
      <Button variant="text">add</Button>

      <Stack direction="row" spacing={4}>
        <LoadingButton loading variant="contained">
          Submit
        </LoadingButton>
        <LoadingButton loading loadingIndicator="Loading…" variant="outlined">
          Fetch data
        </LoadingButton>
        <LoadingButton
          loading
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="outlined"
        >
          Save
        </LoadingButton>
      </Stack> */}
    </>
  );
};
