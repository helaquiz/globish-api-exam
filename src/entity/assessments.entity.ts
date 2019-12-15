import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { StudentEntity } from './student.entity';
import { CoursesEntity } from './courses.entity';
import { ForeignKeyMetadata } from 'typeorm/metadata/ForeignKeyMetadata';

@Entity({ name: 'assessments' })
export class AssessmentsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('decimal')
    score: number;

    @Column('timestamp')
    at: Date;

    @Column('timestamp')
    created_at: Date;

    @Column('timestamp')
    updated_at: Date;

    @ManyToOne(type => StudentEntity, student => student.assessments)
    @JoinColumn({ name: "student_id" })
    student: StudentEntity;

    @ManyToOne(type => CoursesEntity, course => course.course)
    @JoinColumn({ name: "course_id" })
    course: CoursesEntity;
}