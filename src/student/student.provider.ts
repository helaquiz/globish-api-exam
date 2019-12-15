// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class StudentProvider {}


import { Connection, Repository } from 'typeorm';
import { StudentEntity } from '../entity/student.entity';

export const StudentProvider = [
  {
    provide: 'STUDENT_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(StudentEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];