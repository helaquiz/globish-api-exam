import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { StudentProvider } from './student.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [StudentService, ...StudentProvider],
  controllers: [StudentController]
})
export class StudentModule { }
