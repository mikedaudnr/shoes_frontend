# Shoe Store Frontend

A modern, responsive online shoe store built with Next.js 14, TypeScript, and Tailwind CSS. Designed to integrate seamlessly with a Laravel backend.

## Features

### Customer Features
- **Product Catalog**: Browse shoes with filtering by brand, category, and price
- **Product Search**: Real-time search functionality
- **Product Details**: Detailed product pages with multiple images, sizes, and descriptions
- **Shopping Cart**: Add/remove items, update quantities
- **User Authentication**: Login and registration system
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile

### Admin Features
- **Admin Dashboard**: Comprehensive product management
- **CRUD Operations**: Create, read, update, and delete products
- **Inventory Management**: Track stock levels and low stock alerts
- **Sales Analytics**: View key metrics and statistics

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

## Laravel Backend Integration

This frontend is designed to work with a Laravel backend. The API integration is handled through the `lib/api.ts` file.

### Expected Laravel API Endpoints

#### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/logout` - User logout

#### Products
- `GET /api/products` - Get all products (with filtering)
- `GET /api/products/{id}` - Get single product
- `POST /api/products` - Create product (admin)
- `PUT /api/products/{id}` - Update product (admin)
- `DELETE /api/products/{id}` - Delete product (admin)

#### Cart
- `GET /api/cart` - Get user's cart
- `POST /api/cart/items` - Add item to cart
- `PUT /api/cart/items/{id}` - Update cart item
- `DELETE /api/cart/items/{id}` - Remove cart item

#### Admin
- `POST /api/admin/login` - Admin login
- `GET /api/admin/stats` - Dashboard statistics

### Laravel Model Structure

\`\`\`php
// Product Model
class Product extends Model
{
    protected $fillable = [
        'name',
        'brand',
        'price',
        'description',
        'category',
        'stock',
        'images',
        'sizes',
        'featured'
    ];

    protected $casts = [
        'images' => 'array',
        'sizes' => 'array',
        'featured' => 'boolean'
    ];
}

// User Model
class User extends Model
{
    protected $fillable = [
        'name',
        'email',
        'password',
        'is_admin'
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'is_admin' => 'boolean'
    ];

    public function cartItems()
    {
        return $this->hasMany(CartItem::class);
    }
}

// CartItem Model
class CartItem extends Model
{
    protected $fillable = [
        'user_id',
        'product_id',
        'quantity',
        'size'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
\`\`\`

### Environment Variables

Create a `.env.local` file in your Next.js project:

\`\`\`env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
\`\`\`

## Getting Started

1. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

2. **Set up environment variables**:
   \`\`\`bash
   cp .env.example .env.local
   # Edit .env.local with your Laravel backend URL
   \`\`\`

3. **Run the development server**:
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

\`\`\`
app/
├── page.tsx                 # Home page
├── auth/
│   ├── login/page.tsx      # User login
│   └── register/page.tsx   # User registration
├── products/
│   ├── page.tsx            # Product catalog
│   └── [id]/page.tsx       # Product details
├── cart/page.tsx           # Shopping cart
└── admin/
    ├── login/page.tsx      # Admin login
    └── dashboard/page.tsx  # Admin dashboard

lib/
└── api.ts                  # API integration functions

components/ui/              # shadcn/ui components
\`\`\`

## Key Features Implementation

### Authentication Flow
- JWT token-based authentication
- Automatic token refresh
- Protected routes for admin areas
- Persistent login state

### Product Management
- Real-time search and filtering
- Image upload and management
- Inventory tracking
- Category and brand organization

### Shopping Cart
- Persistent cart across sessions
- Size and quantity selection
- Real-time price calculations
- Checkout integration ready

### Admin Dashboard
- Product CRUD operations
- Sales analytics
- Inventory management
- User management capabilities

## Deployment

### Vercel Deployment
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically

### Laravel Backend Setup
Ensure your Laravel backend has:
- CORS configured for your frontend domain
- API routes properly set up
- Authentication middleware configured
- Database migrations run

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
