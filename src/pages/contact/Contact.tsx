import { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Mail, Linkedin, Github, Calendar, Send, GraduationCap, Twitter } from 'lucide-react';
import { Label } from '../../components/ui/label';
import { contactContent as content } from './content';

const iconMap = {
  Mail,
  Linkedin,
  Github,
  GraduationCap,
  Twitter,
};

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="mb-4">{content.title}</h2>
          <div className="w-20 h-1 bg-[var(--color-accent)] mb-6"></div>

          {/* Social Media Icons */}
          <div className="flex gap-4 mb-12">
            {content.contactInfo.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              return (
                <a
                  key={item.label}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-gray-700 light:border-gray-300 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
                  aria-label={item.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="h-full">
            <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  className="mt-2"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me more..."
                  required
                  className="mt-2 flex-1 min-h-[200px]"
                />
              </div>
              <Button
                type="submit"
                className="w-full gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white"
              >
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Calendly & Newsletter */}
          <div className="space-y-8">
            {/* Calendly */}
            <div className="border border-gray-700 p-8">
              <Calendar className="h-8 w-8 text-[var(--color-accent)] mb-4" />
              <h4 className="mb-2">{content.calendly.title}</h4>
              <p className="text-gray-400 mb-6">
                {content.calendly.description}
              </p>
              <Button variant="outline" className="w-full gap-2">
                <Calendar className="h-4 w-4" />
                Book a Meeting
              </Button>
            </div>

            {/* Newsletter */}
            <div className="border border-gray-700 p-8">
              <h4 className="mb-2">{content.newsletter.title}</h4>
              <p className="text-gray-400 mb-4">
                {content.newsletter.description}
              </p>
              <div className="flex gap-2">
                <Input placeholder="your@email.com" type="email" />
                <Button className="shrink-0 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
