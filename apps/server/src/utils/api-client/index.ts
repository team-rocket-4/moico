import { get } from './get';
import { post } from './post';
import { deleteRequest } from './delete';

export const apiClient = {
  get,
  post,
  delete: deleteRequest,
};
