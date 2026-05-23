// app/branches/[slug]/page.tsx
import BranchClient from "./BranchClient";
import { MEN_BRANCHES } from "@/lib/data";

// Dynamically pull slugs from the actual data — never goes out of sync again
export function generateStaticParams() {
  return MEN_BRANCHES.map((branch) => ({ slug: branch.slug }));
}

export default async function BranchDetails({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  return <BranchClient slug={resolvedParams.slug} />;
}