import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users_tools')
class UserTool {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  UserTool_id: string;

  @Column('uuid')
  tools_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default UserTool;
