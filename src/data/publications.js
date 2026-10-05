/**
 * Publications Data Module
 * Exact peer-reviewed research papers published across IEEE international conferences from author's CV.
 */

export const publications = [
  {
    id: "pub-1",
    title: "A Collaborative Framework for Evidence-Grounded Misinformation Detection in Bengali Using Retrieval-Augmented Large Language Models",
    conference: "2025 IEEE International Women in Engineering Conference on Electrical and Computer Engineering (WIECON-ECE)",
    year: 2025,
    pages: "1-6",
    doi: "10.1109/WIECON-ECE69386.2025.11526491",
    link: "https://doi.org/10.1109/WIECON-ECE69386.2025.11526491",
    authors: ["Md. Mahadi Hasan", "Sajida Kabir", "Abdulla Masud", "Nafees Mansoor"],
    tags: ["NLP", "LLMs", "RAG", "Explainable AI"],
    description: "Introduces a collaborative multi-agent framework leveraging Retrieval-Augmented Generation (RAG) and LLMs to retrieve external evidence and verify low-resource Bengali news claims.",
    featured: true
  },
  {
    id: "pub-2",
    title: "A Multimodal Framework for Misinformation Detection in Bengali Using Large Language Models",
    conference: "2025 IEEE 4th International Conference on Robotics, Automation, Artificial-Intelligence and Internet-of-Things (RAAICON)",
    year: 2025,
    pages: "1-6",
    doi: "10.1109/RAAICON69033.2025.11502571",
    link: "https://doi.org/10.1109/RAAICON69033.2025.11502571",
    authors: ["Sajida Kabir", "Md. Mahadi Hasan", "Abdulla Masud", "Nafees Mansoor"],
    tags: ["NLP", "LLMs", "Multimodal", "Explainable AI"],
    description: "Proposes a multimodal framework leveraging LLMs with visual-textual fusion and reasoning mechanisms to detect fake news and rumors in Bengali digital ecosystems.",
    featured: true
  },
  {
    id: "pub-3",
    title: "A Transformer Based Approach for Analyzing Scrapped E-Commerce Product Reviews from Social Media Platforms with Explainable AI",
    conference: "2024 27th International Conference on Computer and Information Technology (ICCIT)",
    year: 2024,
    pages: "1-6",
    doi: "10.1109/ICCIT64611.2024.11022190",
    link: "https://doi.org/10.1109/ICCIT64611.2024.11022190",
    authors: ["Md. Mahadi Hasan", "Abdulla Masud", "Sajida Kabir", "Nafees Mansoor"],
    tags: ["NLP", "Explainable AI", "Multimodal"],
    description: "Deploys Transformer architectures coupled with Explainable AI (XAI) techniques (SHAP/LIME) to analyze sentiment patterns and customer feedback dynamics across scraped social media commerce data.",
    featured: true
  }
];

export const publicationTags = [
  "NLP",
  "LLMs",
  "RAG",
  "Explainable AI",
  "Multimodal"
];

export default publications;
