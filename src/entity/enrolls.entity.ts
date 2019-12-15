import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, OneToOne, ManyToMany, JoinColumn } from 'typeorm';
import { StudentEntity } from './student.entity';
import { CoursesEntity } from './courses.entity';
import { ForeignKeyMetadata } from 'typeorm/metadata/ForeignKeyMetadata';

@Entity({ name: 'enrolls' })
export class EnrollsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('timestamp', { default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
    enrolls_at: Date;

    @Column('timestamp', { default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
    created_at: Date;

    @Column('timestamp', { default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
    updated_at: Date;

    @ManyToOne(type => StudentEntity, student => student.id)
    @JoinColumn({ name: "student_id" })
    student_id: StudentEntity;

    @ManyToOne(type => CoursesEntity, course => course.id)
    @JoinColumn({ name: "course_id" })
    course_id: CoursesEntity;
}