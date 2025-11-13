import React, { useState, ChangeEvent, FormEvent } from "react";
import { TextField, Button, Box, Typography, Alert, CircularProgress } from "@mui/material";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

type Status = "success" | "error" | null;

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<Status>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    const formUrl = "https://formie.io/form/c9f32cc0-bf4e-496b-ab51-3c8bdb65316a";
    const data = new FormData();

    Object.entries(formData).forEach(([key, value]) => data.append(key, value));
    try {
      const response = await fetch(formUrl, {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        minWidth: 400,
        maxWidth: 500,
        mx: "auto",
        p: 3,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "background.paper",
      }}
    >
      <Typography textAlign="center" fontWeight={700} fontSize="2rem">
        GET IN TOUCH
      </Typography>

      {status === "success" && (
        <Alert severity="success">Thank you! Your message has been sent.</Alert>
      )}
      {status === "error" && (
        <Alert severity="error">Something went wrong. Please try again.</Alert>
      )}

      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        label="Phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        multiline
        rows={4}
        required
        fullWidth
      />

      <Button
        variant="contained"
        type="submit"
        disabled={loading}
        sx={{ mt: 1, py: 1.2 }}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : "Submit"}
      </Button>
    </Box>
  );
};

export default ContactForm;
