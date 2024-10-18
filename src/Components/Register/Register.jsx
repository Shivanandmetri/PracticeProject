import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button, MenuItem } from "@mui/material";

// Validation schema using Yup
const validationSchema = Yup.object({
  propertyUnderWhichRO: Yup.string().required("Required"),
  nearestBranchToProperty: Yup.string().required("Required"),
  ownerName: Yup.string().required("Required"),
  ownerContact: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .required("Required"),
  businessDivision: Yup.string().required("Required"),
  propertyType: Yup.string().required("Required"),
  pinCode: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .required("Required"),
});

const initialValues = {
  propertyUnderWhichRO: "",
  nearestBranchToProperty: "",
  ownerName: "",
  ownerContact: "",
  businessDivision: "",
  propertyType: "",
  pinCode: "",
};

const Register = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Form values:", values);
      }}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <div>
            <TextField
              name="propertyUnderWhichRO"
              label="Property under which RO"
              fullWidth
              select
              variant="outlined"
              value={values.propertyUnderWhichRO}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                <ErrorMessage name="propertyUnderWhichRO">
                {(msg) => <span style={{ color: "red" }}>{msg}</span>}
              </ErrorMessage>
              }
            >
              <MenuItem value="RO Malad">RO Malad</MenuItem>
              <MenuItem value="RO Andheri">RO Andheri</MenuItem>
            </TextField>
          </div>
          {/* {errors.propertyUnderWhichRO && touched.propertyUnderWhichRO ? (
            <div>{errors.propertyUnderWhichRO}</div>
          ) : null} */}

          <div>
            <TextField
              name="nearestBranchToProperty"
              label="Nearest Branch to Property"
              fullWidth
              variant="outlined"
              value={values.nearestBranchToProperty}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={<ErrorMessage name="nearestBranchToProperty" />}
            />
          </div>
          {/* {errors.propertyUnderWhichRO && touched.propertyUnderWhichRO ? (
            <div style={{ color: "red" }}>{errors.propertyUnderWhichRO}</div>
          ) : null} */}

          <div>
            <TextField
              name="ownerName"
              label="Owner Name"
              fullWidth
              variant="outlined"
              value={values.ownerName}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                <ErrorMessage name="ownerName" style={{ color: "red" }} />
              }
            />
          </div>

          <div>
            <TextField
              name="ownerContact"
              label="Owner Contact No"
              fullWidth
              variant="outlined"
              value={values.ownerContact}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                <ErrorMessage name="ownerContact" style={{ color: "red" }} />
              }
            />
          </div>

          <div>
            <TextField
              name="businessDivision"
              label="Business Division"
              fullWidth
              select
              variant="outlined"
              value={values.businessDivision}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                <ErrorMessage
                  name="businessDivision"
                  style={{ color: "red" }}
                />
              }
            >
              <MenuItem value="Retail">Retail</MenuItem>
              <MenuItem value="Wholesale">Wholesale</MenuItem>
            </TextField>
          </div>

          <div>
            <TextField
              name="propertyType"
              label="Property Type"
              fullWidth
              select
              variant="outlined"
              value={values.propertyType}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                <ErrorMessage name="propertyType" style={{ color: "red" }} />
              }
            >
              <MenuItem value="Residential">Res - Flat</MenuItem>
              <MenuItem value="Commercial">Comm - Office</MenuItem>
            </TextField>
          </div>

          <div>
            <TextField
              name="pinCode"
              label="Pin Code"
              fullWidth
              variant="outlined"
              value={values.pinCode}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                <ErrorMessage name="pinCode" style={{ color: "red" }} />
              }
            />
          </div>

          <div>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Register;
