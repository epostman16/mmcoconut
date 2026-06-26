"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle, Loader2 } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Subscription failed");
      }

      setSubmitted(true);
      setEmail("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-coconut-green-dark rounded-2xl p-8 md:p-10">
      <div className="flex items-center gap-3 mb-3">
        <Mail className="h-6 w-6 text-coconut-green-light" />
        <h3 className="text-xl font-bold text-white">Newsletter</h3>
      </div>
      <p className="text-white/70 text-sm mb-6">
        Subscribe for product updates, industry news, and exclusive offers.
      </p>
      {submitted ? (
        <div className="flex items-center gap-2 text-coconut-green-light">
          <CheckCircle className="h-5 w-5" />
          <span className="text-sm font-medium">Thank you for subscribing!</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-white/30"
            />
            <Button type="submit" variant="white" size="default" disabled={loading}>
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Subscribe"}
            </Button>
          </div>
          {error && <p className="text-sm text-red-300">{error}</p>}
        </form>
      )}
    </div>
  );
}
