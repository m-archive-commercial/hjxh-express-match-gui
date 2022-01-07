import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class ErpModel {

  @PrimaryColumn()
  id: string;

  @Column()
  date: string;

  @Column()
  area: string;

  @Column({
    type: 'float'
  })
  weight: number;

  @Column()
  cp: string;
}



export class TrdModel extends ErpModel {

  @Column()
  fee: number
}
