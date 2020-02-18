import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

const options:any = {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false,
}



@Module({
  imports: [UsersModule],
})
export class AppModule {}
