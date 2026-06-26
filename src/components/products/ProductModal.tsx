"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Send, Loader2 } from "lucide-react";
import { type Product } from "@/lib/data";
import { ProductImage } from "./ProductImage";

interface ProductModalProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

export function ProductModal({ product, open, onClose }: ProductModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  if (!product) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          productName: product.name,
          message: form.message || `Inquiry about ${product.name}`,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send inquiry");
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: "", email: "", phone: "", message: "" });
        onClose();
      }, 2500);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setError("");
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-3xl">
        <div className="-mx-6 -mt-6 mb-4 rounded-t-2xl overflow-hidden">
          <ProductImage
            src={product.image}
            alt={product.name}
            gradient={product.gradient}
            className="h-48"
            iconClassName="h-24 w-24"
          />
        </div>

        <DialogHeader>
          <DialogTitle className="text-2xl">{product.name}</DialogTitle>
          <DialogDescription className="text-base">
            {product.description}
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold mb-3">Features</h4>
            <ul className="space-y-2">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-coconut-green shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>

            <h4 className="font-bold mt-6 mb-3">Applications</h4>
            <div className="flex flex-wrap gap-2">
              {product.applications.map((a) => (
                <Badge key={a} variant="accent">
                  {a}
                </Badge>
              ))}
            </div>
          </div>

          <div className="bg-coconut-cream rounded-xl p-5">
            <h4 className="font-bold mb-4">Product Inquiry</h4>
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <CheckCircle className="h-12 w-12 text-coconut-green mb-3" />
                <p className="font-semibold">Inquiry Sent Successfully!</p>
                <p className="text-sm text-muted-foreground mt-1">
                  We&apos;ll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <Label htmlFor="inq-name">Name</Label>
                  <Input
                    id="inq-name"
                    required
                    disabled={loading}
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="inq-email">Email</Label>
                  <Input
                    id="inq-email"
                    type="email"
                    required
                    disabled={loading}
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="inq-phone">Phone</Label>
                  <Input
                    id="inq-phone"
                    type="tel"
                    required
                    disabled={loading}
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="inq-message">Message</Label>
                  <Textarea
                    id="inq-message"
                    disabled={loading}
                    placeholder={`Inquiry about ${product.name}`}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                  />
                </div>
                {error && (
                  <p className="text-sm text-red-600">{error}</p>
                )}
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                  {loading ? "Sending..." : "Send Inquiry"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
