import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Alert,
  AlertTitle,
  AlertDescription,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Pagination,
  Breadcrumbs,
  Skeleton,
  SkeletonText,
  SkeletonCard,
  SkeletonAvatar,
  SkeletonTable,
  EmptyState,
  Button,
} from "@yems-ui/core";
import {
  AlertCircle,
  CheckCircle2,
  Info,
  AlertTriangle,
  Inbox,
  Plus,
} from "lucide-react";

export function NewComponentsShowcase() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [showSkeleton, setShowSkeleton] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setShowSkeleton(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
    >
      <div>
        <h2 className="text-2xl font-semibold mb-2">New Priority Components</h2>
        <p className="text-muted-foreground">
          Alert, Popover, Accordion, Pagination, Breadcrumbs, Skeleton, Empty
          State
        </p>
      </div>

      {/* Alerts */}
      <Card>
        <CardHeader>
          <CardTitle>Alerts & Banners</CardTitle>
          <CardDescription>
            System messages with variants and dismissible option
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Alert variant="info">
            <Info className="h-4 w-4" />
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>
              This is an informational message with glassmorphism effect.
            </AlertDescription>
          </Alert>
          <Alert variant="success" dismissible>
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              Your changes have been saved successfully.
            </AlertDescription>
          </Alert>
          <Alert variant="warning">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
              Please review your settings before proceeding.
            </AlertDescription>
          </Alert>
          <Alert variant="error" dismissible>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Something went wrong. Please try again.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Popover */}
      <Card>
        <CardHeader>
          <CardTitle>Popover</CardTitle>
          <CardDescription>
            Contextual overlays with glassmorphism
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline-primary">Open Popover</Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="space-y-2">
                <h4 className="font-medium">Popover Title</h4>
                <p className="text-sm text-muted-foreground">
                  This is a popover with liquid glass effect and smooth
                  animations.
                </p>
              </div>
            </PopoverContent>
          </Popover>
        </CardContent>
      </Card>

      {/* Accordion */}
      <Card>
        <CardHeader>
          <CardTitle>Accordion</CardTitle>
          <CardDescription>
            Collapsible sections with smooth animations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>What is Flock CMS?</AccordionTrigger>
              <AccordionContent>
                Flock is a modern church management system with glassmorphism
                design and micro-interactions for an exceptional user
                experience.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How does it work?</AccordionTrigger>
              <AccordionContent>
                Built with React, TypeScript, and TailwindCSS v4, featuring a
                comprehensive component library with 27+ components.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it customizable?</AccordionTrigger>
              <AccordionContent>
                Yes! All components support light/dark modes and can be easily
                customized through our design token system.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Pagination */}
      <Card>
        <CardHeader>
          <CardTitle>Pagination</CardTitle>
          <CardDescription>
            Smart page navigation with glassmorphism
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Pagination
            currentPage={currentPage}
            totalPages={10}
            onPageChange={setCurrentPage}
          />
        </CardContent>
      </Card>

      {/* Breadcrumbs */}
      <Card>
        <CardHeader>
          <CardTitle>Breadcrumbs</CardTitle>
          <CardDescription>Navigation hierarchy</CardDescription>
        </CardHeader>
        <CardContent>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Members", href: "/members" },
              { label: "John Doe" },
            ]}
          />
        </CardContent>
      </Card>

      {/* Skeleton Loaders */}
      <Card>
        <CardHeader>
          <CardTitle>Skeleton Loaders</CardTitle>
          <CardDescription>
            Loading states with pulse and wave animations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="text-sm font-medium mb-2">Text Skeleton</p>
            <SkeletonText lines={3} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium mb-2">Card Skeleton</p>
              <SkeletonCard />
            </div>
            <div>
              <p className="text-sm font-medium mb-2">Avatar Skeleton</p>
              <div className="flex gap-2">
                <SkeletonAvatar size="sm" />
                <SkeletonAvatar size="md" />
                <SkeletonAvatar size="lg" />
              </div>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowSkeleton(!showSkeleton)}
          >
            Toggle Skeleton Demo
          </Button>
        </CardContent>
      </Card>

      {/* Empty State */}
      <Card>
        <CardHeader>
          <CardTitle>Empty State</CardTitle>
          <CardDescription>
            No data display with staggered animations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <EmptyState
            icon={<Inbox className="h-16 w-16" />}
            title="No members found"
            description="Get started by adding your first church member to the system."
            action={{
              label: "Add Member",
              onClick: () => alert("Add member clicked!"),
            }}
          />
        </CardContent>
      </Card>
    </motion.section>
  );
}
