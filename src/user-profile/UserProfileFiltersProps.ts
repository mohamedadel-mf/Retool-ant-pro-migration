export interface UserProfileFiltersProps {
  open: boolean;
  onClose: () => void;
  onApplyFilters: (filters: {
    createdAtFrom: string;
    createdAtTo: string;
    csoStatuses: number[];
  }) => void;
  onClearFilters: () => void;
}
