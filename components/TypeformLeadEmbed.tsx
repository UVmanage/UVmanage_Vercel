"use client";

import { Widget } from "@typeform/embed-react";

export function TypeformLeadEmbed() {
  return (
    <section id="survey" className="py-24 px-6 bg-card">
      <div className="max-w-2xl mx-auto">
        {/* Styled card wrapper */}
        <div className="bg-background border border-border rounded-lg overflow-hidden p-0">
          <Widget
            id={process.env.NEXT_PUBLIC_TYPEFORM_ID!}
            style={{
              width: "100%",
              height: 700, // ✅ taller embed
            }}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
