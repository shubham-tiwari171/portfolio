import React, { useState, useRef } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  colors,
} from "@mui/material";
import emailjs from "emailjs-com";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import "./ContactUs.css"; // Import custom CSS file for additional styles

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState({
    open: false,
    vertical: "top",
    horizontal: "right",
    severity: "warning",
  });
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .sendForm(
        "service_n6zyp46",
        "template_zgherpv",
        form.current,
        "y1YOnvabtI8H2yk5c"
      )
      .then((result) => {
        // console.log("Email sent successfully:", result.text);
        setOpenSnackbar((prevState) => ({
          ...prevState,
          open: true,
          severity: "success",
        }));
        setSnackbarMessage("Email sent successfully");
        // Display success message or perform any other actions
      })
      .catch((error) => {
        setOpenSnackbar((prevState) => ({
          ...prevState,
          open: true,
          severity: "error",
        }));
        setSnackbarMessage("Error sending email");
        // console.error("Error sending email:", error.text);
        // Display error message or perform any other actions
      });

    // Clear form fields after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar((prevState) => ({
      ...prevState,
      open: false,
    }));
    setSnackbarMessage("");
  };

  return (
    <>
      <Snackbar
        open={openSnackbar.open}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{
          vertical: openSnackbar.vertical,
          horizontal: openSnackbar.horizontal,
        }}
        key={openSnackbar.vertical + openSnackbar.horizontal}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleSnackbarClose}
          severity={openSnackbar.severity}
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
      <div className="container contact-form">
        <div className="contact-image">
          <img
            src="https://image.ibb.co/kUagtU/rocket_contact.png"
            alt="rocket_contact"
          />
        </div>
        <form ref={form} onSubmit={handleSubmit}>
          <h3>Drop a Message</h3>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <TextField
                  label="Name"
                  name="user_name"
                  fullWidth
                  margin="normal"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <TextField
                  label="Email"
                  name="user_email"
                  fullWidth
                  margin="normal"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <TextField
                  label="Message"
                  name="message"
                  multiline
                  fullWidth
                  rows={5}
                  margin="normal"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>
            <div className=" col-md-12">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 1, backgroundColor: "#343a40" }}
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
