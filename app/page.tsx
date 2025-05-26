import Link from "next/link"
import { ShoppingCart, Menu, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  // Mock data - replace with API calls to Laravel backend
  const featuredShoes = [
    { id: 1, name: "Nike Air Max", price: 120, image: "/placeholder.svg?height=200&width=200", brand: "Nike" },
    { id: 2, name: "Adidas Ultraboost", price: 180, image: "/placeholder.svg?height=200&width=200", brand: "Adidas" },
    {
      id: 3,
      name: "Converse Chuck Taylor",
      price: 65,
      image: "/placeholder.svg?height=200&width=200",
      brand: "Converse",
    },
    { id: 4, name: "Vans Old Skool", price: 60, image: "/placeholder.svg?height=200&width=200", brand: "Vans" },
    { id: 5, name: "Puma RS-X", price: 110, image: "/placeholder.svg?height=200&width=200", brand: "Puma" },
    {
      id: 6,
      name: "New Balance 990",
      price: 185,
      image: "/placeholder.svg?height=200&width=200",
      brand: "New Balance",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
              <Link href="/" className="text-2xl font-bold">
                Shoes
              </Link>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <Link href="/products" className="hover:text-primary">
                Products
              </Link>
              <Link href="/brands" className="hover:text-primary">
                Brands
              </Link>
              <Link href="/about" className="hover:text-primary">
                About
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search shoes..." className="w-64" />
              </div>
              <Link href="/cart">
                <Button variant="ghost" size="icon">
                  <ShoppingCart className="h-6 w-6" />
                  <Badge className="ml-1">3</Badge>
                </Button>
              </Link>
              <Link href="/auth/login">
                <Button variant="outline">Login</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Step Into Style</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover the latest collection of premium shoes from top brands
          </p>
          <Link href="/products">
            <Button size="lg" variant="secondary">
              Shop Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Shoes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredShoes.map((shoe) => (
              <Card key={shoe.id} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={shoe.image || "/placeholder.svg"}
                      alt={shoe.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{shoe.name}</h3>
                  <p className="text-muted-foreground mb-2">{shoe.brand}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">${shoe.price}</span>
                    <Link href={`/products/${shoe.id}`}>
                      <Button>View Details</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Shoes Store</h3>
              <p className="text-gray-400">Your premium destination for quality footwear.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/products">Products</Link>
                </li>
                <li>
                  <Link href="/brands">Brands</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link href="/shipping">Shipping Info</Link>
                </li>
                <li>
                  <Link href="/returns">Returns</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon">
                  FB
                </Button>
                <Button variant="ghost" size="icon">
                  IG
                </Button>
                <Button variant="ghost" size="icon">
                  TW
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
