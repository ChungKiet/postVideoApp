import firebase from 'firebase'

let commentListenerInstance = null

/**
 * Returns all the posts in the database
 * 
 * @returns {Promise<[<Object>]>} post list if successful
 * 
 */

export const getFeed = () => {
   new Promise((resolve, reject) => {
      firebase
         .firestore()
         .collection("post")
         .then((res) => {
            let posts = res.docs.map((value) => {
               const id = value.id;
               const data = value.data();
               return {id, ...data };
            })
            resolve(posts);
         })
   })
}


/**
 * Updates the like of the post according to the current user id
 * @param {String} postId - id of the post
 * @param {String} uid - id of the user
 * @param {Boolean} currnetLikeState - true if the current user like the post
 */

export const updateLike = (postId, uid, currnetLikeState) =>{
   if (currnetLikeState){
      firebase
         .firestore()
         .collection("post")
         .doc(postId)
         .collection("likes")
         .doc(uid)
         .delete();
   }
   else{
      firebase
         .firestore()
         .collection('post')
         .doc(postId)
         .collection("likes")
         .doc(uid)
         .set({})
   }
}

export const addComment = (postId, creator, comment) => {
   firebase
      .firestore()
      .collection('post')
      .doc(postId)
      .collection('comments')
      .add({
         creator,
         comment,
         creation: firebase.firestore.FieldValue.serverTimestamp()
      })
}

export const commentListener = (postId, setCommentList) => {
   commentListenerInstance = firebase
      .firestore()
      .collection('post')
      .doc(postId)
      .collection('comments')
      .orderBy('creation', 'desc')
      .onSnapshot((snapshot) => {
         if (snapshot.docChanges().length == 0){
            return
         }
         let comments = snapshot.docs.map((value) => {
            const id = value.id;
            const data = value.data();
            return {id, ...data};
         })
         setCommentList(comments)
      })
}

export const clearCommentListener = () => {
   if (commentListenerInstance != null) {
      commentListenerInstance()
      commentListenerInstance = null
   }  
}

export const getPostByUserId = (uid = firebase.auth().currentUser.uid) => new Promise((resolve, reject) => {
   firebase
      .firestore()
      .collection('post')
      .where('creator', '==', uid)
      .orderBy('creation', 'desc')
      .onSnapshot((snapshot) => {
         let posts = snapshot.docs.map((value) => {
            const id = value.id;
            const data = value.data()
            return {id, ...data }
         })
         resolve(posts)
      })
}) 