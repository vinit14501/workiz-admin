export const userColumns = [
  { field: 'id', headerName: 'ID', width: 50 },
  {
    field: 'user',
    headerName: 'Name',
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={params.row.img}
            alt="avatar"
          />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 200,
  },
  {
    field: 'phone',
    headerName: 'Phone Number',
    width: 150,
  },
  {
    field: 'address',
    headerName: 'Address',
    width: 200,
  },
  {
    field: 'postalZip',
    headerName: 'Zip',
    width: 70,
  },
];

export const userRows = [
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
