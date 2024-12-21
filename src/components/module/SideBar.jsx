import Link from 'next/link'
import styles from './Sidebar.module.css'
import {HiFilter} from 'react-icons/hi'
import { categories } from '@/constants/String'
function SideBar() {
  return (
    <div className={styles.container}>
      <p>
        <HiFilter />
        دسته بندی
      </p>
      <Link href="/buy-residential">همه</Link>
      {Object.keys(categories).map((i) => (
        <Link
          key={i}
          href={{
            pathname: "/buy-residential",
            query: { category: i },
          }}
        >
          {categories[i]}
        </Link>
      ))}
    </div>
  )
}

export default SideBar