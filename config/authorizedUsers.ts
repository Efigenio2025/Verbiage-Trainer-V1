const normalizeList = (value: string | undefined): string[] => {
  if (!value) {
    return [];
  }

  return value
    .split(",")
    .map((entry) => entry.trim())
    .filter((entry) => entry.length > 0);
};

/**
 * Array of authorized Ramp employee IDs. Configure by setting the
 * `NEXT_PUBLIC_AUTHORIZED_USERS` environment variable to a comma-separated list
 * (e.g. "1234,5678,9012").
 */
export const AUTHORIZED_USERS = normalizeList(
  process.env.NEXT_PUBLIC_AUTHORIZED_USERS,
);

export const hasAuthorizedUsersConfigured = AUTHORIZED_USERS.length > 0;

export const isAuthorizedUser = (employeeId: string): boolean => {
  const normalizedId = employeeId.trim();

  if (normalizedId.length === 0) {
    return false;
  }

  return AUTHORIZED_USERS.some((authorizedId) => authorizedId === normalizedId);
};
