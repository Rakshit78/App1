import {
  Container,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Button,
  CircularProgress,
} from '@mui/material';
import { Box } from '@mui/system';
import { useState, useEffect } from 'react';
import Wdetails from './Wdetail';
type Props = {
  sparams: any;
  navigate: any;
};
const Details: React.FC<Props> = ({ ...props }) => {
  const [data, setdata] = useState<any[]>([]);
  const [capital, setcapital] = useState<string>('');
  const [visible, setvisible] = useState<boolean>(false);
  const [loading, setloading] = useState<boolean>(false);
  const [error, seterror] = useState<boolean>(false);
  const getdata = async (name: string) => {
    setloading(true);
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${name}
        `);
      const jdata = await res.json();
      setcapital(jdata[0].capital);
      setdata(jdata);
      setloading(false);
    } catch (e) {
      seterror(true);
    }
  };

  useEffect(() => {
    getdata(props.sparams.get('name'));
  }, []);
  if (error) {
    return (
      <>
        <Button role='back-button' onClick={() => props.navigate(-1)}>
          Back
        </Button>
        <div style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
          <p style={{ color: 'red' }}>Error pleaase check your spelling</p>
        </div>
      </>
    );
  }
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      {loading ? (
        <CircularProgress />
      ) : (
        <Container
          maxWidth='sm'
          style={{
            background: '#e5e5e5',
            padding: '14px',
            borderRadius: '14px',
          }}
        >
          <Button role='back-button' onClick={() => props.navigate(-1)}>
            Back
          </Button>
          <TableContainer>
            <Table>
              <TableBody>
                {data.map((res): any => {
                  return (
                    <>
                      <TableRow>
                        <TableCell>Capital</TableCell>
                        <TableCell>:</TableCell>
                        <TableCell>{res.capital}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Population</TableCell>
                        <TableCell>:</TableCell>
                        <TableCell>{res.population}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Lat/Lng</TableCell>
                        <TableCell>:</TableCell>
                        <TableCell>
                          {res.latlng[0]}/{res.latlng[1]}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Flag</TableCell>
                        <TableCell>:</TableCell>
                        <TableCell>
                          <img
                            src={res.flags.png}
                            alt='image'
                            style={{ width: '50px' }}
                          />
                        </TableCell>
                      </TableRow>
                    </>
                  );
                })}
                <Box p={1}>
                  <Button
                    variant='contained'
                    onClick={() => {
                      setvisible(!visible);
                    }}
                  >
                    Capital Wheather
                  </Button>
                </Box>
                {visible && <Wdetails capital={capital[0]} />}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      )}
    </div>
  );
};

export default Details;
