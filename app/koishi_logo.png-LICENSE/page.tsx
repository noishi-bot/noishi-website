"use client";

import { useEffect, useState } from "react";
import LICENSE from '@/public/koishi_logo.png-LICENSE.md?raw';
import 'github-markdown-css/github-markdown.css';

export default function KoishiLogoLicensePage() {
  const [html, setHtml] = useState<string>("");

  useEffect(() => {
    const fetchMarkdownHTML = async () => {
      const response = await fetch("https://api.github.com/markdown", {
        method: "POST",
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: LICENSE,
        }),
      });

      if (response.ok) {
        const content = await response.text();
        setHtml(content);
      } else {
        console.error("Failed to render markdown:", response.statusText);
      }
    };

    fetchMarkdownHTML();
  }, []);

  return (
    <div className="flex justify-center px-4 py-10">
      <article
        className="markdown-body max-w-3xl w-full rounded-2xl border border-neutral-800 p-6 bg-neutral-900"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
