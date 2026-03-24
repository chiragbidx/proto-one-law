"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type ClientProps = {
  greeting: string;
  firstName: string;
};

export default function Client({ greeting, firstName }: ClientProps) {
  // Example activity check (can expand when backend is ready)
  const hasActivity = false;

  return (
    <div className="flex flex-col gap-8">
      <section>
        <h1 className="text-3xl font-semibold mb-1">{greeting}, {firstName}!</h1>
        <p className="text-muted-foreground mb-8">
          Start by creating a to-do list to organize your tasks.
        </p>
      </section>

      {!hasActivity && (
        <Card>
          <CardContent className="text-center py-16">
            <p className="mb-4 text-lg">No activity yet. Create a to-do list to get started.</p>
            <Button asChild>
              <Link href="/dashboard/lists/new">Create a To-Do List</Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}