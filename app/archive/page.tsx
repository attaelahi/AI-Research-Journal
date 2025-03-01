"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function ArchivePage() {
  // Sample articles data
  const allArticles = [
    {
      id: 1,
      title: "Advances in Transformer Architecture for Natural Language Processing",
      authors: ["Jane Smith, PhD", "John Doe, PhD"],
      date: "2024-03-15",
      institution: "Stanford University",
      category: "Natural Language Processing",
      peerReviewed: true,
      doi: "10.1234/ai.2024.0001",
      thumbnail: "/placeholder.svg?height=400&width=600",
      abstract:
        "This paper presents novel improvements to transformer architectures that significantly enhance performance on language understanding tasks.",
    },
    {
      id: 2,
      title: "Reinforcement Learning in Autonomous Driving: A Comprehensive Review",
      authors: ["Michael Johnson, PhD", "Sarah Williams, PhD"],
      date: "2024-03-10",
      institution: "MIT",
      category: "Reinforcement Learning",
      peerReviewed: true,
      doi: "10.1234/ai.2024.0002",
      thumbnail: "/placeholder.svg?height=400&width=600",
      abstract:
        "We review the latest advancements in applying reinforcement learning techniques to autonomous driving systems.",
    },
    {
      id: 3,
      title: "Ethical Considerations in Generative AI Models",
      authors: ["David Chen, PhD", "Lisa Rodriguez, PhD"],
      date: "2024-03-05",
      institution: "UC Berkeley",
      category: "AI Ethics",
      peerReviewed: true,
      doi: "10.1234/ai.2024.0003",
      thumbnail: "/placeholder.svg?height=400&width=600",
      abstract:
        "This paper examines the ethical implications of generative AI models and proposes a framework for responsible development.",
    },
    {
      id: 4,
      title: "Federated Learning for Privacy-Preserving Medical Image Analysis",
      authors: ["Robert Brown, PhD", "Emily Taylor, PhD"],
      date: "2024-02-28",
      institution: "Johns Hopkins University",
      category: "Federated Learning",
      peerReviewed: true,
      doi: "10.1234/ai.2024.0004",
      thumbnail: "/placeholder.svg?height=400&width=600",
      abstract:
        "We present a novel federated learning approach that enables collaborative medical image analysis while preserving patient privacy.",
    },
    {
      id: 5,
      title: "Quantum Computing Applications in Machine Learning",
      authors: ["Thomas Wilson, PhD", "Amanda Lee, PhD"],
      date: "2024-02-25",
      institution: "Caltech",
      category: "Quantum Computing",
      peerReviewed: true,
      doi: "10.1234/ai.2024.0005",
      thumbnail: "/placeholder.svg?height=400&width=600",
      abstract:
        "This paper explores the potential applications of quantum computing in accelerating machine learning algorithms.",
    },
    {
      id: 6,
      title: "Explainable AI: Methods and Challenges",
      authors: ["Christopher Martin, PhD", "Jennifer Garcia, PhD"],
      date: "2024-02-20",
      institution: "Oxford University",
      category: "Explainable AI",
      peerReviewed: true,
      doi: "10.1234/ai.2024.0006",
      thumbnail: "/placeholder.svg?height=400&width=600",
      abstract:
        "We review current methods for making AI systems more explainable and discuss ongoing challenges in the field.",
    },
    {
      id: 7,
      title: "Graph Neural Networks for Drug Discovery",
      authors: ["Laura Thompson, PhD", "Daniel White, PhD"],
      date: "2024-02-15",
      institution: "Harvard University",
      category: "Graph Neural Networks",
      peerReviewed: true,
      doi: "10.1234/ai.2024.0007",
      thumbnail: "/placeholder.svg?height=400&width=600",
      abstract:
        "This paper demonstrates the application of graph neural networks to accelerate drug discovery and development.",
    },
    {
      id: 8,
      title: "Multimodal Learning for Medical Diagnosis",
      authors: ["Kevin Anderson, PhD", "Rachel Moore, PhD"],
      date: "2024-02-10",
      institution: "University of Toronto",
      category: "Multimodal Learning",
      peerReviewed: true,
      doi: "10.1234/ai.2024.0008",
      thumbnail: "/placeholder.svg?height=400&width=600",
      abstract:
        "We present a multimodal learning approach that combines imaging, clinical notes, and genomic data for improved medical diagnosis.",
    },
    {
      id: 9,
      title: "Adversarial Robustness in Deep Learning Models",
      authors: ["Steven Clark, PhD", "Michelle Lewis, PhD"],
      date: "2024-02-05",
      institution: "Carnegie Mellon University",
      category: "Adversarial Learning",
      peerReviewed: true,
      doi: "10.1234/ai.2024.0009",
      thumbnail: "/placeholder.svg?height=400&width=600",
      abstract:
        "This paper investigates methods to improve the robustness of deep learning models against adversarial attacks.",
    },
    {
      id: 10,
      title: "Self-Supervised Learning for Computer Vision",
      authors: ["Patricia Young, PhD", "Brian Miller, PhD"],
      date: "2024-01-30",
      institution: "ETH Zurich",
      category: "Computer Vision",
      peerReviewed: true,
      doi: "10.1234/ai.2024.0010",
      thumbnail: "/placeholder.svg?height=400&width=600",
      abstract:
        "We propose a novel self-supervised learning approach for computer vision tasks that reduces the need for labeled data.",
    },
    {
      id: 11,
      title: "Neuro-Symbolic AI for Reasoning Tasks",
      authors: ["George Harris, PhD", "Olivia Martinez, PhD"],
      date: "2024-01-25",
      institution: "University of Cambridge",
      category: "Neuro-Symbolic AI",
      peerReviewed: true,
      doi: "10.1234/ai.2024.0011",
      thumbnail: "/placeholder.svg?height=400&width=600",
      abstract:
        "This paper introduces a neuro-symbolic approach that combines neural networks with symbolic reasoning for complex reasoning tasks.",
    },
    {
      id: 12,
      title: "Energy-Efficient Deep Learning for Edge Devices",
      authors: ["Nancy Wilson, PhD", "Paul Roberts, PhD"],
      date: "2024-01-20",
      institution: "University of Washington",
      category: "Edge Computing",
      peerReviewed: true,
      doi: "10.1234/ai.2024.0012",
      thumbnail: "/placeholder.svg?height=400&width=600",
      abstract:
        "We present techniques for optimizing deep learning models to run efficiently on resource-constrained edge devices.",
    },
  ]

  // State for filters and search
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedInstitution, setSelectedInstitution] = useState("")
  const [dateRange, setDateRange] = useState({ start: "", end: "" })
  const [sortBy, setSortBy] = useState("date")
  const [peerReviewedOnly, setPeerReviewedOnly] = useState(false)

  // Extract unique categories and institutions for filter dropdowns
  const categories = [...new Set(allArticles.map((article) => article.category))]
  const institutions = [...new Set(allArticles.map((article) => article.institution))]

  // Filter articles based on search and filters
  const filteredArticles = allArticles.filter((article) => {
    // Search term filter
    const searchMatch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.abstract.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.authors.some((author) => author.toLowerCase().includes(searchTerm.toLowerCase()))

    // Category filter
    const categoryMatch = selectedCategory === "" || article.category === selectedCategory

    // Institution filter
    const institutionMatch = selectedInstitution === "" || article.institution === selectedInstitution

    // Date range filter
    const dateMatch =
      (dateRange.start === "" || article.date >= dateRange.start) &&
      (dateRange.end === "" || article.date <= dateRange.end)

    // Peer review filter
    const peerReviewMatch = !peerReviewedOnly || article.peerReviewed

    return searchMatch && categoryMatch && institutionMatch && dateMatch && peerReviewMatch
  })

  // Sort articles
  const sortedArticles = [...filteredArticles].sort((a, b) => {
    if (sortBy === "date") {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    } else if (sortBy === "title") {
      return a.title.localeCompare(b.title)
    } else if (sortBy === "relevance") {
      // For relevance, prioritize articles that match the search term in the title
      const aRelevance = a.title.toLowerCase().includes(searchTerm.toLowerCase())
        ? 2
        : a.abstract.toLowerCase().includes(searchTerm.toLowerCase())
          ? 1
          : 0
      const bRelevance = b.title.toLowerCase().includes(searchTerm.toLowerCase())
        ? 2
        : b.abstract.toLowerCase().includes(searchTerm.toLowerCase())
          ? 1
          : 0
      return bRelevance - aRelevance
    }
    return 0
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Article Archive</h1>

      {/* Search and Filter Section */}
      <div className="bg-card rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Search */}
          <div className="col-span-1 md:col-span-2 lg:col-span-4">
            <label htmlFor="search" className="block text-sm font-medium mb-1">
              Search
            </label>
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                id="search"
                type="text"
                placeholder="Search by title, author, or keywords..."
                className="w-full rounded-md border border-input bg-background pl-10 pr-4 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium mb-1">
              Category
            </label>
            <select
              id="category"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Institution Filter */}
          <div>
            <label htmlFor="institution" className="block text-sm font-medium mb-1">
              Institution
            </label>
            <select
              id="institution"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              value={selectedInstitution}
              onChange={(e) => setSelectedInstitution(e.target.value)}
            >
              <option value="">All Institutions</option>
              {institutions.map((institution) => (
                <option key={institution} value={institution}>
                  {institution}
                </option>
              ))}
            </select>
          </div>

          {/* Date Range Filter - Start */}
          <div>
            <label htmlFor="date-start" className="block text-sm font-medium mb-1">
              From Date
            </label>
            <input
              id="date-start"
              type="date"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              value={dateRange.start}
              onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
            />
          </div>

          {/* Date Range Filter - End */}
          <div>
            <label htmlFor="date-end" className="block text-sm font-medium mb-1">
              To Date
            </label>
            <input
              id="date-end"
              type="date"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              value={dateRange.end}
              onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          {/* Sort By */}
          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-sm font-medium">
              Sort by:
            </label>
            <select
              id="sort"
              className="rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="date">Most Recent</option>
              <option value="title">Title (A-Z)</option>
              <option value="relevance">Relevance</option>
            </select>
          </div>

          {/* Peer Reviewed Only */}
          <div className="flex items-center gap-2">
            <input
              id="peer-reviewed"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              checked={peerReviewedOnly}
              onChange={(e) => setPeerReviewedOnly(e.target.checked)}
            />
            <label htmlFor="peer-reviewed" className="text-sm font-medium">
              Peer-reviewed only
            </label>
          </div>

          {/* Reset Filters */}
          <button
            className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            onClick={() => {
              setSearchTerm("")
              setSelectedCategory("")
              setSelectedInstitution("")
              setDateRange({ start: "", end: "" })
              setSortBy("date")
              setPeerReviewedOnly(false)
            }}
          >
            Reset Filters
          </button>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-muted-foreground">
          Showing {sortedArticles.length} of {allArticles.length} articles
        </p>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedArticles.map((article) => (
          <div key={article.id} className="article-card bg-card rounded-lg overflow-hidden shadow-md">
            <div className="relative h-48 w-full">
              <Image src={article.thumbnail || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 line-clamp-2">{article.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">By {article.authors.join(", ")}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-accent px-2 py-1 rounded-md text-xs">{article.category}</span>
                {article.peerReviewed && (
                  <span className="bg-secondary/20 text-secondary px-2 py-1 rounded-md text-xs">Peer Reviewed</span>
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{article.abstract}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">
                  {new Date(article.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <Link href={`/articles/${article.id}`} className="text-secondary font-medium hover:underline">
                  Read Article
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {sortedArticles.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-bold mb-2">No articles found</h3>
          <p className="text-muted-foreground mb-4">Try adjusting your search or filter criteria</p>
          <button
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            onClick={() => {
              setSearchTerm("")
              setSelectedCategory("")
              setSelectedInstitution("")
              setDateRange({ start: "", end: "" })
              setSortBy("date")
              setPeerReviewedOnly(false)
            }}
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  )
}

