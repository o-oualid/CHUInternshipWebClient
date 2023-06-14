import {Sort} from "./Sort";

export class Pageable{
  offset:number;
  pageNumber:number;
  pageSize:number;
  paged:boolean;
  sort:Sort;
  unpaged:boolean;

  constructor(offset: number, pageNumber: number, pageSize: number, paged: boolean, sort: Sort, unpaged: boolean) {
    this.offset = offset;
    this.pageNumber = pageNumber;
    this.pageSize = pageSize;
    this.paged = paged;
    this.sort = sort;
    this.unpaged = unpaged;
  }
}
