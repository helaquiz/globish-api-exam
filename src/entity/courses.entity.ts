import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, OneToOne, ManyToMany } from 'typeorm';
import { AssessmentsEntity } from './assessments.entity';

@Entity({ name: 'courses' })
export class CoursesEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column('text')
    detail: string;

    @Column()
    duration: number;

    @Column('timestamp')
    created_at: Date;

    @Column('timestamp')
    updated_at: Date;

    // @OneToMany(type => CoursesEntity, course => course.courses)
    // courses: CoursesEntity;
    @OneToMany(type => AssessmentsEntity, assessment => assessment.course)
    course: AssessmentsEntity[];
}