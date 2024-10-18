import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  CardActions,
  Chip,
  Divider,
  List,
  ListItem,
  Paper,
  Radio,
} from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DoneIcon from "@mui/icons-material/Done";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import { useState } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const cardDetails = [
  {
    title: "Get Multiple Cards with One Application",
    description: "Why apply for multiple cards?",
    buttonLabel: "Apply Now",
    isNew: true,
    icon: <CreditCardIcon sx={{ fontSize: 40, color: "#673AB7" }} />,
    color: "#f6f4da",
  },
  {
    title: "Get an FD backed Credit Card",
    description: "Guaranteed Approvals",
    buttonLabel: "Apply Now",
    icon: <AccountBalanceWalletIcon sx={{ fontSize: 40, color: "#F44336" }} />,
    color: "#eadaf6",
  },
  {
    title: "Link a Credit Card",
    description: "Seamlessly manage your credit",
    buttonLabel: "Link a Card",
    icon: <AttachMoneyIcon sx={{ fontSize: 40, color: "#4CAF50" }} />,
    color: "#e9f8f9",
  },
];

const constitutionOptions = [
  {
    label: "Individual",
    value: "individual",
    icon: <AccessTimeIcon sx={{ color: "primary" }} />,
  },
  {
    label: "Sole Proprietor",
    value: "sole_proprietor",
    icon: <CreditCardIcon />,
  },
  {
    label: "Partnership",
    value: "partnership",
    icon: <AccountBalanceWalletIcon />,
  },
  { label: "Pvt./Public", value: "pvt_public", icon: <NewReleasesIcon /> },
];

const results = [
  {
    cardName: "Uni UNI Carbon",
    perks: ["Fuel surcharge waiver", "Flat 1.5% cashback", "No joining fee"],
  },
  {
    cardName: "Uni JCB Health",
    perks: [
      "5% Cashback on health bills",
      "Medical Emergency coverage",
      "Free doctor consultations",
    ],
  },
];

const cardData = [
  {
    title: 'Uni UNI Carbon',
    points: '2 reward points for every ₹100/-',
    benefits: [
      'Free platinum debit card',
      'Free Personal Accident Insurance (Death) cover of ₹9 lacs'
    ]
  },
  {
    title: 'Uni JCB Health',
    points: '2 reward points for every ₹100/-',
    benefits: [
      'Enjoy Airport Lounge access',
      'Free Personal Accident Insurance (Death) cover of upto ₹10 lacs'
    ]
  },
  {
    title: 'Uni JCB Health',
    points: '2 reward points for every ₹100/-',
    benefits: [
      'Enjoy Airport Lounge access',
      'Free Personal Accident Insurance (Death) cover of upto ₹10 lacs'
    ]
  }
];

