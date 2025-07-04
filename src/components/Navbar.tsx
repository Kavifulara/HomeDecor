import Link from 'next/link'
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            Decor Haven
          </Link>
          
          <div className="hidden sm:flex space-x-8">
            <Link href="/category/wall-art" className="text-gray-600 hover:text-primary">
              Wall Art
            </Link>
            <Link href="/category/rugs" className="text-gray-600 hover:text-primary">
              Rugs
            </Link>
            <Link href="/category/mirrors" className="text-gray-600 hover:text-primary">
              Mirrors
            </Link>
            <Link href="/category/sculptures" className="text-gray-600 hover:text-primary">
              Sculptures
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/cart" className="text-gray-600 hover:text-primary">
              <ShoppingCartIcon className="h-6 w-6" />
            </Link>
            <Link href="/account" className="text-gray-600 hover:text-primary">
              <UserIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 