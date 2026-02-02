import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Rate limiting: Store IP-based request counts (in production, use Redis)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

// Initialize Supabase with service role key (server-side only)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error('Missing Supabase environment variables')
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

// Rate limiting: 5 requests per minute per IP
const RATE_LIMIT = 5
const RATE_LIMIT_WINDOW = 60000 // 1 minute in ms

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0] ||
    request.headers.get('x-real-ip') ||
    'unknown'
  )
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitStore.get(ip)

  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }

  if (record.count >= RATE_LIMIT) {
    return false
  }

  record.count += 1
  return true
}

// Input validation
function validateFormData(data: any) {
  const errors: string[] = []

  // Name validation
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
    errors.push('Name is required')
  } else if (data.name.length > 100) {
    errors.push('Name must be less than 100 characters')
  }

  // Email validation
  if (!data.email || typeof data.email !== 'string') {
    errors.push('Email is required')
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Invalid email format')
  } else if (data.email.length > 255) {
    errors.push('Email must be less than 255 characters')
  }

  // Platforms validation
  if (!Array.isArray(data.platforms) || data.platforms.length === 0) {
    errors.push('At least one platform must be selected')
  } else if (data.platforms.length > 20) {
    errors.push('Too many platforms selected')
  }
  // Validate each platform is a string
  if (Array.isArray(data.platforms)) {
    data.platforms.forEach((p: any) => {
      if (typeof p !== 'string' || p.length > 50) {
        errors.push('Invalid platform format')
      }
    })
  }

  // Followers validation
  if (!data.followers || typeof data.followers !== 'string') {
    errors.push('Followers range is required')
  } else if (data.followers.length > 50) {
    errors.push('Invalid followers format')
  }

  // Services validation
  if (!Array.isArray(data.services) || data.services.length === 0) {
    errors.push('At least one service must be selected')
  } else if (data.services.length > 20) {
    errors.push('Too many services selected')
  }
  // Validate each service is a string
  if (Array.isArray(data.services)) {
    data.services.forEach((s: any) => {
      if (typeof s !== 'string' || s.length > 100) {
        errors.push('Invalid service format')
      }
    })
  }

  return errors
}

export async function POST(request: NextRequest) {
  try {
    // Check rate limit
    const clientIp = getClientIp(request)
    if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Parse request body
    let data
    try {
      data = await request.json()
    } catch {
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400 }
      )
    }

    // Validate input
    const validationErrors = validateFormData(data)
    if (validationErrors.length > 0) {
      return NextResponse.json(
        { error: 'Validation failed', details: validationErrors },
        { status: 400 }
      )
    }

    // Insert into Supabase using service role key
    const { data: insertedData, error } = await supabase
      .from('Form Input')
      .insert([
        {
          Name: data.name.trim(),
          Email: data.email.trim().toLowerCase(),
          Platforms: data.platforms,
          Followers: data.followers,
          Services: data.services,
        },
      ])
      .select()

    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json(
        { error: 'Failed to submit form. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 201 }
    )
  } catch (err) {
    console.error('Unexpected error:', err)
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    )
  }
}

// Reject other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}
