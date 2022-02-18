import BottomSheet from '@gorhom/bottom-sheet'
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearModal } from '../../redux/actions/modal'
import CommentModal from './comment'

const Modal = () => {
   const modalState = useSelector(state => state.auth().currentUser)
   const bottomSheetRef = useRef(null)

   const dispatch = useDispatch()

   useEffect(() => {
      if (modalState.open && bottomSheetRef.current)
         bottomSheetRef.current.expand()
      
   }, [modalState])

   const renderContext = () => {
      switch(modalState.modalType){
         case 0:
            return (<CommentModal post={modalState.data}/>)
         default:
            return (<></>)
      }
   }

   const onClose = () => {
      dispatch(clearModal())
   }

   return (
      <BottomSheet
         ref={bottomSheetRef}
         snapPoints={["50%"]}
         index={-1}
         onClose={onClose}
         handleHeight={40}
         enablePanDownToClose>
         {renderContext()}
      </BottomSheet>
   )
}

export default Modal

