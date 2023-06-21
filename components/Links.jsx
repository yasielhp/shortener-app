import { Card, Metric } from '@tremor/react'
import Link from './Link'

const Links = () => {
  return (
    <Card>
      <Metric className='mb-4'>Shortened links</Metric>
      <Link />
    </Card>
  )
}

export default Links
