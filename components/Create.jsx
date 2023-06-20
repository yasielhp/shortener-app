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
              placeholder='The custom slug (e.g. link)'
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
              <div className='w-full py-2'>
                <label htmlFor='utm_id' className='px-2 mb-4'>Campaing Id</label>
                <TextInput
                  id='utm_id'
                  placeholder='The campaing id (e.g. 123456)'
                  {...register('utm_id')}
                />
              </div>
              <div className='w-full py-2'>
                <label htmlFor='utm_source' className="px-2 mb-4 after:content-['*'] after:ml-0.5 after:text-red-500">Campaing Source</label>
                <TextInput
                  id='utm_source'
                  placeholder='The campaing source (e.g. google)'
                  {...register('utm_source')}
                />
              </div>
              <div className='w-full py-2'>
                <label htmlFor='utm_medium' className="px-2 mb-4 after:content-['*'] after:ml-0.5 after:text-red-500">Campaing Medium</label>
                <TextInput
                  id='utm_medium'
                  placeholder='The campaing medium (e.g. cpc)'
                  {...register('utm_medium')}
                />
              </div>
              <div className='w-full py-2'>
                <label htmlFor='utm_name' className="px-2 mb-4 after:content-['*'] after:ml-0.5 after:text-red-500">Campaing Name</label>
                <TextInput
                  id='utm_name'
                  placeholder='The campaing name (e.g. spring_sale)'
                  {...register('utm_name')}
                />
              </div>
              <div className='w-full py-2'>
                <label htmlFor='utm_term' className='px-2 mb-4'>Campaing Term</label>
                <TextInput
                  id='utm_term'
                  placeholder='The campaing term (e.g. google)'
                  {...register('utm_term')}
                />
              </div>
              <div className='w-full py-2'>
                <label htmlFor='utm_content' className='px-2 mb-4'>Campaing Content</label>
                <TextInput
                  id='utm_content'
                  placeholder='The campaing content (e.g. logo)'
                  {...register('utm_content')}
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
