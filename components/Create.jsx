'use client'
import { Button, Card, Metric, Tab, TabGroup, TabList, TextInput } from '@tremor/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const Create = () => {
  const [toggle, setToggle] = useState(2)
  const {
    register,
    handleSubmit
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <Card>
      <Metric>Shorten URL</Metric>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='py-2'>
          <label htmlFor='url' className="px-2 mb-4 after:content-['*'] after:ml-0.5 after:text-red-500">Website URL</label>
          <TextInput
            id='url'
            placeholder='The full website URL (e.g. https://google.com)'
            {...register('url')}
          />
        </div>
        <div className='w-full py-2'>
          <label htmlFor='slug' className="px-2 mb-4 after:content-['*'] after:ml-0.5 after:text-red-500">Custom Slug</label>
          <div className='w-full flex gap-x-2'>
            <TextInput
              id='slug'
              placeholder='The custom slug (e.g. customSlug)'
              {...register('slug')}
            />
            <Button className='h-[36px]' type='button'>Generate</Button>
          </div>
        </div>
        <div className='w-full py-2 flex justify-between items-center'>
          <p className='w-full ml-2'>Do you want to use UTMs</p>
          <TabGroup className='w-auto' defaultIndex={toggle}>
            <TabList variant='solid'>
              <Tab onClick={() => setToggle(1)}>Yes</Tab>
              <Tab onClick={() => setToggle(2)}>No</Tab>
            </TabList>
          </TabGroup>
        </div>
        {
          toggle === 1 && (
            <>
              <div className='w-full p-2'>
                <p className='text-xs text-gray-600'>UTM parameters are tags you add to a URL. When someone clicks on a URL with UTM parameters, those tags are sent back to your Google Analytics for tracking.</p>
              </div>
              <div className='w-full py-2'>
                <label htmlFor='utmId' className='px-2 mb-4'>Campaing Id</label>
                <TextInput
                  id='utmId'
                  placeholder='The campaing id (e.g. 123456)'
                  {...register('utmId')}
                />
              </div>
              <div className='w-full py-2'>
                <label htmlFor='utmSource' className="px-2 mb-4 after:content-['*'] after:ml-0.5 after:text-red-500">Campaing Source</label>
                <TextInput
                  id='utmSource'
                  placeholder='The campaing source (e.g. google)'
                  {...register('utmSource')}
                />
              </div>
              <div className='w-full py-2'>
                <label htmlFor='utmMedium' className="px-2 mb-4 after:content-['*'] after:ml-0.5 after:text-red-500">Campaing Medium</label>
                <TextInput
                  id='utmMedium'
                  placeholder='The campaing medium (e.g. cpc)'
                  {...register('utmMedium')}
                />
              </div>
              <div className='w-full py-2'>
                <label htmlFor='utmName' className="px-2 mb-4 after:content-['*'] after:ml-0.5 after:text-red-500">Campaing Name</label>
                <TextInput
                  id='utmName'
                  placeholder='The campaing name (e.g. spring_sale)'
                  {...register('utmName')}
                />
              </div>
              <div className='w-full py-2'>
                <label htmlFor='utmTerm' className='px-2 mb-4'>Campaing Term</label>
                <TextInput
                  id='utmTerm'
                  placeholder='The campaing term (e.g. google)'
                  {...register('utmTerm')}
                />
              </div>
              <div className='w-full py-2'>
                <label htmlFor='utmContent' className='px-2 mb-4'>Campaing Content</label>
                <TextInput
                  id='utmContent'
                  placeholder='The campaing content (e.g. logo)'
                  {...register('utmContent')}
                />
              </div>
            </>
          )
        }
        <div className='w-full py-2'>
          <Button type='submit' className='w-full h-full'>Shorten</Button>
        </div>
      </form>
    </Card>
  )
}
export default Create
