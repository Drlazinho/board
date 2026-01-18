import { getIssue } from "@/http/get-issue";
import { ArchiveIcon, MoveLeftIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { IssueCommentsList } from "./issue-comments/issue-comments.list";
import { Suspense } from "react";
import { IssueCommentsSkeleton } from "./issue-comments/issue-comments-skeleton";
import { IssueLikeButton } from "./issue-like-button";
import { authClient } from "@/lib/auth-client";
import { headers } from "next/headers";
import { createComment } from "@/http/create-comment";
import { IssueCommentForm } from "./issue-comment-form";
import { IssueDetails } from "./issue-details";

interface IssuePageProps {
  params: Promise<{ id: string }>;
}

export const generateMetadata = async ({
  params,
}: IssuePageProps): Promise<Metadata> => {
  const { id } = await params;

  const issue = await getIssue({ id });

  return {
    title: `Issue ${issue.title}`,
  };
};

const statusLabels = {
  backlog: "Backlog",
  todo: "To Do",
  in_progress: "In Progress",
  done: "Done",
} as const;

export default async function IssuePage({ params }: IssuePageProps) {
  const { id } = await params;

  const { data: session } = await authClient.getSession({
    fetchOptions: {
      headers: await headers(),
    },
  });

  const issue = await getIssue({ id });

  const isAuthenticated = !!session?.user;

  async function handleCreateComment(text: string) {
    "use server";

    await createComment({ issueId: id, text });
  }

  return (
    <main className="max-w-[900px] mx-auto w-full flex flex-col gap-4 p-6 bg-navy-800 border-[0.5px] border-navy-500 rounded-xl">
      <Link
        href="/"
        className="flex items-center gap-2 text-navy-200 hover:text-navy-100"
      >
        <MoveLeftIcon className="size-4" />
        <span className="text-xs">Back to board</span>
      </Link>

      <IssueDetails issueId={id} />
    </main>
  );
}
