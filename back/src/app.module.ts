import { Module } from '@nestjs/common';

const options:any = {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false,
}



@Module({
  imports: [],
})
export class AppModule {}
