import { useState } from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const constitutionOptions = [
  { label: "Individual", value: "individual" },
  { label: "Sole Proprietor", value: "sole_proprietor" },
  { label: "Partnership", value: "partnership" },
  { label: "Pvt./Public", value: "pvt_public" },
  { label: "LLP", value: "llp" },
];

const accountOptions = [
  {
    title: "Union Digital Micro Account",
    description: "For Individuals and Sole Proprietor",
    features: [
      "Average Monthly Balance of only ₹5,000/-",
      "Lifetime free classic debit card",
      "Daily POS transaction limit of ₹50,000/-",
    ],
    recommended: true,
  },
  {
    title: "Union Digital Classic Account",
    description: "For Individuals and Sole Proprietor",
    features: [
      "Average Monthly Balance of only ₹5,000/-",
      "Lifetime free classic debit card",
      "Daily ATM cash withdrawal limit of ₹25,000/-",
    ],
    popular: true,
  },
];

const Demo = () => {
  const [selectedConstitution, setSelectedConstitution] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [formValues, setFormValues] = useState({
    ageConfirmation: false,
    exposedPerson: false,
    termsAccepted: false,
  });

  const handleConstitutionClick = (value) => {
    setSelectedConstitution(value);
  };

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", formValues);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      {/* Header Section */}
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <Typography variant="h4" color="primary">
          Current Account Application
        </Typography>
        <Typography variant="h6">Select the type of constitution</Typography>
      </Box>

      {/* Constitution Buttons */}
      <Grid container spacing={2} justifyContent="center">
        {constitutionOptions.map((option, index) => (
          <Grid item key={index}>
            <Button
              variant={
                selectedConstitution === option.value ? "contained" : "outlined"
              }
              color={
                selectedConstitution === option.value ? "primary" : "default"
              }
              onClick={() => handleConstitutionClick(option.value)}
              sx={{
                width: 130, // Set fixed width
                height: 60, // Set fixed height
                display: "flex",
                fontSize: "12px",
                fontWeight: 600,
                justifyContent: "center",
                alignItems: "center",
                textTransform: "none", // Keep text normal
              }}
            >
              {option.label}
            </Button>
          </Grid>
        ))}
      </Grid>

      {/* Error message for constitution */}
      {!selectedConstitution && (
        <Typography color="error" textAlign="center" sx={{ mt: 2 }}>
          Please select the type of constitution
        </Typography>
      )}

      {/* Account Types Selection */}
      <Box sx={{ mt: 5 }}>
        {/* <Typography variant="h6">Select your Account Type</Typography> */}
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {accountOptions.map((option, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card
                sx={{
                  border:
                    selectedOption === option.title
                      ? "3px solid #1976d2"
                      : "1px solid #ccc",
                  position: "relative",
                  cursor: "pointer",
                  "&:hover": { borderColor: "#1976d2" },
                }}
                onClick={() => setSelectedOption(option.title)}
              >
                <CardContent>
                  <Typography variant="h5" component="div">
                    {option.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {option.description}
                  </Typography>
                  <ul>
                    {option.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </CardContent>
                {option.recommended && (
                  <Typography
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      color: "orange",
                      fontWeight: "bold",
                    }}
                  >
                    Recommended
                  </Typography>
                )}
                {option.popular && (
                  <Typography
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      color: "green",
                      fontWeight: "bold",
                    }}
                  >
                    Popular
                  </Typography>
                )}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Declaration Section */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h6" sx={{ color: "red" }}>
          Documents required
        </Typography>
        <Typography variant="body1" sx={{ color: "blue" }}>
          Declaration
        </Typography>

        <form onSubmit={handleSubmit}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formValues.ageConfirmation}
                  onChange={handleChange}
                  name="ageConfirmation"
                  sx={{
                    color: "red",
                    "&.Mui-checked": {
                      color: "red",
                    },
                  }}
                />
              }
              label="I confirm I am 18 years of age"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formValues.exposedPerson}
                  onChange={handleChange}
                  name="exposedPerson"
                  sx={{
                    color: "red",
                    "&.Mui-checked": {
                      color: "red",
                    },
                  }}
                />
              }
              label="I am not a politically exposed person"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formValues.termsAccepted}
                  onChange={handleChange}
                  name="termsAccepted"
                  sx={{
                    color: "red",
                    "&.Mui-checked": {
                      color: "red",
                    },
                  }}
                />
              }
              label="I accept all the terms and conditions related to Union Bank of India"
            />
          </Box>

          {/* Submit Button */}
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Button type="submit" variant="contained" color="error">
              Continue
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Demo;
