import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import Vendor from './models/Vendor.js';
import Category from './models/Category.js';
import Subcategory from './models/Subcategory.js';
import Product from './models/Product.js';

async function seed(){
  try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
    await Vendor.deleteMany();
    await Category.deleteMany();
    await Subcategory.deleteMany();
    await Product.deleteMany();

    const r1 = await Vendor.create({name:'Restaurant A1', description:'Main branch'});
    const g1 = await Vendor.create({name:'Grocery A1', description:'Supermarket'});

    const biryani = await Category.create({name:'Biryani', vendor:r1._id});
    const oils = await Category.create({name:'Oils', vendor:g1._id});

    const vegB = await Subcategory.create({name:'Veg Biryani', category:biryani._id});
    const sunflower = await Subcategory.create({name:'Sunflower Oil', category:oils._id});

    await Product.insertMany([
      {name:'Veg Dum Biryani', price:180, vendor:r1._id, category:biryani._id, subcategory:vegB._id},
      {name:'Freedom Sunflower Oil 1L', price:150, vendor:g1._id, category:oils._id, subcategory:sunflower._id}
    ]);

    console.log('Seeding finished');
    process.exit(0);
  }catch(e){ console.error(e); process.exit(1); }
}
seed();
