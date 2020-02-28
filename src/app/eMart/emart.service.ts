import { Injectable } from '@angular/core';
import { SubCategory } from './sub-category';
import { Category } from './category';
import { Item } from './item';
import { Cart } from './cart';
import { stringify } from 'querystring';
//  import { totalmem } from 'os';
import { Bill } from './bill';
import { Buyer } from './buyer';
import { Seller } from './seller';

@Injectable({
  providedIn: 'root'
})
export class EmartService {
categories: Category[];
SubCategory: SubCategory[];
allitems: Item[];
cartItems: Item[];
allBills: Bill[];
  allBuyers: Buyer[];
  allSellers: Seller[];

  constructor() {
    this.allBuyers = [{
      id: 101,
      username: 'John',
      password: 'John',
      email: 'John@abc.com',
      mobile: 1234567890,
      date: '11/02/2020'
    },
    {
      id: 102,
      username: 'Priya',
      password: 'Priya',
      email: 'Priya@abc.com',
      mobile: 2222222222,
      date: '05/02/2020'
    }];
this.allSellers = [{
      id: 201,
      username: 'abc',
      password: 'abc',
      company: 'ABC Makrketing Agency',
      brief: 'Good marketing company',
      gst: 1234,
      address: 'Mumbai, India',
      email: 'abc@gmail.com',
      website: 'www.abc.com',
      contact: 1231231231
    },
    {
      id: 202,
      username: 'sky',
      password: 'sky',
      company: 'Sky Suppliers',
      brief: 'Good supplier company',
      gst: 2345,
      address: 'Chennai, India',
      email: 'sky@gmail.com',
      website: 'www.sky.com',
      contact: 343434343434
    }];

    this.categories = [{
      id:101,
    name: 'Electronics',
    brief: 'electronics like mobile,TV,Washing machine'
    },
    {
      id:102,
    name: 'Footwear',
    brief: ' footwear like slippers,flipflops,sandals'
    },
    {
      id:103,
    name: 'Clothes',
    brief: 'clothes like jeans,dress,sarees'
    }] ;
    this.SubCategory = [{
      id:201,
      name:'TV',
      categoryId: 101,
      brief: 'LG',
      gstPercent: 10
    },
{
       id:202,
      name:'Mobile',
      categoryId: 101,
      brief: 'iphone',
      gstPercent: 10
    },
    {
      id:203,
      name:'Shoes',
      categoryId: 102,
      brief: 'trending',
      gstPercent: 5
    },
{
  id:204,
      name:'Slippers',
      categoryId: 102,
      brief: 'waterproof',
      gstPercent: 5
},
{
    id:205,
    name:'Winterwear',
    categoryId: 103,
    brief: 'sweat shirt',
    gstPercent: 5
},
{
     id:206,
     name:'Saree',
     categoryId: 103,
     brief: 'ikath',
    gstPercent: 5
}];
    this.allitems = [{
      id:301,
      name: 'LG TV',
      categoryId: 101,
      subcategoryId:201,
      price:120000 ,
      description: 'LG tv 46 inches',
      stock:400,
      remarks:'good',
      img: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6211/6211112_rd.jpg'
  },
   {
      id:302,
      name:'Samsung TV',
      categoryId: 101,
      subcategoryId:201,
      price:130000 ,
      description:'Samsung 55 Inch 4K UHD Smart LED TV',
      stock: 400,
      remarks: 'good' ,
      img: 'https://cf2.s3.souqcdn.com/item/2016/06/28/11/01/40/11/item_XL_11014011_15068090.jpg'
  },
  {
      id:303,
      name:'iphone 11',
      categoryId: 101,
      subcategoryId:202,
      price:120000 ,
      description: 'iphone 11',
      stock: 300,
      remarks:'good',
      img: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    id:304,
      name:'redmi note 8 pro',
      categoryId: 101,
      subcategoryId:202,
      price:16000,
      description:' Smart tv 56 inches',
      stock: 300,
      remarks:'good',
      img: 'https://www.businessinsider.in/thumb/msid-71503218,width-600,resizemode-4,imgsize-21896/tech/mobile/news/redmi-note-8-and-redmi-note-8-pro-with-five-cameras-to-launch-in-india-next-week/redminote8pro.jpg'
  },
  {
    id:305,
      name:'puma',
      categoryId: 102,
      subcategoryId:203,
      price:4000,
      description: '',
      stock: 300,
      remarks: 'good',
      img: 'https://images-na.ssl-images-amazon.com/images/I/61deQNZqgGL._UX395_.jpg'
  },
  {
    id:306,
      name:'nike',
      categoryId: 102,
      subcategoryId:203,
      price:5000,
      description: '',
      stock: 300,
      remarks: 'good',
      img: 'https://c.static-nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/ifwckwse49ew6rftlgpq/joyride-run-flyknit-running-shoe-sqfqGQ.jpg'
  },
  {
    id:307,
      name:'adidas slippers',
      categoryId: 102,
      subcategoryId:204,
      price:1100,
      description: '',
      stock: 300,
      remarks:'good' ,
      img: 'https://rukminim1.flixcart.com/image/704/704/jn4x47k0/slipper-flip-flop/8/5/a/b44870fw-18-8-adidas-dkblue-ftwwht-dkblue-original-imaf9jf43gpwnyzk.jpeg?q=70'
  },
  {
    id:308,
      name:'woolrich slippers',
      categoryId: 102,
      subcategoryId:204,
      price:800,
      description:'' ,
      stock: 300,
      remarks:'good',
      img: 'https://i.pinimg.com/originals/15/1d/35/151d3532be75da9af9c590ea1abb4f80.jpg'
  },
  {
    id:309,
      name:'calini sweat shirt',
      categoryId: 103,
      subcategoryId:205,
      price:2000,
      description:'' ,
      stock: 300,
      remarks:'good',
      img: 'https://static.langimg.com/photo/72951900.cms'
  },
  {
    id:310,
      name:'jack and jones sweat shirt',
      categoryId: 103,
      subcategoryId:205,
      price:3000,
      description: 'jack and jones  rounded neck sweat shirts',
      stock: 300,
      remarks:'good',
      img: 'https://images-na.ssl-images-amazon.com/images/I/61ODOhbcKhL._UX569_.jpg'
  },
  {
    id:311,
      name:'ikath saree',
      categoryId: 103,
      subcategoryId:206,
      price:25000,
      description:'' ,
      stock: 300,
      remarks:'wedding wear ikath saree',
      img: 'https://www.virajafashionista.com/uploaded_files/products/IMG-20181004-WA01858QEg.jpg'
  },
  {
    id:312,
      name:'silk saree',
      categoryId: 103,
      subcategoryId:206,
      price:7000,
      description:'pink party wear silk saree' ,
      stock: 300,
      remarks:'good',
      img: 'https://lh3.googleusercontent.com/proxy/CUx5af1LhbEFulkG-aR6bmEj5JG1M0ptcNRKiizezFlFt8B0BLlVg2fanyNwqgCQVBbdYj44U-bhALFX6oFlwraHHQf7BFhG8rWqJu2uH02OyL4j7kgGK68kM3dHtNniQqFjS6cVyp3dZRlVIXcMN3tGD93GjttK1lKq75Sc'
  }];
  this.cartItems=[];
  this.allBills=[];
  }
  getAllItems():Item[]{
return[].concat(this.allitems);
  }
  getCategories():Category[]{
    return [].concat(this.categories);
  }
  getSubCategories():SubCategory[]{
    return[].concat(this.SubCategory);
  }
  getAllBills()
{
  return [].concat(this.allBills);
}
getItem(itemId:string): Item{
  let item:Item;
let size = this.allitems.length;
for( let i=0; i<size; i++){
if(this.allitems[i].id == +itemId){  
  //item = this.allitems[i];
  item = {
               id: this.allitems[i].id,
               name:this.allitems[i].name,
               categoryId: this.allitems[i].categoryId,
              subcategoryId: this.allitems[i].subcategoryId,
               price: this.allitems[i].price,
            description: this.allitems[i].description,
            stock: this.allitems[i].stock,
              remarks: this.allitems[i].remarks,
             img: this.allitems[i].img
  };
   break;
}
}
return item;
}
addToCart(itemId:number){
  let item: Item = this.getItem(itemId+'');
  this.cartItems.push(item);
}
getAllCart()
{
return [].concat(this.cartItems);
}

deleteCartItem(itemNo: number)
{
  let size= this.cartItems.length;
  for(let i=0;i<size;i++){
    if(this.cartItems[i].id==itemNo){
      this.cartItems.splice(i,1);
      break;
    }
  }
}
    
