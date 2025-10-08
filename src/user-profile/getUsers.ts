import { useState } from 'react';
import { ApiEndpoints } from '../api/endpoints/apiEndpoints';
import { ApiResource } from '../api/enums/apiResources';
import { HttpMethod } from '../api/enums/httpMethods.enum';
import { useApiMutation } from '../api/useApi';
import {
  type Paging,
  paginationDetailsInitalState,
} from '../shared/Pagination.interface';
import type { User } from './User.interface';

interface UserProfileResponse {
  data: User[];
  paging: Paging;
  count: number;
}

export function useUserProfile() {
  const [users, setUsers] = useState<User[]>([]);
  const [paginationDetails, setPaginationDetails] = useState<Paging>(
    paginationDetailsInitalState,
  );

  const mutation = useApiMutation<UserProfileResponse, Record<string, any>>({
    resource: ApiResource.MF_ADMIN,
    endpoint: ApiEndpoints.USER_PROFILE,
    method: HttpMethod.POST,
  });

  const fetchProfile = async (body: Record<string, any>) => {
    const response = await mutation.mutateAsync(body);
    setUsers(response.data);
    setPaginationDetails({ ...response.paging, totalItems: response.count });
  };

  return {
    users,
    paginationDetails,
    isLoading: mutation.isPending,
    fetchError: mutation.error,
    fetchProfile,
  };
}
