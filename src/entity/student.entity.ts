import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { CoursesEntity } from './courses.entity';
import { AssessmentsEntity } from './assessments.entity';

@Entity({ name: 'students' })
export class StudentEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255, default: null })
    name: string;

    @Column({ length: 255, default: null })
    email: string;

    @Column({ length: 255, default: null })
    phone: string;

    @Column('date', { default: null })
    dob: string;

    @Column('timestamp', { default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
    created_at: Date;

    @Column('timestamp', { default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
    updated_at: Date;

    @OneToMany(type => AssessmentsEntity, assessment => assessment.student)
    assessments: AssessmentsEntity[];


}