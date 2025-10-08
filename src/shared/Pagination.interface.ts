export interface Paging {
  pageSize: number;
  pageNumber: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean | null;
  totalItems: number;
}

export const paginationDetailsInitalState: Paging = {
  pageSize: 0,
  pageNumber: 0,
  totalPages: 0,
  hasNext: false,
  hasPrevious: null,
  totalItems: 0,
};
