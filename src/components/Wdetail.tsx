import { TableRow, TableCell, CircularProgress } from '@mui/material';
import { useState, useEffect } from 'react';
type Props = {
  capital: string;
};
const Wdetails: React.FC<Props> = ({ ...props }) => {
  const [apidata, setapidata] = useState<any>({});
  const [loading, setloading] = useState(false);
  const getdata = async () => {
    try {
      setloading(true);
      const data =
        await fetch(`http://api.weatherstack.com/current?access_key=54ca168c72ac5e4405cc675956226596&query=${props.capital}
        `);
      const jdata = await data.json();
      console.log(jdata.current);
      setapidata(jdata.current);
      setloading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getdata();
  }, []);
  return (
    <>
      {' '}
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <TableRow>
            <TableCell>Temp</TableCell>
            <TableCell>:</TableCell>
            <TableCell>
              {apidata !== undefined ? apidata.temperature : ''}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Whether_icon</TableCell>
            <TableCell>:</TableCell>
            <TableCell>
              <img
                src={apidata !== undefined ? apidata.weather_icons : ''}
                style={{ width: '20px' }}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Wind_speed</TableCell>
            <TableCell>:</TableCell>
            <TableCell>
              {apidata !== undefined ? apidata.wind_speed : ''}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Precit</TableCell>
            <TableCell>:</TableCell>
            <TableCell>{apidata !== undefined ? apidata.precip : ''}</TableCell>
          </TableRow>
        </>
      )}
    </>
  );
};

export default Wdetails;
