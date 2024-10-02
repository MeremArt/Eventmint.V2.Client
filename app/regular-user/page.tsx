'use client';
import { redirect } from 'next/navigation';

export default function Page() {
  redirect('/regular-user/tickets');
  return null;
}