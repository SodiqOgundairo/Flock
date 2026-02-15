import React from "react";
import { Link } from "react-router-dom";
import { NewComponentsShowcase } from "@/components/NewComponentsShowcase";
import {
  Button,
  IconButton,
  Input,
  Label,
  FormField,
  Textarea,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  StatCard,
  Badge,
  StatusBadge,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Separator,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Checkbox,
  Switch,
  RadioGroup,
  RadioGroupItem,
  Progress,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@yems-ui/core";

import {
  Users,
  DollarSign,
  Calendar,
  TrendingUp,
  Search,
  Mail,
  Phone,
  Heart,
  Share2,
  Download,
  Settings,
  Plus,
  Home as HomeIcon,
  Sparkles,
  MoreVertical,
  Info,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ComponentShowcase() {
  const [dialogOpen, setDialogOpen] = React.useState(false);

  return (
    <div className="min-h-screen">
      {/* Glass Header */}
      <header className="glass-strong border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Link
                to="/"
                className="flex items-center gap-2 text-brand-primary hover:text-brand-primary/80 transition-colors"
              >
                <HomeIcon className="h-5 w-5" />
                <span className="font-semibold">Back to Home</span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-2xl font-bold text-brand-primary flex items-center gap-2">
                <Sparkles className="h-6 w-6" />
                Flock Components
              </h1>
            </motion.div>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Buttons Section */}
        <motion.section
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Buttons with Ripple Effects
            </h2>
            <p className="text-muted-foreground">
              Click buttons to see ripple animations
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Filled Variants</CardTitle>
              <CardDescription>
                Primary action buttons with glass effects
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="accent">Accent</Button>
              <Button variant="ember">Ember</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="primary" isLoading>
                Loading
              </Button>
              <Button variant="primary" leftIcon={<Plus className="h-4 w-4" />}>
                With Icon
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Glass Outline Variants</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <Button variant="outline-primary">Primary</Button>
              <Button variant="outline-secondary">Secondary</Button>
              <Button variant="outline-accent">Accent</Button>
              <Button variant="outline-ember">Ember</Button>
              <Button variant="outline-destructive">Destructive</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ghost Glass & Icon Buttons</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap items-center gap-3">
              <Button variant="ghost-primary">Ghost Primary</Button>
              <Button variant="ghost-accent">Ghost Accent</Button>

              <Separator orientation="vertical" className="h-8" />

              <IconButton variant="primary" aria-label="Like">
                <Heart className="h-4 w-4" />
              </IconButton>
              <IconButton variant="accent" aria-label="Share">
                <Share2 className="h-4 w-4" />
              </IconButton>
              <IconButton variant="outline-primary" aria-label="Download">
                <Download className="h-4 w-4" />
              </IconButton>
              <IconButton variant="ghost-primary" aria-label="Settings">
                <Settings className="h-4 w-4" />
              </IconButton>
            </CardContent>
          </Card>
        </motion.section>

        {/* Inputs Section */}
        <motion.section
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Glass Inputs with Micro-interactions
            </h2>
            <p className="text-muted-foreground">
              Focus inputs to see animations
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Input Variants</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 max-w-md">
              <FormField label="Email Address" htmlFor="email" required>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  leftIcon={<Mail className="h-4 w-4" />}
                />
              </FormField>

              <FormField label="Phone Number" htmlFor="phone">
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter phone number"
                  leftIcon={<Phone className="h-4 w-4" />}
                  leftAddon={
                    <Select defaultValue="+234">
                      <SelectTrigger className="w-20 border-0 bg-transparent">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="+234">+234</SelectItem>
                        <SelectItem value="+1">+1</SelectItem>
                        <SelectItem value="+44">+44</SelectItem>
                      </SelectContent>
                    </Select>
                  }
                />
              </FormField>

              <FormField label="Search" htmlFor="search">
                <Input
                  id="search"
                  placeholder="Search members..."
                  leftIcon={<Search className="h-4 w-4" />}
                  variant="filled"
                />
              </FormField>

              <FormField
                label="Password"
                htmlFor="password"
                error="Password must be at least 8 characters"
              >
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  state="error"
                />
              </FormField>

              <FormField
                label="Bio"
                htmlFor="bio"
                hint="Tell us about yourself"
              >
                <Textarea id="bio" placeholder="Write your bio..." />
              </FormField>
            </CardContent>
          </Card>
        </motion.section>

        {/* Cards & Stats Section */}
        <motion.section
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Glass Cards & Statistics
            </h2>
            <p className="text-muted-foreground">
              Hover over cards to see lift effects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              title="Total Members"
              value="1,234"
              icon={<Users className="h-5 w-5" />}
              trend={{ value: 12.5, isPositive: true }}
              description="vs last month"
            />
            <StatCard
              title="Total Giving"
              value="₦2.5M"
              icon={<DollarSign className="h-5 w-5" />}
              trend={{ value: 8.2, isPositive: true }}
              description="vs last month"
            />
            <StatCard
              title="Events This Month"
              value="24"
              icon={<Calendar className="h-5 w-5" />}
            />
            <StatCard
              title="Attendance Rate"
              value="87%"
              icon={<TrendingUp className="h-5 w-5" />}
              trend={{ value: 3.1, isPositive: false }}
              description="vs last week"
            />
          </div>
        </motion.section>

        {/* Badges Section */}
        <motion.section
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div>
            <h2 className="text-2xl font-semibold mb-2">Badges</h2>
            <p className="text-muted-foreground">
              Status indicators and labels
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Badge Variants</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-medium">Filled Badges</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="primary">Primary</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="accent">Accent</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="error">Error</Badge>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <p className="text-sm font-medium">Soft Badges with Dots</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="soft-primary" dot>
                    Primary
                  </Badge>
                  <Badge variant="soft-success" dot>
                    Success
                  </Badge>
                  <Badge variant="soft-warning" dot>
                    Warning
                  </Badge>
                  <Badge variant="soft-error" dot>
                    Error
                  </Badge>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <p className="text-sm font-medium">Status Badges</p>
                <div className="flex flex-wrap gap-2">
                  <StatusBadge status="active" />
                  <StatusBadge status="inactive" />
                  <StatusBadge status="pending" />
                  <StatusBadge status="success" />
                  <StatusBadge status="warning" />
                  <StatusBadge status="error" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Dialog Section */}
        <motion.section
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div>
            <h2 className="text-2xl font-semibold mb-2">Glass Dialogs</h2>
            <p className="text-muted-foreground">
              Modal dialogs with backdrop blur
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Dialog Example</CardTitle>
              <CardDescription>Click to open a glass modal</CardDescription>
            </CardHeader>
            <CardContent>
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="primary">Open Dialog</Button>
                </DialogTrigger>
                <DialogContent className="glass-strong">
                  <DialogHeader>
                    <DialogTitle>Add New Member</DialogTitle>
                    <DialogDescription>
                      Fill in the member details below
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <FormField label="Full Name" htmlFor="dialog-name" required>
                      <Input id="dialog-name" placeholder="John Doe" />
                    </FormField>
                    <FormField label="Email" htmlFor="dialog-email">
                      <Input
                        id="dialog-email"
                        type="email"
                        placeholder="john@example.com"
                      />
                    </FormField>
                  </div>
                  <DialogFooter>
                    <Button
                      variant="ghost"
                      onClick={() => setDialogOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => setDialogOpen(false)}
                    >
                      Add Member
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </motion.section>

        {/* New Components Section */}
        <motion.section
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div>
            <h2 className="text-2xl font-semibold mb-2">New Components</h2>
            <p className="text-muted-foreground">
              Tabs, Checkbox, Switch, Progress, Tooltip, Dropdown, Table
            </p>
          </div>

          {/* Tabs */}
          <Card>
            <CardHeader>
              <CardTitle>Tabs</CardTitle>
              <CardDescription>
                Tabbed navigation with smooth transitions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="overview">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                  <TabsTrigger value="reports">Reports</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    Overview content with smooth fade-in animation.
                  </p>
                </TabsContent>
                <TabsContent value="analytics" className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    Analytics data and charts go here.
                  </p>
                </TabsContent>
                <TabsContent value="reports" className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    Generated reports and exports.
                  </p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Checkbox, Radio & Switch */}
          <Card>
            <CardHeader>
              <CardTitle>Checkbox, Radio & Switch</CardTitle>
              <CardDescription>Form controls with animations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Accept terms and conditions</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="marketing" />
                <Label htmlFor="marketing">Receive marketing emails</Label>
              </div>
              <Separator />
              <div className="space-y-3">
                <Label>Notification Preference</Label>
                <RadioGroup defaultValue="email">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="email" id="r1" />
                    <Label htmlFor="r1">Email</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sms" id="r2" />
                    <Label htmlFor="r2">SMS</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="push" id="r3" />
                    <Label htmlFor="r3">Push Notification</Label>
                  </div>
                </RadioGroup>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <Label htmlFor="notifications">Enable notifications</Label>
                <Switch id="notifications" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="darkmode">Dark mode</Label>
                <Switch id="darkmode" />
              </div>
            </CardContent>
          </Card>

          {/* Progress */}
          <Card>
            <CardHeader>
              <CardTitle>Progress</CardTitle>
              <CardDescription>Animated progress bars</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Upload Progress</span>
                  <span className="text-muted-foreground">75%</span>
                </div>
                <Progress value={75} />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Processing</span>
                  <span className="text-muted-foreground">45%</span>
                </div>
                <Progress value={45} />
              </div>
            </CardContent>
          </Card>

          {/* Tooltip & Dropdown */}
          <Card>
            <CardHeader>
              <CardTitle>Tooltip & Dropdown Menu</CardTitle>
              <CardDescription>Contextual overlays</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline-primary">
                      <Info className="h-4 w-4 mr-2" />
                      Hover me
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>This is a glass tooltip with fade animation</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    <MoreVertical className="h-4 w-4 mr-2" />
                    Actions
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardContent>
          </Card>

          {/* Table */}
          <Card>
            <CardHeader>
              <CardTitle>Table</CardTitle>
              <CardDescription>Data table with hover effects</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">John Doe</TableCell>
                    <TableCell>john@example.com</TableCell>
                    <TableCell>Admin</TableCell>
                    <TableCell>
                      <Badge variant="success">Active</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Jane Smith</TableCell>
                    <TableCell>jane@example.com</TableCell>
                    <TableCell>Member</TableCell>
                    <TableCell>
                      <Badge variant="soft-primary">Active</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Bob Johnson</TableCell>
                    <TableCell>bob@example.com</TableCell>
                    <TableCell>Member</TableCell>
                    <TableCell>
                      <Badge variant="soft-warning">Pending</Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.section>

        {/* New Priority Components Showcase */}
        <NewComponentsShowcase />

        {/* Color Palette */}
        <motion.section
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div>
            <h2 className="text-2xl font-semibold mb-2">Color Palette</h2>
            <p className="text-muted-foreground">Flock brand colors</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Brand Colors</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "True Azure", color: "bg-true-azure", hex: "#5000AB" },
                {
                  name: "Dark Amethyst",
                  color: "bg-dark-amethyst",
                  hex: "#1C0636",
                },
                {
                  name: "Sunflower Gold",
                  color: "bg-sunflower-gold",
                  hex: "#E3B23C",
                },
                {
                  name: "Autumn Ember",
                  color: "bg-autumn-ember",
                  hex: "#BB4D00",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="space-y-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div
                    className={`h-20 rounded-xl ${item.color} hover-glow cursor-pointer`}
                  />
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.hex}</p>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="glass-strong border-t border-border mt-12">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-muted-foreground">
            Flock CMS © 2026 - Liquid Glass Design with Micro-interactions
          </p>
        </div>
      </footer>
    </div>
  );
}
