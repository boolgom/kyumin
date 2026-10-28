"use client";
import { useState } from "react";
export function ShareProject() {
  const [status, setStatus] = useState<"idle" | "copied" | "manual">("idle");
  const [url, setUrl] = useState("");
  async function copyLink() {
    const link = window.location.origin + window.location.pathname;
    setUrl(link);
    try {
      await navigator.clipboard.writeText(link);
      setStatus("copied");
    } catch {
      setStatus("manual");
    }
  }
  return (
    <div className="share-project">
      <button type="button" className="share-button" onClick={copyLink}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <rect
            x="8"
            y="8"
            width="12"
            height="12"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
        {status === "copied" ? "Link copied" : "Copy project link"}
      </button>
      <span className="sr-only" role="status">
        {status === "copied"
          ? "Project link copied to clipboard."
          : status === "manual"
            ? "Copy the project URL from the field below."
            : ""}
      </span>
      {status === "manual" && (
        <label className="manual-share">
          Project URL
          <input
            readOnly
            value={url}
            onFocus={(event) => event.currentTarget.select()}
          />
        </label>
      )}
    </div>
  );
}
