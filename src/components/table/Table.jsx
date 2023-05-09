import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
  const rows = [
    {
      id: '1',
      img: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg',
      name: 'Rana Bean',
      phone: '1-174-344-4085',
      email: 'faucibus.orci@outlook.org',
      address: '396-5899 Elementum Av.',
      postalZip: '3145',
    },
    {
      id: '2',
      img: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg',
      name: 'Nichole Robinson',
      phone: '(449) 222-8686',
      email: 'est@protonmail.edu',
      address: '7108 Sed Ave',
      postalZip: '623145',
    },
    {
      id: '3',
      img: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg',
      name: 'Gail Bond',
      phone: '(674) 456-5418',
      email: 'turpis.vitae@hotmail.ca',
      address: '904-5117 Nisi. Road',
      postalZip: '4760',
    },
    {
      id: '4',
      img: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg',
      name: 'Hayes Adams',
      phone: '1-854-165-8566',
      email: 'ut.cursus.luctus@google.com',
      address: 'P.O. Box 624, 818 Dignissim Rd.',
      postalZip: '56661',
    },
    {
      id: '5',
      img: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg',
      name: 'Asher Warren',
      phone: '(766) 987-2753',
      email: 'vel.sapien@aol.couk',
      address: '669-6953 Ipsum Ave',
      postalZip: '493582',
    },
  ];
  return (
    <TableContainer
      component={Paper}
      className="table"
    >
      <Table
        sx={{ minWidth: 650 }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">id</TableCell>
            <TableCell className="tableCell">name</TableCell>
            <TableCell className="tableCell">phone</TableCell>
            <TableCell className="tableCell">email</TableCell>
            <TableCell className="tableCell">address</TableCell>
            <TableCell className="tableCell">postalZip</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img
                    src={row.img}
                    alt=""
                    className="image"
                  />
                  {row.name}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.phone}</TableCell>
              <TableCell className="tableCell">{row.email}</TableCell>
              <TableCell className="tableCell">{row.address}</TableCell>
              <TableCell className="tableCell">{row.postalZip}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
