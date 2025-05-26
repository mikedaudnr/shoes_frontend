"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingCart, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedBrand, setSelectedBrand] = useState("all")
  const [sortBy, setSortBy] = useState("name")

  // Mock data - replace with API calls to Laravel backend
  const brands = ["Nike", "Adidas", "Converse", "Vans", "Puma", "New Balance"]
  const products = [
    {
      id: 1,
      name: "Nike Air Max 270",
      price: 150,
      image: "/placeholder.svg?height=200&width=200",
      brand: "Nike",
      category: "Running",
    },
    {
      id: 2,
      name: "Adidas Ultraboost 22",
      price: 180,
      image: "/placeholder.svg?height=200&width=200",
      brand: "Adidas",
      category: "Running",
    },
    {
      id: 3,
      name: "Converse Chuck 70",
      price: 85,
      image: "/placeholder.svg?height=200&width=200",
      brand: "Converse",
      category: "Casual",
    },
    {
      id: 4,
      name: "Vans Old Skool",
      price: 60,
      image: "/placeholder.svg?height=200&width=200",
      brand: "Vans",
      category: "Skate",
    },
    {
      id: 5,
      name: "Puma RS-X3",
      price: 110,
      image: "/placeholder.svg?height=200&width=200",
      brand: "Puma",
      category: "Lifestyle",
    },
    {
      id: 6,
      name: "New Balance 990v5",
      price: 185,
      image: "/placeholder.svg?height=200&width=200",
      brand: "New Balance",
      category: "Running",
    },
    {
      id: 7,
      name: "Nike Dunk Low",
      price: 100,
      image: "/placeholder.svg?height=200&width=200",
      brand: "Nike",
      category: "Lifestyle",
    },
    {
      id: 8,
      name: "Adidas Stan Smith",
      price: 80,
      image: "/placeholder.svg?height=200&width=200",
      brand: "Adidas",
      category: "Casual",
    },
  ]

  const filteredProducts = products
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedBrand === "all" || product.brand === selectedBrand),
    )
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price
      if (sortBy === "price-high") return b.price - a.price
      return a.name.localeCompare(b.name)
    })

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

            <div className="flex items-center gap-4">
              <Link href="/cart">
                <Button variant="ghost" size="icon">
                  <ShoppingCart className="h-6 w-6" />
                  <Badge className="ml-1">3</Badge>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Filters and Search */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-6">Products Catalog</h1>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <Select value={selectedBrand} onValueChange={setSelectedBrand}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Select Brand" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Brands</SelectItem>
                {brands.map((brand) => (
                  <SelectItem key={brand} value={brand}>
                    {brand}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Brand Filter Buttons */}
          <div className="flex flex-wrap gap-2 mb-6">
            <Button
              variant={selectedBrand === "all" ? "default" : "outline"}
              onClick={() => setSelectedBrand("all")}
              size="sm"
            >
              All
            </Button>
            {brands.map((brand) => (
              <Button
                key={brand}
                variant={selectedBrand === brand ? "default" : "outline"}
                onClick={() => setSelectedBrand(brand)}
                size="sm"
              >
                {brand}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  {product.brand} • {product.category}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">${product.price}</span>
                  <Link href={`/products/${product.id}`}>
                    <Button size="sm">View</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
