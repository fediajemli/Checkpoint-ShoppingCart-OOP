import { v4 as uuidv4 } from 'https://cdn.jsdelivr.net/npm/uuid@9.0.0/dist/esm-browser/index.js';


export class Product {
    constructor(name, price, category){
        this.id = uuidv4();
        this.name= name;
        this.price = price;
        this.category = category;
    }

}
// in the reel world app we get this a  rray from the database
export const products = [
    new Product('Samsung Galaxy Y', 1500, 'electronics'),
    new Product('Apple iPhone 14', 1200, 'electronics'),
    new Product('Sony WH-1000XM4', 350, 'audio'),
    new Product('Dell XPS 15', 2000, 'computers'),
    new Product('Logitech MX Master 3', 100, 'accessories'),
  ];