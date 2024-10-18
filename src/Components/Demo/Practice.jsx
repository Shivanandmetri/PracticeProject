// import { Box, Radio, Typography } from "@mui/material";
// import CreditCardIcon from "@mui/icons-material/CreditCard";

// const Practice = ({ name }) => {
//   return (
//     <Box sx={{ display: "flex", justifyContent: "center" }}>
//       <Box
//         sx={{
//           height: "370px",
//           width: "500px",
//         }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             // justifyContent: "center",
//             bgcolor: "yellow",
//             borderRadius: "20px 20px 0px 0px",
//             padding: "20px",
//           }}
//         >
//           <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
//             <Radio sx={{ margin: "0px", padding: "0px" }}></Radio>
//             <Typography>Copmare</Typography>
//           </Box>
//           <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
//             <CreditCardIcon />
//             <Typography>Uni Card</Typography>
//           </Box>
//         </Box>
//         <Box
//           sx={{
//             bgcolor: "red",
//             height: "282px",
//             borderRadius: "0px 0px 20px 20px",
//           }}
//         ></Box>
//       </Box>
//       {name && <p>{name}</p>}
//     </Box>
//   );
// };

// export default Practice;

// import { useState } from "react";
// import {
//   Box,
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,
//   MobileStepper,
//   Button,
//   Paper,
// } from "@mui/material";
// import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
// import { useSwipeable } from "react-swipeable";

// // Sample carousel data
// const carouselData = [
//   {
//     label: "Beautiful Sunset",
//     description: "Experience a beautiful sunset by the sea.",
//     imgPath:
//       "https://cdn.pixabay.com/photo/2022/06/11/09/20/snake-7256057_1280.jpg",
//   },
//   {
//     label: "Mountain Adventure",
//     description: "Embark on a journey through the mountains.",
//     imgPath:
//       "https://media.istockphoto.com/id/157479804/photo/venomous-snake.jpg?s=2048x2048&w=is&k=20&c=o7RFnVUMub43NOXYp7Utvn2yheR6tTlNpaAqP5J8-Dw=",
//   },
//   {
//     label: "City Lights",
//     description: "Enjoy the vibrant city lights at night.",
//     imgPath:
//       "https://cdn.pixabay.com/photo/2019/09/23/07/59/peacock-4497802_640.jpg",
//   },
//   {
//     label: "Forest Path",
//     description: "Take a walk down a tranquil forest path.",
//     imgPath:
//       "https://cdn.pixabay.com/photo/2023/06/23/08/51/lord-krishna-8083043_1280.png",
//   },
//   {
//     label: "Forest Path",
//     description: "Take a walk down a tranquil forest path.",
//     imgPath:
//       "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
//   {
//     label: "Forest Path",
//     description: "Take a walk down a tranquil forest path.",
//     imgPath:
//       "https://images.pexels.com/photos/162203/panthera-tigris-altaica-tiger-siberian-amurtiger-162203.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
//   {
//     label: "Forest Path",
//     description: "Take a walk down a tranquil forest path.",
//     imgPath:
//       "https://images.pexels.com/photos/53510/head-details-otter-close-up-53510.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
// ];

// const Practice = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const maxSteps = carouselData.length;

//   const handleNext = () => {
//     setActiveStep((prevStep) => (prevStep + 1) % maxSteps);
//   };

//   const handleBack = () => {
//     setActiveStep((prevStep) => (prevStep - 1 + maxSteps) % maxSteps);
//   };

//   const swipeHandlers = useSwipeable({
//     onSwipedLeft: () => handleNext(),
//     onSwipedRight: () => handleBack(),
//     // trackMouse: true, // This allows mouse swipe detection as well
//   });

//   return (
//     <Box sx={{ maxWidth: 600, flexGrow: 1, margin: "auto", mt: 4 }}>
//       <Paper elevation={3} sx={{ p: 2 }}>
//         <div {...swipeHandlers}>
//           <Card>
//             <CardMedia
//               component="img"
//               height="400"
//               image={carouselData[activeStep].imgPath}
//               alt={carouselData[activeStep].label}
//             />
//             <CardContent>
//               <Typography variant="h6" component="div">
//                 {carouselData[activeStep].label}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {carouselData[activeStep].description}
//               </Typography>
//             </CardContent>
//           </Card>
//         </div>

//         <MobileStepper
//           variant="text"
//           steps={maxSteps}
//           position="static"
//           activeStep={activeStep}
//           nextButton={
//             <Button
//               size="small"
//               onClick={handleNext}
//               disabled={activeStep === maxSteps - 1}
//             >
//               Next
//               <KeyboardArrowRight />
//             </Button>
//           }
//           backButton={
//             <Button
//               size="small"
//               onClick={handleBack}
//               disabled={activeStep === 0}
//             >
//               <KeyboardArrowLeft />
//               Back
//             </Button>
//           }
//         />
//       </Paper>
//     </Box>
//   );
// };

// export default Practice;

import { Box, Typography, Divider } from "@mui/material";

const Practice = () => {
  return (
    <Box
      sx={{
        width: "350px",
        padding: "16px",
        backgroundColor: "#8c8888",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* FD Account */}
      <Box
        sx={{
          display: "flex",  
          justifyContent:"space-between",  
          marginBottom: "8px",
        }}
      >
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ minWidth: "120px" }}
        >
          FD Account
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold", color: "#0a1a6a", minWidth: "150px"  }}
        >
          1000000002323
        </Typography>
      </Box>

      <Divider sx={{ margin: "8px 0" }} />

      {/* Maturity Date */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "8px",
        }}
      >
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ minWidth: "120px" }}
        >
          Maturity on
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold", minWidth: "150px" }}
        >
          23 Jul 2024
        </Typography>
      </Box>

      <Divider sx={{ margin: "8px 0" }} />

      {/* FD Account Type */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
         
        }}
      >
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ minWidth: "120px" }}
        >
          FD Account Type
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold",width:"150px" }}
        >
          DIGI Fixed Deposit with Zero Balance Savings Account
        </Typography>
      </Box>
    </Box>
  );
};

export default Practice;