import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  MapPin,
  Mail,
  Clock,
  Send,
  Building,
  Headphones,
  Target,
  Loader,
} from "lucide-react";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  organization: z.string().optional(),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
  agree: z
    .boolean()
    .refine((val) => val === true, "You must agree to the terms"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { elementRef: contactRef, isVisible: contactVisible } =
    useScrollAnimation();
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      organization: "",
      subject: "",
      message: "",
      agree: false,
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: Omit<ContactFormData, "agree">) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message Sent Successfully!",
        description:
          data.message ||
          "Thank you for your message. We'll get back to you soon!",
        variant: "success",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error Sending Message",
        description:
          error.message ||
          "Sorry, there was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    const { agree, ...submitData } = data;
    contactMutation.mutate(submitData);
  };

  return (
    <section
      id="contact"
      className="py-16 bg-background relative"
      ref={contactRef}
      data-testid="section-contact"
    >
      {/* Subtle Background Accents (replaces dotted background) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-secondary/5 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Professional Header */}
          <div
            className={`text-center mb-16 ${
              contactVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full text-primary font-semibold mb-6 border border-primary/20">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              Partnership Inquiry
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-foreground"
              data-testid="text-contact-title"
            >
              Ready to <span className="text-primary">Enhance</span>
              <span className="block">Your Institution's Success?</span>
            </h2>
            <p
              className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              data-testid="text-contact-subtitle"
            >
              Partner with VSP Technologies to enhance your institution's
              placement outcomes. Our team is ready to discuss customized
              training solutions for your students.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Professional Contact Information */}
            <div
              className={`lg:col-span-5 ${
                contactVisible ? "animate-slide-in-left" : "opacity-0"
              } space-y-6`}
            >
              {/* Professional Contact Card */}
              <div
                className="bg-card rounded-lg p-6 border border-border shadow-sm"
                data-testid="contact-info-card"
              >
                <h3
                  className="text-2xl font-bold mb-6 text-foreground flex items-center"
                  data-testid="text-contact-info-title"
                >
                  <Building className="w-6 h-6 text-primary mr-3" />
                  Get In Touch
                </h3>

                <div className="space-y-4">
                  <div className="group" data-testid="contact-info-location">
                    <div className="bg-muted/50 rounded-lg p-4 border border-border hover:bg-muted transition-all duration-300">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-1">
                            Institutional Headquarters
                          </h4>
                          <p className="text-muted-foreground">
                            Visakhapatnam, India
                          </p>
                          <p className="text-muted-foreground text-sm">
                            Partner Relations Office
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group" data-testid="contact-info-email">
                    <div className="bg-muted/50 rounded-lg p-4 border border-border hover:bg-muted transition-all duration-300">
                      <div className="flex items-start space-x-3">
                        <Mail className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-1">
                            Contact Us
                          </h4>
                          <p className="text-muted-foreground">
                            contact@vsptech.in
                          </p>
                          <p className="text-muted-foreground text-sm">
                            Dedicated institutional support
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group" data-testid="contact-info-hours">
                    <div className="bg-muted/50 rounded-lg p-4 border border-border hover:bg-muted transition-all duration-300">
                      <div className="flex items-start space-x-3">
                        <Clock className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-1">
                            Business Hours
                          </h4>
                          <p className="text-muted-foreground">
                            Monday - Saturday
                          </p>
                          <p className="text-muted-foreground text-sm">
                            9:00 AM - 6:00 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Office Image - Commented out */}
              {/* <div className="relative group overflow-hidden rounded-lg shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="Modern office building with glass facade in urban setting"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  data-testid="img-office-building"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-card/95 rounded-lg p-3 border border-border">
                    <p className="text-foreground font-semibold text-sm">
                      🏢 Our Modern Campus
                    </p>
                    <p className="text-muted-foreground text-xs">
                      State-of-the-art facilities in the heart of Vizag
                    </p>
                  </div>
                </div>
              </div> */}

              {/* Professional Stats */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div
                  className="bg-card rounded-lg p-5 text-center border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
                  data-testid="stat-support"
                >
                  <Headphones className="w-6 h-6 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground mb-1">
                    24/7
                  </div>
                  <div className="text-muted-foreground text-sm font-medium">
                    Support Available
                  </div>
                </div>

                <div
                  className="bg-card rounded-lg p-5 text-center border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
                  data-testid="stat-focus"
                >
                  <Target className="w-6 h-6 text-secondary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground mb-1">
                    100%
                  </div>
                  <div className="text-muted-foreground text-sm font-medium">
                    Success Focus
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Contact Form */}
            <div
              className={`lg:col-span-7 ${
                contactVisible ? "animate-slide-in-right" : "opacity-0"
              }`}
            >
              <div
                className="bg-card rounded-lg p-8 border border-border shadow-sm"
                data-testid="contact-form-card"
              >
                <h3
                  className="text-2xl font-bold mb-6 text-foreground flex items-center"
                  data-testid="text-contact-form-title"
                >
                  <Send className="w-6 h-6 text-primary mr-3" />
                  Partnership Inquiry Form
                </h3>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                    data-testid="form-contact"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-semibold">
                              First Name *
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your first name"
                                className="bg-background border-border text-foreground placeholder:text-muted-foreground rounded-lg py-3 px-4 focus:border-primary transition-all duration-300"
                                data-testid="input-first-name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-destructive" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-semibold">
                              Last Name *
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your last name"
                                className="bg-background border-border text-foreground placeholder:text-muted-foreground rounded-lg py-3 px-4 focus:border-primary transition-all duration-300"
                                data-testid="input-last-name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-destructive" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-semibold">
                            Email Address *
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your.email@example.com"
                              className="bg-background border-border text-foreground placeholder:text-muted-foreground rounded-lg py-3 px-4 focus:border-primary transition-all duration-300"
                              data-testid="input-email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-destructive" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="organization"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-semibold">
                            Organization/College
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your institution or organization"
                              className="bg-background border-border text-foreground placeholder:text-muted-foreground rounded-lg py-3 px-4 focus:border-primary transition-all duration-300"
                              data-testid="input-organization"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-destructive" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-semibold">
                            Subject *
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger
                                className="bg-background border-border text-foreground rounded-lg py-3 px-4 focus:border-primary transition-all duration-300"
                                data-testid="select-subject"
                              >
                                <SelectValue placeholder="What would you like to discuss?" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-popover border-border">
                              <SelectItem value="institutional-partnership">
                                Institutional Training Partnership
                              </SelectItem>
                              <SelectItem value="placement-enhancement">
                                Placement Rate Enhancement
                              </SelectItem>
                              <SelectItem value="customized-curriculum">
                                Customized Training Curriculum
                              </SelectItem>
                              <SelectItem value="lms-platform">
                                LMS Platform Integration
                              </SelectItem>
                              <SelectItem value="general-inquiry">
                                General Partnership Inquiry
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-destructive" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-semibold">
                            Your Message *
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              rows={6}
                              placeholder="Tell us about your vision, requirements, or questions..."
                              className="bg-background border-border text-foreground placeholder:text-muted-foreground rounded-lg py-3 px-4 resize-none focus:border-primary transition-all duration-300"
                              data-testid="textarea-message"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-destructive" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="agree"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-4 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="border-border data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground mt-1"
                              data-testid="checkbox-agree"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-muted-foreground leading-relaxed">
                              I agree to the processing of my personal data and
                              to be contacted by VSP Technologies regarding my
                              inquiry. *
                            </FormLabel>
                            <FormMessage className="text-destructive" />
                          </div>
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={contactMutation.isPending}
                      className="w-full bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-sm"
                      data-testid="button-submit-contact"
                    >
                      <span className="flex items-center justify-center">
                        {contactMutation.isPending ? (
                          <>
                            <Loader className="w-4 h-4 mr-2 animate-spin" />
                            Sending Your Message...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </span>
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
