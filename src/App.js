import * as React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


import fuziImg from './fuzi.jpg';

const App = () => {
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar alt="本谷健太" src={fuziImg}
     sx={{ width: 150, height: 150 }} />
     
        <Typography component="h1" variant="h4" sx={{ marginTop: 4 }}>
          本谷健太
        </Typography>
        <p>情報科学専門学校 情報セキュリティ学科 3年</p>
        <Box sx={{ minWidth: 350 }}>
        <Card variant="outlined" >
        <Typography variant="h5" component="div" sx={{ marginTop: 1,marginLeft: 1 }}>
        スキル
      </Typography>
        <ul>
          <li>PHP(Laravel)</li>
          <li>Javascript(React)</li>
          <li>MySQL</li>
          <li>Java</li>
          <li>C#</li>
        </ul>
        </Card>
    </Box>
      </Box>
    
    </Container>
  );
};

export default App;