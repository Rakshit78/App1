import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';

type Props = {
  navigate: any;
};
const FormInput: React.FC<Props> = ({ ...props }) => {
  const [name, setname] = useState('');

  const handleclick = () => {
    props.navigate(`/details?name=${name}`);
  };
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <Container
        maxWidth='sm'
        style={{ background: '#e5e5e5', padding: '14px', borderRadius: '14px' }}
      >
        <Box ml={1}>
          <Typography variant='h5' style={{ opacity: '0.5' }}>
            Search Country
          </Typography>
        </Box>
        <Box mt={2} p={1}>
          <TextField
            fullWidth
            placeholder='Enter Coutry Name'
            role='takeinput'
            label='Input'
            value={name}
            onChange={(e: any) => {
              setname(e.target.value);
            }}
          />
        </Box>
        <Box mt={2} p={1}>
          <Button
            variant='contained'
            role='btn'
            fullWidth
            onClick={handleclick}
          >
            Get
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default FormInput;
