import {Pageable} from "./Pageable";
import {Sort} from "./Sort";

export class Page<Type> {
  content: Type[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: Pageable;
  size: number;
  sort: Sort;
  totalElements: number;
  totalPages: number;

  constructor(content: Type[], empty: boolean, first: boolean, last: boolean, number: number, numberOfElements: number, pageable: Pageable, size: number, sort: Sort, totalElements: number, totalPages: number) {
    this.content = content;
    this.empty = empty;
    this.first = first;
    this.last = last;
    this.number = number;
    this.numberOfElements = numberOfElements;
    this.pageable = pageable;
    this.size = size;
    this.sort = sort;
    this.totalElements = totalElements;
    this.totalPages = totalPages;
  }
}
