This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Product Roadmap Board

A modern, full-stack product roadmap application built with Next.js, allowing teams to track and manage issues across different development stages. Users can create issues, add comments, like features, and collaborate seamlessly.

## Features

- **Issue Management**: Create, view, and update issues with statuses (Backlog, To Do, In Progress, Done)
- **User Authentication**: Secure login via GitHub using Better Auth
- **Comments System**: Add comments to issues with user avatars and timestamps
- **Like System**: Users can like issues to show interest or support
- **Search Functionality**: Filter issues by title with debounced search
- **Responsive Design**: Built with Tailwind CSS for a clean, mobile-friendly interface
- **Real-time Updates**: Optimistic UI updates using React Query
- **Modal Views**: Detailed issue views in modal dialogs for better UX
- **Caching**: Next.js caching strategies for improved performance
- **API Documentation**: OpenAPI spec with Scalar for easy API exploration

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS 4, Radix UI components
- **State Management**: React Query (@tanstack/react-query)
- **Authentication**: Better Auth with GitHub OAuth
- **Database**: PostgreSQL with Drizzle ORM
- **API**: Hono with Zod OpenAPI for type-safe endpoints
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **URL State**: nuqs for query state management

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- GitHub OAuth app (for authentication)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd board
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```
3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Update the values with your PostgreSQL and GitHub OAuth credentials
4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

