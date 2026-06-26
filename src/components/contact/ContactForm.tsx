"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle, Loader2 } from "lucide-react";

interface ContactFormProps {
  defaultProduct?: string;
}

export function ContactForm({ defaultProduct }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    product: defaultProduct || "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send message");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-border p-10 text-center">
        <CheckCircle className="h-16 w-16 text-coconut-green mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
        <p className="text-muted-foreground">
          Thank you for contacting us. Our team will respond within 24 hours.
        </p>
        <Button
          className="mt-6"
          variant="outline"
          onClick={() => {
            setSubmitted(false);
            setForm({
              name: "",
              email: "",
              phone: "",
              company: "",
              product: "",
              message: "",
            });
          }}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-border p-8 space-y-5"
    >
      <h3 className="text-2xl font-bold mb-2">Send Us a Message</h3>
      <p className="text-muted-foreground text-sm mb-4">
        Fill out the form below and we&apos;ll get back to you promptly.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            required
            disabled={loading}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your name"
          />
        </div>
        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            required
            disabled={loading}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            required
            disabled={loading}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+91 XXXXX XXXXX"
          />
        </div>
        <div>
          <Label htmlFor="company">Company Name</Label>
          <Input
            id="company"
            disabled={loading}
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            placeholder="Your company"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="product">Product of Interest</Label>
        <Input
          id="product"
          disabled={loading}
          value={form.product}
          onChange={(e) => setForm({ ...form, product: e.target.value })}
          placeholder="e.g. Virgin Coconut Oil"
        />
      </div>

      <div>
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          required
          disabled={loading}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell us about your requirements..."
          rows={5}
        />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={loading}>
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Send className="h-4 w-4" />
        )}
        {loading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
