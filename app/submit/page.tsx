"use client"

import type React from "react"

import { useState } from "react"

export default function SubmitPage() {
  // State for multi-step form
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    title: "",
    abstract: "",
    authors: [{ name: "", email: "", orcid: "", affiliation: "" }],
    keywords: [""],
    category: "",
    file: null,
    coverLetter: "",
    ethicsStatement: false,
    termsAgreed: false,
  })
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  
  // Handle checkbox changes
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData({ ...formData, [name]: checked })
  }
  
  // Handle author changes
  const handleAuthorChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const updatedAuthors = [...formData.authors]
    updatedAuthors[index] = { ...updatedAuthors[index], [name]: value }
    setFormData({ ...formData, authors: updatedAuthors })
  }
  
  // Add new author
  const addAuthor = () => {
    setFormData({
      ...formData,
      authors: [...formData.authors, { name: "", email: "", orcid: "", affiliation: "" }]
    })
  }
  
  // Remove author
  const removeAuthor = (index: number) => {
    const updatedAuthors = [...formData.authors]
    updatedAuthors.splice(index, 1)
    setFormData({ ...formData, authors: updatedAuthors })
  }
  
  // Handle keyword changes
  const handleKeywordChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedKeywords = [...formData.keywords]
    updatedKeywords[index] = e.target.value
    setFormData({ ...formData, keywords: updatedKeywords })
  }
  
  // Add new keyword
  const addKeyword = () => {
    setFormData({
      ...formData,
      keywords: [...formData.keywords, ""]
    })
  }
  
  // Remove keyword
  const removeKeyword = (index: number) => {
    const updatedKeywords = [...formData.keywords]
    updatedKeywords.splice(index, 1)
    setFormData({ ...formData, keywords: updatedKeywords })
  }
  
  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0] })
    }
  }
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send the form data to your backend
    console.log("Form submitted:", formData)
    // Show success message or redirect
    setStep(5) // Move to success step
  }
  
  // Next step
  const nextStep = () => {
    setStep(step + 1)
  }
  
  // Previous step
  const prevStep = () => {
    setStep(step - 1)
  }
  
  // Calculate progress percentage
  const progressPercentage = ((step - 1) / 4) * 100
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Submit Your Research</h1>
      
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-primary text-primary-foreground">
                Step {step} of 4
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-primary">
                {Math.round(progressPercentage)}%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-muted">
            <div
              style={{ width: `${progressPercentage}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary transition-all duration-500"
            ></div>
          </div>
        </div>
      </div>
      
      {/* Multi-step Form */}
      <div className="bg-card rounded-lg shadow-md p-6 mb-8">
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Article Information</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium mb-1">
                  Article Title <span className="text-red-500">*</span>
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  required
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="abstract" className="block text-sm font-medium mb-1">
                  Abstract <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="abstract"
                  name="abstract"
                  rows={5}
                  required
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  value={formData.abstract}
                  onChange={handleChange}
                ></textarea>
                <p className="text-xs text-muted-foreground mt-1">
                  Provide a concise summary of your research (250-300 words).
                </p>
              </div>
              
              <div className="mb-4">
                <label htmlFor="category" className="block text-sm font-medium mb-1">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="">Select a category</option>
                  <option value="Natural Language Processing">Natural Language Processing</option>
                  <option value="Computer Vision">Computer Vision</option>
                  <option value="Reinforcement Learning">Reinforcement Learning</option>
                  <option value="AI Ethics">AI Ethics</option>
                  <option value="Federated Learning">Federated Learning</option>
                  <option value="Quantum Computing">Quantum Computing</option>
                  <option value="Explainable AI">Explainable AI</option>
                  <option value="Graph Neural Networks">Graph Neural Networks</option>
                  <option value="Multimodal Learning">Multimodal Learning</option>
                  <option value="Adversarial Learning">Adversarial Learning</option>
                  <option value="Neuro-Symbolic AI">Neuro-Symbolic AI</option>
                  <option value="Edge Computing">Edge Computing</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Keywords <span className="text-red-500">*</span>
                </label>
                {formData.keywords.map((keyword, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      value={keyword}
                      onChange={(e) => handleKeywordChange(index, e)}
                      placeholder={`Keyword ${index + 1}`}
                    />
                    {formData.keywords.length > 1 && (
                      <button
                        type="button"
                        className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-3 text-sm shadow-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        onClick={() => removeKeyword(index)}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-white shadow hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  onClick={addKeyword}
                >
                  Add Keyword
                </button>
                <p className="text-xs text-muted-foreground mt-1">
                  Add 3-5 keywords that best describe your research.
                </p>
              </div>
              
              <div className="flex justify-end mt-6">
                <button
                  type="button"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  onClick={nextStep}
                >
                  Next: Author Information
                </button>
              </div>
            </form>
          </div>
        )}
        
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Author Information</h2>
            <form>
              {formData.authors.map((author, index) => (
                <div key={index} className="mb-6 p-4 border border-border rounded-md">
                  <h3 className="text-lg font-medium mb-4">Author {index + 1}</h3>
                  
                  <div className="mb-4">
                    <label htmlFor={`author-name-${index}`} className="block text-sm font-medium mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id={`author-name-${index}`}
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      value={author.name}
                      onChange={(e) => handleAuthorChange(index, e)}
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor={`author-email-${index}`} className="block text-sm font-medium mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id={`author-email-${index}`}
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      value={author.email}
                      onChange={(e) => handleAuthorChange(index, e)}
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor={`author-orcid-${index}`} className="block text-sm font-medium mb-1">
                      ORCID ID
                    </label>
                    <input
                      id={`author-orcid-${index}`}
                      name="orcid"
                      type="text"
                      placeholder="0000-0000-0000-0000"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      value={author.orcid}
                      onChange={(e) => handleAuthorChange(index, e)}
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      <a href="https://orcid.org/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                        Get an ORCID ID
                      </a>
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor={`author-affiliation-${index}`} className="block text-sm font-medium mb-1">
                      Affiliation <span className="text-red-500">*</span>
                    </label>
                    <input
                      id={`author-affiliation-${index}`}
                      name="affiliation"
                      type="text"
                      required
                      placeholder="University or Institution"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      value={author.affiliation}
                      onChange={(e) => handleAuthorChange(index, e)}
                    />
                  </div>
                  
                  {formData.authors.length > 1 && (
                    <button
                      type="button"
                      className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-destructive shadow-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      onClick={() => removeAuthor(index)}
                    >
                      Remove Author
                    </button>
                  )}
                </div>
              ))}
              
              <button
                type="button"
                className="inline-flex h-9 items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-white shadow hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring mb-6"
                onClick={addAuthor}
              >
                Add Co-Author
              </button>
              
              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  onClick={prevStep}
                >
                  Previous: Article Information
                </button>
                <button
                  type="button"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  onClick={nextStep}
                >
                  Next: File Upload
                </button>
              </div>
            </form>
          </div>
        )}
        
        {step === 3 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">File Upload</h2>
            <form>
              <div className="mb-6">
                <label htmlFor="file-upload" className="block text-sm font-medium mb-1">
                  Upload Manuscript <span className="text-red-500">*</span>
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-border rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12\

