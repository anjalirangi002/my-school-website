import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CalendarDays, FileText, IndianRupee, PhoneCall, Download } from "lucide-react";
import { Link } from "wouter";

export default function Admissions() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-16 bg-background">
      
      {/* Header */}
      <div className="bg-primary py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-sm font-semibold tracking-wide uppercase mb-4 backdrop-blur-sm">
            Admissions Open for New Session
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Sunrise School</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            We welcome students from all backgrounds. Give your child the foundation for a brilliant future.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-16 max-w-5xl">
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          
          <div className="md:col-span-2 space-y-8">
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-border">
              <div className="flex items-center gap-3 mb-6">
                <CalendarDays className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold">Admission Process</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>The academic session at Sunrise Senior Secondary School commences in <strong>April</strong> each year.</p>
                <ol className="list-decimal pl-5 space-y-3">
                  <li><strong>Registration:</strong> Parents can register their ward by filling out the registration form available at the school office.</li>
                  <li><strong>Interaction:</strong> An informal interaction with the child and parents is conducted by the Principal or designated faculty to understand the child's readiness.</li>
                  <li><strong>Confirmation:</strong> Admission is granted based on the interaction and availability of seats in the respective grade.</li>
                  <li><strong>Enrollment:</strong> Once confirmed, parents must submit all required documents and the initial fee to secure the seat.</li>
                </ol>
              </div>
            </section>

            <section className="bg-white p-8 rounded-2xl shadow-sm border border-border">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold">Required Documents</h2>
              </div>
              <ul className="grid sm:grid-cols-2 gap-4 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-2 rounded-full bg-secondary shrink-0" />
                  <span>Original Birth Certificate (for Pre-Primary & Grade 1)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-2 rounded-full bg-secondary shrink-0" />
                  <span>Aadhar Card copy of the student</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-2 rounded-full bg-secondary shrink-0" />
                  <span>Aadhar Card copies of parents</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-2 rounded-full bg-secondary shrink-0" />
                  <span>4 Passport size photographs of the student</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-2 rounded-full bg-secondary shrink-0" />
                  <span>School Leaving Certificate / TC (Grade 2 onwards)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-2 rounded-full bg-secondary shrink-0" />
                  <span>Previous academic mark sheet</span>
                </li>
              </ul>
            </section>
          </div>

          <div className="space-y-8">
            <div className="bg-foreground text-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-14 mb-4">
                <Download className="mr-2 w-5 h-5" /> Download Form
              </Button>
              <Button asChild variant="outline" className="w-full bg-transparent border-white/30 hover:bg-white/10 text-white h-14">
                <Link href="/contact">Contact for Details</Link>
              </Button>
            </div>

            <div className="bg-secondary/10 p-8 rounded-2xl border border-secondary/20">
              <div className="flex items-center gap-3 mb-4">
                <IndianRupee className="w-6 h-6 text-secondary-foreground" />
                <h3 className="text-xl font-bold text-foreground">Fee Structure</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                As a private unaided institution, we strive to keep our fees affordable while providing top-tier facilities.
              </p>
              <p className="text-sm font-medium text-foreground">
                For detailed fee structure for the current academic session, please visit the school office or contact the administration desk.
              </p>
            </div>

            <div className="bg-muted p-8 rounded-2xl border border-border">
              <div className="flex items-center gap-3 mb-4">
                <PhoneCall className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Need Help?</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Our admissions desk is open Monday to Saturday, 08:00 AM to 03:00 PM.
              </p>
              <div className="font-bold text-foreground">
                +91-9255528310<br/>
                +91-8397877909
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
