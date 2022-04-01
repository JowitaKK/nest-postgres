import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private repo: Repository<User>){}
    
    getAll() {
        //return products
        return this.repo.find();
    }

    getById( id: number) {
        return this.repo.findOneBy({id});
    }

    add(email: string, password: string ) {
        const newUser = this.repo.create({email, password});
        return this.repo.save(newUser);
    }

    async remove( id: number) {
        const user = await this.repo.findOne({where: {id}});
        this.repo.remove(user)
    }
    
    async edit( id: number, password: string ) {
        const user = await this.repo.findOneBy({id});
        user.password = password;
        return this.repo.save(user);
    }
}
