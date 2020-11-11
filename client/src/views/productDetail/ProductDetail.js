/* eslint-disable react/jsx-one-expression-per-line */
import { useEffect } from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import StoreIcon from '@material-ui/icons/Store';

import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchProductDetail } from '../../data/actions/productActions';

import useStyles from './styles';

const ProductDetail = () => {
  const { id } = useParams();
  const { productDetail } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {

    fetch(`http://localhost:8000/api/product/${id}`)
    .then(res => res.json())
    .then( data =>  dispatch(fetchProductDetail(data)))
    .catch(err => console.log(err));
   
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div>
     
        <div key={productDetail.id}>
          <Grid container>
            <Grid item xs={12} md={6} lg={5}>
              <div>
                <img
                  src={productDetail.imageurl}
                  alt={productDetail.name}
                  className={classes.productImage}
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5">{productDetail.product_name}</Typography>
              {/* <Typography variant="subtitle1">
                category: {product.category}
              </Typography> */}
              <Divider />
              <Typography variant="subtitle1">
               M.R.P.: ₹  <del>{productDetail.mrp}</del>
              </Typography>
              <Typography variant="subtitle1">
                Price: ₹ <b>{productDetail.price}</b>
              </Typography>
              <Divider />
              <div>
                <Typography variant="body1">In stock</Typography>

                <Typography variant="h4">
                   இந்தப் பொருளை வாங்க 7871003935 என்ற எண்ணுக்கு பகிரியில் ( வாட்சாப் )உங்களுக்கு விருப்பமான இந்தப் பொருளின் "{productDetail.id}" எண்ணை அனுப்பவும்.
                </Typography>
                
                {/* <div className={classes.buttons}>
                  <Button
                    variant="contained"
                    startIcon={<AddShoppingCartIcon />}
                  >
                    Add To Cart
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<StoreIcon />}
                  >
                    Buy Now
                  </Button>
                </div> */}
                <br />
              </div>
              <Divider />
              <Typography variant="body2">{ productDetail.description }</Typography>
              <Divider />
              <Typography variant="h6">Product Details</Typography>
              <Table size="small" aria-label="Product Detail table">
                <TableHead>
                  <TableRow>
                    <TableCell>Product By</TableCell>
                    <TableCell>{productDetail.manufacturer}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Brand</TableCell>

                    <TableCell>{productDetail.brand}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Supported Mobile</TableCell>
                    <TableCell>{productDetail.supported_devices}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Count </TableCell>

                    <TableCell>{productDetail.quantity}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Component </TableCell>
                    {/* <TableCell>
                      {
                        productDetail.materials.map(material => (
                          <span key={material.id} > {material.material_name} </span>
                        ))
                      }
                    </TableCell> */}
                  </TableRow>
                  <TableRow>
                    <TableCell>Category </TableCell>
                    {/* <TableCell>{productDetail.category.category_name}</TableCell> */}
                  </TableRow>
                  <TableRow>
                    <TableCell>Origin </TableCell>
                    <TableCell>{productDetail.origin}</TableCell>
                  </TableRow>
                </TableHead>
              </Table>
              
            </Grid>
          </Grid>
        </div>
   
    </div>
  );
};

export default ProductDetail;
