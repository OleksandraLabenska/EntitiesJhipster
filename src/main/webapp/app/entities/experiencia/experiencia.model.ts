import * as dayjs from 'dayjs';

export interface IExperiencia {
  id?: number;
  titulo?: string;
  descripcion?: string;
  localizacion?: string;
  fecha?: dayjs.Dayjs | null;
}

export class Experiencia implements IExperiencia {
  constructor(
    public id?: number,
    public titulo?: string,
    public descripcion?: string,
    public localizacion?: string,
    public fecha?: dayjs.Dayjs | null
  ) {}
}

export function getExperienciaIdentifier(experiencia: IExperiencia): number | undefined {
  return experiencia.id;
}
