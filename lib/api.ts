// API utility functions for Laravel backend integration

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api"

// Auth API calls
export const authAPI = {
  login: async (email: string, password: string) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
    return response.json()
  },

  register: async (name: string, email: string, password: string) => {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    })
    return response.json()
  },

  logout: async (token: string) => {
    const response = await fetch(`${API_BASE_URL}/auth/logout`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
    return response.json()
  },
}

// Products API calls
export const productsAPI = {
  getAll: async (params?: { search?: string; brand?: string; sort?: string }) => {
    const searchParams = new URLSearchParams()
    if (params?.search) searchParams.append("search", params.search)
    if (params?.brand) searchParams.append("brand", params.brand)
    if (params?.sort) searchParams.append("sort", params.sort)

    const response = await fetch(`${API_BASE_URL}/products?${searchParams}`)
    return response.json()
  },

  getById: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/products/${id}`)
    return response.json()
  },

  create: async (productData: any, token: string) => {
    const response = await fetch(`${API_BASE_URL}/products`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
    return response.json()
  },

  update: async (id: string, productData: any, token: string) => {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
    return response.json()
  },

  delete: async (id: string, token: string) => {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.json()
  },
}

// Cart API calls
export const cartAPI = {
  getCart: async (token: string) => {
    const response = await fetch(`${API_BASE_URL}/cart`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.json()
  },

  addItem: async (productId: string, quantity: number, size: string, token: string) => {
    const response = await fetch(`${API_BASE_URL}/cart/items`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product_id: productId, quantity, size }),
    })
    return response.json()
  },

  updateItem: async (itemId: string, quantity: number, token: string) => {
    const response = await fetch(`${API_BASE_URL}/cart/items/${itemId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity }),
    })
    return response.json()
  },

  removeItem: async (itemId: string, token: string) => {
    const response = await fetch(`${API_BASE_URL}/cart/items/${itemId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.json()
  },
}

// Admin API calls
export const adminAPI = {
  login: async (email: string, password: string) => {
    const response = await fetch(`${API_BASE_URL}/admin/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
    return response.json()
  },

  getStats: async (token: string) => {
    const response = await fetch(`${API_BASE_URL}/admin/stats`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.json()
  },
}
