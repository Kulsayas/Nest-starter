import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://kulsayasee:nest1234@nest-starter-project.4iraj.mongodb.net/?retryWrites=true&w=majority&appName=nest-starter-project',
    ),
    ProductsModule,
    OrdersModule,
  ],
})
export class AppModule {}
