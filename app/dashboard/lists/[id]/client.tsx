"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ListsIdClient() {
  // Placeholder: will show tasks in this list
  const hasTasks = false;

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-1">List Overview</h1>
      {!hasTasks ? (
        <Card className="my-12">
          <CardContent className="text-center py-16">
            <p className="mb-4 text-lg">No tasks in this list yet. Add your first task.</p>
            <Button asChild>
              <Link href="#">Add Task</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div>
          {/* Render tasks for this list here in future */}
        </div>
      )}
    </div>
  );
}