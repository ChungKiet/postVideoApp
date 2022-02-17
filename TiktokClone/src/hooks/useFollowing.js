import { useQuery } from 'react-query'
import { getIsFollowing } from '../services/user'
import { keys } from './queryKeys'

/**
 * 
 * @param {String} userId
 * @param {String} otherUserId
 * @param {Object} options
 * @returns
 */

export const useFollowing  = (userId, otherUserId, options = {}) => {
   return useQuery(keys.userFolowing(userId, otherUserId), () => getIsFollowing(userId, otherUserId), options)
}