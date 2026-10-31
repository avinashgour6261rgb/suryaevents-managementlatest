import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  publishedDate?: string;
  author?: string;
  category?: string;
}

export default function SEO({
  title,
  description,
  image = "https://vstarexultation.co.in/wp-content/uploads/2026/07/destination-wedding-in-mumbai.webp",
  url,
  type = "article",
  publishedDate,
  author = "Surya Event Management Team",
  category
}: SEOProps) {
  useEffect(() => {
    // 1. Update Title
    const fullTitle = title.includes("Surya Event Management")
      ? title
      : `${title} | Surya Event Management`;
    document.title = fullTitle;

    // Helper to set or create meta tag
    const setMeta = (attrName: "name" | "property", attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // 2. Standard Meta Tags
    setMeta("name", "description", description);

    // 3. OpenGraph Meta Tags
    const canonicalUrl = url || window.location.href;
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:image", image);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:type", type);
    setMeta("property", "og:site_name", "Surya Event Management");

    // 4. Twitter Meta Tags
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);

    // 5. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;

    // 6. JSON-LD Structured Data Schema for BlogPosting
    let schemaScript = document.getElementById("blog-structured-data") as HTMLScriptElement;
    if (type === "article") {
      const schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": title,
        "description": description,
        "image": [image],
        "author": {
          "@type": "Organization",
          "name": author || "Surya Event Management"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Surya Event Management",
          "logo": {
            "@type": "ImageObject",
            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQzukht4ZksiqmCw_RALdK-9riDQ428gmtnIh9TKLw7JmFjGcWgAx95YjZ&s=10"
          }
        },
        "datePublished": publishedDate,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonicalUrl
        },
        ...(category ? { "articleSection": category } : {})
      };

      if (!schemaScript) {
        schemaScript = document.createElement("script");
        schemaScript.id = "blog-structured-data";
        schemaScript.type = "application/ld+json";
        document.head.appendChild(schemaScript);
      }
      schemaScript.text = JSON.stringify(schemaData);
    } else {
      if (schemaScript) {
        schemaScript.remove();
      }
    }

    return () => {
      // Cleanup custom article schema on unmount
      const existingSchema = document.getElementById("blog-structured-data");
      if (existingSchema) {
        existingSchema.remove();
      }
    };
  }, [title, description, image, url, type, publishedDate, author, category]);

  return null;
}

