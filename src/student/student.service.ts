import { Injectable, Inject } from '@nestjs/common';
import { createConnection, getConnection, Repository } from 'typeorm';
import { StudentEntity } from 'src/entity/student.entity';
import { AssessmentsEntity } from 'src/entity/assessments.entity';
import { NewStudent } from 'src/model/student.mode';

@Injectable()
export class StudentService {
    constructor(
        @Inject('STUDENT_REPOSITORY')
        private readonly photoRepository: Repository<StudentEntity>,
    ) { }
    async getStudentWithAssessment(page = 1, limit = 25, course = '') {
        try {

            // const sql = await getConnection()
            // .createQueryBuilder(StudentEntity, "s")
            // .select("s.id")
            // .addSelect("s.name")
            // .addSelect("s.phone")
            // .addSelect("a.id")
            // .addSelect("a.score")
            // .addSelect("c.name")
            // .leftJoin("s.assessments", "a")
            // .leftJoin("a.course", "c")
            // .where(course ? `c.name like :course` : '1=1', { course: `%${course}%` })
            // .skip((page - 1) * limit)
            // .take(limit)
            // .getSql();
            // console.log(sql);
            const studentList = await getConnection()
                .createQueryBuilder(StudentEntity, "s")
                .select("s.id")
                .addSelect("s.name")
                .addSelect("s.phone")
                .addSelect("a.id")
                .addSelect("a.score")
                .addSelect("c.id")
                .addSelect("c.name")
                .leftJoin("s.assessments", "a")
                .leftJoin("a.course", "c")
                .where(course ? `c.name like :course` : '1=1', { course: `%${course}%` })
                .skip((page - 1) * limit)
                .take(limit)
                .getMany();
            // const studentList = await getConnection()
            //     .createQueryBuilder(StudentEntity, "s")
            //     .select("s.id")
            //     .addSelect("s.name")
            //     .addSelect("s.phone")
            //     .leftJoinAndSelect("s.assessments", "a")
            //     .leftJoinAndSelect("a.course", "c")
            //     .where(course ? `c.name like :course` : '1=1', { course: `%${course}%` })
            //     .skip((page - 1) * limit)
            //     .take(limit)
            //     .getMany();
            // let sqlcmd = `SELECT a.id 'assessment_id',s.id 'student_id',s.name as student_name,
            // s.phone,c.name as course_name,a.score 
            // FROM students s
            // LEFT JOIN assessments a ON s.id = a.student_id
            // LEFT JOIN courses c ON a.course_id = c.id`
            // if (course) sqlcmd += ` c.name like '%${course}%'}`
            // const studentList = await getConnection()
            //     .getRepository(StudentEntity).query(sqlcmd);
            // console.log("All Student from the db: ", studentList.length);
            return studentList;
        } catch (err) {
            throw err;
        }
    }

    async addNewStudent(newStudent: NewStudent) {
        try {
            await getConnection()
                .createQueryBuilder()
                .insert()
                .into(StudentEntity)
                .values({
                    name: newStudent.name,
                    email: newStudent.email,
                    phone: newStudent.phone,
                    dob: newStudent.dob
                })
                .execute();
            return 0;
        } catch (err) {
            throw err;
        }

    }
}
