import { ISource } from "../../interfaces/source.interface";

export default class Source implements ISource {
  public id: string;
  public title: string;
  public description?: string;
  
  
  constructor(id: string, title: string, description?: string) {
    this.id = id;
    this.title = title;
    description && (this.description = description);
  }
}