const CreditCardPage = () => {
  const [selectedConstitution, setSelectedConstitution] = useState(null);

  const handleConstitutionClick = (value) => {
    setSelectedConstitution(value);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#dfe1e4",
        padding: "10px 5px",
        // margin: "10px 5px", /// learn
        minHeight: "100vh",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ marginBottom: "50px", padding: "0px 150px" }}>
        <Typography variant="h4" sx={{ color: "#072245" }}>
          Union{" "}
          <span style={{ fontWeight: "bold", color: "#072245" }}>
            Credit Cards
          </span>
        </Typography>

        <Button
          sx={{
            color: "#fff",
            width: "120px",
            fontWeight: "600",
            marginTop: "10px",
            fontSize: "20px",
            textTransform: "lowercase",
            bgcolor: "#4b1df4",
          }}
        >
          anytime
        </Button>

        <Box
          sx={{
            marginTop: "10px",
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          {constitutionOptions.map((option, index) => (
            <Box key={index}>
              <Button
                variant={
                  selectedConstitution === option.value
                    ? "contained"
                    : "outlined"
                }
                color={
                  selectedConstitution === option.value ? "primary" : "default"
                }
                onClick={() => handleConstitutionClick(option.value)}
                sx={{
                  width: 130,
                  height: 60,
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "12px",
                  fontWeight: 600,
                  justifyContent: "center",
                  alignItems: "center",
                  textTransform: "none",
                }}
              >
                {option.icon}
                {option.label}
              </Button>
            </Box>
          ))}
        </Box>

        <Typography
          sx={{ fontSize: "12px", color: "gray", margin: "20px 0px" }}
        >
          *Terms and conditions apply
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <Typography sx={{ color: "red", fontWeight: "bold" }}>
            Resume Application
          </Typography>
          <Button variant="contained" color="error">
            Apply Now
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "#072245",
          padding: "10px 150px",
          minHeight: "100vh",
          width: "100%",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        <Box>
          {cardDetails.map((card, index) => (
            <Card
              sx={{
                marginBottom: "20px",
                borderRadius: "10px",
                boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
                backgroundColor: card.color,
              }}
              key={index}
            >
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box sx={{ marginRight: "20px" }}>{card.icon}</Box>
                  <Box>
                    {card.isNew && (
                      <Chip
                        label="NEW"
                        color="primary"
                        icon={<NewReleasesIcon />}
                        sx={{ marginBottom: "10px" }}
                      />
                    )}
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ marginTop: "10px" }}
                    >
                      {card.description}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
              <CardActions sx={{ justifyContent: "flex-start" }}>
                <Button variant="outlined" color="error">
                  {card.buttonLabel}
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>

        <Box sx={{ marginTop: "40px" }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", marginBottom: "20px", color: "#fff" }}
          >
            Choosing a card can be confusing, let us help you
          </Typography>
          <Box sx={{ display: "flex", gap: "10px" }}>
            {["All", "Travel", "Shopping", "Fuel", "Lifestyle"].map(
              (filter, index) => (
                <Button
                  key={index}
                  variant="outlined"
                  sx={{ minWidth: "120px", color: "#fff", borderColor: "#fff" }}
                >
                  {filter}
                </Button>
              )
            )}
          </Box>
          <Box
            sx={{
              marginTop: "20px",
              display: "flex",
              gap: "10px",
            }}
          >
            <Button
              variant="contained"
              sx={{
                marginRight: "10px",
                borderRadius: "50px",
                bgcolor: "#fff",
                color: "black",
                textTransform: "none",
              }}
            >
              Cashbacks
            </Button>
            <Button
              variant="contained"
              sx={{
                borderRadius: "50px",
                bgcolor: "#fff",
                color: "black",
                textTransform: "none",
              }}
            >
              Rewards
            </Button>
          </Box>
        </Box>

        <Box sx={{ marginTop: "40px" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff" }}>
            Results
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              marginTop: "20px",
            }}
          >
            {results.map((result, index) => (
              <Card
                key={index}
                sx={{
                  padding: "20px",
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
                  width: "100%",
                  maxWidth: "400px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#333" }}
                >
                  {result.cardName}
                </Typography>
                <Divider sx={{ marginY: "10px" }} />
                <Box>
                  {result.perks.map((perk, i) => (
                    <Typography
                      key={i}
                      variant="body2"
                      sx={{
                        color: "#555",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <DoneIcon
                        sx={{
                          fontSize: "16px",
                          marginRight: "5px",
                          color: "#4CAF50",
                        }}
                      />
                      {perk}
                    </Typography>
                  ))}
                </Box>
                <CardActions sx={{ marginTop: "20px" }}>
                  <Button variant="outlined" color="primary">
                    Choose Card
                  </Button>
                  <Button variant="text" sx={{ color: "#000" }}>
                    Know More
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Box>
        </Box>


        {/* <Box sx={ { width: '100%', overflowX: 'auto' } }>
                <List
                  sx={ {
                    display: 'flex',
                    flexDirection: 'row',
                    padding: 0,
                    margin: 0,
                    width: 'max-content',
                    overflowX: 'hidden'
                  } }
                >
                  { cardData.map( ( card, index ) => (
                    <ListItem key={ index }
                      sx={ { width: '300px', margin: '0 15px' } }
                    >
                      <Paper
                        elevation={ 3 }
                        sx={ { padding: '20px', backgroundColor: '#f1f5f9', borderRadius: '8px', width: '100%' } }
                      >
                        <Box sx={ { display: 'flex', alignItems: 'center', marginBottom: '10px' } }>
                          <Radio checked={ false } />
                          <Typography variant='body1'>Compare</Typography>
                        </Box>

                        <Typography variant='h6'
                          sx={ { fontWeight: 'bold', marginBottom: '10px' } }
                        >
                          { card.title }
                        </Typography>

                        <Typography variant='body2'
                          sx={ { marginBottom: '10px', display: 'flex', alignItems: 'center' } }
                        >
                          <span>🌟</span> { card.points }
                        </Typography>

                        { card.benefits.map( ( benefit, i ) => (
                          <Typography key={ i }
                            variant='body2'
                            sx={ { marginBottom: '8px', display: 'flex', alignItems: 'center' } }
                          >
                            <span>🔹</span> { benefit }
                          </Typography>
                        ) ) }

                        <Button variant='contained'
                          color='primary'
                          sx={ { marginTop: '20px' } }
                        >
                          Choose Card
                        </Button>

                        <Typography variant='body2'
                          sx={ { marginTop: '10px', color: 'blue', cursor: 'pointer' } }
                        >
                          Know More
                        </Typography>
                      </Paper>
                    </ListItem>
                  ) ) }
                </List>
              </Box> */}


<Box 
  sx={{ 
    width: '800px', 
    overflowX: 'auto', 
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': { display: 'none' } 
  }}
>
  <List
    sx={{
      display: 'flex',
      flexDirection: 'row',
      padding: 0,
      margin: 0,
      width: 'max-content',
    }}
  >
    {cardData.map((card, index) => (
      <ListItem
        key={index}
        sx={{ width: '300px', margin: '0 15px', flex: '0 0 auto' }} // Flex properties to ensure items do not wrap
      >
        <Paper
          elevation={3}
          sx={{
            padding: '20px',
            backgroundColor: '#007BFF', // Blue background color
            borderRadius: '8px',
            width: '100%',
            color: 'white', // Set text color to white for better contrast on blue background
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <Radio checked={false} sx={{ color: 'white' }} />
            <Typography variant='body1' sx={{ color: 'white' }}>Compare</Typography>
          </Box>

          <Typography
            variant='h6'
            sx={{ fontWeight: 'bold', marginBottom: '10px', color: 'white' }}
          >
            {card.title}
          </Typography>

          <Typography
            variant='body2'
            sx={{ marginBottom: '10px', display: 'flex', alignItems: 'center', color: 'white' }}
          >
            <span>🌟</span> {card.points}
          </Typography>

          {card.benefits.map((benefit, i) => (
            <Typography
              key={i}
              variant='body2'
              sx={{ marginBottom: '8px', display: 'flex', alignItems: 'center', color: 'white' }}
            >
              <span>🔹</span> {benefit}
            </Typography>
          ))}

          <Button
            variant='contained'
            color='primary'
            sx={{ marginTop: '20px', backgroundColor: 'white', color: '#007BFF' }}
          >
            Choose Card
          </Button>

          <Typography
            variant='body2'
            sx={{ marginTop: '10px', color: 'white', cursor: 'pointer' }}
          >
            Know More
          </Typography>
        </Paper>
      </ListItem>
    ))}
  </List>
</Box>





              {/* <Box sx={ {
                display:'flex',
                gap:'20px'

              } }
              >
                <Box className={ classNames( 'CreditCardLandingPage_boxCard_cardbase' ) }>
                  <Box className={ classNames( 'CreditCardLandingPage_boxCardcardbase_header' ) }>

                    <Box className={ classNames( 'CreditCardLandingPage_boxCardcardbaseheader_subheading' ) } >
                      <Radio sx={ { margin: '0px', padding: '0px' } }></Radio>
                      <Typography className={ classNames( 'CreditCardLandingPage_boxCard_compare' ) }>Compare</Typography>
                    </Box>
                    <Box className={ classNames( 'CreditCardLandingPage_boxCardcardbaseheader_subheading' ) }>
                      <Icon
                        size={ 'customSMedium' }
                        name={ 'creditcardicon' }
                        aria-hidden={ true }
                      />
                      <Typography className={ classNames( 'CreditCardLandingPage_boxCard_unicard' ) }>Uni UNI Carbon</Typography>
                    </Box>
                  </Box>

                  <Box className={ classNames( 'CreditCardLandingPage_boxCardcardbase_divide' ) }>
                    <Box className={ classNames( 'CreditCardLandingPage_boxCardcardbasedivide_describing' ) }>

                      <Box className={ classNames( 'CreditCardLandingPage_boxCardcardbaseheader_subheading' ) }>
                        <Icon
                          size={ 'customdoubleLarge' }
                          name={ 'savingaccounticon' }
                          aria-hidden={ true }
                        />
                        <Typography className={ classNames( 'CreditCardLandingPage_boxCard_unicard rewardpoints' ) }>2 reward points for every 100/-</Typography>
                      </Box>
                      <Box className={ classNames( 'CreditCardLandingPage_boxCardcardbaseheader_subheading' ) }>
                        <Icon
                          size={ 'customdoubleLarge' }
                          name={ 'debitcardicon' }
                          aria-hidden={ true }
                        />
                        <Typography className={ classNames( 'CreditCardLandingPage_boxCard_unicard rewardpoints' ) }>Enjoy Airport Lounge access</Typography>
                      </Box>
                      <Box className={ classNames( 'CreditCardLandingPage_boxCardcardbaseheader_subheading' ) }>
                        <Icon
                          size={ 'customdoubleLarge' }
                          name={ 'personalaccidenticon' }
                          aria-hidden={ true }
                        />
                        <Typography className={ classNames( 'CreditCardLandingPage_boxCard_unicard rewardpoints' ) }>Free Personal Accident Insurance (Death) cover of upto ₹10 lacs  </Typography>
                      </Box>
                    </Box>
                    <Box sx={ {
                      display:'flex',
                      flexDirection:'column',
                      alignItems:'center',
                      justifyContent:'center'


                    } }
                    >
                      <Box className={ classNames( 'CreditCardLandingPage_boxCard_button' ) }>
                        <Buttons
                          displayText=' Choose Card'
                        />
                      </Box>
                      <Typography className={ classNames( 'CreditCardLandingPage_boxCard_knowmore' ) }>
                        Know More
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box className={ classNames( 'CreditCardLandingPage_boxCard_cardbase' ) }>
                  <Box className={ classNames( 'CreditCardLandingPage_boxCardcardbase_header headerbase' ) }>

                    <Box className={ classNames( 'CreditCardLandingPage_boxCardcardbaseheader_subheading' ) } >
                      <Radio sx={ { margin: '0px', padding: '0px' } }></Radio>
                      <Typography className={ classNames( 'CreditCardLandingPage_boxCard_compare' ) }>Compare</Typography>
                    </Box>
                    <Box className={ classNames( 'CreditCardLandingPage_boxCardcardbaseheader_subheading' ) }>
                      <Icon
                        size={ 'customSMedium' }
                        name={ 'creditcardicon' }
                        aria-hidden={ true }
                      />
                      <Typography className={ classNames( 'CreditCardLandingPage_boxCard_unicard' ) }>Uni JCB Health</Typography>
                    </Box>
                  </Box>
                  <Box className={ classNames( 'CreditCardLandingPage_boxCardcardbase_divide' ) }>
                    <Box className={ classNames( 'CreditCardLandingPage_boxCardcardbasedivide_describing' ) }>
                      <Box className={ classNames( 'CreditCardLandingPage_boxCardcardbaseheader_subheading' ) }>
                        <Icon
                          size={ 'customdoubleLarge' }
                          name={ 'savingaccounticon' }
                          aria-hidden={ true }
                        />
                        <Typography className={ classNames( 'CreditCardLandingPage_boxCard_unicard rewardpoints' ) }>2 reward points for every 100/-</Typography>
                      </Box>
                      <Box className={ classNames( 'CreditCardLandingPage_boxCardcardbaseheader_subheading' ) }>
                        <Icon
                          size={ 'customdoubleLarge' }
                          name={ 'debitcardicon' }
                          aria-hidden={ true }
                        />
                        <Typography className={ classNames( 'CreditCardLandingPage_boxCard_unicard rewardpoints' ) }>Enjoy Airport Lounge access</Typography>
                      </Box>
                      <Box className={ classNames( 'CreditCardLandingPage_boxCardcardbaseheader_subheading' ) }>
                        <Icon
                          size={ 'customdoubleLarge' }
                          name={ 'personalaccidenticon' }
                          aria-hidden={ true }
                        />
                        <Typography className={ classNames( 'CreditCardLandingPage_boxCard_unicard rewardpoints' ) }>Free Personal Accident Insurance (Death) cover of upto ₹10 lacs  </Typography>
                      </Box>

                    </Box>
                    <Box sx={ {
                      display:'flex',
                      flexDirection:'column',
                      alignItems:'center',
                      justifyContent:'center'


                    } }
                    >
                      <Box className={ classNames( 'CreditCardLandingPage_boxCard_button' ) }>
                        <Buttons
                          displayText=' Choose Card'
                        />
                      </Box>

                      <Typography className={ classNames( 'CreditCardLandingPage_boxCard_knowmore' ) }>
                        Know More
                      </Typography>
                    </Box>
                  </Box>
                </Box>

              </Box> */}


      </Box>
    </Box>
  );
};

export default CreditCardPage;
