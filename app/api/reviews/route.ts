export const dynamic = 'force-dynamic'; // Prevents Next.js from pre-rendering this route at build time
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// GET: Fetch all reviews from the database
export async function GET() {
  const { data, error } = await supabase
    .from('reviews')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

// POST: Add a new review to the database
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, rating, text } = body;

    // Basic validation
    if (!name || !rating || !text) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('reviews')
      .insert([{ name, rating, text }])
      .select();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data[0], { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}