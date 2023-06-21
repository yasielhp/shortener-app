'use client'
import { Card, Icon, Tab, TabGroup, TabList } from '@tremor/react'
import { ChartBarIcon, ClipboardIcon, KeyIcon, PencilIcon, QrCodeIcon, TrashIcon } from './Icons'
const Link = () => {
  return (
    <Card className='p-3'>
      <div className='flex justify-between items-center'>
        <TabGroup className='w-auto'>
          <TabList variant='solid'>
            <Tab>Active</Tab>
            <Tab>Inancive</Tab>
          </TabList>
        </TabGroup>
        <div className='p-1 flex rounded-lg bg-gray-100 dark:bg-gray-800 text-sm text-gray-500 dark:text-gray-500 select-none'>
          <p className='p-2 hidden md:block'>11:25:09</p>
          <p className='py-2 hidden md:block'>-</p>
          <p className='p-2'>2023-06-20</p>
        </div>
      </div>
      <div className='w-full my-2 py-2 border-b border-gray-200 dark:border-gray-800'>
        <p className='text-lg font-bold'>https://www.google.com</p>
        <p className='text-sm text-gray-500 dark:text-gray-500'>https://www.google.com</p>
      </div>
      <div className='w-full flex justify-between items-center py-2'>
        <div className='flex md:gap-x-2'>
          <Icon
            variant='simple'
            size='md'
            icon={ClipboardIcon}
            tooltip='Copy'
            color='gray'
            className='hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg'
          />
          <Icon
            variant='simple'
            size='md'
            icon={PencilIcon}
            tooltip='Edit'
            color='gray'
            className='hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg'
          />
          <Icon
            variant='simple'
            size='md'
            icon={KeyIcon}
            tooltip='Password'
            color='gray'
            className='hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg'
          />
          <Icon
            variant='simple'
            size='md'
            icon={QrCodeIcon}
            tooltip='QR Code'
            color='gray'
            className='hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg'
          />
          <Icon
            variant='simple'
            size='md'
            icon={TrashIcon}
            tooltip='Delete'
            color='gray'
            className='hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg'
          />
        </div>

        <div className='p-[2px] flex hover:bg-gray-100 hover:dark:bg-gray-800 justify-center items-center rounded-lg border dark:border-gray-800 text-gray-500 dark:text-gray-500 select-none'>
          <Icon
            variant='simple'
            size='md'
            icon={ChartBarIcon}
            className='text-gray-500 dark:text-gray-500'
          />
          <p className='mr-3 md:mr-2 text-sm'>0</p>
          <p className='text-sm hidden md:block mr-3'>clicks</p>
        </div>
      </div>
    </Card>
  )
}

export default Link
