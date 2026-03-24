"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ListsClient() {
  // Placeholder -- replace with lists fetching once integrated
  const hasLists = false;

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-1">To-Do Lists</h1>
      {!hasLists ? (
        <Card className="my-12">
          <CardContent className="text-center py-16">
            <p className="mb-4 text-lg">You have no to-do lists. Start by creating one.</p>
            <Button asChild>
              <Link href="/dashboard/lists/new">New List</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div>
          {/* Render lists table here in future */}
        </div>
      )}
    </div>
  );
}