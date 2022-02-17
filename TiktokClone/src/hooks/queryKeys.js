export const keys = {
   user: (user) => ['user', user],
   userFolowing: (userId, otherUserId) => ['following', userId + otherUserId]
}