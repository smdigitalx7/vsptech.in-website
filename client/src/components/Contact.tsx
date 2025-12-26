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
  MessageCircle,
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
      const response = await apiRequest(
        "POST",
        "https://testverseapi.vsptech.in/api/v1/contact",
        data
      );
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
      className="py-16 md:py-24 bg-muted/20 relative overflow-hidden"
    >
      {/* Decorative Accents */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-secondary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div
          className={`text-center mb-16 md:mb-24 animate-fade-in`}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-[10px] md:text-xs font-bold uppercase tracking-wider mb-6 border border-primary/20">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Get in touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-foreground mb-6 md:mb-8 leading-tight tracking-tight">
            Ready to <span className="text-primary italic font-serif">Transform</span> <br className="hidden sm:block" />
            Your Institution?
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed px-4">
            Join hands with India's premier CRT specialists. Let's discuss how
            we can elevate your students' professional journey together.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-16 items-start">
          {/* Contact Info Column */}
          <div
            className={`lg:col-span-4 space-y-6 md:space-y-8 animate-slide-in-left`}
          >
            <div className="bg-white dark:bg-zinc-900 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-border/50 space-y-8 md:space-y-10">
              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-extrabold flex items-center tracking-tight text-foreground">
                  <Building className="w-6 h-6 text-primary mr-3" />
                  Contact Details
                </h3>

                <div className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-muted dark:bg-zinc-800 rounded-xl md:rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="font-extrabold text-foreground text-sm uppercase tracking-wide">
                      Headquarters
                    </div>
                    <p className="text-muted-foreground text-sm font-semibold opacity-80">
                      Visakhapatnam, Andhra Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-muted dark:bg-zinc-800 rounded-xl md:rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">
                    <Mail className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="font-extrabold text-foreground text-sm uppercase tracking-wide">
                      Email Support
                    </div>
                    <p className="text-muted-foreground text-sm font-semibold opacity-80">
                      contact@vsptech.in
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-muted dark:bg-zinc-800 rounded-xl md:rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all shadow-sm">
                    <Clock className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="font-extrabold text-foreground text-sm uppercase tracking-wide">
                      Office Hours
                    </div>
                    <p className="text-muted-foreground text-sm font-semibold opacity-80">
                      Mon - Sat: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-10 border-t border-border/50">
                <div className="text-center">
                  <Headphones className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-xl md:text-2xl font-extrabold text-foreground tracking-tighter">24/7</div>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                    Support
                  </div>
                </div>
                <div className="text-center">
                  <Target className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <div className="text-xl md:text-2xl font-extrabold text-foreground tracking-tighter">100%</div>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                    Success
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div
            className={`lg:col-span-8 animate-slide-in-right`}
          >
            <div className="bg-white dark:bg-zinc-900 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 shadow-sm border border-border/50 relative overflow-hidden group">
              {/* Subtle top indicator */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-primary to-secondary group-focus-within:h-2 transition-all"></div>
              
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6 md:space-y-8"
                >
                  <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[10px] md:text-xs font-bold text-foreground/50 uppercase tracking-wider mb-2">
                            First name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John"
                              className="bg-muted/30 dark:bg-zinc-800/50 border-border/50 rounded-xl py-6 md:py-7 px-5 focus:ring-primary focus:border-primary transition-all font-semibold"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[10px] md:text-xs font-bold text-foreground/50 uppercase tracking-wider mb-2">
                             Last name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Doe"
                              className="bg-muted/30 dark:bg-zinc-800/50 border-border/50 rounded-xl py-6 md:py-7 px-5 focus:ring-primary focus:border-primary transition-all font-semibold"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[10px] md:text-xs font-bold text-foreground/50 uppercase tracking-wider mb-2">
                            Email address
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="john@university.edu"
                              className="bg-muted/30 dark:bg-zinc-800/50 border-border/50 rounded-xl py-6 md:py-7 px-5 focus:ring-primary focus:border-primary transition-all font-semibold"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="organization"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[10px] md:text-xs font-bold text-foreground/50 uppercase tracking-wider mb-2">
                            Institution / college
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Institution Name"
                              className="bg-muted/30 dark:bg-zinc-800/50 border-border/50 rounded-xl py-6 md:py-7 px-5 focus:ring-primary focus:border-primary transition-all font-semibold"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] md:text-xs font-bold text-foreground/50 uppercase tracking-wider mb-2">
                          I'm interested in
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-muted/30 dark:bg-zinc-800/50 border-border/50 rounded-xl py-6 md:py-7 px-5 focus:ring-primary focus:border-primary transition-all font-semibold text-foreground">
                              <SelectValue placeholder="Select interest area" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="rounded-xl border-border">
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
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] md:text-xs font-bold text-foreground/50 uppercase tracking-wider mb-2">
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            rows={4}
                            placeholder="Tell us about your requirements..."
                            className="bg-muted/30 dark:bg-zinc-800/50 border-border/50 rounded-xl py-4 px-5 focus:ring-primary focus:border-primary resize-none transition-all font-semibold"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="agree"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 text-foreground">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="rounded-md border-border/50 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                          />
                        </FormControl>
                        <div className="space-y-1">
                          <FormLabel className="text-[10px] md:text-xs font-semibold text-muted-foreground leading-relaxed">
                            I agree to the processing of my personal data and to
                            be contacted regarding this inquiry.
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full bg-primary text-white rounded-xl py-7 md:py-8 font-extrabold text-base md:text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 active:scale-95"
                  >
                    {contactMutation.isPending ? (
                      <Loader className="w-6 h-6 animate-spin" />
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-3" />
                        Submit partnership inquiry
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
