import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We will get back to you shortly.",
    });
  };

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6 text-muted-foreground">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-primary shrink-0" />
                  <p>Vill. Mago Majri (Mago Manas), Khanouri Road, Near Kaithal, Haryana 136027</p>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-primary shrink-0" />
                  <p>+91-9255528310<br/>+91-8397877909</p>
                </div>
                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-primary shrink-0" />
                  <p>sunrisesr.secschool@yahoo.com</p>
                </div>
                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-primary shrink-0" />
                  <p>08:00 AM – 03:00 PM<br/>Monday – Saturday</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
            <h2 className="text-2xl font-bold mb-6">Send an Inquiry</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <Input required placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Phone Number</label>
                <Input required type="tel" placeholder="Your Phone Number" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea required placeholder="How can we help?" rows={4} />
              </div>
              <Button type="submit" className="w-full h-12 text-lg font-bold">Submit Inquiry</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
