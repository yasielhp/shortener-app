import { Card, Metric } from '@tremor/react'
import Link from './Link'
import { data } from '@/mocks/data'
const Links = () => {
  return (
    <Card>
      <Metric className='mb-4'>Shortened links</Metric>
      <div className='flex flex-col gap-4'>
        {
        data.map((link, index) => (
          <Link key={index} link={link} />
        ))
      }
      </div>
    </Card>
  )
}

export default Links
