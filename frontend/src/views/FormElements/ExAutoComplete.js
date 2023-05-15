import React from "react";
import { Grid, Box, Button, Typography, Fab } from "@material-ui/core";
// import Button from '@mui/material/Button';

import { ComboBoxAutocomplete } from "../../components/Forms/AutoComplete/ComboBoxAutocomplete";

import { MultipleValuesAutocomplete } from "../../components/Forms/AutoComplete/MultipleValuesAutocomplete";
import { CheckboxesAutocomplete } from "../../components/Forms/AutoComplete/CheckboxesAutocomplete";
import { SizesAutocomplete } from "../../components/Forms/AutoComplete/SizesAutocomplete";

const ExAutoComplete = () => {
  return (
    <Box
      sx={{
        display: 'block',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        // minHeight: '100vh', // Optional: Set a minimum height to center vertically
      }}
    >
      <Grid container spacing={0.5} >
        {/* ------------------------- row 1 ------------------------- */}
        <Grid
          item
          xs={12}
          lg={4}
          sm={6}
          sx={{
            display: 'flex',
            alignItems: 'stretch',
            // padding: '10px',
          }}
        >
          <ComboBoxAutocomplete displayList={'Country'} />
        </Grid>

        {/* ------------------------- row 5 ------------------------- */}
        <Grid
          item
          xs={12}
          lg={4}
          sm={6}
          sx={{
            display: 'flex',
            alignItems: 'stretch',
          }}
        >
          <ComboBoxAutocomplete displayList={'Player'} />
        </Grid>
      </Grid>

      <Button
        variant="contained"
        color="secondary"
        component="label"
        sx={{
          mt: 2,
          mr: 50,
          fontSize: '1.2rem', // Increase font size
          padding: '12px 24px', // Increase padding
        }}
      >Submit
      </Button>
    </Box>
  );
};

export default ExAutoComplete;


        {/* ------------------------- row 6 ------------------------- */}
        {/* <Grid
          item
          xs={12}
          lg={4}
          sm={6}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <CheckboxesAutocomplete />
        </Grid> */}
        {/* ------------------------- row 7 ------------------------- */}
        {/* <Grid
          item
          xs={12}
          lg={4}
          sm={6}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <SizesAutocomplete />
        </Grid> */}