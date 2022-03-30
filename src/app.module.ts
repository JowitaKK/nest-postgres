import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'nest',
      password: 'nest',
      database: 'nest',
      synchronize: true,
      //everything whats contains .entity, thats the elements of db (remember entieties.js)
      entities: ['**/*.entity.js']
    }),
    // UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
