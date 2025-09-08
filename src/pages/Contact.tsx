import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const offices = [
    {
      city: "Arakkonam",
      address: "123 xxx, xxxxx x,xxx,xxxxx",
      phone: "+1 (555) 123-4567",
      email: "efg@gsvresearch.com"
    },
    {
      city: "Polur",
      address: "456 xxxx,xxxx ,xxxxxxxxx",
      phone: "+1 (555) 234-5678",
      email: "abc@gsvresearch.com"
    },
    {
      city: "Arni",
      address: "789 xxxxx, xxxx, xxxx ,xxxxxx",
      phone: "+1 (555) 345-6789",
      email: "cde@gsvresearch.com"
    }
  ];

  const inquiryTypes = [
    "General Information",
    "Product Demo Request",
    "Sales Inquiry",
    "Technical Support",
    "Partnership Opportunity",
    "Media & Press",
    "Career Inquiry"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 gradient-hero">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Get In Touch</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ready to explore how GSV Drones can transform your operations?
            Our team of experts is here to help you find the perfect solution.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle>Contact Form</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@company.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Your Company Name" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">Inquiry Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        {inquiryTypes.map((type, index) => (
                          <SelectItem key={index} value={type.toLowerCase().replace(/\s+/g, '-')}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project or requirements..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button size="lg" className="w-full">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              
              {/* Office Hours */}
              <Card className="border-0 shadow-lg mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="w-5 h-5" />
                    <span>Business Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">9:00 AM - 2:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      For urgent technical support, our 24/7 hotline is available at 
                      <span className="font-medium text-foreground"> +1 (555) 911-TECH</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Office Locations */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Our Offices</h3>
                {offices.map((office, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg">{office.city} Office</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-muted-foreground mt-0.5" />
                        <span className="text-sm">{office.address}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-muted-foreground" />
                        <span className="text-sm">{office.phone}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-muted-foreground" />
                        <span className="text-sm">{office.email}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "What's the typical response time for sales inquiries?",
                answer: "We typically respond to sales inquiries within 4-6 business hours during our operating hours."
              },
              {
                question: "Do you offer on-site demonstrations?",
                answer: "Yes, we provide on-site demonstrations for qualified prospects. Contact our sales team to schedule a demo."
              },
              {
                question: "What kind of technical support do you provide?",
                answer: "We offer comprehensive technical support including phone, email, and remote assistance. Enterprise customers receive priority support."
              },
              {
                question: "Can you develop custom drone solutions?",
                answer: "Absolutely! Our engineering team specializes in creating custom solutions tailored to specific industry requirements."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}