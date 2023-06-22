'use client'
import { Card, Icon, Tab, TabGroup, TabList } from '@tremor/react'
import { ChartBarIcon, ClipboardIcon, KeyIcon, PencilIcon, QrCodeIcon, TrashIcon } from './Icons'
import { formatDate } from '@/helpers/formatDate'

const Link = ({ link }) => {
  const domain = window.location.origin + '/'
  return (
    <Card className='p-3'>
      <div className='flex justify-between items-center'>
        <TabGroup className='w-auto' defaultIndex={link.status ? 0 : 1}>
          <TabList variant='solid'>
            <Tab>Active</Tab>
            <Tab>Inactive</Tab>
          </TabList>
        </TabGroup>
        <div className='group relative w-max'>
          <div className='p-1 flex rounded-lg bg-gray-100 dark:bg-gray-800 text-sm text-gray-500 dark:text-gray-500 select-none'>
            <p className='hidden md:block p-2'>{formatDate(link.createdAt).time}</p>
            <p className='hidden md:block py-2'>-</p>
            <p className='p-2'>{formatDate(link.createdAt).date}</p>
          </div>
          <span
            className='pointer-events-none absolute text-sm z-20 rounded-tremor-default bg-tremor-background-emphasis dark:text text-white dark:bg-dark-tremor-background-subtle px-2.5 py-1 -top-8 right-0 w-max opacity-0 transition-opacity group-hover:opacity-100'
          >
            Time created
          </span>
        </div>
      </div>
      <div className='w-full my-2 py-2 border-b border-gray-200 dark:border-gray-800'>
        <p className='text-lg font-bold'>{link.url}</p>
        <p className='text-sm text-gray-500 dark:text-gray-500'>{domain}{link.slug}</p>
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
        <div className='group relative w-max'>
          <div className='p-[2px] flex bg-gray-100 dark:bg-gray-800 justify-center items-center rounded-lg text-gray-500 select-none'>
            <Icon
              variant='simple'
              size='md'
              icon={ChartBarIcon}
              className='text-gray-500 dark:text-gray-500'
            />
            <p className='mr-3 md:mr-2 text-sm'>{link.clicks}</p>
          </div>
          <span
            className='pointer-events-none absolute text-sm z-20 rounded-tremor-default bg-tremor-background-emphasis dark:text text-white dark:bg-dark-tremor-background-subtle px-2.5 py-1 -top-8 right-0 w-max opacity-0 transition-opacity group-hover:opacity-100'
          >Total clicks
          </span>
        </div>
      </div>
    </Card>
  )
}

export default Link
