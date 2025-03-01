import Image from "next/image"
import { Logo } from "@/components/ui/logo"

export default function ArticlePage({ params }: { params: { id: string } }) {
  // Sample article data
  const article = {
    id: params.id,
    title: "Advances in Transformer Architecture for Natural Language Processing",
    authors: [
      { name: "Jane Smith, PhD", orcid: "0000-0001-2345-6789", institution: "Stanford University" },
      { name: "John Doe, PhD", orcid: "0000-0002-3456-7890", institution: "MIT" },
    ],
    date: "March 15, 2024",
    doi: "10.1234/ai.2024.0001",
    abstract:
      "This paper presents novel improvements to transformer architectures that significantly enhance performance on language understanding tasks. We introduce a modified attention mechanism that reduces computational complexity while maintaining or improving accuracy across benchmark datasets. Our approach demonstrates a 15% reduction in training time and a 10% improvement in performance on the GLUE benchmark. These advances have implications for making large language models more efficient and accessible for research and commercial applications.",
    keywords: ["Transformers", "NLP", "Attention Mechanism", "Efficiency", "GLUE"],
    citations: 24,
    downloads: 1352,
    views: 8976,
    thumbnail: "https://placehold.co/600x400/3498DB/FFFFFF/png?text=Transformers",
    sections: [
      {
        id: "introduction",
        title: "Introduction",
        content:
          "Transformer architectures have revolutionized natural language processing since their introduction by Vaswani et al. (2017). These models have achieved state-of-the-art results across a wide range of NLP tasks, from machine translation to question answering. However, the computational demands of these models present challenges for widespread adoption and further scaling.\n\nIn this paper, we address these challenges by introducing modifications to the standard transformer architecture that significantly reduce computational requirements while maintaining or improving performance. Our approach focuses on optimizing the attention mechanism, which is the core component of transformer models and typically the most computationally intensive.",
      },
      {
        id: "related-work",
        title: "Related Work",
        content:
          "Several approaches have been proposed to improve the efficiency of transformer models. Sparse attention mechanisms (Child et al., 2019) reduce the quadratic complexity of self-attention by limiting the attention patterns. Reformer (Kitaev et al., 2020) uses locality-sensitive hashing to approximate the attention matrix. Linformer (Wang et al., 2020) projects the length dimension of keys and values to a lower-dimensional representation.\n\nOur work builds upon these approaches but introduces a novel attention mechanism that preserves more of the global context while reducing computational complexity.",
      },
      {
        id: "methodology",
        title: "Methodology",
        content:
          "Our approach introduces a hierarchical attention mechanism that operates at multiple levels of granularity. The key insight is that not all tokens require the same level of attention computation. We dynamically allocate computational resources based on the importance of tokens in the input sequence.\n\nFormally, given an input sequence $X = [x_1, x_2, ..., x_n]$, we first compute a token importance score $s_i$ for each token $x_i$:\n\n$$s_i = f(x_i, X)$$\n\nwhere $f$ is a lightweight function that estimates the importance of token $x_i$ in the context of the entire sequence $X$. Based on these scores, we partition the tokens into $k$ groups, where tokens in higher-importance groups receive more computational resources.",
      },
      {
        id: "experiments",
        title: "Experiments",
        content:
          "We evaluated our approach on several benchmark datasets, including GLUE (Wang et al., 2018) and SuperGLUE (Wang et al., 2019). Implementation details are as follows:\n\n```python\ndef hierarchical_attention(query, key, value, importance_scores):\n    # Partition tokens based on importance scores\n    partitions = partition_tokens(importance_scores)\n    \n    # Apply different attention mechanisms to each partition\n    results = []\n    for partition in partitions:\n        if partition.importance == 'high':\n            results.append(full_attention(query[partition.indices], \n                                         key[partition.indices], \n                                         value[partition.indices]))\n        elif partition.importance == 'medium':\n            results.append(sparse_attention(query[partition.indices], \n                                           key[partition.indices], \n                                           value[partition.indices]))\n        else:\n            results.append(linear_attention(query[partition.indices], \n                                           key[partition.indices], \n                                           value[partition.indices]))\n    \n    # Combine results\n    return combine_results(results, partitions)\n```\n\nOur experiments show that this approach reduces training time by 15% while improving performance on the GLUE benchmark by 10% compared to the standard transformer architecture.",
      },
      {
        id: "results",
        title: "Results",
        content:
          "Table 1 shows the performance of our model compared to baseline transformer models on the GLUE benchmark. Our model achieves state-of-the-art results on 7 out of 9 tasks while using fewer parameters and requiring less training time.\n\nFigure 1 illustrates the trade-off between model size, computational efficiency, and performance. Our approach consistently outperforms existing models across different parameter budgets.",
      },
      {
        id: "discussion",
        title: "Discussion",
        content:
          "The results demonstrate that our hierarchical attention mechanism effectively allocates computational resources where they are most needed. This approach is particularly effective for long documents where many tokens contribute minimally to the final representation.\n\nOne limitation of our approach is the additional overhead of computing importance scores. However, our experiments show that this overhead is more than offset by the savings in the attention computation, especially for longer sequences.",
      },
      {
        id: "conclusion",
        title: "Conclusion",
        content:
          "We have presented a novel approach to improving the efficiency of transformer architectures through a hierarchical attention mechanism. Our method reduces computational requirements while maintaining or improving performance across benchmark datasets. These advances have implications for making large language models more efficient and accessible for research and commercial applications.\n\nFuture work will explore the application of our approach to multimodal transformers and investigate further optimizations to the importance scoring function.",
      },
    ],
    references: [
      "Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, L., & Polosukhin, I. (2017). Attention is all you need. In Advances in Neural Information Processing Systems.",
      "Child, R., Gray, S., Radford, A., & Sutskever, I. (2019). Generating long sequences with sparse transformers. arXiv preprint arXiv:1904.10509.",
      "Kitaev, N., Kaiser, L., & Levskaya, A. (2020). Reformer: The efficient transformer. In International Conference on Learning Representations.",
      "Wang, S., Li, B., Khabsa, M., Fang, H., & Ma, H. (2020). Linformer: Self-attention with linear complexity. arXiv preprint arXiv:2006.04768.",
      "Wang, A., Singh, A., Michael, J., Hill, F., Levy, O., & Bowman, S. R. (2018). GLUE: A multi-task benchmark and analysis platform for natural language understanding. In Proceedings of the 2018 EMNLP Workshop BlackboxNLP.",
      "Wang, A., Pruksachatkun, Y., Nangia, N., Singh, A., Michael, J., Hill, F., Levy, O., & Bowman, S. R. (2019). SuperGLUE: A stickier benchmark for general-purpose language understanding systems. In Advances in Neural Information Processing Systems.",
    ],
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
        {/* Main Content (70%) */}
        <div className="lg:col-span-7">
          <div className="bg-card rounded-lg shadow-md p-8">
            {/* Article Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                {article.authors.map((author, index) => (
                  <div key={index} className="flex items-center">
                    <span>{author.name}</span>
                    <a
                      href={`https://orcid.org/${author.orcid}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-secondary hover:underline"
                      aria-label={`ORCID profile for ${author.name}`}
                    >
                      <svg width="16" height="16" viewBox="0 0 256 256">
                        <path
                          fill="#A6CE39"
                          d="M256 128c0 70.7-57.3 128-128 128S0 198.7 0 128S57.3 0 128 0s128 57.3 128 128z"
                        />
                        <path
                          fill="#FFF"
                          d="M86.3 186.2H70.9V79.1h15.4v107.1zm22.6-107.1h41.6c39.6 0 57 28.3 57 53.6c0 27.5-21.5 53.6-56.8 53.6h-41.8V79.1zm15.4 93.3h24.5c34.9 0 42.9-26.5 42.9-39.7c0-21.5-13.7-39.7-43.7-39.7h-23.7v79.4zm-61.1-78.2c0-5.8-4.7-10.5-10.5-10.5s-10.5 4.7-10.5 10.5s4.7 10.5 10.5 10.5s10.5-4.7 10.5-10.5z"
                        />
                      </svg>
                    </a>
                    <span className="text-muted-foreground text-sm ml-2">({author.institution})</span>
                    {index < article.authors.length - 1 && <span className="mx-2">•</span>}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap text-sm text-muted-foreground mb-4">
                <span>Published: {article.date}</span>
                <span className="mx-2">•</span>
                <span>
                  DOI:{" "}
                  <a href={`https://doi.org/${article.doi}`} className="hover:underline">
                    {article.doi}
                  </a>
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {article.keywords.map((keyword, index) => (
                  <span key={index} className="bg-accent px-2 py-1 rounded-md text-xs">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* Collapsible Abstract */}
            <div className="mb-8">
              <details className="group" open>
                <summary className="flex cursor-pointer items-center justify-between rounded-lg bg-accent px-4 py-2 text-lg font-medium">
                  <span>Abstract</span>
                  <svg
                    className="h-5 w-5 transition duration-300 group-open:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 px-4 text-muted-foreground">
                  <p>{article.abstract}</p>
                </div>
              </details>
            </div>

            {/* Article Content */}
            <div className="prose prose-slate max-w-none">
              {article.sections.map((section) => (
                <section key={section.id} id={section.id} className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                  <div className="whitespace-pre-line">
                    {section.content.split("\n\n").map((paragraph, index) => {
                      // Check if paragraph contains code block
                      if (paragraph.includes("```")) {
                        const parts = paragraph.split("```")
                        return (
                          <div key={index}>
                            {parts[0] && <p className="mb-4">{parts[0]}</p>}
                            {parts[1] && (
                              <pre className="bg-muted p-4 rounded-md overflow-x-auto mb-4">
                                <code>{parts[1].replace(/^python\n/, "")}</code>
                              </pre>
                            )}
                            {parts[2] && <p className="mb-4">{parts[2]}</p>}
                          </div>
                        )
                      }
                      // Check if paragraph contains LaTeX
                      else if (paragraph.includes("$$")) {
                        const parts = paragraph.split("$$")
                        return (
                          <div key={index}>
                            {parts[0] && <p className="mb-4">{parts[0]}</p>}
                            {parts[1] && (
                              <div className="bg-accent/50 p-4 rounded-md text-center my-4">
                                <p className="font-mono">{parts[1]}</p>
                              </div>
                            )}
                            {parts[2] && <p className="mb-4">{parts[2]}</p>}
                          </div>
                        )
                      }
                      // Regular paragraph
                      else {
                        return (
                          <p key={index} className="mb-4">
                            {paragraph}
                          </p>
                        )
                      }
                    })}
                  </div>
                </section>
              ))}

              {/* References */}
              <section id="references" className="mb-8">
                <h2 className="text-2xl font-bold mb-4">References</h2>
                <ol className="list-decimal list-inside space-y-2 pl-4">
                  {article.references.map((reference, index) => (
                    <li key={index} className="text-muted-foreground">
                      {reference}
                    </li>
                  ))}
                </ol>
              </section>
            </div>
          </div>
        </div>

        {/* Sidebar (30%) */}
        <div className="lg:col-span-3">
          <div className="sticky top-24">
            {/* Journal Logo */}
            <div className="bg-card rounded-lg shadow-md p-6 mb-6 flex justify-center">
              <Logo />
            </div>

            {/* Table of Contents */}
            <div className="bg-card rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-bold mb-4">Table of Contents</h3>
              <nav className="space-y-2">
                {article.sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {section.title}
                  </a>
                ))}
                <a href="#references" className="block text-muted-foreground hover:text-foreground transition-colors">
                  References
                </a>
              </nav>
            </div>

            {/* Article Metrics */}
            <div className="bg-card rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-bold mb-4">Article Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Citations:</span>
                  <span className="font-medium">{article.citations}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Downloads:</span>
                  <span className="font-medium">{article.downloads}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Views:</span>
                  <span className="font-medium">{article.views}</span>
                </div>
              </div>
            </div>

            {/* PDF Preview */}
            <div className="bg-card rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-bold mb-4">PDF Version</h3>
              <div className="aspect-[3/4] bg-muted rounded-md mb-4 flex items-center justify-center">
                <Image
                  src="https://placehold.co/300x400/ECF0F1/2C3E50/png?text=PDF+Preview"
                  alt="PDF Preview"
                  width={300}
                  height={400}
                  className="rounded-md"
                />
              </div>
              <a
                href="#"
                className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Download PDF
              </a>
            </div>

            {/* Citation Generator */}
            <div className="bg-card rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-bold mb-4">Cite This Article</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Citation Format</label>
                  <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm">
                    <option>APA</option>
                    <option>MLA</option>
                    <option>Chicago</option>
                    <option>Harvard</option>
                    <option>IEEE</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Citation</label>
                  <div className="bg-muted p-3 rounded-md text-sm">
                    Smith, J., & Doe, J. (2024). Advances in Transformer Architecture for Natural Language Processing.{" "}
                    <em>AI Research Journal</em>, 12(3), 45-67. https://doi.org/10.1234/ai.2024.0001
                  </div>
                </div>
                <button className="inline-flex w-full items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  Copy Citation
                </button>
              </div>
            </div>

            {/* Social Sharing */}
            <div className="bg-card rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-4">Share</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#1DA1F2] text-white shadow transition-colors hover:bg-[#1DA1F2]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label="Share on Twitter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#0077B5] text-white shadow transition-colors hover:bg-[#0077B5]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label="Share on LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#3b5998] text-white shadow transition-colors hover:bg-[#3b5998]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label="Share on Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#25D366] text-white shadow transition-colors hover:bg-[#25D366]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label="Share on WhatsApp"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-muted text-foreground shadow transition-colors hover:bg-muted/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label="Share via Email"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

