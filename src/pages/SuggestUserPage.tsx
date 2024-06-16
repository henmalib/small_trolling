import { createSignal } from "solid-js";
import TextField from "@suid/material/TextField";
import Button from "@suid/material/Button";
import api from "../lib/api";
import "../css/form.css";
import AppBar from "../components/AppBar";
import { Container, Box } from "@suid/material";
import ClosableAlert from "../components/ClosableAlert";
import Footer from "../components/Footer";

const SuggestUserPage = () => {
  const [discordId, setDiscordId] = createSignal("");

  const [error, setError] = createSignal("");
  const [alertOpen, setAlertOpen] = createSignal(false);

  const suggestUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("No token found. Please login first.");
        return;
      }

      const response = await api.suggestUser(discordId(), token);
      if ("error" in response) {
        setError(
          response.maybeJson
            ? response.maybeJson.error
            : "Something went wrong!"
        );
        return setAlertOpen(true);
      } else {
        if (!response.duration) {
          alert("Suggestion received! Thank you!");
        } else if (response.duration) {
          alert(
            "This user has been suggested enough times. A poll has been created!"
          );
        }
      }
    } catch (error) {
      alert("Suggestion failed!");
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          bgcolor: "box.box",
          p: "20px",
          border: "1px solid box.box",
          borderRadius: "8px",
        }}
      >
        <AppBar />
        <h1 class="text-2xl">Suggest a User</h1>
        <ClosableAlert
          open={alertOpen()}
          severity="error"
          onClose={() => setAlertOpen(false)}
        >
          {error()}
        </ClosableAlert>
        <TextField
          label="DiscordID"
          variant="outlined"
          onInput={(e) => setDiscordId((e.target as HTMLInputElement).value)}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={suggestUser}>
          Suggest User
        </Button>
      </Box>
      <Footer sx={{ mt: 2, mb: 4 }} />
    </Container>
  );
};

export default SuggestUserPage;
