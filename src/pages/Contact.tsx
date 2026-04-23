import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { MapPin, Mail, Send, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import hero2 from "@/assets/hero-2.webp";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Layout>
      <section className="relative h-[300px] overflow-hidden">
        <img src={hero2} alt="Contact" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary-dark/80 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground">Contact Us</h1>
            <p className="text-primary-foreground/70 mt-2">Get in touch with JJCP</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
              Get in Touch <span className="text-primary">with JJCP</span>
            </h2>
            <p className="text-muted-foreground mb-8">Step forward towards your dream</p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-5 bg-card rounded-lg border border-border">
                <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Address</h4>
                  <p className="text-sm text-muted-foreground">Gathewara, Panna Road, Chhatarpur (M.P.)</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-card rounded-lg border border-border">
                <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <a href="mailto:jjcolgofpharmacy@gmail.com" className="text-sm text-muted-foreground hover:text-primary">jjcolgofpharmacy@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-card rounded-lg border border-border">
                <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Website</h4>
                  <a href="https://www.jjcp.co.in" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary">
                    www.jjcp.co.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl border border-border p-8">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
              <Input
                type="tel"
                placeholder="Your Phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              <Textarea
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary-dark">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.5!2d80.24!3d26.41!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDI0JzM2LjAiTiA4MMKwMTQnMjQuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="JJCP Location"
        />
      </section>
    </Layout>
  );
};

export default Contact;