  addBill(buyerId: string, todayDate: string, total: number){
    let billSize = this.allBills.length;
     
    let bill:Bill = {
                      id: 200 + ++billSize,
                      buyerId: +buyerId,
                      type: 'Debit',
                      date: todayDate,
                      remarks: '',
                      items: this.cartItems,
                      amount: total
                    };
    
    this.allBills.push(bill);
    this.cartItems = [];
  }
  validateBuyer(user: string, password: string){
    let buyer: Buyer;
    let size = this.allBuyers.length;
    for(let i=0; i<size; i++){
      if(this.allBuyers[i].username==user && this.allBuyers[i].password==password){
        buyer = {
                  id: this.allBuyers[i].id,
                  username: this.allBuyers[i].username,
                  password: this.allBuyers[i].password,
                  email: this.allBuyers[i].email,
                  mobile: this.allBuyers[i].mobile,
                  date: this.allBuyers[i].date
                }
        break;
      }
    }
    return buyer;
  }

  validateSeller(user: string, password: string){
    let seller: Seller;
    let size = this.allSellers.length;
    for(let i=0; i<size; i++){
      if(this.allSellers[i].username==user && this.allSellers[i].password==password){
        seller = {
                    id: this.allSellers[i].id,
                    username: this.allSellers[i].username,
                    password: this.allSellers[i].password,
                    company: this.allSellers[i].company,
                    brief: this.allSellers[i].brief,
                    gst: this.allSellers[i].gst,
                    address: this.allSellers[i].address,
                    email: this.allSellers[i].email,
                    website: this.allSellers[i].website,
                    contact: this.allSellers[i].contact
                }
        break;
      }
    }
    return seller;
  }
}

