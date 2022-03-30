import { Injectable } from "@nestjs/common";
//(object-relational mapper) library that makes it easy to link your TypeScript application up to a relational database database
//yarn add @nestjs/typeorm
import { InjectRepository } from '@nestjs/typeorm';
//yarn add typeorm
import { Repository } from "typeorm";
import {Product} from './product.entity';

// let products = [
//   { id: 1, title: 'Milk', price: 3.5 },
//   { id: 2, title: 'Bread', price: 2.9 },
// ];

@Injectable()
export class ProductsService {
    constructor(@InjectRepository(Product) private repo: Repository<Product>){}
    
    getAll() {
        //return products
        return this.repo.find();
    }

    getById( id: number) {
        //return products.find(x=>x.id === id);
        return this.repo.findOneBy({id});
    }

    add(title: string, price: number) {
        // const id = Math.round(Math.random() * 1000);
        // const newProduct = { id, title, price };
        // products.push(newProduct);

        // return newProduct;
        const newProduct= this.repo.create({title, price});
        return this.repo.save(newProduct)

    }

    async remove( id: number ) {
         // products = products.filter(x => x.id !== id);
         const product = await this.repo.findOne({where: {id}});
         this.repo.remove(product);
    }

    async edit (id: number, price: number ) {
        // const product = product.find(x=> x.id === id);
        // product.price = price;
        // return product;

        const product = await this.repo.findOneBy({id});
        product.price = price;
        return this.repo.save(product)
    }



}

