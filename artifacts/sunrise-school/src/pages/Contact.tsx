import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import PageHero from "@/components/layout/PageHero";
import { fadeUp, fadeLeft, fadeRight, stagger, inView } from "@/lib/animations";

const inquirySchema = z.object({
  name: z.string().min(2, "Name is required"),
  parentName: z.string().min(2, "Parent Name is required"),
  class: z.string().min(1, "Please select a class"),
  phone: z.string().min(10, "Valid phone number required"),
  message: z.string().min(10, "Please provide a brief message")
});

type InquiryForm = z.infer<typeof inquirySchema>;

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<InquiryForm>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      name: "",
      parentName: "",
      class: "",
      phone: "",
      message: ""
    }
  });

  const onSubmit = (_data: InquiryForm) => {
    toast({
      title: "Inquiry Submitted Successfully!",
      description: "We will contact you shortly regarding admission.",
    });
    form.reset();
  };

  return (
    <div className="flex flex-col min-h-screen bg-background page-enter">
      <PageHero
        image="/images/hero-contact.png"
        alt="Sunrise School entrance gate and campus building"
        eyebrow="Admission Open • Session 2025-26"
        title="Contact & Admissions"
        subtitle="Reach out for admission queries, campus visits or any information — we're here to help you make the right choice for your child."
      />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl pt-16 pb-16">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={stagger}
          className="grid md:grid-cols-5 gap-12 items-start"
        >
          {/* Left — contact info */}
          <motion.div variants={fadeLeft} className="md:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Get in Touch</h2>
              <div className="space-y-6 text-muted-foreground">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground text-sm mb-1">Address</h4>
                    <p>Village Mago Majri (Mago Manas), Khanouri Road, Kaithal, Haryana – 136027</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground text-sm mb-1">Phone</h4>
                    <p>
                      <a href="tel:+919255528310" className="hover:text-primary transition-colors">+91-9255528310</a><br/>
                      <a href="tel:+918397877909" className="hover:text-primary transition-colors">+91-8397877909</a>
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground text-sm mb-1">Email</h4>
                    <a href="mailto:sunrisesr.secschool@yahoo.com" className="hover:text-primary transition-colors">
                      sunrisesr.secschool@yahoo.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-foreground">
                <Clock className="w-5 h-5 text-primary" /> Working Hours
              </h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex justify-between border-b border-border pb-2">
                  <span>Monday – Saturday</span>
                  <span className="font-semibold text-foreground">08:00 AM – 03:00 PM</span>
                </li>
                <li className="flex justify-between text-muted-foreground/60 pt-1">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div variants={fadeRight} className="md:col-span-3 space-y-8">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-border">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Admission Inquiry Form</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Student Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter student name" {...field} className="bg-muted/30" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="parentName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Parent/Guardian Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter parent name" {...field} className="bg-muted/30" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="class"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Class for Admission</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-muted/30">
                                <SelectValue placeholder="Select Class" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="playway">Playway</SelectItem>
                              <SelectItem value="nursery">Nursery</SelectItem>
                              <SelectItem value="kg">KG</SelectItem>
                              {[1,2,3,4,5,6,7,8,9,10,11,12].map(n => (
                                <SelectItem key={n} value={`class-${n}`}>Class {n}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="Mobile number" {...field} className="bg-muted/30" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message / Queries</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Any specific questions regarding admission?" rows={4} {...field} className="bg-muted/30" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 text-white rounded-full mt-4 hover:scale-[1.02] transition-transform duration-200"
                  >
                    Submit Inquiry
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </motion.div>

        {/* Map */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={fadeUp}
          className="mt-16 rounded-3xl overflow-hidden shadow-sm border border-border h-[400px]"
        >
          <iframe
            src="https://www.google.com/maps?q=Sunrise+Senior+Secondary+School,+Mago+Majri,+Kaithal,+Haryana&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sunrise School Location Map"
          ></iframe>
        </motion.div>

      </div>
    </div>
  );
}
