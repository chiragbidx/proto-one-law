"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ListsNewClient() {
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">Create New To-Do List</h1>
      <Card>
        <CardContent className="flex flex-col gap-6 py-10">
          <form>
            <div className="mb-4">
              <Label htmlFor="list-name">List Name</Label>
              <Input
                id="list-name"
                name="listName"
                placeholder="e.g. Marketing Roadmap"
                required
                className="mt-2"
                disabled
              />
            </div>
            <Button type="button" className="w-full" disabled>
              Create List (Coming soon)
            </Button>
          </form>
          <div className="text-center">
            <Link
              href="/dashboard/lists"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Back to Lists
            </Link>
          </div>
        </CardContent>
      </Card>
      <p className="mt-8 text-muted-foreground">
        Give your list a name and start adding tasks.
      </p>
    </div>
  );
}