import Link from 'next/link'

export default function Header() {
  return (
    <div>
        <Link href={'/'}>Ecommerce</Link>
        <nav>
        <Link href={'/'}>Home</Link>
        <Link href={'/'}>All Products</Link>
        <Link href={'/'}>Categories</Link>
        <Link href={'/'}>Account</Link>
        <Link href={'/'}>Cart (0)</Link>
        </nav>
    </div>
  )
}
