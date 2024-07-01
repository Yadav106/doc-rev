import Modal from '@/app/components/Modal'
import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';
import React from 'react'

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
}

const LogOutModal:React.FC<ModalProps> = ({
    isOpen, onClose
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <div className='flex flex-col gap-2'>
          <span className='font-bold underline'>Log Out</span>
            Will you really leave us alone?🥺👉🏻👈🏻
          <div className='flex gap-3 self-end'>
            <Button variant='outline' onClick={onClose}>Cancel</Button>
            <Button variant='default' onClick={() => signOut()}>{"Yes I'm besharam"}</Button>
          </div>
        </div>
    </Modal>
  )
}

export default LogOutModal