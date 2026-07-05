export const featuredContent = {
  blogPost: {
    id: 'screen-time-vs-quality-time',
    title: "Screen Time vs. Quality Time: A Parent's Guide",
    excerpt: "Not all screen time is created equal. Learn how to distinguish between passive consumption and active, educational technology use.",
    date: "May 28, 2026",
    category: "Philosophy",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800&h=500"
  },
  resource: {
    id: 'digital-contract-template',
    title: "Family Digital Device Contract",
    description: "A printable template establishing healthy boundaries, expectations, and safety rules for children receiving their first device.",
    type: "Template / Print",
    icon: "FileText"
  }
};


export const resourcesList = [
  {
    id: 'safe-browsing-tutorial',
    title: "Setting Up Network-Level Safe Browsing",
    description: "A step-by-step technical guide for non-technical parents on configuring custom DNS to block adult content at the router level.",
    type: "Tutorial",
    level: "Intermediate",
    tags: ["Safety", "Networking"],
    icon: "Shield"
  },
  featuredContent.resource,
  {
    id: 'scratch-coding-weekend',
    title: "Weekend Project: Building a Family Game in Scratch",
    description: "A fun weekend curriculum where parents and kids can build their very first video game together using visual block coding.",
    type: "Guide",
    level: "Beginner",
    tags: ["Coding", "Bonding"],
    icon: "Gamepad2"
  }
];
