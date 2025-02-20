import {Button} from '../components/Button'
import { Card } from '../components/Card'
import { CreateContentModal } from '../components/CreateContentModal'
import { Sidebar } from '../components/Sidebar'
import { Plusicon } from '../icons/Plusicon'
import { Shareicon } from '../icons/Shareicon'
import { useState } from 'react'
export function DashBoard() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className='flex'>
      <Sidebar></Sidebar>
      <div className='p-4 ml-72 flex-1 min-h-screen bg-gray-100'>
        <div className='flex justify-end gap-4 mt-2'>
        <CreateContentModal open={modalOpen} onClose={
          ()=>setModalOpen(false)
        }></CreateContentModal>
          <Button variant='primary' text="share" size='sm' startIcon={<Shareicon/>}></Button>
          <Button variant='secondary' text="add Content" startIcon={<Plusicon/> } onClick={()=>setModalOpen(true)}></Button>
        </div>
        <div className='flex justify-start gap-4 mt-4'>
          <Card title="Twitter" link="https://x.com/elonmusk/status/1892416395490504753" type="twitter"/>
          <Card title="Youtube" link="https://www.youtube.com/embed/7xTGNNLPyMI" type="youtube"/>
        </div>
      </div>
    </div>
  )
}

export default DashBoard;
