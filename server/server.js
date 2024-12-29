const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const authRoutes = require('./routes/authRoute');
const categoryRoutes = require('./routes/categoryRoutes')
const productRoutes = require('./routes/productRoute')
const orderRoute = require('./routes/orderRoute')
const cors = require('cors');
const app = express();
 
dotenv.config();
app.use(express.static(path.join(__dirname, ' public')));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/category',categoryRoutes);
app.use('/api/v1/product',productRoutes);
app.use('/api/v1/order',orderRoute);


//api
app.get('/', (req, res) => {
    res.send('Hello, World!');}
)
const PORT = process.env.PORT || 3000;
app.listen(PORT)