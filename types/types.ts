import { Dayjs } from "dayjs";
import { type } from "os";
// Interfaces
export interface Identified {
  _id?: string; //Mongo db id
  id: string;
  name?: string;
}

export interface Slide {
  title: string;
  id: string;
  url?: string;
  content?: JSX.Element;
  notes?: string;
  date?: Dayjs;
}
export type Slides = Slide[];

export interface Resource {
  title: string;
  id?: string;
  url?: string;
  author?: string;
}
export type Resources = Resource[];

// export interface Toc {
//   title: string;
//   url?: string;
// }

export interface Content {
  title?: string;
  url?: string;
  element?: JSX.Element;
  notes?: string;
}

export type Toc = Content[];

export interface Lecture {
  title: string;
  id: string;
  url?: string;
  content?: Content[];
  notes?: string;
  slides?: string[];
  date: Dayjs;
  toc: Toc;
}
export type Lectures = Lecture[];

export interface Student {
  id: string;
  username: string;
  lastName: string;
  firstName: string;
  email: string;
}

export type Students = Student[];
