import Product from '../models/products';

const PRODUCTS = [
  new Product(
    'p1',
    'u1',
    'Conference Room',
    'https://texadiasystems.com/wp-content/uploads/2018/11/conference-room.jpg',
    '12 Configurable Lights',
    12,
    [0,0,0,0,0,0,0,0,0,0]
  ),
  new Product(
    'p2',
    'u1',
    'Kitchen',
    'https://www.sinkology.com/wp-content/uploads/2019/11/Everyday-Party-Magazine-Farmhouse-Kitchenette-30-1024x822.jpg',
    '2 Configurable Lights',
    2,
    [1,1,1,1,1,1,1,1,1,1]

  ),
  new Product(
    'p3',
    'u1',
    'Restroom',
    'https://www.thespruce.com/thmb/mOI7DNamzEzoPdN1qBLAiSw1TrQ=/2121x1193/smart/filters:no_upscale()/beautiful-modern-bathroom-1036309750-19b81debcd5e49288b5e146214725274.jpg',
    '2 Configurable Lights',
    2,
    [2,2,2,2,2,2,2,2,2,2]
  ),
  ];

export default PRODUCTS;
