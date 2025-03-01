import Image from "next/image"
import Link from "next/link"

export default function Home() {
  // Sample data for featured articles
  const featuredArticles = [
    {
      id: 1,
      title: "Advances in Transformer Architecture for Natural Language Processing",
      authors: ["Jane Smith, PhD", "John Doe, PhD"],
      date: "March 15, 2024",
      readTime: "12 min read",
      thumbnail: "https://placehold.co/600x400/3498DB/FFFFFF/png?text=Transformers",
      abstract:
        "This paper presents novel improvements to transformer architectures that significantly enhance performance on language understanding tasks.",
    },
    {
      id: 2,
      title: "Reinforcement Learning in Autonomous Driving: A Comprehensive Review",
      authors: ["Michael Johnson, PhD", "Sarah Williams, PhD"],
      date: "March 10, 2024",
      readTime: "15 min read",
      thumbnail: "https://placehold.co/600x400/3498DB/FFFFFF/png?text=Reinforcement+Learning",
      abstract:
        "We review the latest advancements in applying reinforcement learning techniques to autonomous driving systems.",
    },
    {
      id: 3,
      title: "Ethical Considerations in Generative AI Models",
      authors: ["David Chen, PhD", "Lisa Rodriguez, PhD"],
      date: "March 5, 2024",
      readTime: "10 min read",
      thumbnail: "https://placehold.co/600x400/3498DB/FFFFFF/png?text=AI+Ethics",
      abstract:
        "This paper examines the ethical implications of generative AI models and proposes a framework for responsible development.",
    },
    {
      id: 4,
      title: "Federated Learning for Privacy-Preserving Medical Image Analysis",
      authors: ["Robert Brown, PhD", "Emily Taylor, PhD"],
      date: "February 28, 2024",
      readTime: "14 min read",
      thumbnail: "https://placehold.co/600x400/3498DB/FFFFFF/png?text=Federated+Learning",
      abstract:
        "We present a novel federated learning approach that enables collaborative medical image analysis while preserving patient privacy.",
    },
  ]

  // Sample data for latest publications carousel
  const latestPublications = [
    ...featuredArticles,
    {
      id: 5,
      title: "Quantum Computing Applications in Machine Learning",
      authors: ["Thomas Wilson, PhD", "Amanda Lee, PhD"],
      date: "February 25, 2024",
      readTime: "16 min read",
      thumbnail: "https://placehold.co/600x400/3498DB/FFFFFF/png?text=Quantum+Computing",
      abstract:
        "This paper explores the potential applications of quantum computing in accelerating machine learning algorithms.",
    },
    {
      id: 6,
      title: "Explainable AI: Methods and Challenges",
      authors: ["Christopher Martin, PhD", "Jennifer Garcia, PhD"],
      date: "February 20, 2024",
      readTime: "11 min read",
      thumbnail: "https://placehold.co/600x400/3498DB/FFFFFF/png?text=Explainable+AI",
      abstract:
        "We review current methods for making AI systems more explainable and discuss ongoing challenges in the field.",
    },
  ]

  // Sample data for special issues
  const specialIssues = [
    {
      id: 1,
      title: "AI in Healthcare",
      deadline: "April 30, 2024",
      description: "Exploring the applications of AI in healthcare, from diagnosis to treatment planning.",
    },
    {
      id: 2,
      title: "Sustainable AI",
      deadline: "May 15, 2024",
      description: "Research on reducing the environmental impact of AI systems and applications for sustainability.",
    },
    {
      id: 3,
      title: "AI Ethics and Governance",
      deadline: "June 30, 2024",
      description: "Addressing ethical challenges and governance frameworks for responsible AI development.",
    },
  ]

  // Sample data for editorial board
  const editorialBoard = [
    {
      name: "Prof. Elizabeth Chen",
      role: "Editor-in-Chief",
      affiliation: "Stanford University",
      image: "https://placehold.co/200x200/ECF0F1/2C3E50/png?text=Editor+1",
    },
    {
      name: "Prof. Richard Taylor",
      role: "Associate Editor",
      affiliation: "MIT",
      image: "https://placehold.co/200x200/ECF0F1/2C3E50/png?text=Editor+2",
    },
    {
      name: "Prof. Maria Rodriguez",
      role: "Associate Editor",
      affiliation: "UC Berkeley",
      image: "https://placehold.co/200x200/ECF0F1/2C3E50/png?text=Editor+3",
    },
    {
      name: "Prof. James Wilson",
      role: "Associate Editor",
      affiliation: "Oxford University",
      image: "https://placehold.co/200x200/ECF0F1/2C3E50/png?text=Editor+4",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Parallax Effect */}
      <section
        className="relative flex items-center justify-center h-[70vh] parallax-hero overflow-hidden"
        style={{
          backgroundImage: "url('https://placehold.co/1920x1080/2C3E50/FFFFFF/png?text=AI+Research+Journal')",
        }}
      >
        <div className="absolute inset-0 bg-primary/60"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">AI Research Journal</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Advancing the frontiers of artificial intelligence through rigorous research and innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/submit"
              className="inline-flex h-12 items-center justify-center rounded-md bg-secondary px-6 py-3 text-base font-medium text-white shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Submit Research
            </Link>
            <Link
              href="/subscribe"
              className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-medium text-primary shadow transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Subscribe Now
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Articles Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredArticles.map((article) => (
              <div key={article.id} className="article-card bg-card rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48 w-full">
                  <Image
                    src={article.thumbnail || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">{article.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">By {article.authors.join(", ")}</p>
                  <div className="flex justify-between text-sm text-muted-foreground mb-4">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{article.abstract}</p>
                  <Link href={`/articles/${article.id}`} className="text-secondary font-medium hover:underline">
                    Read Article
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Dashboard */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Journal Metrics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">4.8</div>
              <p className="text-muted-foreground">Impact Factor</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">14.2k</div>
              <p className="text-muted-foreground">Citations</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">92%</div>
              <p className="text-muted-foreground">Acceptance Rate</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">21</div>
              <p className="text-muted-foreground">Days to First Decision</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Publications Carousel */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Latest Publications</h2>
          <div className="relative">
            <div className="overflow-x-auto pb-4">
              <div className="flex gap-6 min-w-max">
                {latestPublications.map((article) => (
                  <div
                    key={article.id}
                    className="article-card bg-card rounded-lg overflow-hidden shadow-md w-80 flex-shrink-0"
                  >
                    <div className="relative h-48 w-full">
                      <Image
                        src={article.thumbnail || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-2 line-clamp-2">{article.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">By {article.authors.join(", ")}</p>
                      <div className="flex justify-between text-sm text-muted-foreground mb-4">
                        <span>{article.date}</span>
                        <span>{article.readTime}</span>
                      </div>
                      <Link href={`/articles/${article.id}`} className="text-secondary font-medium hover:underline">
                        Read Article
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Issues */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Special Issues</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialIssues.map((issue) => (
              <div key={issue.id} className="bg-card rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2">{issue.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">Submission Deadline: {issue.deadline}</p>
                <p className="text-sm mb-4">{issue.description}</p>
                <Link href={`/special-issues/${issue.id}`} className="text-secondary font-medium hover:underline">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Board */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Editorial Board</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {editorialBoard.map((editor) => (
              <div key={editor.name} className="bg-card rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48 w-full">
                  <Image src={editor.image || "/placeholder.svg"} alt={editor.name} fill className="object-cover" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold">{editor.name}</h3>
                  <p className="text-sm text-muted-foreground">{editor.role}</p>
                  <p className="text-sm text-muted-foreground">{editor.affiliation}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/editorial-board"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              View Full Editorial Board
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Contribute?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of researchers and contribute to the advancement of AI research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/submit"
              className="inline-flex h-12 items-center justify-center rounded-md bg-secondary px-6 py-3 text-base font-medium text-white shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Submit Research
            </Link>
            <Link
              href="/author-guidelines"
              className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-medium text-primary shadow transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Author Guidelines
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

