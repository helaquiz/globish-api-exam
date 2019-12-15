import { Controller, Get, Put, Body, Post, Query } from '@nestjs/common';
import { StudentService } from './student.service';
import { NewStudent } from 'src/model/student.mode';

@Controller('student')
export class StudentController {

    constructor(private readonly studentService: StudentService) { }

    @Get()
    async getStudentWithAssessment(@Query() query) {
        try {
            console.log(`QUERY`, query)
            const limit = query.limit || 25;
            const page = query.page || 1;
            const course = query.courseName || '';
            const studentList: any = await this.studentService.getStudentWithAssessment(page, limit, course);
            console.log(studentList[0])
            const data = studentList.map((student) => {
                const obj = { ...student }
                if (student.assessments.length > 0) {
                    const scoreArr = student.assessments.map((val) => {
                        return Number(val.score);
                    });
                    const average = scoreArr.reduce((total, next) => total + next, 0) / scoreArr.length
                    obj['average'] = average.toFixed(2);
                } else {
                    obj['average'] = '';
                }
                return obj;
            });

            return {
                status: 200,
                message: "Success.",
                data: data
            }
        } catch (err) {
            return err;
        }
    }

    @Put()
    async addNewStudent(@Body() body: NewStudent) {
        try {
            await this.studentService.addNewStudent(body);
            return {
                status: 201,
                message: "Created."
            }
        } catch (err) {
            return err;
        }


    }
}
