export interface Pagination {
  skip?: number;
  limit?: number;
  sort?: { field: string; by: 'ASC' | 'DESC' }[];
  search?: { field: string; value: string }[];
  date?: { field: string; from: string; to: string }[];
}
